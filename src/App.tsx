import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Award,
  BookOpen,
  Brain,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  Heart,
  Mail,
  Menu,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
  Target,
  Users,
  X,
} from 'lucide-react';
import demoProfilePhoto from './assets/srphoto.jpeg';
import proBonoCertificate from './assets/Pro-bono session certificates (1).pdf';

const whatsappBase = 'https://wa.me/919911858070';

const emailAddress = 'srishtikaushik2610@gmail.com';

const experiences = [
  {
    role: '🧠 Counselling Psychologist',
    org: 'Self-Employed',
    points: [
      'Conduct structured and compassionate therapy sessions.',
      'Provide coping strategies for anxiety, stress, and depression.',
    ],
  },
  {
    role: '🧠 Counselling Psychologist',
    org: 'Sarvagya Ayush Clinic',
    points: [
      'Supported clients through emotional well-being challenges.',
      'Applied evidence-based therapeutic approaches for sustainable growth.',
    ],
  },
  {
    role: '📚 Intern',
    org: 'IHBAS (Institute of Human Behaviour & Allied Sciences)',
    points: [
      'Assisted psychiatric assessments and case observations.',
      'Contributed to therapy planning and supervised intervention support.',
    ],
  },
  {
    role: '🌍 Intern',
    org: 'Bhartiya Parivardhan Sanstha',
    points: [
      'Participated in community outreach for mental health awareness.',
      'Helped design empathetic psychoeducation activities.',
    ],
  },
  {
    role: '👩‍🏫 Educator',
    org: 'St. Moral Public School',
    points: [
      'Taught students across age groups with learner-centered pedagogy.',
      'Focused on confidence, communication, and holistic development.',
    ],
  },
];

const services = [
  {
    title: '🧠 Individual Counselling',
    forWhom: 'Adults and young individuals seeking emotional clarity and support.',
    solves: 'Overthinking, low mood, emotional overwhelm, and major life transitions.',
    outcomes: 'Better self-understanding, healthier coping, and increased confidence.',
    icon: Brain,
  },
  {
    title: '💚 Anxiety & Stress Management',
    forWhom: 'People experiencing constant worry, panic-like symptoms, or burnout.',
    solves: 'Anxiety loops, physical stress symptoms, and work-life pressure.',
    outcomes: 'Calmer nervous system responses and practical daily regulation tools.',
    icon: Heart,
  },
  {
    title: '🎯 Child & Adolescent Assessment',
    forWhom: 'Children and teens with learning, behavioral, or developmental concerns.',
    solves: 'Concerns related to IQ profile, autism indicators, and specific learning difficulties.',
    outcomes: 'Clear assessment insights and informed support recommendations for home and school.',
    icon: Target,
  },
  {
    title: '👥 Relationship & Couples Counselling',
    forWhom: 'Partners wanting healthier communication and emotional connection.',
    solves: 'Recurring conflict, trust concerns, and emotional distance.',
    outcomes: 'Respectful communication patterns and stronger relational understanding.',
    icon: Users,
  },
  {
    title: '✨ Personality Assessment',
    forWhom: 'Individuals seeking structured insight into personal strengths and patterns.',
    solves: 'Confusion around behavior tendencies, emotional style, and decision-making.',
    outcomes: 'Actionable self-awareness for personal growth, education, or career choices.',
    icon: Sparkles,
  },
];

const specializations = [
  '😰 Anxiety & Mood Disorders',
  '👶 Adolescent Mental Health',
  '⚡ Behavioural Issues',
  '💑 Relationship Dynamics',
  '🔍 Psychological Assessments',
];

const skills = [
  '🗣️ Communication Skills (English fluency)',
  '🧪 Psychological Assessment',
  '💬 Therapy & Counselling',
  '👨‍🏫 Classroom Management',
  '🎓 Modern Teaching Techniques',
];

const qualifications = [
  '🎓 MA Psychology (Clinical Psychology)',
  '📚 MA English (Language & Literature)',
  '📖 BA English (Hons) - Delhi University',
  '💡 Diploma in Guidance & Counselling - Jamia Millia Islamia',
  '🧾 Certification in Adolescent Health and Counselling',
  '👶 Diploma in Elementary Education'
];

const testimonials = [
  {
    quote:
      'I felt listened to from the very first session. The space felt safe, and I finally learned how to handle my anxiety without feeling helpless.',
    name: 'Client A, 20s',
  },
  {
    quote:
      'Her calm approach helped me open up at my own pace. I now feel emotionally stronger and less overwhelmed in daily life.',
    name: 'Client B, 30s',
  },
  {
    quote:
      'The counselling process brought so much clarity to our relationship. We communicate better and feel more connected now.',
    name: 'Couple, Anonymous',
  },
  {
    quote:
      'As a parent, the assessment guidance gave us direction and hope. The recommendations were practical and deeply thoughtful.',
    name: 'Parent, Anonymous',
  },
];

