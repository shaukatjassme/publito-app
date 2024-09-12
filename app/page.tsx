"use client";
import { useEffect, useState } from 'react';
import { getData } from './api/supabase';
import { Class, Subject, Chapter, Topic, Video, Student } from './types/types'; 
import Footer from './api/components/Footer';
import {Header} from './api/components/Header';

const Home = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setClasses(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      <h1 className='text-center heading-text'>Courses Overview</h1>
      <div className="classes-list">
        {classes.map((classItem) => (
          <div key={classItem.id} className="class-item">
            <h2 className='class-item-heading'>{classItem.name}</h2>
            {classItem.students.map((student) => (
              <div key={student.id} style={{ marginBottom: '20px' }}>
                <h3 className='class-item-heading'>Student: {student.name}</h3>
                <table  cellPadding="10" style={{ marginBottom: '20px' }}>
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Chapter</th>
                      <th>Topic</th>
                      <th>Video</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classItem.subjects.map((subject) => (
                      subject.chapters.map((chapter) => (
                        chapter.topics.map((topic) => (
                          topic.videos.map((video) => (
                            <tr key={video.id}>
                              {/* Subject row span for multiple chapters */}
                              {video.id === topic.videos[0].id && (
                                <td rowSpan={chapter.topics.flatMap(topic => topic.videos).length} style={{ verticalAlign: 'top' }}>
                                  {subject.name}
                                </td>
                              )}
                              {/* Chapter row span for multiple topics */}
                              {video.id === topic.videos[0].id && (
                                <td rowSpan={topic.videos.length} style={{ verticalAlign: 'top' }}>
                                  {chapter.name}
                                </td>
                              )}
                              {/* Topic row span for multiple videos */}
                              {video.id === topic.videos[0].id && (
                                <td rowSpan={topic.videos.length} style={{ verticalAlign: 'top' }}>
                                  {topic.name}
                                </td>
                              )}
                              <td>{video.title}</td>
                            </tr>
                          ))
                        ))
                      ))
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
    
  );
};

export default Home;
