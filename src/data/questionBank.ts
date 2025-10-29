// Modular Question Bank Structure
// Easy to extend with new subjects, topics, and questions

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: Difficulty;
  topic: string;
  subject: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  topics: Topic[];
}

// ==================== SUBJECTS ====================

export const subjects: Subject[] = [
  {
    id: 'algorithms',
    name: 'Algorithms',
    description: 'Algorithm design, analysis, and optimization',
    topics: [
      { id: 'searching', name: 'Searching', description: 'Binary search, linear search' },
      { id: 'sorting', name: 'Sorting', description: 'Merge sort, quick sort, heap sort' },
      { id: 'graphs', name: 'Graph Algorithms', description: 'BFS, DFS, Dijkstra, MST' },
      { id: 'dp', name: 'Dynamic Programming', description: 'Memoization, tabulation' },
      { id: 'greedy', name: 'Greedy Algorithms', description: 'Optimal substructure' },
    ],
  },
  {
    id: 'data-structures',
    name: 'Data Structures',
    description: 'Fundamental data structures and their operations',
    topics: [
      { id: 'arrays', name: 'Arrays & Strings', description: 'Array operations, string manipulation' },
      { id: 'linked-lists', name: 'Linked Lists', description: 'Singly, doubly, circular lists' },
      { id: 'stacks-queues', name: 'Stacks & Queues', description: 'LIFO and FIFO structures' },
      { id: 'trees', name: 'Trees', description: 'Binary trees, BST, AVL, heaps' },
      { id: 'hash-tables', name: 'Hash Tables', description: 'Hashing, collision resolution' },
    ],
  },
  {
    id: 'dbms',
    name: 'Database Management',
    description: 'Database concepts, SQL, normalization',
    topics: [
      { id: 'sql', name: 'SQL Queries', description: 'SELECT, JOIN, subqueries' },
      { id: 'normalization', name: 'Normalization', description: '1NF, 2NF, 3NF, BCNF' },
      { id: 'transactions', name: 'Transactions', description: 'ACID properties, concurrency' },
      { id: 'indexing', name: 'Indexing', description: 'B-trees, B+ trees' },
    ],
  },
  {
    id: 'os',
    name: 'Operating Systems',
    description: 'Process management, memory, file systems',
    topics: [
      { id: 'processes', name: 'Process Management', description: 'Scheduling, synchronization' },
      { id: 'memory', name: 'Memory Management', description: 'Paging, segmentation' },
      { id: 'deadlock', name: 'Deadlock', description: 'Prevention, avoidance, detection' },
      { id: 'file-systems', name: 'File Systems', description: 'Directory structure, allocation' },
    ],
  },
  {
    id: 'networks',
    name: 'Computer Networks',
    description: 'Network protocols, layers, security',
    topics: [
      { id: 'osi-model', name: 'OSI Model', description: '7 layers of networking' },
      { id: 'tcp-ip', name: 'TCP/IP', description: 'Transport and network protocols' },
      { id: 'routing', name: 'Routing', description: 'Routing algorithms and protocols' },
      { id: 'security', name: 'Network Security', description: 'Encryption, firewalls' },
    ],
  },
];

// ==================== QUESTION BANK ====================

