// Sample data for the Smart Education Website

import newsJeeImg from "@/assets/news-jee.jpg";
import newsGateImg from "@/assets/news-gate.jpg";
import newsCatImg from "@/assets/news-cat.jpg";
import blogStudyImg from "@/assets/blog-study-tips.jpg";
import blogTimeImg from "@/assets/blog-time-management.jpg";
import blogMentalImg from "@/assets/blog-mental-health.jpg";
import blogTechImg from "@/assets/tech.jpg";
import blogSuccessImg from "@/assets/blogSuccessImg.png";
import blogPomodoroImg from "@/assets/blogPomodoroImg.png";
import blogGateImg from "@/assets/blogGateImg.png";
import blogMindfulnessImg from "@/assets/blogMindfulnessImg.png";
import blogAIImg from "@/assets/blogAIImg.png";
import blogJourneyImg from "@/assets/blogJourneyImg.png";



export const newsData = [
  {
    id: 1,
    title: "JEE Main 2024 Registration Opens",
    summary: "NTA announces JEE Main 2024 registration dates. Students can apply online from November 1st.",
    date: "2024-01-15",
    category: "JEE",
    image: newsJeeImg
  },
  {
    id: 2,
    title: "GATE 2024 Results Declared",
    summary: "Indian Institute of Science (IISc) releases GATE 2024 results. Check your score now.",
    date: "2024-01-10",
    category: "GATE",
    image: newsGateImg
  },
  {
    id: 3,
    title: "New CAT Pattern Announced",
    summary: "IIMs announce significant changes in CAT 2024 pattern and syllabus.",
    date: "2024-01-08",
    category: "CAT",
    image: newsCatImg
  }
];
export const blogData = [
  {
    id: 1,
    title: "10 Effective Study Techniques for Competitive Exams",
    excerpt: "Discover proven study methods that can dramatically improve your exam performance and retention rates.",
    content: "Here is a detailed article about 10 effective study techniques. Use spaced repetition, active recall, and practice tests to maximize your retention. Stay organized and take regular breaks for best results. Understanding your learning style is crucial for selecting the right techniques. Create a study environment that minimizes distractions and enhances focus. Combine multiple techniques for better results and long-term retention. Track your progress regularly to identify areas needing improvement. Remember that consistency matters more than intensive cramming sessions.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Study Tips",
    image: blogStudyImg
  },
  {
    id: 2,
    title: "Time Management Strategies for GATE Preparation",
    excerpt: "Learn how to optimize your study schedule and manage time effectively during GATE preparation.",
    content: "This article covers time management tips for GATE. Prioritize topics, set realistic goals, and use a planner. Regular revision and mock tests are key to success. Break down your syllabus into manageable weekly targets to avoid overwhelming yourself. Allocate more time to challenging subjects while maintaining touch with easier topics. Use time-blocking techniques to dedicate specific hours to different subjects. Analyze your mock test performance to optimize your study schedule accordingly. Leave buffer time for unexpected challenges and additional revision needs. Balance preparation with adequate rest to maintain peak cognitive performance.",
    author: "Prof. Rajesh Kumar",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "GATE",
    image: blogTimeImg
  },
  {
    id: 3,
    title: "Mental Health During Exam Preparation",
    excerpt: "Maintaining psychological well-being while preparing for competitive exams is crucial for success.",
    content: "Maintaining mental health is crucial. Practice mindfulness, take breaks, and seek support when needed. Balance your studies with relaxation and hobbies. Recognize early signs of burnout such as fatigue, irritability, and declining motivation. Establish a support network of friends, family, and peers who understand your journey. Exercise regularly to release endorphins and reduce stress hormones naturally. Get adequate sleep as it's essential for memory consolidation and cognitive function. Don't hesitate to consult mental health professionals if anxiety becomes overwhelming. Remember that your well-being is more important than any exam result.",
    author: "Dr. Priya Sharma",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Wellness",
    image: blogMentalImg
  },
  {
    id: 4,
    title: "Latest EdTech Innovations in 2025",
    excerpt: "Explore how technology is transforming education and exam prep.",
    content: "Explore how technology is transforming education and exam prep. From AI tutors to adaptive learning platforms, technology is making learning more personalized and effective. Virtual reality classrooms are creating immersive learning experiences for complex concepts. Gamification elements are increasing student engagement and making learning more enjoyable. Data analytics help educators identify student weaknesses and customize interventions accordingly. Blockchain technology is being used to verify credentials and create portable learning records. Mobile learning apps enable students to study anytime, anywhere at their convenience. The integration of IoT devices is creating smart classrooms with enhanced interactive capabilities.",
    author: "Amit Verma",
    date: "2024-02-01",
    readTime: "5 min read",
    category: "Technology",
    image: blogTechImg
  },
  {
    id: 5,
    title: "From Failure to GATE Topper: The Story of Neha Singh",
    excerpt: "After two failed attempts, Neha cracked GATE 2024 with AIR 58. Read how persistence changed her journey.",
    content: "After facing setbacks in two attempts, Neha's journey to becoming a GATE topper is truly inspiring. She restructured her approach, focused on fundamentals, and maintained consistency in her preparation. Her story teaches us that failure is not the end, but a stepping stone to success. Neha analyzed her previous mistakes and identified knowledge gaps systematically. She joined a study group which provided motivation and accountability throughout her journey. Regular self-assessment through mock tests helped her track improvement and build confidence. She developed a positive mindset by celebrating small wins and learning from setbacks. Her dedication to understanding concepts deeply rather than rote memorization paid off. Neha's transformation shows that perseverance and smart work can overcome initial failures.",
    author: "Editorial Team",
    date: "2024-01-05",
    readTime: "5 min read",
    category: "Success Stories",
    image: blogSuccessImg
  },
  {
    id: 6,
    title: "Pomodoro Technique: Boost Focus in 25-Minute Intervals",
    excerpt: "A time-tested productivity method that helps students maintain focus and avoid burnout during long study hours.",
    content: "The Pomodoro Technique is a time management method that uses a timer to break work into focused 25-minute intervals, separated by short breaks. This approach helps maintain high levels of focus while preventing mental fatigue. Learn how to implement this technique effectively in your study routine. Choose a single task to focus on during each Pomodoro session. After four Pomodoros, take a longer break of 15-30 minutes to recharge. Eliminate all distractions including phone notifications during your focused intervals. Track completed Pomodoros to measure productivity and identify peak performance times. Adjust interval lengths based on your personal focus capacity and subject complexity. The technique works best when combined with proper planning and task prioritization.",
    author: "Ritika Patel",
    date: "2024-01-04",
    readTime: "6 min read",
    category: "Study Tips",
    image: blogPomodoroImg
  },
  {
    id: 7,
    title: "GATE 2025 Syllabus Simplified: Key Changes & Topics to Focus",
    excerpt: "A breakdown of the latest syllabus changes for GATE 2025, including high-weightage subjects and expert tips.",
    content: "A comprehensive analysis of the GATE 2025 syllabus changes. We break down the high-weightage topics, highlight new additions, and provide strategic advice for preparation. Special focus on updated sections and recommended study resources. New emphasis on application-based questions requires deeper conceptual understanding rather than memorization. Data structures and algorithms now carry increased weightage in computer science papers. Environmental engineering topics have been updated to reflect current sustainability challenges. Machine learning fundamentals have been added to several engineering streams. The exam pattern now includes more multi-select questions testing comprehensive knowledge. Updated reference materials and standard textbooks are recommended for thorough coverage.",
    author: "Prof. Manish Tiwari",
    date: "2024-01-03",
    readTime: "8 min read",
    category: "GATE",
    image: blogGateImg
  },
  {
    id: 8,
    title: "Mindfulness Techniques to Beat Exam Anxiety",
    excerpt: "Learn practical breathing and mindfulness exercises to stay calm and confident before and during exams.",
    content: "Discover practical mindfulness exercises designed specifically for students. Learn breathing techniques, meditation practices, and stress-management strategies that can help you stay calm and focused during exam preparation and on the big day. Practice the 4-7-8 breathing technique to activate your parasympathetic nervous system instantly. Body scan meditation helps identify and release physical tension caused by stress. Mindful walking breaks can refresh your mind between intense study sessions. Visualization exercises build confidence by mentally rehearsing successful exam performance. Keep a gratitude journal to maintain perspective and positive mental state. Progressive muscle relaxation techniques reduce physical symptoms of anxiety effectively.",
    author: "Dr. Aisha Khan",
    date: "2024-01-02",
    readTime: "7 min read",
    category: "Wellness",
    image: blogMindfulnessImg
  },
  {
    id: 9,
    title: "AI in Education: How Smart Systems Personalize Learning",
    excerpt: "Artificial Intelligence is reshaping education by offering customized learning paths and real-time feedback.",
    content: "An in-depth look at how AI is revolutionizing education. From adaptive learning algorithms to intelligent tutoring systems, explore how technology is creating personalized learning experiences. Real-world examples and future trends in educational technology. AI-powered assessment tools provide instant feedback and identify learning gaps accurately. Natural language processing enables conversational interfaces for doubt resolution anytime. Predictive analytics help forecast student performance and suggest intervention strategies early. Personalized content recommendations ensure students focus on relevant materials for their level. Automated grading systems free up educators to focus on mentoring and guidance. Ethical considerations around data privacy and algorithmic bias remain important challenges.",
    author: "Rahul Mehta",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "Technology",
    image: blogAIImg
  },
  {
    id: 10,
    title: "The Journey of a Self-Taught Programmer Who Landed at Google",
    excerpt: "A small-town student shares how consistent practice, open-source contributions, and coding contests led to success.",
    content: "An inspiring story of determination and self-learning. Follow the journey from writing the first line of code to clearing Google's technical interviews. Includes practical advice on self-study, project building, and interview preparation. Started with free online resources like freeCodeCamp and gradually progressed to advanced topics. Built a portfolio of diverse projects demonstrating problem-solving skills and technical proficiency. Contributed to open-source projects to gain real-world development experience and community recognition. Practiced data structures and algorithms daily on platforms like LeetCode and HackerRank. Networked with professionals through tech meetups and online communities for mentorship. The key was maintaining consistent daily practice and never giving up despite initial rejections.",
    author: "Team LearnWise",
    date: "2023-12-30",
    readTime: "9 min read",
    category: "Success Stories",
    image: blogJourneyImg
  }
];

