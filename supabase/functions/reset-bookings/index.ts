import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

serve(async () => {
  const supabase = createClient(
    Deno.env.get('https://npdxjmsdpmyhqbsaznxz.supabase.co')!,
    Deno.env.get('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wZHhqbXNkcG15aHFic2F6bnh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0NDE4MzQsImV4cCI6MjA3NTAxNzgzNH0._6UHo5aUg5f4Ur_rkkVkUkRweY5RSfxYpr1bziYzs50')!
  );

  const { error } = await supabase
    .from('spares')
    .update({ isBooked: false });

  if (error) {
    return new Response(`Error: ${error.message}`, { status: 500 });
  }

  return new Response('All bookings reset!', { status: 200 });
});