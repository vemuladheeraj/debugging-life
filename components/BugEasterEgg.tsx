import { useEffect, useState } from 'react';

export default function BugEasterEgg() {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const shouldShow = Math.random() < 0.12; // sometimes
      if (shouldShow) {
        setPos({ x: Math.random() * 80 + 10, y: Math.random() * 70 + 10 });
        setVisible(true);
        setTimeout(() => setVisible(false), 5000);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-50"
      style={{ left: `${pos.x}vw`, top: `${pos.y}vh` }}
    >
      <div className="animate-[wiggle_0.8s_ease-in-out_infinite]">🐞</div>
      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-6px) rotate(-8deg); }
          75% { transform: translateX(6px) rotate(8deg); }
        }
      `}</style>
    </div>
  );
}