export const gateData = {
  studyMaterial: [
    {
      id: 1,
      title: "Engineering Mathematics",
      description: "Complete study material covering Linear Algebra, Calculus, and Differential Equations",
      type: "PDF",
      size: "12.5 MB",
      lessons: 45,
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Computer Science Fundamentals",
      description: "Data Structures, Algorithms, Computer Networks, and Operating Systems",
      type: "Video Series",
      duration: "24 hours",
      lessons: 120,
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Database Management Systems",
      description: "SQL, NoSQL, Transaction Management, and Query Optimization",
      type: "PDF + Practice",
      size: "8.2 MB",
      lessons: 28,
      downloadUrl: "#"
    }
  ],
  
  previousPapers: [
    {
      id: 1,
      year: 2023,
      title: "GATE CS 2023 - Set 1",
      questions: 65,
      marks: 100,
      duration: "3 hours",
      downloadUrl: "#"
    },
    {
      id: 2,
      year: 2023,
      title: "GATE CS 2023 - Set 2",
      questions: 65,
      marks: 100,
      duration: "3 hours",
      downloadUrl: "#"
    },
    {
      id: 3,
      year: 2022,
      title: "GATE CS 2022 - Set 1",
      questions: 65,
      marks: 100,
      duration: "3 hours",
      downloadUrl: "#"
    },
    {
      id: 4,
      year: 2022,
      title: "GATE CS 2022 - Set 2",
      questions: 65,
      marks: 100,
      duration: "3 hours",
      downloadUrl: "#"
    }
  ],
  
  updates: [
    {
      id: 1,
      title: "GATE 2025 Notification Released",
      date: "2024-01-15",
      type: "Important",
      content: "IIT Roorkee releases official notification for GATE 2025. Registration starts from August 2024."
    },
    {
      id: 2,
      title: "New Syllabus Changes for CS",
      date: "2024-01-10",
      type: "Update",
      content: "Minor updates in Computer Science syllabus. Machine Learning topics added to the curriculum."
    },
    {
      id: 3,
      title: "Mock Test Series Available",
      date: "2024-01-08",
      type: "Announcement",
      content: "Free mock test series for GATE 2025 is now available. Attempt unlimited practice tests."
    }
  ],
  
  syllabus: {
    "Engineering Mathematics": [
      "Linear Algebra",
      "Calculus",
      "Differential Equations",
      "Complex Variables",
      "Probability and Statistics",
      "Numerical Methods"
    ],
    "Digital Logic": [
      "Boolean Algebra",
      "Combinational Circuits",
      "Sequential Circuits",
      "Number Representations"
    ],
    "Computer Organization": [
      "Machine Instructions",
      "Addressing Modes",
      "ALU and Control Unit",
      "Memory Hierarchy",
      "I/O Interface"
    ],
    "Programming and Data Structures": [
      "C Programming",
      "Arrays and Pointers",
      "Functions and Recursion",
      "Data Structures",
      "Algorithms"
    ],
    "Algorithms": [
      "Asymptotic Analysis",
      "Sorting and Searching",
      "Graph Algorithms",
      "Dynamic Programming",
      "Greedy Algorithms"
    ],
    "Theory of Computation": [
      "Regular Languages",
      "Context-Free Languages",
      "Turing Machines",
      "Undecidability"
    ]
  }
};

