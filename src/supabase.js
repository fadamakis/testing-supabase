import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase