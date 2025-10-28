// Sample data for the Smart Education Website

import newsJeeImg from "@/assets/news-jee.jpg";
import newsGateImg from "@/assets/news-gate.jpg";
import newsCatImg from "@/assets/news-cat.jpg";
import blogStudyImg from "@/assets/blog-study-tips.jpg";
import blogTimeImg from "@/assets/blog-time-management.jpg";
import blogMentalImg from "@/assets/blog-mental-health.jpg";

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
    author: "Dr. Priya Sharma",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Wellness",
    image: blogMentalImg
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

export const quizQuestions = [
  {
    id: 1,
    question: "What is the time complexity of binary search in a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: 1,
    explanation: "Binary search divides the search space in half at each step, resulting in O(log n) time complexity.",
    subject: "Algorithms",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "Which data structure uses LIFO (Last In First Out) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: 1,
    explanation: "Stack follows LIFO principle where the last element inserted is the first one to be removed.",
    subject: "Data Structures",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "In a binary tree, what is the maximum number of nodes at level k?",
    options: ["2^k", "2^(k-1)", "2^(k+1)", "k^2"],
    correctAnswer: 0,
    explanation: "At level k in a binary tree, there can be at most 2^k nodes (considering root at level 0).",
    subject: "Data Structures",
    difficulty: "Medium"
  },
  {
    id: 4,
    question: "Which sorting algorithm has the best average case time complexity?",
    options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
    correctAnswer: 2,
    explanation: "Merge Sort has O(n log n) time complexity in all cases (best, average, and worst).",
    subject: "Algorithms",
    difficulty: "Medium"
  },
  {
    id: 5,
    question: "What is the space complexity of the recursive fibonacci function?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: 1,
    explanation: "The recursive fibonacci function has O(n) space complexity due to the recursion call stack.",
    subject: "Algorithms",
    difficulty: "Hard"
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