export const questionBank: Question[] = [
  // ========== ALGORITHMS - SEARCHING ==========
  {
    id: 1,
    question: "What is the time complexity of binary search in a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: 1,
    explanation: "Binary search divides the search space in half at each step, resulting in O(log n) time complexity.",
    difficulty: "Easy",
    topic: "searching",
    subject: "algorithms",
  },
  {
    id: 2,
    question: "In binary search, what is the worst-case number of comparisons for an array of size n?",
    options: ["n", "log₂(n)", "⌈log₂(n)⌉ + 1", "n/2"],
    correctAnswer: 2,
    explanation: "The worst case requires ⌈log₂(n)⌉ + 1 comparisons, where we keep dividing until we reach a single element.",
    difficulty: "Medium",
    topic: "searching",
    subject: "algorithms",
  },
  {
    id: 3,
    question: "Which searching algorithm is optimal for searching in a rotated sorted array?",
    options: ["Linear search", "Modified binary search", "Jump search", "Exponential search"],
    correctAnswer: 1,
    explanation: "Modified binary search can find the pivot point and then search in the appropriate half, maintaining O(log n) complexity.",
    difficulty: "Hard",
    topic: "searching",
    subject: "algorithms",
  },

  // ========== ALGORITHMS - SORTING ==========
  {
    id: 4,
    question: "Which sorting algorithm has the best average case time complexity?",
    options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
    correctAnswer: 2,
    explanation: "Merge Sort has O(n log n) time complexity in all cases (best, average, and worst).",
    difficulty: "Easy",
    topic: "sorting",
    subject: "algorithms",
  },
  {
    id: 5,
    question: "What is the space complexity of in-place Quick Sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 1,
    explanation: "In-place Quick Sort uses O(log n) space for the recursion stack in the average case.",
    difficulty: "Medium",
    topic: "sorting",
    subject: "algorithms",
  },
  {
    id: 6,
    question: "Which sorting algorithm is stable and has O(n) best-case time complexity?",
    options: ["Quick Sort", "Heap Sort", "Insertion Sort", "Selection Sort"],
    correctAnswer: 2,
    explanation: "Insertion Sort is stable and has O(n) best-case complexity when the array is already sorted.",
    difficulty: "Hard",
    topic: "sorting",
    subject: "algorithms",
  },

  // ========== ALGORITHMS - GRAPHS ==========
  {
    id: 7,
    question: "Dijkstra's algorithm cannot handle which type of edges?",
    options: ["Positive weighted edges", "Zero weighted edges", "Negative weighted edges", "All of the above"],
    correctAnswer: 2,
    explanation: "Dijkstra's algorithm assumes non-negative edge weights to guarantee optimality.",
    difficulty: "Medium",
    topic: "graphs",
    subject: "algorithms",
  },
  {
    id: 8,
    question: "What is the time complexity of BFS for a graph with V vertices and E edges?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
    correctAnswer: 2,
    explanation: "BFS visits each vertex once and explores each edge once, giving O(V + E) complexity.",
    difficulty: "Easy",
    topic: "graphs",
    subject: "algorithms",
  },
  {
    id: 9,
    question: "Which algorithm finds the shortest path in a graph with negative edge weights?",
    options: ["Dijkstra", "Bellman-Ford", "Prim's", "Kruskal's"],
    correctAnswer: 1,
    explanation: "Bellman-Ford algorithm can handle negative weights and detect negative cycles.",
    difficulty: "Hard",
    topic: "graphs",
    subject: "algorithms",
  },

  // ========== DATA STRUCTURES - STACKS & QUEUES ==========
  {
    id: 10,
    question: "Which data structure uses LIFO (Last In First Out) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: 1,
    explanation: "Stack follows LIFO principle where the last element inserted is the first one to be removed.",
    difficulty: "Easy",
    topic: "stacks-queues",
    subject: "data-structures",
  },
  {
    id: 11,
    question: "What is the time complexity of enqueue and dequeue operations in a queue using linked list?",
    options: ["O(1) for both", "O(n) for both", "O(1) enqueue, O(n) dequeue", "O(n) enqueue, O(1) dequeue"],
    correctAnswer: 0,
    explanation: "Both operations can be done in O(1) time using pointers to front and rear.",
    difficulty: "Medium",
    topic: "stacks-queues",
    subject: "data-structures",
  },
  {
    id: 12,
    question: "How can you implement a queue using two stacks efficiently?",
    options: ["Not possible", "Amortized O(1) per operation", "O(n) per operation", "O(log n) per operation"],
    correctAnswer: 1,
    explanation: "Using two stacks, we can achieve amortized O(1) time for both enqueue and dequeue operations.",
    difficulty: "Hard",
    topic: "stacks-queues",
    subject: "data-structures",
  },

  // ========== DATA STRUCTURES - TREES ==========
  {
    id: 13,
    question: "In a binary tree, what is the maximum number of nodes at level k?",
    options: ["2^k", "2^(k-1)", "2^(k+1)", "k^2"],
    correctAnswer: 0,
    explanation: "At level k in a binary tree, there can be at most 2^k nodes (considering root at level 0).",
    difficulty: "Medium",
    topic: "trees",
    subject: "data-structures",
  },
  {
    id: 14,
    question: "Which traversal of a BST yields a sorted sequence?",
    options: ["Preorder", "Inorder", "Postorder", "Level order"],
    correctAnswer: 1,
    explanation: "Inorder traversal of a BST visits nodes in non-decreasing key order.",
    difficulty: "Easy",
    topic: "trees",
    subject: "data-structures",
  },
  {
    id: 15,
    question: "What is the time complexity of searching in a balanced BST?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 1,
    explanation: "In a balanced BST, the height is O(log n), so search takes O(log n) time.",
    difficulty: "Hard",
    topic: "trees",
    subject: "data-structures",
  },

  // ========== DATA STRUCTURES - HEAPS ==========
  {
    id: 16,
    question: "Which data structure is best for implementing a priority queue?",
    options: ["Stack", "Queue", "Heap", "Deque"],
    correctAnswer: 2,
    explanation: "Heaps provide efficient insertion and extraction of the highest (or lowest) priority element.",
    difficulty: "Easy",
    topic: "trees",
    subject: "data-structures",
  },
  {
    id: 17,
    question: "What is the time complexity of building a heap from n elements?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
    correctAnswer: 0,
    explanation: "Building a heap using the bottom-up approach takes O(n) time.",
    difficulty: "Medium",
    topic: "trees",
    subject: "data-structures",
  },
  {
    id: 18,
    question: "In a min-heap, which property must be satisfied?",
    options: ["Parent ≥ Children", "Parent ≤ Children", "Left child < Right child", "All leaves are at same level"],
    correctAnswer: 1,
    explanation: "In a min-heap, every parent node must be less than or equal to its children.",
    difficulty: "Hard",
    topic: "trees",
    subject: "data-structures",
  },

  // ========== ALGORITHMS - DYNAMIC PROGRAMMING ==========
  {
    id: 19,
    question: "What is the space complexity of the recursive fibonacci function?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: 1,
    explanation: "The recursive fibonacci function has O(n) space complexity due to the recursion call stack.",
    difficulty: "Medium",
    topic: "dp",
    subject: "algorithms",
  },
  {
    id: 20,
    question: "Which technique is used in dynamic programming to avoid redundant calculations?",
    options: ["Recursion", "Memoization", "Iteration", "Backtracking"],
    correctAnswer: 1,
    explanation: "Memoization stores previously computed results to avoid redundant calculations.",
    difficulty: "Easy",
    topic: "dp",
    subject: "algorithms",
  },
  {
    id: 21,
    question: "What is the time complexity of solving 0/1 Knapsack using DP?",
    options: ["O(n)", "O(n²)", "O(n*W)", "O(2^n)"],
    correctAnswer: 2,
    explanation: "The DP solution for 0/1 Knapsack has O(n*W) time complexity, where n is items and W is capacity.",
    difficulty: "Hard",
    topic: "dp",
    subject: "algorithms",
  },

  // ========== ALGORITHMS - GREEDY ==========
  {
    id: 22,
    question: "Which problem can be solved optimally using a greedy approach?",
    options: ["0/1 Knapsack", "Fractional Knapsack", "Longest Common Subsequence", "Edit Distance"],
    correctAnswer: 1,
    explanation: "Fractional Knapsack can be solved optimally using a greedy approach by selecting items with highest value/weight ratio.",
    difficulty: "Easy",
    topic: "greedy",
    subject: "algorithms",
  },
  {
    id: 23,
    question: "What is the time complexity of Huffman coding algorithm?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 1,
    explanation: "Huffman coding uses a priority queue and takes O(n log n) time for n characters.",
    difficulty: "Medium",
    topic: "greedy",
    subject: "algorithms",
  },
  {
    id: 24,
    question: "Which property must a problem have to be solved using greedy approach?",
    options: ["Overlapping subproblems", "Optimal substructure", "Both A and B", "Neither A nor B"],
    correctAnswer: 1,
    explanation: "Greedy algorithms require optimal substructure but not necessarily overlapping subproblems.",
    difficulty: "Hard",
    topic: "greedy",
    subject: "algorithms",
  },
];

// ==================== HELPER FUNCTIONS ====================

export const getSubjectById = (subjectId: string): Subject | undefined => {
  return subjects.find(s => s.id === subjectId);
};

export const getTopicsBySubject = (subjectId: string): Topic[] => {
  const subject = getSubjectById(subjectId);
  return subject?.topics || [];
};

export const getQuestionsBySubject = (subjectId: string): Question[] => {
  return questionBank.filter(q => q.subject === subjectId);
};

export const getQuestionsByTopic = (subjectId: string, topicId: string): Question[] => {
  return questionBank.filter(q => q.subject === subjectId && q.topic === topicId);
};

export const getQuestionsByDifficulty = (questions: Question[], difficulty: Difficulty): Question[] => {
  return questions.filter(q => q.difficulty === difficulty);
};

export const getRandomQuestions = (questions: Question[], count: number): Question[] => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
};