export const quizQuestions: {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  subject: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic?: string;
}[] = [
  {
    id: 1,
    question: "What is the time complexity of binary search in a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: 1,
    explanation: "Binary search divides the search space in half at each step, resulting in O(log n) time complexity.",
    subject: "Algorithms",
    difficulty: "Easy",
    topic: "Searching"
  },
  {
    id: 2,
    question: "Which data structure uses LIFO (Last In First Out) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: 1,
    explanation: "Stack follows LIFO principle where the last element inserted is the first one to be removed.",
    subject: "Data Structures",
    difficulty: "Easy",
    topic: "Stacks"
  },
  {
    id: 3,
    question: "In a binary tree, what is the maximum number of nodes at level k?",
    options: ["2^k", "2^(k-1)", "2^(k+1)", "k^2"],
    correctAnswer: 0,
    explanation: "At level k in a binary tree, there can be at most 2^k nodes (considering root at level 0).",
    subject: "Data Structures",
    difficulty: "Medium",
    topic: "Trees"
  },
  {
    id: 4,
    question: "Which sorting algorithm has the best average case time complexity?",
    options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
    correctAnswer: 2,
    explanation: "Merge Sort has O(n log n) time complexity in all cases (best, average, and worst).",
    subject: "Algorithms",
    difficulty: "Medium",
    topic: "Sorting"
  },
  {
    id: 5,
    question: "What is the space complexity of the recursive fibonacci function?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: 1,
    explanation: "The recursive fibonacci function has O(n) space complexity due to the recursion call stack.",
    subject: "Algorithms",
    difficulty: "Hard",
    topic: "Recursion"
  },
  {
    id: 6,
    question: "Which data structure is best for implementing a priority queue?",
    options: ["Stack", "Queue", "Heap", "Deque"],
    correctAnswer: 2,
    explanation: "Heaps provide efficient insertion and extraction of the highest (or lowest) priority element.",
    subject: "Data Structures",
    difficulty: "Easy",
    topic: "Heaps"
  },
  {
    id: 7,
    question: "Dijkstra's algorithm cannot handle which type of edges?",
    options: ["Positive weighted edges", "Zero weighted edges", "Negative weighted edges", "All of the above"],
    correctAnswer: 2,
    explanation: "Dijkstra's algorithm assumes non-negative edge weights to guarantee optimality.",
    subject: "Algorithms",
    difficulty: "Medium",
    topic: "Graphs"
  },
  {
    id: 8,
    question: "Which traversal of a BST yields a sorted sequence?",
    options: ["Preorder", "Inorder", "Postorder", "Level order"],
    correctAnswer: 1,
    explanation: "Inorder traversal of a BST visits nodes in non-decreasing key order.",
    subject: "Data Structures",
    difficulty: "Hard",
    topic: "BST"
  },
  {
    id: 9,
    question: "What is the master theorem case for T(n) = 2T(n/2) + n?",
    options: ["Case 1: n^{log_b a - ε}", "Case 2: n^{log_b a} log^k n", "Case 3: n^{log_b a + ε}", "Not applicable"],
    correctAnswer: 1,
    explanation: "Here a=2, b=2 so n^{log_b a} = n; f(n) = n so Case 2 applies, yielding T(n)=Θ(n log n).",
    subject: "Algorithms",
    difficulty: "Hard",
    topic: "Recurrences"
  }
];

