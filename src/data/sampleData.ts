// Sample data for the Smart Education Website

export const newsData = [
  {
    id: 1,
    title: "JEE Main 2024 Registration Opens",
    summary: "NTA announces JEE Main 2024 registration dates. Students can apply online from November 1st.",
    date: "2024-01-15",
    category: "JEE",
    image: "/api/placeholder/400/200"
  },
  {
    id: 2,
    title: "GATE 2024 Results Declared",
    summary: "Indian Institute of Science (IISc) releases GATE 2024 results. Check your score now.",
    date: "2024-01-10",
    category: "GATE",
    image: "/api/placeholder/400/200"
  },
  {
    id: 3,
    title: "New CAT Pattern Announced",
    summary: "IIMs announce significant changes in CAT 2024 pattern and syllabus.",
    date: "2024-01-08",
    category: "CAT",
    image: "/api/placeholder/400/200"
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
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Time Management Strategies for GATE Preparation",
    excerpt: "Learn how to optimize your study schedule and manage time effectively during GATE preparation.",
    author: "Prof. Rajesh Kumar",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "GATE",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Mental Health During Exam Preparation",
    excerpt: "Maintaining psychological well-being while preparing for competitive exams is crucial for success.",
    author: "Dr. Priya Sharma",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Wellness",
    image: "/api/placeholder/400/250"
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