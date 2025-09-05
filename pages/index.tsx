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
            <GlitchTitle className="text-4xl md:text-6xl neon-text">👨‍💻 Dheeraj Vemula — Breaking Code, Building Quality 🚀</GlitchTitle>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 text-white/80">Test Automation Engineer · Hyderabad, India · +91 7306497343 · vemula.dheeraj@gmail.com</motion.p>
            <motion.a href="#journey" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold shadow-glow">
              Start Journey
            </motion.a>
          </div>
        </Section>

        <Section id="summary">
          <h2 className="text-3xl font-bold mb-4">Professional Summary</h2>
          <div className="glass p-5 text-white/85">
            Results-driven and impact-oriented Test Automation Engineer with 11+ years of experience in building scalable automation frameworks using Selenium (C#). Skilled in delivering high-quality solutions across CI/CD pipelines and empowering cross-functional teams with intuitive automation tooling. Recognized for reducing manual effort, optimizing test execution, and driving innovation in Agile/Scrum environments.
          </div>
        </Section>

        <Section id="journey">
          <h2 className="text-3xl font-bold mb-2">Career Journey</h2>
          <p className="mb-6 text-white/75">Gamified milestones — unlock achievements as you scroll.</p>
          <div className="relative pl-6">
            <div className="absolute left-1 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue to-neon-purple rounded" />
            <div className="space-y-10">
              {milestones.map((m, idx) => (
                <motion.div key={m.company} initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="relative group">
                  <div className="absolute -left-7 top-2 h-4 w-4 rounded-full bg-neon-blue shadow-glow" />
                  <div className="glass p-5 border border-transparent group-hover:border-neon-blue/40 transition-colors">
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
                    <div className="mt-3 text-xs text-neon-green">Achievement Unlocked ✅</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="experience">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <div className="space-y-4">
            <div className="glass p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Optum Global Solutions | Advisory Services Consultant</h3>
                <span className="text-white/70">July 2021 – Present</span>
              </div>
              <ul className="list-disc list-inside mt-3 space-y-1 text-white/85">
                <li>Engineered robust automation frameworks with reusable, generic components that improved test script creation efficiency by 50%.</li>
                <li>Developed intuitive tools that enabled 20+ manual testers to execute automation without writing code.</li>
                <li>Automated defect lifecycle management via integration with Rally/Jira, eliminating manual effort.</li>
                <li>Designed and executed automated web services validations using Postman and C# scripting.</li>
                <li>Integrated UI and unit tests with Jira for seamless test status updates within the workflow.</li>
                <li>Conducted detailed database validations to support SIT and regression cycles.</li>
              </ul>
            </div>
            <div className="glass p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Wells Fargo | Software Engineer Sr Analyst</h3>
                <span className="text-white/70">September 2019 – July 2021</span>
              </div>
              <ul className="list-disc list-inside mt-3 space-y-1 text-white/85">
                <li>Built a scalable, reusable Generic Automation Framework for streamlined script development.</li>
                <li>Automated Change Request (CR) creation via UiPath, reducing turnaround time from 2 days to 2 hours.</li>
                <li>Led backend validations using SQL Server and managed defect triaging via Jira.</li>
              </ul>
            </div>
            <div className="glass p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Accenture | Application Development Analyst</h3>
                <span className="text-white/70">August 2014 – August 2019</span>
              </div>
              <p className="text-xs text-white/60">(Worked under Nexwave payroll from Aug 2014 – Aug 2017)</p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-white/85">
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
          <h2 className="text-3xl font-bold mb-6">Skills & Core Competencies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RadarChart labels={["Selenium","C#","SQL","API","CI/CD","Design"]} values={[90,85,80,88,82,75]} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((s) => (
                <SkillItem key={s.name} name={s.name} level={s.level} icon={<span>{s.icon}</span>} />
              ))}
            </div>
          </div>
          <div className="mt-6 glass p-5 text-white/85">
            <div className="font-semibold mb-2">Core Tools & Frameworks</div>
            Selenium WebDriver (C#), Selenium Grid, NUnit, MSTest, Postman, SOAPUI, Fiddler, AutoIT, UiPath
            <div className="font-semibold mt-4 mb-2">Testing Expertise</div>
            Functional, Regression, API (Manual & Automation), SIT, UAT, Cross-browser, Web Services, Database (SQL Server)
            <div className="font-semibold mt-4 mb-2">DevOps & Project</div>
            Azure DevOps, Git, TFS, Jira, Rally · Methodologies: Agile, Scrum
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
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Recent GitHub Repositories</h3>
            <GitHubProjects username="vemuladheeraj" />
          </div>
        </Section>

        <Section id="activity">
          <h2 className="text-3xl font-bold mb-6">GitHub Activity</h2>
          <GitHubActivity username="vemuladheeraj" />
        </Section>

        <Section id="education">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="glass p-5 text-white/85">
            <div className="flex items-center justify_between">
              <div>
                <div className="font-semibold">Bachelor of Science</div>
                <div>Avanthi Degree and PG College, Osmania University, Hyderabad</div>
              </div>
              <div className="text-white/70">Graduated: 2014</div>
            </div>
          </div>
        </Section>

        <Section id="achievements">
          <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
          <div className="glass p-5 text-white/85">
            <ul className="list-disc list-inside space-y-1">
              <li>Diamond Bravo Awards (5x) @ Optum for automation tool development and process automation.</li>
              <li>Productivity Award @ Schlumberger (Accenture) for impactful contributions to project efficiency.</li>
            </ul>
          </div>
        </Section>

        <Section id="contact">
          <h2 className="text-3xl font-bold mb-6">Contact / Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <form className="glass p-5 space-y-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input className="mt-1 w-full bg_white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-neon-blue" />
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

            <div className="glass p-5 space-y-2">
              <div className="text-white/85">Hyderabad, India</div>
              <div className="text-white/85">+91 7306497343</div>
              <div className="text-white/85">vemula.dheeraj@gmail.com</div>
              <div className="pt-2 flex gap-4">
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


