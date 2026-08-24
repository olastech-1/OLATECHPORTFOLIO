// src/components/SupabaseTest.jsx
//
// TEMPORARY — drop this anywhere in a page, check the browser console,
// then delete this whole file once you've confirmed the connection works.

import { useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

function SupabaseTest() {
  useEffect(() => {
    async function testConnection() {
      // We haven't inserted any rows yet, so this just checks that
      // Supabase responds without an error — an empty array is expected.
      const { data, error } = await supabase.from('project_inquiries').select('*');

      if (error) {
        console.error('❌ Supabase connection failed:', error.message);
      } else {
        console.log('✅ Supabase connected! Rows found:', data);
      }
    }

    testConnection();
  }, []);

  return null; // this component doesn't render anything visible
}

export default SupabaseTest;
