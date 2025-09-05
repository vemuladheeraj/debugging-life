import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type EventItem = {
  id: string;
  type: string;
  repo?: { name: string };
  created_at: string;
};

type GitHubActivityProps = {
  username: string;
};

export default function GitHubActivity({ username }: GitHubActivityProps) {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let canceled = false;
    async function load() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/events/public`);
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const data = (await res.json()) as EventItem[];
        if (!canceled) setEvents(data.slice(0, 6));
      } catch (e: any) {
        if (!canceled) setError(e?.message || 'Failed to load activity');
      }
    }
    load();
    return () => {
      canceled = true;
    };
  }, [username]);

  return (
    <div className="glass p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-semibold">Recent GitHub Activity</h3>
        <a className="text-neon-blue" href={`https://github.com/${username}`} target="_blank" rel="noreferrer">@{username}</a>
      </div>
      {error ? (
        <p className="text-sm text-white/70">{error}</p>
      ) : (
        <div className="space-y-3">
          {events.map((ev) => (
            <motion.div key={ev.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-between text-sm">
              <span className="text-white/85">{ev.type.replace('Event', '')}</span>
              <span className="text-white/60">{ev.repo?.name}</span>
              <span className="text-white/50">{new Date(ev.created_at).toLocaleDateString()}</span>
            </motion.div>
          ))}
          {events.length === 0 && <p className="text-sm text-white/70">No recent events</p>}
        </div>
      )}
    </div>
  );
}


