import { createClient } from "@supabase/supabase-js";

export const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54dnh0ZHFhcmJmbHJoa3VqYmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxMzQxOTcsImV4cCI6MjA0NDcxMDE5N30._UH8VSVgXQoEPl3y1EAPo0MB7ogMF2wPw72MVmSu8N8"
export const SUPABASE_URL = 'https://nxvxtdqarbflrhkujbbn.supabase.co' 

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY)

export default supabase