const blogPosts = [
  {
    title: 'Managing Daily Stress Without Feeling Overwhelmed',
    excerpt:
      'Daily stress can build quietly and affect sleep, focus, and mood. Small grounding habits can help you feel emotionally steady through busy days.',
    category: 'Stress',
    date: '26 Mar 2026',
    readingTime: '4 min read',
    content: [
      'Stress is not always a crisis. Often, it arrives as constant mental pressure from unfinished tasks, family expectations, and emotional fatigue.',
      'Start by identifying what is in your control today. Keep a small list of realistic actions and complete one task at a time. This lowers emotional overload and helps your mind feel organized.',
      'Breathing exercises, movement breaks, and regular meals are simple but powerful stress regulators. If stress is affecting your sleep or relationships, speaking to a professional can offer practical support and relief.',
    ],
  },
  {
    title: 'Handling Exam Anxiety With Calm and Confidence',
    excerpt:
      'Exam anxiety is common among students and can impact performance. A calm routine and balanced preparation can reduce fear and improve concentration.',
    category: 'Students',
    date: '24 Mar 2026',
    readingTime: '5 min read',
    content: [
      'Exam anxiety often shows up as racing thoughts, self-doubt, and physical tension. It does not mean you are weak; it means your mind is under pressure.',
      'Create a realistic study plan with short focused sessions and regular breaks. Revise actively through recall, not just reading. This improves confidence and memory retention.',
      'Before exams, avoid comparing your progress with others. Ground yourself with deep breathing, hydration, and positive self-talk. You do not need to be perfect; you need to be prepared and steady.',
    ],
  },
  {
    title: 'Relationship Communication: Speaking So You Feel Heard',
    excerpt:
      'Healthy communication is about clarity, timing, and respect. Learning to express emotions without blame can strengthen connection in relationships.',
    category: 'Relationships',
    date: '20 Mar 2026',
    readingTime: '4 min read',
    content: [
      'Many conflicts are not about what was said, but how it was said. Conversations become easier when both people feel emotionally safe.',
      'Use “I feel” statements instead of accusations. For example, say “I feel unsupported when plans change suddenly” instead of “You never care.” This reduces defensiveness and increases understanding.',
      'If conversations become heated, pause and return later. Respectful communication is a skill that can be built with patience, not pressure.',
    ],
  },
  {
    title: 'Overthinking and Emotional Balance: Practical Ways to Reset',
    excerpt:
      'Overthinking can drain emotional energy and make decisions harder. Simple mental reset strategies can help you return to balance and clarity.',
    category: 'Emotional Well-being',
    date: '18 Mar 2026',
    readingTime: '4 min read',
    content: [
      'Overthinking often begins with uncertainty. The mind keeps searching for perfect answers and ends up creating more anxiety.',
      'Try the “name and park” method: write the repetitive thought, name the emotion behind it, and schedule a specific time to revisit it. This prevents your mind from looping all day.',
      'Emotional balance improves when you combine mental boundaries with body care: sleep, hydration, movement, and mindful breaks. You deserve calm, not constant mental noise.',
    ],
  },
  {
    title: 'Building Self-Confidence One Step at a Time',
    excerpt:
      'Confidence is not a personality trait you are born with. It grows when you take small actions, keep promises to yourself, and practice self-compassion.',
    category: 'Self-growth',
    date: '15 Mar 2026',
    readingTime: '5 min read',
    content: [
      'Low confidence often comes from repeated self-criticism. If your inner voice is harsh, your motivation and emotional strength naturally drop.',
      'Start with micro-goals you can finish each day. Completion builds trust in yourself. Celebrate effort, not only outcomes.',
      'Confidence grows in safe environments. Seek mentors, supportive peers, or therapy spaces where you can practice speaking, deciding, and believing in your own progress.',
    ],
  },
];

const faqData = [
  {
    question: '🔮 What happens in the first session?',
    answer:
      'The first session is a time to get to know each other and understand what brings you in. I will listen to your concerns, ask relevant questions to understand your background and challenges, and explain how counselling works. Together, we will identify your goals and create a safe foundation for future sessions. This session helps us establish trust and clarity about the counselling process.',
  },
  {
    question: '🔒 Is counselling confidential?',
    answer:
      'Yes, absolutely. Everything shared in sessions is confidential and protected. Your privacy is crucial for creating a safe space where you can be completely honest. The only exceptions to confidentiality are situations involving immediate risk to you or others, or legal obligations. You can discuss these limits in detail during our first session.',
  },
  {
    question: '⏱️ How long is each session?',
    answer:
      'Standard counselling sessions are 50-60 minutes long. This time frame balances depth of work with maintaining focus and emotional safety. The session includes time to settle in, explore your concerns, and consolidate insights. I also ensure we have time to discuss what you can apply before the next session.',
  },
  {
    question: '📝 Do I need to prepare anything before a session?',
    answer:
      'There is no formal preparation required. However, if you have specific topics or recent experiences you want to discuss, jotting down a few notes beforehand can help. The most important thing is to come as you are, with openness to explore and reflect. If something comes up during the week that feels important, please share it when we meet.',
  },
  {
    question: '💻 Is online counselling as effective as in-person sessions?',
    answer:
      'Yes, research shows that online counselling is equally effective for most concerns, with the added benefit of convenience and comfort. Meeting in a space where you feel safe can sometimes enhance the therapeutic work. However, the therapeutic relationship and your engagement matter most. Both formats can create a strong, supportive connection if you are genuinely committed to the process.',
  },
  {
    question: '⏳ How long will I need counselling?',
    answer:
      'The duration varies based on your individual needs and goals. Some people benefit from short-term counselling (6-12 sessions) for specific issues, while others prefer ongoing support. We will regularly review progress together and adjust the frequency as needed. The length is guided by your goals, not a fixed timeline.',
  },
];

