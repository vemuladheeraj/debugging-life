import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import SkillItem from '../components/SkillItem';
import BugEasterEgg from '../components/BugEasterEgg';
import GitHubActivity from '../components/GitHubActivity';

type HomeProps = {
  toggleTheme: () => void;
  isDark: boolean;
};

export default function Home({ toggleTheme, isDark }: HomeProps) {
  const milestones = [
    { company: 'Accenture', role: 'Associate Software Engineer', years: '2017 - 2019', achievements: ['Built UI test suites', 'Reduced regression time by 40%'] },
    { company: 'Wells Fargo', role: 'QA Engineer', years: '2019 - 2021', achievements: ['Led API testing', 'CI/CD pipeline quality gates'] },
    { company: 'Optum', role: 'Senior Test Automation Engineer', years: '2021 - Present', achievements: ['Scaled automation framework', 'Mentored team', 'Improved coverage 2x'] },
  ];

  const projects = [
    { title: 'Automation Framework', description: 'Modular Selenium + C# framework with Page Objects, reporting, and parallel runs.', tags: ['Automation', 'Selenium', 'C#'] },
    { title: 'API Test Suite', description: 'Comprehensive Postman + Newman pipeline with GitHub Actions.', tags: ['API Testing', 'CI/CD', 'Postman'] },
    { title: 'Dashboard', description: 'QA metrics dashboard visualizing pass rate, flakiness, and build health.', tags: ['Data Viz', 'QA', 'Web'] },
  ];

  const skills = [
    { name: 'Selenium', level: 90, icon: '🧪' },
    { name: 'C#', level: 85, icon: '⚙️' },
    { name: 'SQL Server', level: 80, icon: '🗄️' },
    { name: 'API Testing', level: 88, icon: '🔌' },
    { name: 'GitHub Actions', level: 82, icon: '🤖' },
  ];

  return (
    <>
      <Head>
        <title>Dheeraj Vemula — Portfolio</title>
        <meta name="description" content="Breaking Code, Building Quality" />
      </Head>
      <Navbar onToggleTheme={toggleTheme} isDark={isDark} />
      <BugEasterEgg />

      <main className="max-w-6xl mx-auto px-4 pt-28 pb-24 space-y-24">
        <Section id="home">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold neon-text"
            >
              👨‍💻 Dheeraj Vemula — Breaking Code, Building Quality 🚀
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 text-white/80">
              Test Automation Engineer • Selenium • API • CI/CD • SQL
            </motion.p>
            <motion.a href="#journey" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold shadow-glow">
              Start Journey
            </motion.a>
          </div>
        </Section>

        <Section id="journey">
          <h2 className="text-3xl font-bold mb-6">Career Journey</h2>
          <div className="relative pl-6">
            <div className="absolute left-1 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue to-neon-purple rounded" />
            <div className="space-y-10">
              {milestones.map((m, idx) => (
                <motion.div key={m.company} initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="relative">
                  <div className="absolute -left-7 top-2 h-4 w-4 rounded-full bg-neon-blue shadow-glow" />
                  <div className="glass p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{m.company}</h3>
                      <span className="text-white/70">{m.years}</span>
                    </div>
                    <p className="text-white/80">{m.role}</p>
                    <ul className="list-disc list-inside mt-3 space-y-1 text-white/80">
                      {m.achievements.map(a => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills">
          <h2 className="text-3xl font-bold mb-6">Skills Playground</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((s) => (
              <SkillItem key={s.name} name={s.name} level={s.level} icon={<span>{s.icon}</span>} />
            ))}
          </div>
        </Section>

        <Section id="projects">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Projects</h2>
            <span className="text-sm text-white/70">Career pass rate: 100% ✅</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} title={p.title} description={p.description} tags={p.tags} />
            ))}
          </div>
        </Section>

        <Section id="activity">
          <h2 className="text-3xl font-bold mb-6">GitHub Activity</h2>
          <GitHubActivity username="vemuladheeraj" />
        </Section>

        <Section id="contact">
          <h2 className="text-3xl font-bold mb-6">Contact / Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <form className="glass p-5 space-y-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-neon-blue" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-neon-blue" />
              </div>
              <div>
                <label className="text-sm text-white/70">Message</label>
                <textarea className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-neon-blue" rows={4} />
              </div>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-5 py-2 rounded-lg bg-gradient-to-r from-neon-green to-neon-blue text-black font-semibold">
                Send Message
              </motion.button>
            </form>

            <div className="glass p-5 space-y-4">
              <p className="text-white/80">Prefer socials?</p>
              <div className="flex gap-4">
                <a href="https://github.com/vemuladheeraj" className="px-4 py-2 rounded-lg border border-white/10 hover:border-neon-purple hover:text-neon-purple transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/dheeraj-vemula" className="px-4 py-2 rounded-lg border border-white/10 hover:border-neon-green hover:text-neon-green transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="text-center text-xs text-white/60 pb-10">
        © {new Date().getFullYear()} Dheeraj Vemula. Built with Next.js, Tailwind & Framer Motion.
      </footer>
    </>
  );
}