export const examOptions = [
  {
    id: "jee",
    name: "JEE",
    fullName: "Joint Entrance Examination",
    description: "Engineering entrance exam for IITs, NITs, and other technical institutes",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    icon: "🔬",
    status: "available"
  },
  {
    id: "gate",
    name: "GATE",
    fullName: "Graduate Aptitude Test in Engineering",
    description: "All India examination for M.Tech admissions and PSU recruitments",
    subjects: ["Engineering Mathematics", "Technical Subjects", "General Aptitude"],
    icon: "⚙️",
    status: "available"
  },
  {
    id: "cat",
    name: "CAT",
    fullName: "Common Admission Test",
    description: "MBA entrance exam for IIMs and other business schools",
    subjects: ["Quantitative Ability", "Verbal Ability", "Data Interpretation"],
    icon: "📊",
    status: "available"
  },
  {
    id: "neet",
    name: "NEET",
    fullName: "National Eligibility cum Entrance Test",
    description: "Medical entrance exam for MBBS and BDS courses",
    subjects: ["Physics", "Chemistry", "Biology"],
    icon: "🏥",
    status: "available"
  },
  {
    id: "upsc",
    name: "UPSC",
    fullName: "Union Public Service Commission",
    description: "Civil services examination for IAS, IPS, and other services",
    subjects: ["General Studies", "Optional Subject", "Essay"],
    icon: "🏛️",
    status: "available"
  },
  {
    id: "other",
    name: "Other",
    fullName: "Other Competitive Exams",
    description: "Various state and national level competitive examinations",
    subjects: ["Varies by Exam"],
    icon: "📚",
    status: "available"
  }
];

