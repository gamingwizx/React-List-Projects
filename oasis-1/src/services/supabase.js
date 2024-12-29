import { createClient } from "@supabase/supabase-js";

export const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52Y2RidWx3d3lkamlpdmJlaGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MzkyNDAsImV4cCI6MjA0ODIxNTI0MH0.wWrLPErbZge0ncBjOlkqoPmYQmRm4pTv8bfRhjvYg-Q"
export const SUPABASE_URL = 'https://nvcdbulwwydjiivbeheu.supabase.co' 

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY, {
    debug: true
})

export default supabase