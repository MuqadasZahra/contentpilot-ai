import { createClient } from "@supabase/supabase-js";

   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
   const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

   // This will work once you add your real keys to .env.local
   export const supabase = createClient(
     supabaseUrl || "https://placeholder.supabase.co",
     supabaseAnonKey || "placeholder-key"
   );