// JEE Data
export const jeeData = {
  studyMaterial: [
    {
      id: 1,
      title: "Physics Complete Guide",
      description: "Mechanics, Thermodynamics, Optics, and Modern Physics with solved examples",
      type: "PDF",
      size: "15.2 MB",
      lessons: 52,
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Chemistry Master Class",
      description: "Physical, Organic, and Inorganic Chemistry with practice problems",
      type: "Video Series",
      duration: "30 hours",
      lessons: 145,
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Mathematics Problem Solving",
      description: "Calculus, Algebra, Trigonometry, and Coordinate Geometry",
      type: "PDF + Practice",
      size: "12.8 MB",
      lessons: 65,
      downloadUrl: "#"
    }
  ],
  previousPapers: [
    { id: 1, year: 2023, title: "JEE Main 2023 - Session 1", questions: 90, marks: 300, duration: "3 hours", downloadUrl: "#" },
    { id: 2, year: 2023, title: "JEE Main 2023 - Session 2", questions: 90, marks: 300, duration: "3 hours", downloadUrl: "#" },
    { id: 3, year: 2022, title: "JEE Main 2022 - Session 1", questions: 90, marks: 300, duration: "3 hours", downloadUrl: "#" },
    { id: 4, year: 2022, title: "JEE Advanced 2022", questions: 54, marks: 306, duration: "3 hours", downloadUrl: "#" }
  ],
  updates: [
    { id: 1, title: "JEE Main 2025 Dates Announced", date: "2024-01-15", type: "Important", content: "NTA releases JEE Main 2025 schedule. First session in January, second in April." },
    { id: 2, title: "New Exam Pattern Updates", date: "2024-01-10", type: "Update", content: "Changes in numerical value questions distribution across all three subjects." },
    { id: 3, title: "Free Mock Tests Available", date: "2024-01-08", type: "Announcement", content: "Practice with full-length JEE Main and Advanced mock tests." }
  ],
  syllabus: {
    "Physics": ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics", "Waves"],
    "Chemistry": ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Chemical Bonding", "Periodic Table"],
    "Mathematics": ["Algebra", "Calculus", "Trigonometry", "Coordinate Geometry", "Vectors", "Probability"]
  }
};

