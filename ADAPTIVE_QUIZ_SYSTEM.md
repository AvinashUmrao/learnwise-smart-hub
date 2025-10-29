# Adaptive Learning + Level-Based Quiz System

## 🎯 System Overview

A fully functional adaptive quiz system that adjusts difficulty based on student performance, similar to CodeChef's rating system. Students are categorized into three levels and continuously move between them based on quiz performance.

---

## ✅ Implementation Status: COMPLETE

All requirements have been implemented and are fully functional.

---

## 📋 Core Features

### **Phase 1: Category Calibration Quiz** ✅

#### How it works:
1. Student selects a subject from the dropdown (Algorithms, Data Structures, etc.)
2. Current rating and category are displayed at the top
3. Click "Take Initial Level Test (9 Questions)" button
4. System generates a calibration quiz with:
   - **3 Easy questions**
   - **3 Medium questions**
   - **3 Hard questions**
   - Questions are randomized from the question bank

#### After completion:
- **Score displayed** with percentage
- **Weak & Strong topics** identified and shown
- **Category assigned** prominently with colored badge:
  - 🟢 **Best** (7-9 correct): Rating 600, 60% Hard questions next
  - 🟡 **Medium** (4-6 correct): Rating 300, 40% Medium questions next
  - 🔴 **Low** (0-3 correct): Rating 100, 70% Easy questions next

**Files:**
- `src/lib/adaptive.ts` - `buildCalibrationQuiz()`, `calibrationAssignment()`
- `src/components/quiz/QuizStart.tsx` - Calibration button
- `src/components/quiz/QuizResults.tsx` - Category assignment display

---

### **Phase 2: Adaptive Quiz Experience** ✅

#### Difficulty Distribution by Category:

| Category | Easy | Medium | Hard |
|----------|------|--------|------|
| 🔴 Low   | 70%  | 30%    | 0%   |
| 🟡 Medium| 40%  | 40%    | 20%  |
| 🟢 Best  | 10%  | 30%    | 60%  |

#### How it works:
1. System reads current category from localStorage
2. Generates quiz with appropriate difficulty split
3. Questions are randomly selected and shuffled
4. Student takes the adaptive quiz

**Files:**
- `src/lib/adaptive.ts` - `buildAdaptiveQuiz()` with category-based weights
- `src/pages/GateQuiz.tsx` - Adaptive quiz generation

---

### **Phase 3: Level Movement / Rating System** ✅

#### Rating Changes:

| Performance | Percentage | Rating Change |
|-------------|------------|---------------|
| Excellent   | ≥85%       | **+40**       |
| Good        | 70-84%     | **+20**       |
| Average     | 50-69%     | **+0**        |
| Poor        | 30-49%     | **-20**       |
| Very Poor   | <30%       | **-40**       |

#### Category Thresholds:

| Rating Range | Category |
|--------------|----------|
| 0-199        | 🔴 Low   |
| 200-499      | 🟡 Medium|
| 500+         | 🟢 Best  |

#### Storage:
- **Rating**: `adaptive_rating_gate_{subject}` in localStorage
- **Category**: `adaptive_category_gate_{subject}` in localStorage
- **Per-subject tracking**: Each subject has independent rating/category

**Files:**
- `src/lib/adaptive.ts` - Rating calculation and storage
- `src/pages/GateQuiz.tsx` - Rating update on quiz completion

---

### **Phase 4: Performance Analysis** ✅

After every quiz, students see:

1. **Overall Score**
   - Correct/Total questions
   - Percentage with visual indicator

2. **Accuracy by Difficulty**
   - Easy accuracy %
   - Medium accuracy %
   - Hard accuracy %

3. **Time per Question**
   - Individual time chips for each question
   - Tracked automatically during quiz

4. **Subject-wise Performance**
   - Breakdown by topic/subject
   - Progress bars for each

5. **Personalized Recommendations**
   - Identified strength topic
   - Identified weak topic
   - Difficulty-specific feedback
   - Current rating and category (for adaptive quizzes)

**Example Output:**
```
📊 Personalized Recommendations

Strength: Searching - Keep practicing to maintain this edge!
Needs Work: Trees - Focus your study sessions here.
Difficulty Focus: Easy (100%) • Medium (67%) • Hard (33%)
Rating Change: Your rating is now 320 (Category: Medium)
```

**Files:**
- `src/lib/adaptive.ts` - `analyzePerformance()`, `topicStrengths()`
- `src/components/quiz/QuizResults.tsx` - Complete analytics display
- `src/contexts/QuizContext.tsx` - Per-question timing capture

---

## 🗂️ File Structure

```
src/
├── lib/
│   └── adaptive.ts              # Core adaptive logic
├── contexts/
│   └── QuizContext.tsx          # Quiz state management
├── components/quiz/
│   ├── QuizStart.tsx            # Start screen with subject selector
│   ├── QuizTaking.tsx           # Quiz interface
│   ├── QuizResults.tsx          # Results & analytics
│   └── QuizNavigation.tsx       # Question navigator
├── pages/
│   └── GateQuiz.tsx             # Main quiz page
└── data/
    └── sampleData.ts            # Question bank (9 questions)
```

---

## 🎮 User Flow

### First Time User:
1. Open quiz page → See "Medium" category (default)
2. Select subject (e.g., "Algorithms")
3. Click "Take Initial Level Test (9 Questions)"
4. Complete calibration quiz
5. See assigned category (Low/Medium/Best)
6. Rating set based on performance

### Returning User:
1. Open quiz page → See current rating & category
2. Select subject
3. Click "Start Adaptive Test"
4. Get questions based on current category
5. Rating adjusts after completion
6. Category may change if rating crosses threshold

---

## 📊 Question Bank

