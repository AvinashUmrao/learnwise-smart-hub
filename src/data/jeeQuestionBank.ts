// JEE Question Bank - Modular structure for Physics, Chemistry, and Mathematics

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

// JEE Subjects with Topics
export const jeeSubjects: Subject[] = [
  {
    id: 'physics',
    name: 'Physics',
    description: 'Mechanics, Thermodynamics, Electromagnetism, Optics, and Modern Physics',
    topics: [
      { id: 'mechanics', name: 'Mechanics', description: 'Laws of motion, work, energy, and power' },
      { id: 'thermodynamics', name: 'Thermodynamics', description: 'Heat, temperature, and laws of thermodynamics' },
      { id: 'electromagnetism', name: 'Electromagnetism', description: 'Electric and magnetic fields' },
      { id: 'optics', name: 'Optics', description: 'Light, reflection, refraction, and wave optics' },
      { id: 'modern-physics', name: 'Modern Physics', description: 'Quantum mechanics and nuclear physics' },
    ],
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'Physical, Organic, and Inorganic Chemistry',
    topics: [
      { id: 'physical-chemistry', name: 'Physical Chemistry', description: 'Chemical kinetics, equilibrium, and thermodynamics' },
      { id: 'organic-chemistry', name: 'Organic Chemistry', description: 'Hydrocarbons, functional groups, and reactions' },
      { id: 'inorganic-chemistry', name: 'Inorganic Chemistry', description: 'Periodic table, coordination compounds' },
      { id: 'chemical-bonding', name: 'Chemical Bonding', description: 'Ionic, covalent, and metallic bonds' },
    ],
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    description: 'Algebra, Calculus, Coordinate Geometry, and Trigonometry',
    topics: [
      { id: 'algebra', name: 'Algebra', description: 'Equations, inequalities, and sequences' },
      { id: 'calculus', name: 'Calculus', description: 'Differentiation and integration' },
      { id: 'coordinate-geometry', name: 'Coordinate Geometry', description: 'Lines, circles, and conic sections' },
      { id: 'trigonometry', name: 'Trigonometry', description: 'Trigonometric functions and identities' },
      { id: 'vectors', name: 'Vectors', description: 'Vector algebra and 3D geometry' },
    ],
  },
];

