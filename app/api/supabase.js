// app/api/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("supabaseUrl", supabaseUrl);
console.log("supabaseAnonKey", supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Fetching the hierarchical data
export const getData = async () => {
  const { data: classes, error: classError } = await supabase.from('classes').select(`
    *,
    subjects (
      *,
      chapters (
        *,
        topics (
          *,
          videos (*)
        )
      )
    ),
    students (*)
  `);

  
  if (classError) {
    throw classError;
  }

  return classes;
};
