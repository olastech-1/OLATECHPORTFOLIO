// src/hooks/useProjects.js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error) setProjects(data);
      setLoading(false);
    }
    loadProjects();
  }, []);

  return { projects, loading };
}
