import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
};

type Props = {
  username: string;
  limit?: number;
};

export default function GitHubProjects({ username, limit = 6 }: Props) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`);
        if (!res.ok) throw new Error(`GitHub ${res.status}`);
        const data = (await res.json()) as Repo[];
        if (!cancelled) setRepos(data);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Failed to load repos');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [username, limit]);

  if (error) return <p className="text-sm text-white/70">{error}</p>;
  if (loading) return <p className="text-sm text-white/70">Loading recent repositories…</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((r) => (
        <motion.a
          key={r.id}
          href={r.html_url}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -6, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glass p-5 flex flex-col gap-2"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{r.name}</h3>
            <span className="text-xs text-white/60">{new Date(r.updated_at).toLocaleDateString()}</span>
          </div>
          {r.description && <p className="text-sm text-white/80">{r.description}</p>}
          <div className="mt-2 flex items-center gap-3 text-xs text-white/70">
            {r.language && <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">{r.language}</span>}
            <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">★ {r.stargazers_count}</span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}


