import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://npdxjmsdpmyhqbsaznxz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wZHhqbXNkcG15aHFic2F6bnh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0NDE4MzQsImV4cCI6MjA3NTAxNzgzNH0._6UHo5aUg5f4Ur_rkkVkUkRweY5RSfxYpr1bziYzs50';

export const supabase = createClient(supabaseUrl, supabaseKey);