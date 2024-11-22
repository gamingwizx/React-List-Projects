import dotenv from "dotenv"
import { createClient } from "@supabase/supabase-js"
dotenv.config({ path: "./.env"})

const SUPABASE_URL = 'https://nxvxtdqarbflrhkujbbn.supabase.co' 
const adminSupabase = createClient(SUPABASE_URL, process.env.SUPABASE_SERVICE_API_KEY)
export default adminSupabase