// CAT Data
export const catData = {
  studyMaterial: [
    {
      id: 1,
      title: "Quantitative Aptitude",
      description: "Number Systems, Algebra, Geometry, and Modern Math concepts",
      type: "PDF",
      size: "10.5 MB",
      lessons: 38,
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Verbal Ability & Reading Comprehension",
      description: "Grammar, Vocabulary, RC passages, and Para Jumbles",
      type: "Video Series",
      duration: "20 hours",
      lessons: 95,
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Data Interpretation & Logical Reasoning",
      description: "Tables, Graphs, Puzzles, and Logical sets",
      type: "PDF + Practice",
      size: "9.2 MB",
      lessons: 42,
      downloadUrl: "#"
    }
  ],
  previousPapers: [
    { id: 1, year: 2023, title: "CAT 2023", questions: 66, marks: 198, duration: "2 hours", downloadUrl: "#" },
    { id: 2, year: 2022, title: "CAT 2022", questions: 66, marks: 198, duration: "2 hours", downloadUrl: "#" },
    { id: 3, year: 2021, title: "CAT 2021", questions: 66, marks: 198, duration: "2 hours", downloadUrl: "#" },
    { id: 4, year: 2020, title: "CAT 2020", questions: 76, marks: 228, duration: "2 hours", downloadUrl: "#" }
  ],
  updates: [
    { id: 1, title: "CAT 2025 Registration Opens", date: "2024-01-15", type: "Important", content: "IIM Bangalore announces CAT 2025. Registration starts from August 2024." },
    { id: 2, title: "Pattern Changes Announced", date: "2024-01-10", type: "Update", content: "New sectional time limits and question distribution for CAT 2025." },
    { id: 3, title: "Mock Test Series Launch", date: "2024-01-08", type: "Announcement", content: "Official CAT mock tests available on the IIM website." }
  ],
  syllabus: {
    "Quantitative Aptitude": ["Arithmetic", "Algebra", "Geometry", "Number Systems", "Modern Math"],
    "Verbal Ability": ["Reading Comprehension", "Para Jumbles", "Para Summary", "Grammar", "Vocabulary"],
    "Data Interpretation": ["Tables", "Charts", "Graphs", "Caselets", "Data Sufficiency"],
    "Logical Reasoning": ["Arrangements", "Puzzles", "Blood Relations", "Syllogisms", "Coding-Decoding"]
  }
};

