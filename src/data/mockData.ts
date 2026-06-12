export interface Book {
  id: string;
  title: string;
  category: 'values-sel' | 'child-safety' | 'ct-ai' | 'future-ready';
  grades: string;
  description: string;
  coverStyle: {
    bg: string;
    text: string;
    accent: string;
  };
  sampleChapter: {
    title: string;
    introduction: string;
    subsections: { title: string; content: string }[];
    activity: { title: string; instructions: string[] };
  };
}

export interface Workshop {
  id: string;
  title: string;
  audience: 'student' | 'teacher' | 'parent';
  duration: string;
  description: string;
  outcomes: string[];
  image: string;
}

export interface Resource {
  id: string;
  title: string;
  category: 'article' | 'module' | 'bulletin' | 'download';
  topic: string;
  summary: string;
  readTimeOrSize: string;
  downloadUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  school: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const BOOKS: Book[] = [
  {
    id: 'book-1',
    title: 'The Empathy Compass',
    category: 'values-sel',
    grades: 'Grades 3 - 5',
    description: 'A story-driven guide to understanding perspectives, active listening, and raising kids who lead with compassion.',
    coverStyle: {
      bg: 'from-blue-900 to-indigo-950',
      text: 'text-white',
      accent: 'border-yellow-400 text-yellow-400'
    },
    sampleChapter: {
      title: 'Chapter 2: Looking Through Their Window',
      introduction: 'Empathy is not just feeling sorry for someone; it is the active practice of looking at the world through another person\'s window.',
      subsections: [
        {
          title: 'The Window Concept',
          content: 'Every human has a window through which they see the world. Some windows have blinds of worry, while others are colored with excitement. Before we react to a classmate\'s behavior, we must ask: What does their window look like today?'
        },
        {
          title: 'Active Listening in Action',
          content: 'Active listening is listening with your eyes, ears, and heart. It means not thinking about what you will say next, but completely focusing on the feelings behind the other person\'s words.'
        }
      ],
      activity: {
        title: 'Classroom Activity: The Perspective Circle',
        instructions: [
          'Have students sit in a circle and pair up.',
          'One student shares a minor frustration (e.g., "I lost my favorite pencil").',
          'The partner must rephrase the situation focusing on the emotions, starting with "It sounds like you felt..."',
          'Discuss how it feels to have your emotions accurately understood.'
        ]
      }
    }
  },
  {
    id: 'book-2',
    title: 'Digital Guardians',
    category: 'child-safety',
    grades: 'Grades 6 - 8',
    description: 'Empowering middle schoolers with digital resilience, cyber-bullying defenses, and healthy screen boundaries.',
    coverStyle: {
      bg: 'from-slate-900 to-blue-950',
      text: 'text-white',
      accent: 'border-cyan-400 text-cyan-400'
    },
    sampleChapter: {
      title: 'Chapter 4: The Cyber Shield',
      introduction: 'Your digital footprint is permanent. Learning to navigate online interactions is as important as wearing a seatbelt.',
      subsections: [
        {
          title: 'The Permanent Ink of the Internet',
          content: 'Whatever is shared online—messages, photos, or comments—is written in digital permanent ink. Even if deleted, copies or screenshots can remain. Before sending, ask: Would I want my grandparents, teachers, and future employer to see this?'
        },
        {
          title: 'Recognizing Cyber-bullying',
          content: 'Cyber-bullying takes many forms: excluding others from chat groups, spreading rumors online, or posting mean comments. If you see it, do not participate. Screenshot the evidence, block the sender, and report to a trusted adult immediately.'
        }
      ],
      activity: {
        title: 'Classroom Activity: Footprint Auditing',
        instructions: [
          'Create a hypothetical social media profile on paper with several posts.',
          'Ask students to audit the profile and label posts as "Green Light" (safe/positive), "Yellow Light" (questionable), or "Red Light" (dangerous/harmful).',
          'Debrief on how minor details can affect reputation and safety.'
        ]
      }
    }
  },
  {
    id: 'book-3',
    title: 'AI, Ethics & Me',
    category: 'ct-ai',
    grades: 'Grades 6 - 9',
    description: 'Demystifying neural networks, generative AI, algorithmic bias, and prompt engineering with an ethical lens.',
    coverStyle: {
      bg: 'from-violet-950 to-indigo-950',
      text: 'text-white',
      accent: 'border-yellow-400 text-yellow-400'
    },
    sampleChapter: {
      title: 'Chapter 3: The Ghost in the Data (Algorithmic Bias)',
      introduction: 'AI algorithms learn from historical human data. If the data is biased, the AI becomes a mirror that multiplies our flaws.',
      subsections: [
        {
          title: 'How AI Learns to Discriminate',
          content: 'Imagine training an AI to select the best astronauts, but you only show it photos of past astronauts, who were predominantly men. The AI will mistakenly learn that being male is a requirement for being an astronaut. This is algorithmic bias.'
        },
        {
          title: 'The Ethics of Prompting',
          content: 'Generative AI is a co-creator, not an absolute source of truth. Responsible prompt engineering involves checking sources, validating facts, and never using AI to generate misleading information or plagiarize work.'
        }
      ],
      activity: {
        title: 'Classroom Activity: Audit the Algorithm',
        instructions: [
          'Divide students into groups and give them a hypothetical AI hiring tool scenario.',
          'Have them search for hidden bias parameters (e.g., scoring candidates lower if they live further away).',
          'Discuss how to retrain the AI with representative, balanced data.'
        ]
      }
    }
  },
  {
    id: 'book-4',
    title: 'The Space Age and Humanoids',
    category: 'future-ready',
    grades: 'Grades 5 - 8',
    description: 'Exploring space settlement, humanoid robots, quantum concepts, and the careers of tomorrow.',
    coverStyle: {
      bg: 'from-indigo-950 to-black',
      text: 'text-white',
      accent: 'border-amber-400 text-amber-400'
    },
    sampleChapter: {
      title: 'Chapter 5: Humanoids in Our Homes',
      introduction: 'As robotic technology matches human capabilities, the core question is not what robots can do, but how we coexist.',
      subsections: [
        {
          title: 'The Rise of Embodied AI',
          content: 'Unlike software, humanoid robots possess physical presence. They can navigate our homes, cook meals, and assist elderly grandparents. But who is responsible when a robot makes a mistake? Ethical robotics requires clear safety overrides.'
        },
        {
          title: 'The Human Edge',
          content: 'As robots take over manual tasks, humans must focus on what machines lack: genuine emotional intelligence, philosophical reasoning, creative problem solving, and moral judgment.'
        }
      ],
      activity: {
        title: 'Classroom Activity: Design a Robot Bill of Rights',
        instructions: [
          'Students brainstorm rules for robot behavior in a family home.',
          'Draft a contract between the robot owner, the manufacturer, and the robot.',
          'Discuss scenarios: e.g., if a robot is asked to do something unethical, how should its software respond?'
        ]
      }
    }
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'w-1',
    title: 'Digital Safety & Cyber Resilience',
    audience: 'student',
    duration: '2 Hours (Interactive)',
    description: 'Empowering students to spot phishing, stand up to cyber-bullying, regulate screen time, and build a positive digital reputation.',
    outcomes: [
      'Understand the permanency of a digital footprint',
      'Learn standard defense tactics against cyber-bullying',
      'Establish personal boundaries for healthy screen habits',
      'Identify fake news and online stranger danger'
    ],
    image: 'students'
  },
  {
    id: 'w-2',
    title: 'Pedagogy in the Age of Generative AI',
    audience: 'teacher',
    duration: 'Full Day / Half Day sessions',
    description: 'Helping teachers embrace AI tools to reduce grading workloads while maintaining authentic assessments and building tech-ethics in classrooms.',
    outcomes: [
      'Learn to use AI to draft personalized lesson plans in minutes',
      'Design assessments that AI cannot simply copy-paste',
      'Understand ethical frameworks of teaching with AI',
      'Implement Valuez SEL modules during standard home-room hours'
    ],
    image: 'teachers'
  },
  {
    id: 'w-3',
    title: 'Parenting in a Screen-Saturated World',
    audience: 'parent',
    duration: '90 Minutes (Online / Offline)',
    description: 'Equipping parents with practical strategies to establish digital wellness at home, bridge the tech gap, and co-create boundaries with children.',
    outcomes: [
      'Create a digital-use contract that kids actually agree to',
      'Set parental controls without damaging trust',
      'Spot signs of screen addiction, cyber-stress, or isolation',
      'Incorporate India-rooted value discussions at the dinner table'
    ],
    image: 'parents'
  }
];

export const RESOURCES: Resource[] = [
  {
    id: 'res-1',
    title: 'The Principal\'s Guide to NEP 2020 & Value-Based Education',
    category: 'download',
    topic: 'NEP Compliance',
    summary: 'A detailed manual showing how Valuez School maps directly to NEP 2020 mandates on SEL, moral education, and digital literacy.',
    readTimeOrSize: 'PDF - 4.2 MB',
    downloadUrl: '#'
  },
  {
    id: 'res-2',
    title: 'Sample Bulletin: Humanoids and Moral Choices',
    category: 'bulletin',
    topic: 'Future Ready Program',
    summary: 'A classroom bulletin exploring self-driving car dilemmas and prompt engineering checks designed for Grade 7.',
    readTimeOrSize: '5 min read',
    downloadUrl: '#'
  },
  {
    id: 'res-3',
    title: 'Module 1: Safe vs Unsafe Touch Classroom Guide',
    category: 'module',
    topic: 'Child Safety',
    summary: 'A lesson plan with scripts, illustrations, and roleplay prompts to introduce body boundaries to Grades 1 and 2.',
    readTimeOrSize: 'PDF - 1.8 MB',
    downloadUrl: '#'
  },
  {
    id: 'res-4',
    title: 'How Screen Time Alters Empathy in Developing Minds',
    category: 'article',
    topic: 'Digital Wellness',
    summary: 'A research-backed article examining screen addiction neuroscience and how schools can counteract it with active empathy drills.',
    readTimeOrSize: '8 min read',
    downloadUrl: '#'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Valuez School solved our biggest post-pandemic headache: screen addiction and peer conflicts. It is structured, easy for teachers to deliver, and has made our school a kinder place.',
    author: 'Dr. Anjali Sen',
    designation: 'Principal',
    school: 'Gyan Mandir Global School, New Delhi',
    avatar: 'AS'
  },
  {
    id: 'test-2',
    quote: 'Our parents are thrilled with the Techies with Ethics program. We are not just teaching kids how to write code; we are teaching them why character determines how coding is used.',
    author: 'Rajesh Nair',
    designation: 'Academic Director',
    school: 'Silver Oak International School, Bangalore',
    avatar: 'RN'
  },
  {
    id: 'test-3',
    quote: 'The child safety modules on body boundaries and digital safety are age-appropriate and outstanding. It has helped us fulfill government safety mandates effortlessly.',
    author: 'Sister Mary Joseph',
    designation: 'Principal',
    school: 'St. Teresa Academy, Mumbai',
    avatar: 'MJ'
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'How does Valuez School integrate into our busy school timetable?',
    answer: 'Valuez is designed to be highly flexible. It can be run as a standalone 40-minute weekly class, integrated into existing Value Education / Moral Science hours, or delivered through class teacher home-room periods using our structured lesson slides.'
  },
  {
    question: 'Does this program increase teacher workload?',
    answer: 'Not at all. We provide fully prepared slides, reflection journals, evaluation checklists, and comprehensive teacher guides. Teachers do not need prior prep; they simply open our platform and facilitate the pre-designed session.'
  },
  {
    question: 'Is the curriculum aligned with national boards like CBSE, ICSE, and NEP 2020?',
    answer: 'Yes, absolutely. Valuez School is explicitly aligned with the NEP 2020 National Curriculum Framework (NCF) guidelines on Social Emotional Learning (SEL), Cyber Safety guidelines, and Computational Thinking mandates.'
  },
  {
    question: 'What grades are covered by the program?',
    answer: 'Our curriculum spans 10 grades: from Kindergarten (K) up to Grade 8, with age-appropriate progression in values, SEL, safety, and emerging technology concepts.'
  },
  {
    question: 'How do we track the school\'s behavioral impact?',
    answer: 'We provide annual behavioral reflection journals for students, along with structured assessment templates for teachers and visual progress reports to share with parents during PTMs.'
  }
];
