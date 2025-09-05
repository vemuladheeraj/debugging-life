import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import SkillItem from '../components/SkillItem';
import BugEasterEgg from '../components/BugEasterEgg';
import GitHubActivity from '../components/GitHubActivity';
import GitHubProjects from '../components/GitHubProjects';
import GlitchTitle from '../components/GlitchTitle';
import RadarChart from '../components/RadarChart';

type HomeProps = {
  toggleTheme: () => void;
  isDark: boolean;
};

export default function Home({ toggleTheme, isDark }: HomeProps) {
  const milestones = [
    { company: 'Accenture', role: 'Associate Software Engineer', years: '2014 - 2019', achievements: ['Built UI test suites', 'Reduced regression time by 40%'] },
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
            <GlitchTitle className="text-4xl md:text-6xl gradient-text glow-text">👨‍💻 Dheeraj Vemula — Breaking Code, Building Quality 🚀</GlitchTitle>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 text-zinc-300 text-lg">Test Automation Engineer · Hyderabad, India · +91 7306497343 · vemula.dheeraj@gmail.com</motion.p>
            <motion.a 
              href="#journey" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }} 
              className="inline-block mt-8 px-8 py-4 rounded-2xl animated-gradient text-white font-bold text-lg shadow-glow-lg pulse-glow"
            >
              Start Journey →
            </motion.a>
          </div>
        </Section>

        <Section id="summary">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Professional Summary</h2>
          <div className="glass glass-hover p-8 text-zinc-200 leading-relaxed">
            Results-driven and impact-oriented Test Automation Engineer with 11+ years of experience in building scalable automation frameworks using Selenium (C#). Skilled in delivering high-quality solutions across CI/CD pipelines and empowering cross-functional teams with intuitive automation tooling. Recognized for reducing manual effort, optimizing test execution, and driving innovation in Agile/Scrum environments.
          </div>
        </Section>

        <Section id="journey">
          <h2 className="text-3xl font-bold mb-2 gradient-text">Career Journey</h2>
          <p className="mb-8 text-zinc-400 text-lg">Gamified milestones — unlock achievements as you scroll.</p>
          <div className="relative pl-6">
            <div className="absolute left-1 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary rounded-full" />
            <div className="space-y-10">
              {milestones.map((m, idx) => (
                <motion.div key={m.company} initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="relative group">
                  <div className="absolute -left-7 top-2 h-4 w-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary shadow-glow pulse-glow" />
                  <div className="glass glass-hover p-6 border border-transparent group-hover:border-accent-primary/40 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white">{m.company}</h3>
                      <span className="text-zinc-400 font-medium">{m.years}</span>
                    </div>
                    <p className="text-zinc-300 text-lg mt-1">{m.role}</p>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-zinc-200">
                      {m.achievements.map(a => (
                        <li key={a} className="leading-relaxed">{a}</li>
                      ))}
                    </ul>
                    <div className="mt-4 text-sm text-accent-tertiary font-medium flex items-center gap-2">
                      <span className="animate-pulse">✨</span>
                      Achievement Unlocked
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="experience">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Professional Experience</h2>
          <div className="space-y-6">
            <div className="glass glass-hover p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Optum Global Solutions | Advisory Services Consultant</h3>
                <span className="text-zinc-400 font-medium">July 2021 – Present</span>
              </div>
              <ul className="list-disc list-inside space-y-3 text-zinc-200 leading-relaxed">
                <li>Engineered robust automation frameworks with reusable, generic components that improved test script creation efficiency by 50%.</li>
                <li>Developed intuitive tools that enabled 20+ manual testers to execute automation without writing code.</li>
                <li>Automated defect lifecycle management via integration with Rally/Jira, eliminating manual effort.</li>
                <li>Designed and executed automated web services validations using Postman and C# scripting.</li>
                <li>Integrated UI and unit tests with Jira for seamless test status updates within the workflow.</li>
                <li>Conducted detailed database validations to support SIT and regression cycles.</li>
              </ul>
            </div>
            <div className="glass glass-hover p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Wells Fargo | Software Engineer Sr Analyst</h3>
                <span className="text-zinc-400 font-medium">September 2019 – July 2021</span>
              </div>
              <ul className="list-disc list-inside space-y-3 text-zinc-200 leading-relaxed">
                <li>Built a scalable, reusable Generic Automation Framework for streamlined script development.</li>
                <li>Automated Change Request (CR) creation via UiPath, reducing turnaround time from 2 days to 2 hours.</li>
                <li>Led backend validations using SQL Server and managed defect triaging via Jira.</li>
              </ul>
            </div>
            <div className="glass glass-hover p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Accenture | Application Development Analyst</h3>
                <span className="text-zinc-400 font-medium">August 2014 – August 2019</span>
              </div>
              <p className="text-sm text-zinc-500 mb-4">(Worked under Nexwave payroll from Aug 2014 – Aug 2017)</p>
              <ul className="list-disc list-inside space-y-3 text-zinc-200 leading-relaxed">
                <li>Developed test plans and automated scripts for user stories, boosting sprint-level test coverage.</li>
                <li>Collaborated with cross-functional teams for test case peer reviews and defect resolutions.</li>
                <li>Led third-party integration testing and facilitated user acceptance testing.</li>
                <li>Conducted smoke, functional, regression, and system testing.</li>
                <li>Owned and maintained the regression suite for the QTrac application.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Skills & Core Competencies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass glass-hover p-6">
              <RadarChart labels={["Selenium","C#","SQL","API","CI/CD","Design"]} values={[90,85,80,88,82,75]} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((s) => (
                <SkillItem key={s.name} name={s.name} level={s.level} icon={<span>{s.icon}</span>} />
              ))}
            </div>
          </div>
          <div className="mt-8 glass glass-hover p-6 text-zinc-200">
            <div className="font-semibold mb-3 text-white text-lg">Core Tools & Frameworks</div>
            <p className="mb-6 leading-relaxed">Selenium WebDriver (C#), Selenium Grid, NUnit, MSTest, Postman, SOAPUI, Fiddler, AutoIT, UiPath</p>
            <div className="font-semibold mb-3 text-white text-lg">Testing Expertise</div>
            <p className="mb-6 leading-relaxed">Functional, Regression, API (Manual & Automation), SIT, UAT, Cross-browser, Web Services, Database (SQL Server)</p>
            <div className="font-semibold mb-3 text-white text-lg">DevOps & Project</div>
            <p className="leading-relaxed">Azure DevOps, Git, TFS, Jira, Rally · Methodologies: Agile, Scrum</p>
          </div>
        </Section>

        <Section id="projects">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold gradient-text">Projects</h2>
            <span className="text-sm text-accent-tertiary font-medium flex items-center gap-2">
              <span className="animate-pulse">✨</span>
              Career pass rate: 100%
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} title={p.title} description={p.description} tags={p.tags} />
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-6 text-white">Recent GitHub Repositories</h3>
            <GitHubProjects username="vemuladheeraj" />
          </div>
        </Section>

        <Section id="activity">
          <h2 className="text-3xl font-bold mb-6 gradient-text">GitHub Activity</h2>
          <GitHubActivity username="vemuladheeraj" />
        </Section>

        <Section id="education">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Education</h2>
          <div className="glass glass-hover p-6 text-zinc-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-white text-lg">Bachelor of Science</div>
                <div className="text-zinc-300">Avanthi Degree and PG College, Osmania University, Hyderabad</div>
              </div>
              <div className="text-zinc-400 font-medium">Graduated: 2014</div>
            </div>
          </div>
        </Section>

        <Section id="achievements">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Key Achievements</h2>
          <div className="glass glass-hover p-6 text-zinc-200">
            <ul className="list-disc list-inside space-y-3 leading-relaxed">
              <li>Diamond Bravo Awards (5x) @ Optum for automation tool development and process automation.</li>
              <li>Productivity Award @ Schlumberger (Accenture) for impactful contributions to project efficiency.</li>
            </ul>
          </div>
        </Section>

        <Section id="contact">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Contact / Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form className="glass glass-hover p-6 space-y-6">
              <div>
                <label className="text-sm text-zinc-300 font-medium">Name</label>
                <input className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all text-white placeholder-zinc-500" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-zinc-300 font-medium">Email</label>
                <input type="email" className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all text-white placeholder-zinc-500" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="text-sm text-zinc-300 font-medium">Message</label>
                <textarea className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all text-white placeholder-zinc-500" rows={4} placeholder="Your message..." />
              </div>
              <motion.button 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.98 }} 
                className="px-6 py-3 rounded-xl animated-gradient text-white font-semibold shadow-glow-lg"
              >
                Send Message →
              </motion.button>
            </form>

            <div className="glass glass-hover p-6 space-y-4">
              <div className="text-zinc-200 text-lg">📍 Hyderabad, India</div>
              <div className="text-zinc-200 text-lg">📞 +91 7306497343</div>
              <div className="text-zinc-200 text-lg">✉️ vemula.dheeraj@gmail.com</div>
              <div className="pt-4 flex gap-4">
                <a href="https://github.com/vemuladheeraj" className="px-6 py-3 rounded-xl border border-white/10 hover:border-accent-secondary hover:text-accent-secondary transition-all duration-300 hover:shadow-glow">GitHub</a>
                <a href="https://www.linkedin.com/in/dheeraj-vemula" className="px-6 py-3 rounded-xl border border-white/10 hover:border-accent-tertiary hover:text-accent-tertiary transition-all duration-300 hover:shadow-glow">LinkedIn</a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="text-center text-sm text-zinc-500 pb-10 pt-8">
        © {new Date().getFullYear()} Dheeraj Vemula. Built with Next.js, Tailwind & Framer Motion.
      </footer>
    </>
  );
}