// NEET Data
export const neetData = {
  studyMaterial: [
    {
      id: 1,
      title: "Physics for Medical Entrance",
      description: "Mechanics, Electricity, Magnetism, Optics, and Modern Physics",
      type: "PDF",
      size: "13.8 MB",
      lessons: 45,
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Chemistry Complete Course",
      description: "Physical, Organic, and Inorganic Chemistry for NEET",
      type: "Video Series",
      duration: "28 hours",
      lessons: 130,
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Biology - Botany & Zoology",
      description: "Complete NCERT coverage with additional concepts and diagrams",
      type: "PDF + Practice",
      size: "18.5 MB",
      lessons: 85,
      downloadUrl: "#"
    }
  ],
  previousPapers: [
    { id: 1, year: 2023, title: "NEET 2023", questions: 200, marks: 720, duration: "3 hours 20 min", downloadUrl: "#" },
    { id: 2, year: 2022, title: "NEET 2022", questions: 200, marks: 720, duration: "3 hours 20 min", downloadUrl: "#" },
    { id: 3, year: 2021, title: "NEET 2021", questions: 200, marks: 720, duration: "3 hours 20 min", downloadUrl: "#" },
    { id: 4, year: 2020, title: "NEET 2020", questions: 180, marks: 720, duration: "3 hours", downloadUrl: "#" }
  ],
  updates: [
    { id: 1, title: "NEET 2025 Notification Released", date: "2024-01-15", type: "Important", content: "NTA announces NEET UG 2025. Exam scheduled for May 2025." },
    { id: 2, title: "Syllabus Clarification", date: "2024-01-10", type: "Update", content: "Official clarification on NCERT-based syllabus for NEET 2025." },
    { id: 3, title: "Practice Papers Available", date: "2024-01-08", type: "Announcement", content: "Free NEET practice papers and topic-wise tests now available." }
  ],
  syllabus: {
    "Physics": ["Mechanics", "Thermodynamics", "Electrodynamics", "Optics", "Modern Physics", "SHM & Waves"],
    "Chemistry": ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Environmental Chemistry"],
    "Botany": ["Plant Physiology", "Genetics", "Ecology", "Reproduction", "Cell Biology"],
    "Zoology": ["Human Physiology", "Evolution", "Biotechnology", "Diversity", "Reproduction"]
  }
};

// UPSC Data
export const upscData = {
  studyMaterial: [
    {
      id: 1,
      title: "General Studies Paper I",
      description: "Indian Heritage, History, Geography, and Society",
      type: "PDF",
      size: "22.5 MB",
      lessons: 95,
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "General Studies Paper II",
      description: "Governance, Constitution, Polity, Social Justice",
      type: "Video Series",
      duration: "45 hours",
      lessons: 180,
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Current Affairs & News Analysis",
      description: "Monthly compilations, editorials, and PIB analysis",
      type: "PDF + Practice",
      size: "15.8 MB",
      lessons: 120,
      downloadUrl: "#"
    }
  ],
  previousPapers: [
    { id: 1, year: 2023, title: "UPSC Prelims 2023 - GS Paper I", questions: 100, marks: 200, duration: "2 hours", downloadUrl: "#" },
    { id: 2, year: 2023, title: "UPSC Prelims 2023 - CSAT", questions: 80, marks: 200, duration: "2 hours", downloadUrl: "#" },
    { id: 3, year: 2022, title: "UPSC Prelims 2022 - GS Paper I", questions: 100, marks: 200, duration: "2 hours", downloadUrl: "#" },
    { id: 4, year: 2022, title: "UPSC Mains 2022 - Essay", questions: 2, marks: 250, duration: "3 hours", downloadUrl: "#" }
  ],
  updates: [
    { id: 1, title: "UPSC CSE 2025 Calendar Released", date: "2024-01-15", type: "Important", content: "UPSC announces Civil Services Examination 2025 schedule. Prelims in May." },
    { id: 2, title: "New Optional Subjects Added", date: "2024-01-10", type: "Update", content: "UPSC adds new optional subjects for Mains examination." },
    { id: 3, title: "Interview Guidance Program", date: "2024-01-08", type: "Announcement", content: "Free personality test and interview preparation resources available." }
  ],
  syllabus: {
    "History": ["Ancient India", "Medieval India", "Modern India", "Art & Culture", "World History"],
    "Geography": ["Physical Geography", "Indian Geography", "World Geography", "Environment & Ecology"],
    "Polity": ["Constitution", "Governance", "Social Justice", "International Relations"],
    "Economy": ["Indian Economy", "Economic Development", "Budget", "Banking & Finance"],
    "Science & Technology": ["Current Developments", "Space", "IT", "Biotechnology"],
    "Current Affairs": ["National Issues", "International Events", "Government Schemes", "Reports & Indices"]
  }
};