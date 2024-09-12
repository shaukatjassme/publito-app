// src/types/types.ts

export type Video = {
    id: string;
    title: string;
  };
  
  export type Topic = {
    id: string;
    name: string;
    videos: Video[];
  };
  
  export type Chapter = {
    id: string;
    name: string;
    topics: Topic[];
  };
  
  export type Subject = {
    id: string;
    name: string;
    chapters: Chapter[];
  };
  
  export type Class = {
    id: string;
    name: string;
    subjects: Subject[];
  };
  
  export type Student = {
    id: string;
    name: string;
    subjects: Subject[];
  };
  