Current implementation has **9 questions** (3 per difficulty):

| Difficulty | Count | Topics |
|------------|-------|--------|
| Easy       | 3     | Binary Search, Stack, Heap |
| Medium     | 3     | Trees, Sorting, Graphs |
| Hard       | 3     | Recursion, BST, Recurrences |

**To expand:** Add more questions to `src/data/sampleData.ts` with:
```typescript
{
  id: number,
  question: string,
  options: string[],
  correctAnswer: number,
  explanation: string,
  subject: string,
  difficulty: 'Easy' | 'Medium' | 'Hard',
  topic?: string
}
```

---

## 🔧 Technical Implementation

### Key Functions:

**Adaptive Logic** (`src/lib/adaptive.ts`):
- `buildCalibrationQuiz()` - Creates 3-3-3 quiz
- `buildAdaptiveQuiz()` - Creates category-based quiz
- `calibrationAssignment()` - Assigns initial category
- `ratingChangeFromPerformance()` - Calculates rating delta
- `analyzePerformance()` - Generates analytics
- `topicStrengths()` - Identifies strong/weak topics

**State Management** (`src/contexts/QuizContext.tsx`):
- `startQuizWithQuestions()` - Starts quiz with custom questions
- Per-question timing capture
- Mode tracking (calibration/adaptive/standard)
- Subject tracking

**Storage Keys**:
- `adaptive_rating_gate_{subject}` - Rating per subject
- `adaptive_category_gate_{subject}` - Category per subject
- `quiz_gate_full` - Current quiz state
- `quiz_gate_full_completed` - Completed quiz data

---

## 🎨 UI Features

### Start Screen:
- Current rating & category badges
- Subject dropdown selector
- Prominent calibration button
- Adaptive quiz button
- Test type selection (topic/subject/full)

### Quiz Interface:
- Question counter
- Timer with countdown
- Progress bar
- Difficulty badge per question
- Mark for review
- Question navigation grid

### Results Screen:
- **Calibration**: Large category assignment card
- Score breakdown
- Difficulty analysis with percentages
- Time per question chips
- Subject-wise performance
- Personalized recommendations
- Rating & category update display

---

## 🚀 How to Use

### For Students:

1. **First Quiz (Calibration)**:
   ```
   Select Subject → Take Initial Level Test → Get Category
   ```

2. **Regular Practice**:
   ```
   Select Subject → Start Adaptive Test → Rating Updates
   ```

3. **Track Progress**:
   - Rating increases with good performance
   - Category upgrades at rating thresholds
   - Personalized feedback after each quiz

### For Developers:

1. **Add Questions**:
   - Edit `src/data/sampleData.ts`
   - Add questions with proper difficulty tags

2. **Add Subjects**:
   - Edit subjects array in `QuizStart.tsx`
   - Questions auto-filter by subject

3. **Customize Thresholds**:
   - Edit `categoryFromRating()` in `adaptive.ts`
   - Edit `ratingChangeFromPerformance()` for different deltas

4. **Add Visual Graphs** (Future):
   - Use Recharts (already installed)
   - Add to `QuizResults.tsx`

---

## ✨ Key Achievements

✅ **All requirements met**:
- Calibration quiz (9 questions: 3-3-3)
- Category assignment (Low/Medium/Best)
- Adaptive difficulty distribution
- Rating system (+40/+20/0/-20/-40)
- Category thresholds (0-200, 200-500, 500+)
- Performance analysis (score, accuracy, time, recommendations)
- Subject-wise tracking
- localStorage persistence

✅ **Extra features**:
- Subject selection dropdown
- Per-subject rating/category
- Visual category badges with colors
- Real-time rating display
- Enhanced recommendations
- Time tracking per question
- Topic strength analysis

---

## 🔮 Future Enhancements (Optional)

1. **Visual Graphs**:
   - Performance trends over time
   - Rating history chart
   - Topic-wise radar chart

2. **More Question Banks**:
   - Expand to 50+ questions per subject
   - Add more subjects

3. **Leaderboard**:
   - Compare ratings with peers
   - Subject-wise rankings

4. **Study Recommendations**:
   - Link to study materials for weak topics
   - Suggested practice problems

5. **Streak System**:
   - Daily quiz streaks
   - Bonus points for consistency

---

## 📝 Testing Checklist

- [x] Calibration quiz generates 9 questions (3-3-3)
- [x] Category assigned correctly (0-3→Low, 4-6→Medium, 7-9→Best)
- [x] Adaptive quiz uses correct difficulty split
- [x] Rating updates after each quiz
- [x] Category changes when crossing thresholds
- [x] Per-subject tracking works independently
- [x] Time per question captured accurately
- [x] Recommendations show correct topics
- [x] localStorage persists data correctly
- [x] UI displays all required information

---

## 🎓 System Architecture

```
User Flow:
┌─────────────────┐
│  Quiz Start     │ → Select Subject → See Current Rating/Category
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
Calibration  Adaptive
(9Q: 3-3-3)  (Category-based)
    │         │
    └────┬────┘
         ▼
    Quiz Taking
    (Timed, Tracked)
         │
         ▼
    Results & Analytics
    (Score, Category, Recommendations)
         │
         ▼
    Rating Update
    (±40/20/0/-20/-40)
         │
         ▼
    Category Adjustment
    (Low/Medium/Best)
```

---

## 📞 Support

For questions or issues:
1. Check this documentation
2. Review code comments in `src/lib/adaptive.ts`
3. Test with different scenarios (0 correct, 5 correct, 9 correct)
4. Verify localStorage in browser DevTools

---

**Status**: ✅ PRODUCTION READY
**Last Updated**: 2025-01-29
**Version**: 1.0.0
