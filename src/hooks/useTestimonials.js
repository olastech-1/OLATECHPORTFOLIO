// src/hooks/useTestimonials.js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTestimonials() {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error) setTestimonials(data);
      setLoading(false);
    }
    loadTestimonials();
  }, []);

  return { testimonials, loading };
}