const resources = [
  {
    id: 'stress-tracker',
    title: '📊 Daily Stress Tracker',
    description:
      'Monitor your stress levels throughout the day. Identify patterns and triggers to better understand your emotional responses. This tracker helps you build self-awareness and recognize when you need support.',
    icon: Brain,
    color: 'bg-[var(--card-blue)]',
    downloadFile: 'daily-stress-tracker.txt',
    fileContent: `DAILY STRESS TRACKER\n\nDate: __________\n\nMorning (8 AM):\nStress Level: 1-10 ___\nWhat triggered it: _________________________________\n\nMid-day (12 PM):\nStress Level: 1-10 ___\nWhat triggered it: _________________________________\n\nAfternoon (3 PM):\nStress Level: 1-10 ___\nWhat triggered it: _________________________________\n\nEvening (6 PM):\nStress Level: 1-10 ___\nWhat triggered it: _________________________________\n\nNight (9 PM):\nStress Level: 1-10 ___\nWhat triggered it: _________________________________\n\nHow did you cope today?\n_________________________________________________________\n\nOne thing I did well today:\n_________________________________________________________\n\nOne thing to improve tomorrow:\n_________________________________________________________\n\nRemember: Awareness is the first step to change.`,
  },
  {
    id: 'breathing-guide',
    title: '🫁 Breathing Exercise Guide',
    description:
      'Learn simple breathing techniques to calm your nervous system. These evidence-based exercises can be done anywhere, anytime. Perfect for anxiety, panic, and stress management.',
    icon: Heart,
    color: 'bg-[var(--card-beige)]',
    downloadFile: 'breathing-exercise-guide.txt',
    fileContent: `BREATHING EXERCISE GUIDE\n\n1. THE 4-7-8 BREATHING METHOD\n\nHow to do it:\n- Inhale through your nose for 4 counts\n- Hold your breath for 7 counts\n- Exhale through your mouth for 8 counts\n- Repeat 4 times\n\nBest for: Anxiety, sleep, panic\nTime needed: 2-3 minutes\n\n2. BOX BREATHING\n\nHow to do it:\n- Inhale for 4 counts\n- Hold for 4 counts\n- Exhale for 4 counts\n- Hold for 4 counts\n- Repeat 5-10 times\n\nBest for: Stress, focus, grounding\nTime needed: 2-5 minutes\n\n3. EXTENDED EXHALE BREATHING\n\nHow to do it:\n- Inhale through your nose for 4 counts\n- Exhale through your mouth slowly for 6-8 counts\n- Repeat 10 times\n\nBest for: Calming nervous system, relaxation\nTime needed: 3-5 minutes\n\n4. BELLY BREATHING (Diaphragmatic Breathing)\n\nHow to do it:\n- Sit comfortably with one hand on chest, one on belly\n- Inhale slowly through nose, feel belly expand (not chest)\n- Exhale slowly through mouth\n- Repeat 5-10 times\n\nBest for: Deep relaxation, grounding\nTime needed: 3-5 minutes\n\nTip: Practice when calm, so it's automatic during stress.`,
  },
  {
    id: 'journal-prompts',
    title: '📔 Self-Reflection Journal Prompts',
    description:
      'Explore your thoughts and feelings through guided journaling. These prompts encourage deeper self-understanding and help you process emotions. A safe space for honest reflection.',
    icon: BookOpen,
    color: 'bg-[var(--card-lavender)]',
    downloadFile: 'journal-prompts.txt',
    fileContent: `SELF-REFLECTION JOURNAL PROMPTS\n\nWEEKLY REFLECTION\n\n1. What emotions did I experience this week? How did my body respond to them?\n\n2. What situations made me feel anxious, sad, or overwhelmed? What was I thinking during those moments?\n\n3. When did I feel most like myself this week? What was I doing?\n\n4. What belief about myself have I been questioning lately?\n\n5. If I could change one thing about my thinking this week, what would it be?\n\nEMOTIONAL AWARENESS\n\n6. What am I feeling right now? Where do I feel it in my body?\n\n7. What triggered this emotion? Was it a person, situation, or thought?\n\n8. How have I been coping with difficult emotions? Are these healthy coping strategies?\n\n9. What do I need right now? Permission? Rest? Connection?\n\nGRATITUDE & STRENGTH\n\n10. What am I proud of myself for this week?\n\n11. Who made me feel supported? How did it help?\n\n12. What small act of self-compassion did I do for myself?\n\nGROWTH & GOALS\n\n13. What did I learn about myself this week?\n\n14. Where am I growing, even if it feels small?\n\n15. What is one thing I want to work on next week?\n\nReminder: There are no right or wrong answers. This is YOUR safe space.`,
  },
  {
    id: 'anxiety-coping',
    title: '🧘 Anxiety Coping Techniques',
    description:
      'Practical, evidence-based strategies to manage anxiety symptoms. Use these techniques immediately when anxiety arises. Building your personal anxiety management toolkit.',
    icon: Sparkles,
    color: 'bg-[var(--card-blue)]',
    downloadFile: 'anxiety-coping-techniques.txt',
    fileContent: `ANXIETY COPING TECHNIQUES\n\nQUICK GROUNDING TECHNIQUES (Use when anxious)\n\n1. THE 5-4-3-2-1 METHOD\nNotice:\n- 5 things you can SEE\n- 4 things you can TOUCH\n- 3 things you can HEAR\n- 2 things you can SMELL\n- 1 thing you can TASTE\n\nTime: 2-3 minutes\n\n2. BODY SCAN\n- Close your eyes\n- Notice your feet, legs, stomach, chest, arms, head\n- Breathe into any tense areas\nTime: 5-10 minutes\n\n3. COLD WATER TRICK\n- Splash cold water on your face\n- Or hold ice cubes in your hands\n- This activates your calm response\nTime: 1-2 minutes\n\nMENTAL STRATEGIES\n\n4. THOUGHT CHALLENGING\nWhen anxious, ask:\n- Is this thought true?\n- What evidence do I have against it?\n- What would I tell a friend in this situation?\n- What's a more balanced thought?\n\n5. WORRY TIME\n- Set aside 15 minutes daily for worries\n- Write them down\n- During other times, remind yourself: \"I'll worry about this at worry time\"\nTime: 15 minutes/day\n\nPHYSICAL STRATEGIES\n\n6. PROGRESSIVE MUSCLE RELAXATION\n- Tense each muscle group for 5 seconds\n- Release and notice the difference\n- Work from toes to head\nTime: 10-15 minutes\n\n7. MOVEMENT\n- Walk, stretch, dance, or exercise\n- Physical activity releases tension\n- Even 10-minute movement helps\nTime: 10-30 minutes\n\nDAILY PREVENTION\n\n- Sleep: 7-9 hours nightly\n- Nutrition: Eat regular, balanced meals\n- Caffeine: Limit or avoid\n- Exercise: 30 minutes most days\n- Mindfulness: 5-10 minutes daily\n\nWhen to seek help:\nIf anxiety interferes with daily life, consider therapy or counselling.`,
  },
  {
    id: 'sleep-guide',
    title: '😴 Better Sleep Guide',
    description:
      'Improve sleep quality and establish healthy sleep habits. Better sleep supports mental health, emotional regulation, and overall well-being. Your recovery starts at night.',
    icon: Clock,
    color: 'bg-[var(--card-beige)]',
    downloadFile: 'sleep-guide.txt',
    fileContent: `BETTER SLEEP GUIDE\n\nWHY SLEEP MATTERS FOR MENTAL HEALTH\n\n- Sleep consolidates memories and helps process emotions\n- Poor sleep increases anxiety and depression risk\n- Sleep improves focus, decision-making, and emotional resilience\n- Most adults need 7-9 hours per night\n\nHYGIENE HABITS FOR BETTER SLEEP\n\n1. CONSISTENT SCHEDULE\n- Go to bed at the same time daily\n- Wake up at the same time (even weekends)\n- This trains your body's internal clock\n\n2. BEDROOM ENVIRONMENT\n- Keep it dark (blackout curtains or mask)\n- Keep it cool (65-68°F is ideal)\n- Keep it quiet (earplugs if needed)\n- Use bed only for sleep (not work/scrolling)\n\n3. EVENING ROUTINE (Start 1 hour before bed)\n- Dim lights to signal melatonin production\n- Stop screens 30-60 minutes before bed\n  (Blue light suppresses melatonin)\n- Avoid caffeine after 2 PM\n- Avoid heavy meals 3 hours before bed\n\n4. RELAXATION BEFORE BED\n- Warm bath or shower\n- Gentle stretching or yoga\n- Deep breathing exercises\n- Calming music or nature sounds\n- Reading a physical book\n\nWHAT TO AVOID\n\n- Alcohol (disrupts sleep quality)\n- Large meals before bed\n- Exercise close to bedtime\n- Work-related tasks\n- Worrying (save for worry time)\n- Long naps during day (max 20 minutes)\n\nIF YOU CAN'T SLEEP\n\n- Don't watch the clock (increases anxiety)\n- If awake after 20 minutes, get up and do a calm activity\n- Go back to bed only when sleepy\n- Avoid using bed as \"worry zone\"\n\nWhen to seek help:\nIf insomnia persists, consult a doctor or sleep specialist.`,
  },
];

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeInOut' },
  },
};

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedBlogIndex, setSelectedBlogIndex] = useState<number | null>(null);
  const [expandedFaqId, setExpandedFaqId] = useState<number | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const selectedBlog = selectedBlogIndex !== null ? blogPosts[selectedBlogIndex] : null;

  const testimonialSlides = useMemo(() => {
    const grouped: Array<typeof testimonials> = [];
    for (let i = 0; i < testimonials.length; i += 2) {
      grouped.push(testimonials.slice(i, i + 2));
    }
    return grouped;
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonialSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [testimonialSlides.length]);

  useEffect(() => {
    document.body.style.overflow = selectedBlog ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedBlog]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bookingMessage =
    'Hello Srishti, I would like to book a counselling session. Please share available time slots.';

  const bookingLink = `${whatsappBase}?text=${encodeURIComponent(bookingMessage)}`;

  const emailBookingBody =
    'Hello Srishti,\n\nI would like to book a counselling session. Please share your available time slots.\n\nMode (online/in-person): \n\nThank you.';

  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    emailAddress
  )}&su=${encodeURIComponent('Session Booking Request')}&body=${encodeURIComponent(emailBookingBody)}`;

  return (
    <motion.div
      className="app-shell bg-[var(--bg-main)] text-[var(--text-main)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="ambient-orb ambient-orb-a" />
        <div className="ambient-orb ambient-orb-b" />
        <div className="ambient-orb ambient-orb-c" />
        <div className="sparkles" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, index) => (
            <span
              key={index}
              className="sparkle"
              style={{
                left: `${(index * 7.1 + 5) % 100}%`,
                top: `${(index * 11.3 + 8) % 100}%`,
                animationDelay: `${(index % 7) * 0.7}s`,
              }}
            />
          ))}
        </div>
      </div>

      <nav className="site-nav fixed top-0 z-50 w-full border-b border-white/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-5 md:px-8 md:py-4">
          <motion.a
              href="#booking"
              className="cta-glow hidden whitespace-nowrap rounded-full bg-[var(--accent-blue)] px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#6c87cb] md:inline-flex md:px-4 md:text-sm"
              whileTap={{ scale: 0.97 }}
            >
              Book a Session
            </motion.a>
          <div className="hidden items-center gap-7 text-sm text-slate-700 md:flex">
            <a className="nav-link" href="#about">👤 About</a>
            <a className="nav-link" href="#experience">📚 Experience</a>
            <a className="nav-link" href="#services">💼 Services</a>
            <a className="nav-link" href="#testimonials">⭐ Testimonials</a>
            <a className="nav-link" href="#blog">✍️ Blog</a>
            <a className="nav-link" href="#resources">🎁 Resources</a>
            <a className="nav-link" href="#faq">❓ FAQ</a>
            <a className="nav-link" href="#contact">📞 Contact</a>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="theme-toggle"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
            >
              <span aria-hidden="true">{theme === 'light' ? '🌙' : '🌞'}</span>
            </button>
            
            <button
              type="button"
              className="nav-menu-btn md:hidden"
              aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileNavOpen((prev) => !prev)}
            >
              {mobileNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileNavOpen ? (
            <motion.div
              className="mobile-nav-panel border-t border-[var(--border-soft)] px-4 pb-4 pt-2 md:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
            >
              <div className="mx-auto grid max-w-6xl gap-2">
                <a className="mobile-nav-link" href="#about" onClick={() => setMobileNavOpen(false)}>👤 About</a>
                <a className="mobile-nav-link" href="#experience" onClick={() => setMobileNavOpen(false)}>📚 Experience</a>
                <a className="mobile-nav-link" href="#services" onClick={() => setMobileNavOpen(false)}>💼 Services</a>
                <a className="mobile-nav-link" href="#blog" onClick={() => setMobileNavOpen(false)}>✍️ Blog</a>
                <a className="mobile-nav-link" href="#testimonials" onClick={() => setMobileNavOpen(false)}>⭐ Testimonials</a>
                <a className="mobile-nav-link" href="#resources" onClick={() => setMobileNavOpen(false)}>🎁 Resources</a>
                <a className="mobile-nav-link" href="#faq" onClick={() => setMobileNavOpen(false)}>❓ FAQ</a>
                <a className="mobile-nav-link" href="#contact" onClick={() => setMobileNavOpen(false)}>📞 Contact</a>
                <motion.a
                  href="#booking"
                  className="cta-glow mt-2 inline-flex items-center justify-center rounded-full bg-[var(--accent-blue)] px-4 py-2.5 text-sm font-semibold text-white"
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Book a Session
                </motion.a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>

      <main>
        <section id="home" className="section-wash section-wash-hero relative overflow-hidden px-4 pb-16 pt-48 sm:px-5 sm:pt-52 md:px-8 md:pb-20 md:pt-44">
          <div className="hero-shape hero-shape-a" />
          <div className="hero-shape hero-shape-b" />
          <motion.div
            className="mx-auto max-w-5xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          >
            <div className="mx-auto mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--border-soft)] bg-white/80 px-3 py-2 text-xs text-slate-700 shadow-sm sm:px-4 sm:text-sm">
              <Shield className="h-4 w-4 text-[var(--accent-blue)]" />
              <span className="truncate">Safe, confidential, and non-judgmental support</span>
            </div>
            <div className="mx-auto mb-7 h-40 w-40 overflow-hidden rounded-[2rem] border-4 border-white/80 bg-white shadow-[0_16px_36px_rgba(60,80,130,0.18)] sm:h-48 sm:w-48">
              <img
                src={demoProfilePhoto}
                alt="Demo profile placeholder"
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="hero-title font-serif text-4xl font-semibold leading-tight text-[var(--ink-strong)] sm:text-5xl md:text-7xl">
              Srishti Kaushik
            </h1>
            <p className="mt-4 text-lg font-medium text-[var(--accent-blue)] sm:text-xl md:text-2xl">
              🧠 Counselling Psychologist & Educator
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg md:mt-7 md:text-xl">
              Helping individuals navigate stress, emotions, and life challenges with clarity and confidence.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <motion.a
                href="#booking"
                className="cta-glow inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-blue)] px-6 py-3 text-base font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#6c87cb] sm:px-7"
                whileTap={{ scale: 0.97 }}
              >
                Book a Session
                <ChevronRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#services"
                className="rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-[var(--card-lavender)] sm:px-7"
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="section-wash section-wash-lavender px-4 py-14 sm:px-5 md:px-8 md:py-20"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="section-title">💭 About Me</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <motion.article className="soft-card hover-lift" variants={cardReveal}>
                <p className="text-lg leading-relaxed text-slate-700">
                  I am a dedicated Counselling Psychologist with hands-on experience in therapy, assessment,
                  and teaching. My clinical exposure includes psychiatric assessment, diagnosis support, and
                  patient counselling in collaborative care settings.
                </p>
                <p className="mt-4 leading-relaxed text-slate-700">
                  Having worked with multidisciplinary teams including psychiatrists and social workers, I value
                  integrated and ethical care. My practice is rooted in empathy, professionalism, and emotional
                  safety, creating a confidential space where clients can express, process, and heal with dignity.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[var(--card-blue)] p-4">
                    <p className="font-semibold text-[var(--ink-strong)]">Therapeutic Lens</p>
                    <p className="mt-1 text-sm text-slate-700">Compassionate, evidence-informed, and client-centered.</p>
                  </div>
                  <div className="rounded-2xl bg-[var(--card-lavender)] p-4">
                    <p className="font-semibold text-[var(--ink-strong)]">Care Commitment</p>
                    <p className="mt-1 text-sm text-slate-700">Safe, respectful, and non-judgmental sessions.</p>
                  </div>
                </div>
              </motion.article>

              <motion.aside className="soft-card hover-lift" variants={cardReveal}>
                <h3 className="mb-4 font-serif text-2xl font-semibold text-[var(--ink-strong)]">Qualifications</h3>
                <ul className="space-y-3 text-slate-700">
                  {qualifications.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-blue)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.aside>
            </div>
          </div>
        </motion.section>

        <section id="experience" className="section-wash section-wash-blue px-4 py-14 sm:px-5 md:px-8 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center fade-up">
              <h2 className="section-title">📚 Experience Timeline</h2>
            </div>
            <div className="relative mx-auto max-w-4xl border-l-2 border-[var(--border-soft)] pl-5 sm:pl-6 md:pl-10">
              {experiences.map((item, index) => (
                <article key={item.org} className="relative mb-10 last:mb-0 fade-up">
                  <span className="absolute -left-[29px] top-1 h-4 w-4 rounded-full border-4 border-white bg-[var(--accent-blue)] sm:-left-[34px] md:-left-[42px]" />
                  <div className="soft-card hover-lift">
                    <h3 className="font-serif text-2xl font-semibold text-[var(--ink-strong)]">{item.role}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-600">{item.org}</p>
                    <ul className="mt-4 space-y-2 text-slate-700">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-blue)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {index === 0 ? (
                      <p className="mt-4 inline-block rounded-full bg-[var(--card-blue)] px-3 py-1 text-xs font-semibold text-slate-700">
                        Current Role
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <motion.section
          id="services"
          className="section-wash section-wash-peach px-4 py-14 sm:px-5 md:px-8 md:py-20"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center fade-up">
              <h2 className="section-title">💼 Services & Support</h2>
            </div>
            <motion.div
              className="stagger-grid grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    className={`soft-card hover-lift service-card-${(index % 5) + 1}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ scale: 1.03, y: -6 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.06 }}
                  >
                    <div className="mb-4 inline-flex rounded-2xl bg-[var(--card-blue)] p-3">
                      <Icon className="h-6 w-6 text-[var(--accent-blue)]" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-[var(--ink-strong)]">{service.title}</h3>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                      <p><span className="font-semibold text-slate-800">Who it is for:</span> {service.forWhom}</p>
                      <p><span className="font-semibold text-slate-800">What it solves:</span> {service.solves}</p>
                      <p><span className="font-semibold text-slate-800">Outcomes:</span> {service.outcomes}</p>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        <section className="section-wash section-wash-lavender px-4 py-14 sm:px-5 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            <article className="soft-card hover-lift fade-up">
              <h2 className="section-title text-left">🎯 Specializations</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {specializations.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border-soft)] bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[var(--border-soft)] bg-[var(--card-blue)] p-4">
                <p className="font-semibold text-[var(--ink-strong)]">🧾 Pro Bono Psychological Support Certification</p>
                <p className="mt-1 text-sm text-slate-700">
                  Verified certification document available for viewing.
                </p>
                <a
                  href={proBonoCertificate}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-glow mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--accent-blue)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6c87cb]"
                >
                  View Certificate
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </article>

            <article id="educator" className="soft-card hover-lift fade-up">
              <h2 className="section-title text-left">📖 Educator Role</h2>
              <p className="mt-4 leading-relaxed text-slate-700">
                Alongside psychological care, I have experience teaching students across different age groups.
                I use modern teaching methods that combine empathy, participation, and practical learning.
                My educational approach supports holistic development by nurturing confidence, emotional
                awareness, and critical thinking.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[var(--card-beige)] p-4 text-center">
                  <BookOpen className="mx-auto h-5 w-5 text-[var(--accent-blue)]" />
                  <p className="mt-2 text-sm font-semibold text-slate-700">Interactive Learning</p>
                </div>
                <div className="rounded-2xl bg-[var(--card-lavender)] p-4 text-center">
                  <MessageCircle className="mx-auto h-5 w-5 text-[var(--accent-blue)]" />
                  <p className="mt-2 text-sm font-semibold text-slate-700">Student Voice</p>
                </div>
                <div className="rounded-2xl bg-[var(--card-blue)] p-4 text-center">
                  <Target className="mx-auto h-5 w-5 text-[var(--accent-blue)]" />
                  <p className="mt-2 text-sm font-semibold text-slate-700">Holistic Growth</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section-wash section-wash-blue px-4 py-14 sm:px-5 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            <article className="soft-card hover-lift fade-up">
              <h2 className="section-title text-left">⚡ Skills</h2>
              <ul className="mt-5 space-y-3 text-slate-700">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent-blue)]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="soft-card hover-lift fade-up">
              <h2 className="section-title text-left">🏆 Achievements</h2>
              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl bg-[var(--card-blue)] p-4">
                  <p className="font-semibold text-[var(--ink-strong)]">NCAHP Registered- 99-2452-6388-8128</p>
                </div>
                <div className="rounded-2xl bg-[var(--card-beige)] p-4">
                  <p className="font-semibold text-[var(--ink-strong)]">Top 20 rank holder in academics</p>
                </div>
                <div className="rounded-2xl bg-[var(--card-lavender)] p-4">
                  <p className="font-semibold text-[var(--ink-strong)]">CTET Qualified (Paper 1 & 2)</p>
                </div>
                <div className="rounded-2xl bg-[var(--card-blue)] p-4">
                  <p className="font-semibold text-[var(--ink-strong)]">Participation in CxCa CON 2024</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <motion.section
          id="testimonials"
          className="section-wash section-wash-peach px-4 py-14 sm:px-5 md:px-8 md:py-20"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center fade-up">
              <h2 className="section-title">💬 Client Testimonials</h2>
            </div>
            <div className="mx-auto max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  className="grid gap-6 md:grid-cols-2"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.75, ease: 'easeInOut' }}
                  variants={staggerContainer}
                >
                  {testimonialSlides[activeSlide].map((item, index) => (
                    <motion.article
                      key={`${activeSlide}-${item.name}`}
                      className={`soft-card hover-lift testimonial-card-${(index % 4) + 1}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.08 }}
                    >
                      <div className="mb-4 flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Heart key={i} className="icon-bob h-4 w-4 fill-[#ef9ca5] text-[#ef9ca5]" />
                        ))}
                      </div>
                      <p className="leading-relaxed text-slate-700">"{item.quote}"</p>
                      <p className="mt-4 text-sm font-semibold text-slate-500">{item.name}</p>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex justify-center gap-2">
                {testimonialSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to testimonial slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ease-in-out ${
                      activeSlide === index ? 'w-8 bg-[var(--accent-blue)]' : 'w-2.5 bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="blog"
          className="section-wash section-wash-blue px-4 py-14 sm:px-5 md:px-8 md:py-20"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="section-title"> Insights & Blog</h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                Gentle reflections and practical guidance on stress, emotional well-being, student life, and relationships.
              </p>
            </div>

            <motion.div
              className="stagger-grid grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  variants={cardReveal}
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className={`soft-card hover-lift blog-card-${(index % 3) + 1}`}
                >
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700">{post.category}</span>
                    <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-slate-600">{post.date}</span>
                    <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-slate-600">{post.readingTime}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[var(--ink-strong)]">{post.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{post.excerpt}</p>

                  <motion.button
                    type="button"
                    className="cta-glow mt-5 inline-flex items-center justify-center rounded-full bg-[var(--accent-blue)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6c87cb]"
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedBlogIndex(index)}
                  >
                    Read More
                  </motion.button>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <section id="faq" className="section-wash section-wash-blue px-4 py-14 sm:px-5 md:px-8 md:py-20">
          <div className="mx-auto max-w-3xl">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="section-title">❓ Frequently Asked Questions</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
                Clear answers to common concerns. Your well-being and comfort matter to us.
              </p>
            </motion.div>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, staggerChildren: 0.08, delayChildren: 0.1 }}
              variants={staggerContainer}
            >
              {faqData.map((item, index) => (
                <motion.div
                  key={index}
                  className="soft-card overflow-hidden border border-[var(--border-soft)] bg-white/80 p-0"
                  variants={cardReveal}
                >
                  <motion.button
                    type="button"
                    onClick={() => setExpandedFaqId(expandedFaqId === index ? null : index)}
                    className="w-full px-5 py-4 text-left transition-all duration-200 hover:bg-[var(--card-blue)]/40 sm:px-6 sm:py-5"
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-semibold text-[var(--ink-strong)] text-base sm:text-lg">
                        {item.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: expandedFaqId === index ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="h-5 w-5 text-[var(--accent-blue)]" />
                      </motion.div>
                    </div>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {expandedFaqId === index ? (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="border-t border-[var(--border-soft)] px-5 py-4 text-slate-700 sm:px-6 sm:py-5">
                          <p className="leading-relaxed text-sm sm:text-base">{item.answer}</p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="resources" className="px-4 py-14 sm:px-5 md:px-8 md:py-20">
          <div className="mx-auto max-w-6xl">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="section-title">🎁 Free Resources & Tools</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
                Helpful tools and guides to support your mental well-being. Download and use anytime.
              </p>
              <p className="mt-2 font-medium text-[var(--accent-blue)] text-base">
                You are not alone. Support is always available.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, staggerChildren: 0.1, delayChildren: 0.1 }}
              variants={staggerContainer}
            >
              {resources.map((resource) => {
                const IconComponent = resource.icon;
                const handleDownload = () => {
                  const element = document.createElement('a');
                  const file = new Blob([resource.fileContent], { type: 'text/plain' });
                  element.href = URL.createObjectURL(file);
                  element.download = resource.downloadFile;
                  document.body.appendChild(element);
                  element.click();
                  document.body.removeChild(element);
                };

                return (
                  <motion.article
                    key={resource.id}
                    className={`soft-card hover-lift flex flex-col overflow-hidden border border-[var(--border-soft)] p-0 ${resource.color}`}
                    variants={cardReveal}
                  >
                    <div className="flex items-start justify-between p-5 sm:p-6">
                      <IconComponent className="h-6 w-6 text-[var(--accent-blue)]" />
                    </div>
                    <div className="flex flex-1 flex-col px-5 pb-5 sm:px-6 sm:pb-6">
                      <h3 className="font-semibold text-[var(--ink-strong)] text-lg">{resource.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700 sm:text-base">
                        {resource.description}
                      </p>
                      <motion.button
                        type="button"
                        onClick={handleDownload}
                        className="cta-glow mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-blue)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6c87cb]"
                        whileTap={{ scale: 0.97 }}
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </motion.button>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="booking" className="section-wash section-wash-lavender px-4 py-14 sm:px-5 md:px-8 md:py-20">
          <div className="mx-auto max-w-5xl rounded-[1.6rem] border border-[var(--border-soft)] bg-white/90 p-6 shadow-[0_22px_70px_rgba(104,98,153,0.12)] sm:rounded-[2rem] sm:p-8 md:p-12 fade-up pulse-glow">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-title">📅 Book a Session</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
                You deserve a space where you feel heard and supported. Sessions are conducted in a safe,
                confidential, and non-judgmental environment focused on your emotional well-being.
              </p>

              <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
                <article className="rounded-2xl border border-[var(--border-soft)] bg-[var(--card-blue)] p-4">
                  <div className="mb-2 inline-flex rounded-xl bg-white/80 p-2">
                    <MessageCircle className="icon-bob h-5 w-5 text-[var(--accent-blue)]" />
                  </div>
                  <h3 className="font-semibold text-[var(--ink-strong)]">Book Through WhatsApp</h3>
                  <p className="mt-1 text-sm text-slate-700">Quick responses and easy scheduling chat.</p>
                  <motion.a
                    href={bookingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-glow mt-3 inline-flex items-center justify-center rounded-full bg-[var(--accent-blue)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6c87cb]"
                    whileTap={{ scale: 0.97 }}
                  >
                    Open WhatsApp
                  </motion.a>
                </article>

                <article className="rounded-2xl border border-[var(--border-soft)] bg-[var(--card-beige)] p-4">
                  <div className="mb-2 inline-flex rounded-xl bg-white/80 p-2">
                    <Mail className="icon-bob h-5 w-5 text-[var(--accent-blue)]" />
                  </div>
                  <h3 className="font-semibold text-[var(--ink-strong)]">Book by Email</h3>
                  <p className="mt-1 text-sm text-slate-700">Send details and receive a confirmation reply.</p>
                  <motion.a
                    href={gmailComposeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-glow mt-3 inline-flex items-center justify-center rounded-full bg-[var(--accent-blue)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6c87cb]"
                    whileTap={{ scale: 0.97 }}
                  >
                    Send Email
                  </motion.a>
                </article>
              </div>

              <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-blue)] px-6 py-3 font-semibold text-white transition hover:bg-[#6c87cb] sm:px-7"
                  whileTap={{ scale: 0.97 }}
                >
                  <Phone className="h-5 w-5" />
                  Contact Details
                </motion.a>
                <motion.a
                  href="#services"
                  className="rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-[var(--card-lavender)] sm:px-7"
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Services
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-16 pt-12 sm:px-5 md:px-8 md:pb-24 md:pt-14">
          <div className="mx-auto max-w-6xl rounded-[1.6rem] bg-gradient-to-br from-[#50608d] via-[#6878ab] to-[#9e7db7] p-6 text-white sm:rounded-[2rem] sm:p-8 md:p-12 fade-up">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Contact</h2>
            <p className="mt-3 max-w-2xl text-slate-200">
              Reach out for appointments and consultation details. Every conversation is handled with respect and confidentiality.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
              <a href="tel:9911858070" className="contact-pill">
                <Phone className="h-4 w-4" />
                9911858070
              </a>
              <a href="mailto:srishtikaushik2610@gmail.com" className="contact-pill sm:col-span-2 break-all">
                <Mail className="h-4 w-4" />
                srishtikaushik2610@gmail.com
              </a>
              <div className="contact-pill">
                <Clock className="h-4 w-4" />
                Session by Appointment
              </div>
              <div className="contact-pill">
                <MapPin className="h-4 w-4" />
                Online & In-person
              </div>
              <div className="contact-pill">
                <Clock className="h-4 w-4" />
                Flexible Slots
              </div>
            </div>
            <p className="mt-8 text-sm text-slate-300">© {new Date().getFullYear()} Srishti Kaushik. All rights reserved.</p>
          </div>
        </section>
      </main>

      <AnimatePresence mode="wait">
        {selectedBlog ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/45 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            onClick={() => setSelectedBlogIndex(null)}
          >
            <motion.article
              className="max-h-[86vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[var(--border-soft)] bg-white p-6 shadow-2xl sm:p-8"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-[var(--card-lavender)] px-3 py-1 text-xs font-semibold text-slate-700">
                  {selectedBlog.category}
                </span>
                <span className="rounded-full bg-[var(--card-blue)] px-3 py-1 text-xs text-slate-600">
                  {selectedBlog.date}
                </span>
                <span className="rounded-full bg-[var(--card-beige)] px-3 py-1 text-xs text-slate-600">
                  {selectedBlog.readingTime}
                </span>
              </div>

              <h3 className="font-serif text-3xl font-semibold leading-tight text-[var(--ink-strong)]">
                {selectedBlog.title}
              </h3>

              <div className="mt-5 space-y-4 text-slate-700">
                {selectedBlog.content.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-7">
                <motion.button
                  type="button"
                  onClick={() => setSelectedBlogIndex(null)}
                  className="cta-glow rounded-full bg-[var(--accent-blue)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6c87cb]"
                  whileTap={{ scale: 0.97 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