// JEE Question Bank
export const jeeQuestionBank: Question[] = [
  // Physics - Mechanics
  {
    id: 1,
    question: "A body of mass 2 kg is moving with velocity 10 m/s. What is its kinetic energy?",
    options: ["50 J", "100 J", "200 J", "400 J"],
    correctAnswer: 1,
    explanation: "Kinetic Energy = (1/2)mv² = (1/2) × 2 × 10² = 100 J",
    difficulty: "Easy",
    topic: "mechanics",
    subject: "physics",
  },
  {
    id: 2,
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correctAnswer: 1,
    explanation: "Newton (N) is the SI unit of force, defined as kg⋅m/s²",
    difficulty: "Easy",
    topic: "mechanics",
    subject: "physics",
  },
  {
    id: 3,
    question: "A car accelerates from rest to 20 m/s in 5 seconds. What is its acceleration?",
    options: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
    correctAnswer: 1,
    explanation: "Acceleration = (v - u)/t = (20 - 0)/5 = 4 m/s²",
    difficulty: "Medium",
    topic: "mechanics",
    subject: "physics",
  },
  
  // Physics - Thermodynamics
  {
    id: 4,
    question: "What is the first law of thermodynamics?",
    options: ["Energy cannot be created or destroyed", "Entropy always increases", "Heat flows from hot to cold", "Work equals force times distance"],
    correctAnswer: 0,
    explanation: "The first law states that energy cannot be created or destroyed, only converted from one form to another (ΔU = Q - W)",
    difficulty: "Easy",
    topic: "thermodynamics",
    subject: "physics",
  },
  {
    id: 5,
    question: "An ideal gas undergoes isothermal expansion. What remains constant?",
    options: ["Pressure", "Volume", "Temperature", "Internal Energy"],
    correctAnswer: 2,
    explanation: "In isothermal process, temperature remains constant. For ideal gas, internal energy also remains constant.",
    difficulty: "Medium",
    topic: "thermodynamics",
    subject: "physics",
  },
  {
    id: 6,
    question: "The efficiency of a Carnot engine operating between 400K and 300K is:",
    options: ["25%", "33%", "50%", "75%"],
    correctAnswer: 0,
    explanation: "Efficiency = 1 - (T₂/T₁) = 1 - (300/400) = 0.25 = 25%",
    difficulty: "Hard",
    topic: "thermodynamics",
    subject: "physics",
  },
  
  // Physics - Electromagnetism
  {
    id: 7,
    question: "What is Coulomb's law?",
    options: ["F = ma", "F = kq₁q₂/r²", "F = GMm/r²", "F = BIL"],
    correctAnswer: 1,
    explanation: "Coulomb's law states that the force between two charges is F = kq₁q₂/r²",
    difficulty: "Easy",
    topic: "electromagnetism",
    subject: "physics",
  },
  {
    id: 8,
    question: "The unit of electric field is:",
    options: ["N/C", "C/N", "V/m", "Both A and C"],
    correctAnswer: 3,
    explanation: "Electric field can be expressed as N/C (force per unit charge) or V/m (voltage per unit distance)",
    difficulty: "Medium",
    topic: "electromagnetism",
    subject: "physics",
  },
  {
    id: 9,
    question: "A charged particle moving perpendicular to a magnetic field experiences:",
    options: ["No force", "Force parallel to motion", "Force perpendicular to both v and B", "Force opposite to motion"],
    correctAnswer: 2,
    explanation: "Lorentz force F = q(v × B) is perpendicular to both velocity and magnetic field",
    difficulty: "Hard",
    topic: "electromagnetism",
    subject: "physics",
  },
  
  // Chemistry - Physical Chemistry
  {
    id: 10,
    question: "What is the rate law for a first-order reaction?",
    options: ["Rate = k", "Rate = k[A]", "Rate = k[A]²", "Rate = k[A][B]"],
    correctAnswer: 1,
    explanation: "For first-order reaction, rate is directly proportional to concentration: Rate = k[A]",
    difficulty: "Easy",
    topic: "physical-chemistry",
    subject: "chemistry",
  },
  {
    id: 11,
    question: "The pH of a neutral solution at 25°C is:",
    options: ["0", "7", "14", "Depends on solution"],
    correctAnswer: 1,
    explanation: "At 25°C, pure water has pH = 7, which is neutral",
    difficulty: "Easy",
    topic: "physical-chemistry",
    subject: "chemistry",
  },
  {
    id: 12,
    question: "For an exothermic reaction, increasing temperature will:",
    options: ["Increase equilibrium constant", "Decrease equilibrium constant", "Not affect equilibrium", "Stop the reaction"],
    correctAnswer: 1,
    explanation: "By Le Chatelier's principle, increasing temperature shifts equilibrium backward for exothermic reactions, decreasing K",
    difficulty: "Medium",
    topic: "physical-chemistry",
    subject: "chemistry",
  },
  
  // Chemistry - Organic Chemistry
  {
    id: 13,
    question: "What is the general formula for alkanes?",
    options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"],
    correctAnswer: 1,
    explanation: "Alkanes are saturated hydrocarbons with general formula CₙH₂ₙ₊₂",
    difficulty: "Easy",
    topic: "organic-chemistry",
    subject: "chemistry",
  },
  {
    id: 14,
    question: "Which functional group is present in alcohols?",
    options: ["-COOH", "-OH", "-CHO", "-CO-"],
    correctAnswer: 1,
    explanation: "Alcohols contain the hydroxyl (-OH) functional group",
    difficulty: "Easy",
    topic: "organic-chemistry",
    subject: "chemistry",
  },
  {
    id: 15,
    question: "In SN2 reaction, the mechanism involves:",
    options: ["Carbocation intermediate", "One-step process", "Free radical", "Elimination"],
    correctAnswer: 1,
    explanation: "SN2 is a one-step bimolecular nucleophilic substitution with backside attack",
    difficulty: "Hard",
    topic: "organic-chemistry",
    subject: "chemistry",
  },
  
  // Mathematics - Algebra
  {
    id: 16,
    question: "What is the solution of x² - 5x + 6 = 0?",
    options: ["x = 1, 6", "x = 2, 3", "x = -2, -3", "x = 1, -6"],
    correctAnswer: 1,
    explanation: "Factoring: (x-2)(x-3) = 0, so x = 2 or x = 3",
    difficulty: "Easy",
    topic: "algebra",
    subject: "mathematics",
  },
  {
    id: 17,
    question: "The sum of first n natural numbers is:",
    options: ["n(n+1)", "n(n+1)/2", "n²", "2n"],
    correctAnswer: 1,
    explanation: "Sum = 1+2+3+...+n = n(n+1)/2",
    difficulty: "Easy",
    topic: "algebra",
    subject: "mathematics",
  },
  {
    id: 18,
    question: "If log₂(x) = 5, then x equals:",
    options: ["10", "25", "32", "64"],
    correctAnswer: 2,
    explanation: "log₂(x) = 5 means 2⁵ = x, so x = 32",
    difficulty: "Medium",
    topic: "algebra",
    subject: "mathematics",
  },
  
  // Mathematics - Calculus
  {
    id: 19,
    question: "What is the derivative of x³?",
    options: ["x²", "2x²", "3x²", "3x"],
    correctAnswer: 2,
    explanation: "Using power rule: d/dx(x³) = 3x²",
    difficulty: "Easy",
    topic: "calculus",
    subject: "mathematics",
  },
  {
    id: 20,
    question: "The integral of 1/x dx is:",
    options: ["ln|x| + C", "x² + C", "1/x² + C", "e^x + C"],
    correctAnswer: 0,
    explanation: "∫(1/x)dx = ln|x| + C, where C is the constant of integration",
    difficulty: "Easy",
    topic: "calculus",
    subject: "mathematics",
  },
  {
    id: 21,
    question: "The value of lim(x→0) (sin x)/x is:",
    options: ["0", "1", "∞", "Does not exist"],
    correctAnswer: 1,
    explanation: "This is a standard limit: lim(x→0) (sin x)/x = 1",
    difficulty: "Medium",
    topic: "calculus",
    subject: "mathematics",
  },
  
  // Mathematics - Coordinate Geometry
  {
    id: 22,
    question: "The distance between points (0,0) and (3,4) is:",
    options: ["5", "7", "12", "25"],
    correctAnswer: 0,
    explanation: "Distance = √[(3-0)² + (4-0)²] = √(9+16) = √25 = 5",
    difficulty: "Easy",
    topic: "coordinate-geometry",
    subject: "mathematics",
  },
  {
    id: 23,
    question: "The equation of a circle with center (0,0) and radius 5 is:",
    options: ["x² + y² = 5", "x² + y² = 25", "x + y = 5", "(x-5)² + (y-5)² = 0"],
    correctAnswer: 1,
    explanation: "Circle equation: x² + y² = r², so x² + y² = 25",
    difficulty: "Medium",
    topic: "coordinate-geometry",
    subject: "mathematics",
  },
  {
    id: 24,
    question: "The slope of the line perpendicular to y = 2x + 3 is:",
    options: ["2", "-2", "1/2", "-1/2"],
    correctAnswer: 3,
    explanation: "Perpendicular slope = -1/m = -1/2",
    difficulty: "Hard",
    topic: "coordinate-geometry",
    subject: "mathematics",
  },
];

// Helper Functions
export const getJeeSubjectById = (subjectId: string): Subject | undefined => {
  return jeeSubjects.find(s => s.id === subjectId);
};

export const getJeeTopicsBySubject = (subjectId: string): Topic[] => {
  const subject = getJeeSubjectById(subjectId);
  return subject ? subject.topics : [];
};

export const getJeeQuestionsBySubject = (subjectId: string): Question[] => {
  return jeeQuestionBank.filter(q => q.subject === subjectId);
};

export const getJeeQuestionsByTopic = (subjectId: string, topicId: string): Question[] => {
  return jeeQuestionBank.filter(q => q.subject === subjectId && q.topic === topicId);
};

export const getJeeQuestionsByDifficulty = (questions: Question[], difficulty: Difficulty): Question[] => {
  return questions.filter(q => q.difficulty === difficulty);
};

export const getJeeRandomQuestions = (questions: Question[], count: number): Question[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, questions.length));
};
