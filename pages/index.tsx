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
  const timeline = [
    { 
      year: '2010-2013', 
      title: '🎓 UnderGraduation + First Exposure', 
      description: 'Discovered coding and testing during college. Built my first "Hello World" and fell in love with debugging!',
      icon: '🎓',
      color: 'accent-primary'
    },
    { 
      year: '2014-2019', 
      title: '🚀 Accenture - First Big Projects', 
      description: 'Dove into corporate world, built UI test suites, and learned that coffee is essential for debugging.',
      icon: '🚀',
      color: 'accent-secondary'
    },
    { 
      year: '2019-2021', 
      title: '💼 Wells Fargo - Deep into Automation', 
      description: 'Mastered Selenium, API testing, and discovered that automation can be as exciting as cricket!',
      icon: '💼',
      color: 'accent-tertiary'
    },
    { 
      year: '2021-Present', 
      title: '🌟 Optum - Innovation & Mentoring', 
      description: 'Built advanced frameworks, won awards, and learned that teaching others is as rewarding as hitting a six!',
      icon: '🌟',
      color: 'accent-sport'
    },
    { 
      year: 'Life Outside Work', 
      title: '🏏 Cricket, Travel & Fashion', 
      description: 'Playing cricket in local team, exploring new places, and building strong friendships beyond work.',
      icon: '🏏',
      color: 'accent-cricket'
    },
    { 
      year: 'Future', 
      title: '🔮 Smarter Automation & AI', 
      description: 'Building AI-driven testing frameworks while maintaining the perfect work-life balance.',
      icon: '🔮',
      color: 'accent-primary'
    },
  ];

  const personalProjects = [
    { 
      title: 'Eleven Chargers Website', 
      description: 'A modern website for Eleven Chargers cricket team. Built with React and styled with love!', 
      tags: ['React', 'Web Design', 'Cricket'], 
      link: 'https://github.com/vemuladheeraj/elevenChargers',
      icon: '🏏'
    },
    { 
      title: 'WhatsApp Replier', 
      description: 'Smart automation tool that replies to WhatsApp messages. Because even bots need to be polite!', 
      tags: ['Automation', 'WhatsApp', 'Python'], 
      link: 'https://github.com/vemuladheeraj/whatsappReplier',
      icon: '💬'
    },
    { 
      title: 'Password Manager', 
      description: 'Secure password management solution. Because remembering passwords is harder than debugging!', 
      tags: ['Security', 'C#', 'Encryption'], 
      link: 'https://github.com/vemuladheeraj/PasswordManager',
      icon: '🔐'
    },
  ];

  const funFacts = [
    { icon: '🏏', text: 'Cricket player in a local team' },
    { icon: '👕', text: 'Bright, casual fashion sense' },
    { icon: '🌍', text: 'Loves travel & exploring' },
    { icon: '☕', text: 'Coffee before code' },
    { icon: '🤝', text: 'Believes in meaningful friendships beyond work' },
  ];

  const quirkyFacts = [
    "I can debug faster than I can cook 🍳",
    "Once deleted a database but restored it before anyone noticed 😅 (but did let my team know about it!)",
    "Favorite debugging partner: cricket breaks 🏏",
    "I treat every bug like a cricket match - with strategy and patience!",
    "Coffee consumption increases exponentially during debugging sessions ☕"
  ];

  return (
    <>
      <Head>
        <title>Dheeraj Vemula — Engineer, Cricket Lover, Lifelong Debugger</title>
        <meta name="description" content="Breaking Code, Building Quality — and having fun while doing it" />
      </Head>
      <Navbar onToggleTheme={toggleTheme} isDark={isDark} />
      <BugEasterEgg />

      <main className="max-w-6xl mx-auto px-4 pt-28 pb-24 space-y-24">
        {/* Hero Section */}
        <Section id="home">
          <div className="text-center relative">
            <div className="code-flow absolute inset-0 rounded-3xl opacity-20"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Hi, I'm Dheeraj 👋</span>
                <br />
                <span className="sport-gradient">Engineer, Cricket Lover,</span>
                <br />
                <span className="gradient-text">Lifelong Debugger</span>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5 }} 
                className="text-xl md:text-2xl text-gray-600 mb-8 font-medium"
              >
                Breaking Code, Building Quality — and having fun while doing it
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-md"
                  >
                    <span className="text-2xl">{fact.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{fact.text}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.a 
                href="#about" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.98 }} 
                className="inline-block px-8 py-4 rounded-2xl animated-gradient text-white font-bold text-lg shadow-glow-lg"
              >
                Let's Get to Know Each Other →
            </motion.a>
            </motion.div>
          </div>
        </Section>

        {/* About Me Section */}
        <Section id="about">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  I'm a Test Automation Engineer from Hyderabad with 10+ years in IT. But beyond work, I'm a cricket enthusiast, fashion explorer, traveler, and someone who treats debugging life with as much care as debugging code.
                </p>
                <p>
                  When I'm not writing automation scripts or fixing bugs, you'll find me on the cricket field, exploring new places, or trying out the latest fashion trends. I believe that the best solutions come from a perfect blend of technical expertise and life experiences.
                </p>
                <p>
                  My philosophy? Every bug is a puzzle waiting to be solved, every project is a story waiting to be told, and every day is an opportunity to learn something new while having fun doing it!
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass glass-hover p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full flex items-center justify-center text-8xl">
                  👨‍💻
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Dheeraj Vemula</h3>
                <p className="text-gray-600 mb-4">Test Automation Engineer</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-sm">🏏 Cricket Player</span>
                  <span className="px-3 py-1 bg-accent-secondary/10 text-accent-secondary rounded-full text-sm">👕 Fashion Lover</span>
                  <span className="px-3 py-1 bg-accent-tertiary/10 text-accent-tertiary rounded-full text-sm">🌍 Traveler</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Timeline Section */}
        <Section id="timeline">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">My Journey</h2>
            <p className="text-xl text-gray-600">From first "Hello World" to building amazing automation frameworks</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary rounded-full"></div>
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className={`relative flex items-center ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass glass-hover p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`text-4xl cricket-bounce`}>{item.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                          <p className="text-sm text-gray-500 font-medium">{item.year}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className={`absolute left-6 w-4 h-4 rounded-full bg-${item.color} shadow-glow`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Personal Projects</h2>
            <p className="text-xl text-gray-600">Some fun projects I've built when not debugging or playing cricket</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard 
                  title={project.title} 
                  description={project.description} 
                  tags={project.tags}
                  link={project.link}
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Recent GitHub Activity</h3>
            <GitHubProjects username="vemuladheeraj" />
          </div>
        </Section>

        {/* Fun Stuff Section */}
        <Section id="fun">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 sport-gradient">Fun Stuff & Quirky Facts</h2>
            <p className="text-xl text-gray-600">Because life is too short to be serious all the time!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass glass-hover p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <span className="text-3xl">😄</span>
                Quirky Facts About Me
              </h3>
              <div className="space-y-4">
                {quirkyFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-white/50 rounded-lg"
                  >
                    <span className="text-2xl mt-1">💡</span>
                    <p className="text-gray-700 font-medium">{fact}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass glass-hover p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <span className="text-3xl">🏏</span>
                Life Outside Code
              </h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4 cricket-bounce">🏏</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Cricket Player</h4>
                  <p className="text-gray-600">Playing in a local team, because every good debugger needs a good break!</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4 floating">👕</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Fashion Explorer</h4>
                  <p className="text-gray-600">Bright, casual fashion sense that matches my bright personality!</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4 floating">🌍</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Traveler</h4>
                  <p className="text-gray-600">Exploring new places and building memories beyond the screen.</p>
                </div>
            </div>
            </motion.div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Let's Talk About Code, Cricket, or Coffee ☕</h2>
            <p className="text-xl text-gray-600">I'm always up for a good conversation about technology, cricket, or just life in general!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass glass-hover p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">vemula.dheeraj@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+91 7306497343</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-tertiary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">Hyderabad, India</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a 
                  href="https://github.com/vemuladheeraj" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors text-center font-semibold"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/dheeraj-vemula" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-center font-semibold"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass glass-hover p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Quick Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                    placeholder="What's on your mind?"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 animated-gradient text-white font-bold rounded-xl shadow-glow-lg"
                >
                  Send Message →
                </motion.button>
              </form>
            </motion.div>
          </div>
        </Section>

      </main>

      <footer className="text-center text-gray-500 pb-10 pt-8">
        <div className="glass glass-hover p-6 max-w-2xl mx-auto">
          <p className="text-lg font-medium mb-2">Thanks for stopping by! 🚀</p>
          <p className="text-sm">
            © {new Date().getFullYear()} Dheeraj Vemula. Built with Next.js, Tailwind & Framer Motion.
          </p>
          <p className="text-xs mt-2 text-gray-400">
            Remember: Every bug is just a feature in disguise! 😄
          </p>
        </div>
      </footer>
    </>
  );
}


