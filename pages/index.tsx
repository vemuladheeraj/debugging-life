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
import AnimatedBackground from '../components/AnimatedBackground';
import TimelineItem from '../components/TimelineItem';
import AnimatedAvatar from '../components/AnimatedAvatar';

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
      title: '🏏 Cricket, Travel & Adventure', 
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
    { icon: '🎯', text: 'Problem solver & team player' },
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
          <div className="relative overflow-hidden min-h-screen flex items-center">
            <AnimatedBackground />
            
            {/* Cricket-themed animated background elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 left-10 w-20 h-20 bg-accent-cricket/10 rounded-full animate-pulse"></div>
              <div className="absolute top-40 right-20 w-16 h-16 bg-accent-primary/10 rounded-full animate-bounce"></div>
              <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-accent-secondary/10 rounded-full animate-ping"></div>
              <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-accent-tertiary/10 rounded-full animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left side - Text content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <span className="inline-block px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm font-semibold mb-4">
                    👋 Welcome to my world
                  </span>
                </motion.div>

                <GlitchTitle className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                  Hi, I'm Dheeraj
                </GlitchTitle>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                >
                  <span className="sport-gradient">Engineer • Cricket Lover •</span>
                  <br />
                  <span className="gradient-text">Lifelong Debugger</span>
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.6 }} 
                  className="text-xl md:text-2xl text-gray-600 mb-8 font-medium leading-relaxed"
                >
                  "Breaking Code, Building Quality — and having fun while doing it."
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  {funFacts.map((fact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/20"
                    >
                      <span className="text-xl">{fact.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{fact.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a 
                    href="#about" 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.98 }} 
                    className="inline-block px-8 py-4 rounded-2xl animated-gradient text-white font-bold text-lg shadow-glow-lg text-center"
                  >
                    Let's Get to Know Each Other →
                  </motion.a>
                  <motion.a 
                    href="#projects" 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.98 }} 
                    className="inline-block px-8 py-4 rounded-2xl border-2 border-accent-primary text-accent-primary font-bold text-lg hover:bg-accent-primary hover:text-white transition-all duration-300 text-center"
                  >
                    View My Work
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right side - Visual elements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Main profile image container */}
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="relative z-10"
                  >
                    <div className="w-80 h-80 mx-auto relative">
                      {/* Cricket-themed background circle */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 rounded-full animate-pulse"></div>
                      <div className="absolute inset-2 bg-gradient-to-br from-accent-cricket/30 to-accent-sport/30 rounded-full"></div>
                      
                      {/* Profile image placeholder - using cricket theme */}
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                        <div className="w-full h-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white text-6xl">
                          🏏
                        </div>
                        {/* Overlay with cricket elements */}
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="text-white text-8xl cricket-bounce">🏏</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating elements around the image */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-accent-primary/20 rounded-full flex items-center justify-center text-2xl"
                  >
                    💻
                  </motion.div>
                  
                  <motion.div
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-cricket/20 rounded-full flex items-center justify-center text-2xl"
                  >
                    🏏
                  </motion.div>

                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      x: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    className="absolute top-1/2 -right-8 w-12 h-12 bg-accent-secondary/20 rounded-full flex items-center justify-center text-xl"
                  >
                    ⚡
                  </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
                >
                  <span className="text-sm mb-2">Scroll to explore</span>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
                  >
                    <motion.div
                      animate={{ y: [0, 12, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Featured Projects Preview */}
        <Section id="featured-projects">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4 gradient-text"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Some of my favorite projects that showcase my skills and passion
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalProjects.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="glass glass-hover p-6 h-full flex flex-col">
                  <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-4 py-2 bg-accent-primary text-white rounded-lg font-medium text-sm hover:bg-accent-primary/90 transition-colors"
                  >
                    View Project →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 border-2 border-accent-primary text-accent-primary font-bold rounded-xl hover:bg-accent-primary hover:text-white transition-all duration-300"
            >
              View All Projects
            </motion.a>
          </motion.div>
        </Section>

        {/* About Me Section */}
        <Section id="about">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-6 gradient-text"
            >
              About Me
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Get to know the person behind the code
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Personal photo and quick intro */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Main photo container with cricket theme */}
                <div className="w-96 h-96 mx-auto relative">
                  {/* Background decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 rounded-full animate-pulse"></div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-accent-cricket/30 to-accent-sport/30 rounded-full"></div>
                  
                  {/* Main photo placeholder - cricket themed */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white text-8xl">
                      🏏
                    </div>
                    {/* Overlay with personal touch */}
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <div className="text-white text-9xl cricket-bounce">🏏</div>
                    </div>
                  </div>
                </div>

                {/* Floating skill badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -top-4 -right-4 glass glass-hover p-3 rounded-full"
                >
                  <span className="text-2xl">💻</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute -bottom-4 -left-4 glass glass-hover p-3 rounded-full"
                >
                  <span className="text-2xl cricket-bounce">🏏</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="absolute top-1/2 -right-8 glass glass-hover p-3 rounded-full"
                >
                  <span className="text-xl">⚡</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Dheeraj Vemula</h3>
                <p className="text-xl text-accent-primary font-semibold mb-6">Test Automation Engineer</p>
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  I'm a Test Automation Engineer from Hyderabad with <strong>10+ years in IT</strong>. But beyond work, I'm a cricket enthusiast, adventure seeker, traveler, and someone who treats debugging life with as much care as debugging code.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  When I'm not writing automation scripts or fixing bugs, you'll find me on the cricket field, exploring new places, or seeking new adventures. I believe that the best solutions come from a perfect blend of technical expertise and life experiences.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="text-accent-primary font-semibold"
                >
                  My philosophy? Every bug is a puzzle waiting to be solved, every project is a story waiting to be told, and every day is an opportunity to learn something new while having fun doing it!
                </motion.p>
              </div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="grid grid-cols-2 gap-6 pt-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-primary mb-2">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-secondary mb-2">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-tertiary mb-2">🏏</div>
                  <div className="text-sm text-gray-600">Cricket Player</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-cricket mb-2">∞</div>
                  <div className="text-sm text-gray-600">Bugs Fixed</div>
                </div>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-accent-primary text-white rounded-xl font-semibold text-center hover:bg-accent-primary/90 transition-colors"
                >
                  Let's Connect
                </motion.a>
                <motion.a
                  href="#timeline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-accent-primary text-accent-primary rounded-xl font-semibold text-center hover:bg-accent-primary hover:text-white transition-all duration-300"
                >
                  My Journey
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </Section>

        {/* Timeline Section */}
        <Section id="timeline">
          <div className="text-center mb-12">
            <GlitchTitle className="text-4xl font-bold mb-4">My Journey</GlitchTitle>
            <p className="text-xl text-gray-600">From first "Hello World" to building amazing automation frameworks</p>
          </div>
          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary rounded-full"
            />
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <TimelineItem
                  key={idx}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  color={item.color}
                  isLeft={idx % 2 === 0}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-6 gradient-text"
            >
              Personal Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Some fun projects I've built when not debugging or playing cricket
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {personalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="glass glass-hover p-6 h-full flex flex-col hover-lift">
                  <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent-primary text-white rounded-xl font-semibold hover:bg-accent-primary/90 transition-colors"
                  >
                    View Project →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-800">Recent GitHub Activity</h3>
            <div className="glass glass-hover p-8">
              <GitHubProjects username="vemuladheeraj" />
            </div>
          </motion.div>
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
                  <div className="text-6xl mb-4 floating">🎯</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Problem Solver</h4>
                  <p className="text-gray-600">Approaching challenges with strategy and creativity!</p>
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

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </motion.button>

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


