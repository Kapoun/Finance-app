import { SupabaseClient } from "@supabase/supabase-js";

VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=sb_publishable_key


supabase = function_to_create_client(SUPABASE_URL, SUPABASE_ANON_KEY)





export const supabase = new SupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY);