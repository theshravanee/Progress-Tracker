// --- 1. Data Definitions ---
const subjectsData = {
    dsa: {
        id: 'dsa',
        name: 'Data Structures & Algorithms',
        icon: '🧮',
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
        topics: [
            {
                id: 'arrays',
                name: 'Arrays & Strings',
                problems: [
                    { id: 'a1', name: 'Two Sum', difficulty: 'Easy' },
                    { id: 'a2', name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy' },
                    { id: 'a3', name: 'Contains Duplicate', difficulty: 'Easy' },
                    { id: 'a4', name: 'Product of Array Except Self', difficulty: 'Medium' },
                    { id: 'a5', name: 'Maximum Subarray', difficulty: 'Medium' },
                ]
            },
            {
                id: 'linked-lists',
                name: 'Linked Lists',
                problems: [
                    { id: 'l1', name: 'Reverse Linked List', difficulty: 'Easy' },
                    { id: 'l2', name: 'Merge Two Sorted Lists', difficulty: 'Easy' },
                    { id: 'l3', name: 'Linked List Cycle', difficulty: 'Easy' },
                    { id: 'l4', name: 'Remove Nth Node From End', difficulty: 'Medium' },
                ]
            },
            {
                id: 'trees',
                name: 'Trees & Graphs',
                problems: [
                    { id: 't1', name: 'Maximum Depth of Binary Tree', difficulty: 'Easy' },
                    { id: 't2', name: 'Same Tree', difficulty: 'Easy' },
                    { id: 't3', name: 'Invert Binary Tree', difficulty: 'Easy' },
                    { id: 't4', name: 'Binary Tree Level Order Traversal', difficulty: 'Medium' },
                    { id: 't5', name: 'Validate Binary Search Tree', difficulty: 'Medium' },
                ]
            },
        ]
    },
    maths: {
        id: 'maths',
        name: 'Mathematics',
        icon: '🔢',
        gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        topics: [
            // Expanded Maths Topics based on Screenshot
            {
                id: 'foundations-arithmetic',
                name: 'Foundations of Arithmetic',
                problems: [
                    { id: 'f1', name: 'Properties (Commutative/Assoc.) Check', difficulty: 'Easy' },
                    { id: 'f2', name: 'Modular Arithmetic Basics', difficulty: 'Medium' },
                    { id: 'f3', name: 'Base Conversions (e.g., Decimal to Binary)', difficulty: 'Easy' },
                    { id: 'f4', name: 'Prime Factorization & Divisibility Rules', difficulty: 'Easy' },
                ]
            },
            {
                id: 'propositional-logic',
                name: 'Propositional Logic',
                problems: [
                    { id: 'p1', name: 'Construct Truth Table for $P \rightarrow Q$', difficulty: 'Easy' },
                    { id: 'p2', name: 'Check for Tautology/Contradiction', difficulty: 'Medium' },
                    { id: 'p3', name: 'Logical Equivalence (De Morgan\'s Laws)', difficulty: 'Medium' },
                ]
            },
            {
                id: 'set-theory',
                name: 'Set Theory',
                problems: [
                    { id: 's1', name: 'Set Operations (Union, Intersect, Complement)', difficulty: 'Easy' },
                    { id: 's2', name: 'Calculate Power Set', difficulty: 'Medium' },
                    { id: 's3', name: 'Principle of Inclusion-Exclusion', difficulty: 'Hard' },
                ]
            },
            {
                id: 'matrices',
                name: 'Matrices',
                problems: [
                    { id: 'm1', name: 'Determinant of 3x3 Matrix', difficulty: 'Medium' },
                    { id: 'm2', name: 'Inverse of a 2x2 Matrix', difficulty: 'Easy' },
                    { id: 'm3', name: 'Solve System of Equations (Gaussian)', difficulty: 'Medium' },
                ]
            },
            {
                id: 'coord-geometry',
                name: 'Coordinate Geometry',
                problems: [
                    { id: 'c1', name: 'Distance and Midpoint Formulas', difficulty: 'Easy' },
                    { id: 'c2', name: 'Equation of a Perpendicular/Parallel Line', difficulty: 'Medium' },
                    { id: 'c3', name: 'Parabola Focus and Directrix', difficulty: 'Hard' },
                ]
            },
            {
                id: 'vectors',
                name: 'Vectors and Data Representation',
                problems: [
                    { id: 'v1', name: 'Vector Addition & Scalar Multiplication', difficulty: 'Easy' },
                    { id: 'v2', name: 'Dot Product and Angle between Vectors', difficulty: 'Medium' },
                ]
            },
            {
                id: 'combinatorics',
                name: 'Combinatorics',
                problems: [
                    { id: 'cc1', name: 'Basic Permutations (nPr)', difficulty: 'Medium' },
                    { id: 'cc2', name: 'Basic Combinations (nCr)', difficulty: 'Medium' },
                    { id: 'cc3', name: 'Pascal Triangle Generation', difficulty: 'Easy' },
                ]
            },
        ]
    },
    webdev: {
        id: 'webdev',
        name: 'Web Development',
        icon: '🌐',
        gradient: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
        topics: [
            // Expanded HTML Topics based on User Request
            {
                id: 'html-basics',
                name: '1. Internet Basics and HTML Intro',
                problems: [
                    { id: 'h1a', name: 'Browser vs. WWW Explanation', difficulty: 'Easy' },
                    { id: 'h1b', name: 'Basic HTML Document Structure', difficulty: 'Easy' },
                ]
            },
            {
                id: 'core-elements',
                name: '2. Core HTML Elements & Lists',
                problems: [
                    { id: 'h2a', name: 'Block-level vs. Inline Elements', difficulty: 'Easy' },
                    { id: 'h2b', name: 'Nested Ordered and Unordered Lists', difficulty: 'Easy' },
                ]
            },
            {
                id: 'anchor-image',
                name: '3. Anchor & Image Tags',
                problems: [
                    { id: 'h3a', name: 'External Link and Internal Jump Link', difficulty: 'Easy' },
                    { id: 'h3b', name: 'Image Alt and Relative Paths', difficulty: 'Easy' },
                ]
            },
            {
                id: 'semantic',
                name: '4. Semantic Tags and Page Structure',
                problems: [
                    { id: 'h4a', name: 'Using `<header>`, `<main>`, `<footer>`', difficulty: 'Medium' },
                    { id: 'h4b', name: 'Differentiate `<article>` and `<section>`', difficulty: 'Medium' },
                ]
            },
            {
                id: 'tables-media',
                name: '5. Tables and Media Embedding',
                problems: [
                    { id: 'h5a', name: 'Table with `<thead>`, `<tbody>`, `<tfoot>`', difficulty: 'Medium' },
                    { id: 'h5b', name: 'Embedding Video/Audio with Controls', difficulty: 'Medium' },
                ]
            },
            {
                id: 'forms-iframes',
                name: '6. Forms and Iframes',
                problems: [
                    { id: 'h6a', name: 'Form with `<input type="text/email/password">`', difficulty: 'Easy' },
                    { id: 'h6b', name: 'Embed External Content using `<iframe>`', difficulty: 'Easy' },
                ]
            },
            {
                id: 'forms-css',
                name: '7. Forms Elements and CSS Intro',
                problems: [
                    { id: 'h7a', name: 'Dropdown, Radio, and Checkbox Elements', difficulty: 'Medium' },
                    { id: 'h7b', name: 'Three Ways to Add CSS (Inline, Internal, External)', difficulty: 'Easy' },
                ]
            },
            // Keep existing topics for WebDev
            {
                id: 'html-css',
                name: 'HTML & CSS Projects',
                problems: [
                    { id: 'w1', name: 'Responsive Navigation Bar', difficulty: 'Easy' },
                    { id: 'w2', name: 'CSS Grid Layout', difficulty: 'Easy' },
                    { id: 'w3', name: 'Flexbox Card Design', difficulty: 'Easy' },
                    { id: 'w4', name: 'Custom Form Styling', difficulty: 'Medium' },
                    { id: 'w5', name: 'CSS Animations', difficulty: 'Medium' },
                ]
            },
            {
                id: 'javascript',
                name: 'JavaScript',
                problems: [
                    { id: 'j1', name: 'DOM Manipulation', difficulty: 'Easy' },
                    { id: 'j2', name: 'Event Handling', difficulty: 'Easy' },
                    { id: 'j3', name: 'Async/Await Promises', difficulty: 'Medium' },
                    { id: 'j4', name: 'Closures & Scope', difficulty: 'Medium' },
                    { id: 'j5', name: 'Prototypes & Inheritance', difficulty: 'Hard' },
                ]
            },
            {
                id: 'react',
                name: 'React',
                problems: [
                    { id: 'r1', name: 'Component Basics', difficulty: 'Easy' },
                    { id: 'r2', name: 'State Management', difficulty: 'Medium' },
                    { id: 'r3', name: 'Custom Hooks', difficulty: 'Medium' },
                    { id: 'r4', name: 'Context API', difficulty: 'Medium' },
                    { id: 'r5', name: 'Performance Optimization', difficulty: 'Hard' },
                ]
            },
        ]
    },
};

// --- 2. State Management ---
// Update: problemNotes will now store an object { note: string, youtube: string, screenshots: array<string> }
let currentSubject = 'dsa';
let problemStatuses = {};
// problemNotes is updated to store complex objects
let problemNotes = {}; 
let activityData = {};
let expandedTopics = {};
let selectedProblem = null;
let streak = 0;
let showStats = true; 
let starredProblems = {};

const setState = (updates) => {
    Object.assign(state, updates);
    saveState();
    renderApp();
};

const state = {
    currentSubject,
    problemStatuses,
    problemNotes,
    activityData,
    expandedTopics,
    selectedProblem,
    streak,
    showStats,
    starredProblems
};

// --- 3. Local Storage Persistence ---
const loadState = () => {
    state.problemStatuses = JSON.parse(localStorage.getItem('problemStatuses') || '{}');
    state.problemNotes = JSON.parse(localStorage.getItem('problemNotes') || '{}');
    state.activityData = JSON.parse(localStorage.getItem('activityData') || '{}');
    state.starredProblems = JSON.parse(localStorage.getItem('starredProblems') || '{}');
    calculateStreak();
};

const saveState = () => {
    localStorage.setItem('problemStatuses', JSON.stringify(state.problemStatuses));
    localStorage.setItem('problemNotes', JSON.stringify(state.problemNotes));
    localStorage.setItem('activityData', JSON.stringify(state.activityData));
    localStorage.setItem('starredProblems', JSON.stringify(state.starredProblems));
};

// --- 4. Utility Functions ---
const getTodayDateStr = () => new Date().toISOString().split('T')[0];

const calculateStreak = () => {
    const dates = Object.keys(state.activityData).sort().reverse();
    let currentStreak = 0;
    const today = getTodayDateStr();
    let checkDate = new Date(today);

    if (state.activityData[today] > 0) {
        currentStreak = 1;
        checkDate.setDate(checkDate.getDate() - 1);
    } else {
         checkDate.setDate(checkDate.getDate() - 1);
    }
    
    while (true) {
        const dateStr = checkDate.toISOString().split('T')[0];
        if (state.activityData[dateStr] > 0) {
            currentStreak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }
    state.streak = currentStreak;
};

const updateProblemStatus = (problemKey, status) => {
    const newStatuses = { ...state.problemStatuses, [problemKey]: status };

    if (status === 'completed' && state.problemStatuses[problemKey] !== 'completed') {
        const today = getTodayDateStr();
        const newActivity = { ...state.activityData };
        newActivity[today] = (newActivity[today] || 0) + 1;
        
        setState({ problemStatuses: newStatuses, activityData: newActivity });
        calculateStreak();

        // --- MASCOT TRIGGER: Celebration ---
        if (window.cutie) {
            window.cutie.doHappyRoll();
            window.cutie.say("Yay! You did it! 🎉");
        }
    } else if (status === 'in-progress') {
        setState({ problemStatuses: newStatuses });
        if (window.cutie) window.cutie.say("Focus mode on! 🧠");
    } else {
        setState({ problemStatuses: newStatuses });
    }
};

/**
 * Saves the note, YouTube link, and screenshot URLs for a problem.
 * @param {string} problemKey - The unique key of the problem.
 * @param {string} note - The main text note.
 * @param {string} youtube - The YouTube video URL.
 * @param {Array<string>} screenshots - An array of screenshot URLs.
 */
const saveNoteData = (problemKey, note, youtube, screenshots) => {
    const noteData = { note: note || '', youtube: youtube || '', screenshots: screenshots || [] };
    setState({ problemNotes: { ...state.problemNotes, [problemKey]: noteData } });
};

const toggleStar = (problemKey) => {
    setState({ starredProblems: { ...state.starredProblems, [problemKey]: !state.starredProblems[problemKey] } });
};

const getStats = () => {
    const subject = subjectsData[state.currentSubject];
    let completed = 0, inProgress = 0, total = 0;

    subject.topics.forEach(topic => {
        topic.problems.forEach(problem => {
            total++;
            const key = `${state.currentSubject}-${topic.id}-${problem.id}`;
            const status = state.problemStatuses[key];
            if (status === 'completed') completed++;
            else if (status === 'in-progress') inProgress++;
        });
    });

    return { completed, inProgress, total, remaining: total - completed };
};

const getProgressData = () => {
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        last7Days.push({
            date: dateStr,
            count: state.activityData[dateStr] || 0,
            label: date.toLocaleDateString('en-US', { weekday: 'short' })
        });
    }
    return last7Days;
};

const getHeatMapData = () => {
    const weeks = [];
    const today = new Date();
    for (let w = 11; w >= 0; w--) {
        const week = [];
        for (let d = 0; d < 7; d++) {
            const date = new Date(today);
            date.setDate(date.getDate() - (w * 7 + (6 - d)));
            const dateStr = date.toISOString().split('T')[0];
            const count = state.activityData[dateStr] || 0;
            week.push({ date: dateStr, count });
        }
        weeks.push(week);
    }
    return weeks;
};

const getHeatColor = (count) => {
    if (count === 0) return '#f1f5f9';
    if (count <= 2) return '#86efac';
    if (count <= 4) return '#4ade80';
    if (count <= 6) return '#22c55e';
    return '#16a34a';
};

// --- AI Suggestion Logic ---
const getNextSuggestion = () => {
    const subject = subjectsData[state.currentSubject];
    const starredNotCompleted = [];
    subject.topics.forEach(topic => {
        topic.problems.forEach(problem => {
            const key = `${state.currentSubject}-${topic.id}-${problem.id}`;
            if (state.starredProblems[key] && state.problemStatuses[key] !== 'completed') {
                starredNotCompleted.push({ problem, topic });
            }
        });
    });

    if (starredNotCompleted.length > 0) {
        const suggestion = starredNotCompleted[Math.floor(Math.random() * starredNotCompleted.length)];
        return { 
            type: 'Starred Priority', 
            icon: '⭐',
            text: `Revisit a **starred problem**! Try **${suggestion.problem.name}** in ${suggestion.topic.name}.`,
            problem: suggestion.problem
        };
    }

    const inProgressProblems = [];
    subject.topics.forEach(topic => {
        topic.problems.forEach(problem => {
            const key = `${state.currentSubject}-${topic.id}-${problem.id}`;
            if (state.problemStatuses[key] === 'in-progress') {
                inProgressProblems.push({ problem, topic });
            }
        });
    });

    if (inProgressProblems.length > 0) {
        const suggestion = inProgressProblems[0];
        return { 
            type: 'Resume Progress', 
            icon: '🟡',
            text: `You left **${suggestion.problem.name}** in progress. Let's finish it!`,
            problem: suggestion.problem
        };
    }
    
    for (const topic of subject.topics) {
        for (const problem of topic.problems) {
            const key = `${state.currentSubject}-${topic.id}-${problem.id}`;
            if (state.problemStatuses[key] !== 'completed') {
                return { 
                    type: 'New Challenge', 
                    icon: '💡',
                    text: `Start a new one! Try **${problem.name}** (${problem.difficulty}) from ${topic.name}.`,
                    problem: problem
                };
            }
        }
    }

    return { 
        type: 'Subject Mastery', 
        icon: '🏆',
        text: `You have completed every problem in ${subject.name}!`,
        problem: null
    };
};

const getWeakestAreaSuggestion = () => {
    const subject = subjectsData[state.currentSubject];
    const topicStats = {};

    subject.topics.forEach(topic => {
        let completed = 0;
        let total = 0;
        topic.problems.forEach(problem => {
            total++;
            const key = `${state.currentSubject}-${topic.id}-${problem.id}`;
            if (state.problemStatuses[key] === 'completed') {
                completed++;
            }
        });
        topicStats[topic.name] = { completed, total, rate: total > 0 ? completed / total : 1 };
    });

    let weakestTopic = null;
    let minRate = 1.1; 

    for (const [name, stats] of Object.entries(topicStats)) {
        if (stats.total > 0 && stats.rate < minRate) {
            minRate = stats.rate;
            weakestTopic = { name, ...stats };
        }
    }
    
    if (weakestTopic && weakestTopic.rate < 1) {
        return {
            type: 'Weakest Area',
            icon: '🧠',
            text: `Your completion rate in **${weakestTopic.name}** is only **${Math.round(weakestTopic.rate * 100)}%**. Focus on this area.`,
            topicName: weakestTopic.name
        };
    }
    return null;
};

const getPersonalizedTip = () => {
    const progressData = getProgressData();
    const completedToday = progressData[progressData.length - 1].count;

    if (state.streak > 5) {
        return {
            type: 'Consistency Reward',
            icon: '🌟',
            text: `Amazing ${state.streak}-day streak! Keep going!`,
        };
    }
    if (state.streak < 3 && completedToday === 0) {
        return {
            type: 'Daily Motivation',
            icon: '⏱️',
            text: `Start with a 15-minute focused session today!`,
        };
    }
    const averageCount = progressData.slice(0, 6).reduce((sum, d) => sum + d.count, 0) / 6;
    if (completedToday > averageCount * 1.5) {
        return {
            type: 'High Effort',
            icon: '🔋',
            text: `You've done **${completedToday} problems today**! Great work!`,
        };
    }
    return {
        type: 'Standard Advice',
        icon: '📝',
        text: `Remember to use the **Notes** feature after completing a problem.`,
    };
};

const getOverallSubjectStats = () => {
    const overallStats = {};
    Object.keys(subjectsData).forEach(subjectId => {
        let completed = 0;
        let total = 0;
        const subject = subjectsData[subjectId];
        subject.topics.forEach(topic => {
            topic.problems.forEach(problem => {
                total++;
                const key = `${subjectId}-${topic.id}-${problem.id}`;
                if (state.problemStatuses[key] === 'completed') completed++;
            });
        });
        overallStats[subjectId] = {
            name: subject.name,
            icon: subject.icon,
            completed,
            total,
            rate: total > 0 ? completed / total : 1
        };
    });
    return overallStats;
};

const getOverallWeakestSubject = () => {
    const stats = getOverallSubjectStats();
    let weakestSubject = null;
    let minRate = 1.1; 

    for (const [id, subjectStats] of Object.entries(stats)) {
        if (subjectStats.total > 0 && subjectStats.rate < minRate) {
            minRate = subjectStats.rate;
            weakestSubject = { id, ...subjectStats };
        }
    }
    if (weakestSubject && weakestSubject.rate < 1) {
        return {
            type: 'Weakest Subject Focus',
            icon: weakestSubject.icon,
            text: `Your overall weakest area is **${weakestSubject.name}** (${Math.round(weakestSubject.rate * 100)}%).`,
            subjectId: weakestSubject.id
        };
    }
    return {
        type: 'General Mastery',
        icon: '👑',
        text: `Outstanding! You have a 100% completion rate across all subjects.`,
        subjectId: null
    };
};

const getOverallSuggestions = () => {
    return [getOverallWeakestSubject(), getPersonalizedTip(), {
        type: 'Current Subject Next Step',
        icon: getNextSuggestion().icon,
        text: `Also, don't forget your current subject. ${getNextSuggestion().text}`,
    }];
};

// --- 5. DOM Rendering Functions ---

const createElement = (tag, classNames, content = '') => {
    const el = document.createElement(tag);
    if (classNames) el.className = classNames;
    if (content) el.innerHTML = content;
    return el;
};

const renderApp = () => {
    const root = document.getElementById('app-root');
    if (!root) return;
    root.innerHTML = '';
    const stats = getStats();
    const subject = subjectsData[state.currentSubject];
    const header = renderHeader(stats);
    root.appendChild(header);
    const mainDiv = createElement('div', 'max-w-7xl mx-auto px-6 py-8');
    mainDiv.appendChild(renderAISuggestionPanel());
    if (state.showStats) {
        mainDiv.appendChild(renderAnalyticsPanel());
    } else {
        mainDiv.appendChild(renderStatsGrid(stats));
        mainDiv.appendChild(renderTopics(subject));
    }
    root.appendChild(mainDiv);
    if (state.selectedProblem) {
        root.appendChild(renderNotesModal());
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
};

const renderHeader = (stats) => {
    const header = createElement('header', 'bg-white/90 backdrop-blur-lg border-b border-purple-200 sticky top-0 z-40 shadow-sm');
    const container = createElement('div', 'max-w-7xl mx-auto px-6 py-4');
    const topBar = createElement('div', 'flex items-center justify-between mb-4');
    
    const logoAndGreeting = createElement('div', 'flex items-center gap-3');
    logoAndGreeting.innerHTML = `
        <div class="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">🎯</div>
        <div>
            <h1 class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Welcome back!</h1>
            <p class="text-sm text-slate-600">Keep crushing your coding goals</p>
        </div>
    `;
    topBar.appendChild(logoAndGreeting);

    const buttons = createElement('div', 'flex items-center gap-4');
    const analyticsButton = createElement('button', `flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition ${state.showStats ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200'}`, '<i data-lucide="trending-up" class="w-5 h-5"></i> Analytics');
    analyticsButton.onclick = () => setState({ showStats: true }); 
    buttons.appendChild(analyticsButton);

    const streakDiv = createElement('div', 'flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2.5 rounded-full shadow-lg');
    streakDiv.innerHTML = `<span class="text-xl">🔥</span><div class="text-right"><div class="text-xl font-bold leading-tight">${state.streak}</div><div class="text-xs opacity-90">day streak</div></div>`;
    buttons.appendChild(streakDiv);
    topBar.appendChild(buttons);
    container.appendChild(topBar);

    const tabsContainer = createElement('div', 'flex gap-2 bg-gradient-to-r from-purple-100 to-pink-100 p-1.5 rounded-2xl');
    Object.values(subjectsData).forEach(subj => {
        const isActive = !state.showStats && state.currentSubject === subj.id;
        const tabButton = createElement('button', `flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition ${isActive ? 'bg-white text-purple-600 shadow-md' : 'text-slate-600 hover:bg-white/50'}`);
        tabButton.innerHTML = `<span class="text-xl">${subj.icon}</span><span class="hidden sm:inline">${subj.name}</span>`;
        tabButton.onclick = () => setState({ currentSubject: subj.id, expandedTopics: {}, showStats: false });
        tabsContainer.appendChild(tabButton);
    });
    container.appendChild(tabsContainer);
    header.appendChild(container);
    return header;
};

const renderAnalyticsPanel = () => {
    const panel = createElement('div', 'mb-8 bg-white rounded-3xl p-6 shadow-xl border-2 border-purple-200');
    const header = createElement('div', 'flex items-center justify-between mb-6');
    header.innerHTML = `<h2 class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-2"><i data-lucide="calendar" class="w-6 h-6 text-purple-600"></i>Activity & Progress</h2>`;
    panel.appendChild(header);

    const progressDiv = createElement('div', 'mb-8');
    progressDiv.innerHTML = '<h3 class="text-lg font-semibold text-slate-800 mb-4">Last 7 Days</h3>';
    const chart = createElement('div', 'flex items-end justify-between gap-2 h-32');
    const progressData = getProgressData();
    const maxCount = Math.max(...progressData.map(d => d.count), 1);

    progressData.forEach((day) => {
        const height = (day.count / maxCount) * 100;
        const dayDiv = createElement('div', 'flex-1 flex flex-col items-center gap-2');
        dayDiv.innerHTML = `
            <div class="w-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-t-lg relative h-full">
                <div class="absolute bottom-0 w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg transition-all duration-500 flex items-end justify-center pb-1" style="height: ${height}%">
                    ${day.count > 0 ? `<span class="text-white text-xs font-bold">${day.count}</span>` : ''}
                </div>
            </div>
            <span class="text-xs text-slate-600 font-medium">${day.label}</span>
        `;
        chart.appendChild(dayDiv);
    });
    progressDiv.appendChild(chart);
    panel.appendChild(progressDiv);

    const heatMapDiv = createElement('div');
    heatMapDiv.innerHTML = '<h3 class="text-lg font-semibold text-slate-800 mb-4">Activity Heat Map (12 Weeks)</h3>';
    const heatMapGrid = createElement('div', 'flex gap-1');
    getHeatMapData().forEach((week) => {
        const weekDiv = createElement('div', 'flex flex-col gap-1');
        week.forEach((day) => {
            const daySquare = createElement('div', 'w-3 h-3 rounded-sm transition-colors');
            daySquare.style.backgroundColor = getHeatColor(day.count);
            daySquare.title = `${day.date}: ${day.count}`;
            weekDiv.appendChild(daySquare);
        });
        heatMapGrid.appendChild(weekDiv);
    });
    heatMapDiv.appendChild(heatMapGrid);
    panel.appendChild(heatMapDiv);
    return panel;
};

const renderStatsGrid = (stats) => {
    const grid = createElement('div', 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8');
    const statItems = [
        { label: 'Progress', value: `${Math.round((stats.completed / stats.total) * 100) || 0}%`, icon: '🎯' },
        { label: 'Completed', value: stats.completed, icon: '🎉' },
        { label: 'In Progress', value: stats.inProgress, icon: '⚡' },
        { label: 'Remaining', value: stats.remaining, icon: '📚' },
    ];
    statItems.forEach(stat => {
        const item = createElement('div', 'bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200 hover:shadow-xl transition hover:-translate-y-1');
        item.innerHTML = `<div class="text-3xl mb-2">${stat.icon}</div><div class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">${stat.value}</div><div class="text-sm text-slate-600">${stat.label}</div>`;
        grid.appendChild(item);
    });
    return grid;
};

const renderTopics = (subject) => {
    const topicsContainer = document.createDocumentFragment();
    subject.topics.forEach(topic => {
        const isExpanded = state.expandedTopics[topic.id];
        const topicDiv = createElement('div', 'mb-4 bg-white rounded-2xl shadow-lg border-2 border-purple-200 overflow-hidden hover:shadow-xl transition');
        const toggleButton = createElement('button', 'w-full px-6 py-5 flex items-center justify-between hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition');
        toggleButton.onclick = () => setState({ expandedTopics: { ...state.expandedTopics, [topic.id]: !isExpanded } });
        toggleButton.innerHTML = `<div class="flex items-center gap-4"><div class="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg shadow-md" style="background: ${subject.gradient}"><i data-lucide="${isExpanded ? 'chevron-down' : 'chevron-right'}" class="w-5 h-5"></i></div><div class="text-left"><h3 class="text-lg font-bold text-slate-900">${topic.name}</h3><p class="text-sm text-slate-600">${topic.problems.length} problems</p></div></div>`;
        topicDiv.appendChild(toggleButton);

        if (isExpanded) {
            const problemsGrid = createElement('div', 'px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4');
            topic.problems.forEach(problem => problemsGrid.appendChild(renderProblemCard(problem, topic)));
            topicDiv.appendChild(problemsGrid);
        }
        topicsContainer.appendChild(topicDiv);
    });
    return topicsContainer;
};

const renderProblemCard = (problem, topic) => {
    const key = `${state.currentSubject}-${topic.id}-${problem.id}`;
    const status = state.problemStatuses[key] || 'not-started';
    const isStarred = state.starredProblems[key];
    const statusColors = { 'not-started': 'bg-red-50 border-red-200', 'in-progress': 'bg-yellow-50 border-yellow-200', 'completed': 'bg-green-50 border-green-200' };
    const statusIcons = { 'not-started': '🔴', 'in-progress': '🟡', 'completed': '🟢' };
    const difficultyClasses = { 'Easy': 'bg-green-100 text-green-700', 'Medium': 'bg-yellow-100 text-yellow-700', 'Hard': 'bg-red-100 text-red-700' };
    const noteData = state.problemNotes[key] || {};
    const hasNoteContent = noteData.note || noteData.youtube || (noteData.screenshots && noteData.screenshots.length > 0);

    const card = createElement('div', `border-2 rounded-xl p-4 ${statusColors[status]} transition hover:shadow-md relative`);
    const starButton = createElement('button', 'absolute top-3 right-3 text-2xl hover:scale-110 transition-transform z-10', isStarred ? '⭐' : '☆');
    starButton.onclick = (e) => { e.stopPropagation(); toggleStar(key); };
    card.appendChild(starButton);

    const problemInfo = createElement('div', 'flex items-start justify-between mb-3 pr-8');
    problemInfo.innerHTML = `<div class="flex-1"><h4 class="font-semibold text-slate-900 mb-2">${problem.name}</h4><span class="inline-block px-2 py-1 rounded-lg text-xs font-semibold ${difficultyClasses[problem.difficulty]}">${problem.difficulty}</span></div><span class="text-2xl">${statusIcons[status]}</span>`;
    card.appendChild(problemInfo);

    const statusButtonsDiv = createElement('div', 'flex gap-2 mb-3');
    ['not-started', 'in-progress', 'completed'].forEach(s => {
        const buttonText = s === 'not-started' ? 'Start' : s === 'in-progress' ? 'Working' : 'Done';
        const buttonClasses = s === 'not-started' ? 'bg-red-100 text-red-700' : s === 'in-progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700';
        const button = createElement('button', `flex-1 py-1.5 rounded-lg text-xs font-semibold transition ${status === s ? 'ring-2 ring-offset-1 ring-blue-500' : 'opacity-50 hover:opacity-100'} ${buttonClasses}`, buttonText);
        button.onclick = (e) => { e.stopPropagation(); updateProblemStatus(key, s); };
        statusButtonsDiv.appendChild(button);
    });
    card.appendChild(statusButtonsDiv);

    const notesButton = createElement('button', `w-full flex items-center justify-center gap-2 py-2 text-sm font-semibold transition rounded-lg ${hasNoteContent ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200'}`, `<i data-lucide="file-text" class="w-4 h-4"></i> ${hasNoteContent ? 'View/Edit Notes' : 'Add Notes'}`);
    notesButton.onclick = (e) => { e.stopPropagation(); setState({ selectedProblem: { ...problem, key, topicName: topic.name } }); };
    card.appendChild(notesButton);
    return card;
};

const renderNotesModal = () => {
    const problem = state.selectedProblem;
    const noteData = state.problemNotes[problem.key] || { note: '', youtube: '', screenshots: [] };
    
    // Create the modal structure
    const modal = createElement('div', 'fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4');
    const dialog = createElement('div', 'bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col');

    // Header
    const header = createElement('div', 'p-6 border-b border-slate-200 flex justify-between');
    header.innerHTML = `<div><h3 class="text-2xl font-bold text-slate-900">${problem.name}</h3><p class="text-sm text-slate-600 mt-1">${problem.topicName}</p></div>`;
    const closeButton = createElement('button', 'text-slate-400 hover:text-slate-600', '<i data-lucide="x" class="w-6 h-6"></i>');
    closeButton.onclick = () => setState({ selectedProblem: null });
    header.appendChild(closeButton);
    dialog.appendChild(header);

    // Content Area (Scrollable)
    const content = createElement('div', 'p-6 overflow-y-auto flex-1');
    
    // YouTube Link Input
    const youtubeDiv = createElement('div', 'mb-6');
    youtubeDiv.innerHTML = `<label class="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2"><i data-lucide="youtube" class="w-4 h-4"></i> YouTube Video Link</label>`;
    const youtubeInput = createElement('input', 'youtube-input w-full p-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm');
    youtubeInput.type = 'url';
    youtubeInput.placeholder = 'Paste solution or concept video link here...';
    youtubeInput.value = noteData.youtube;
    youtubeDiv.appendChild(youtubeInput);
    content.appendChild(youtubeDiv);

    // Main Notes Textarea
    const notesDiv = createElement('div', 'mb-6');
    notesDiv.innerHTML = `<label class="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2"><i data-lucide="file-text" class="w-4 h-4"></i> Personal Notes & Summary</label>`;
    const textarea = createElement('textarea', 'notes-textarea w-full h-40 p-4 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-sm');
    textarea.placeholder = 'Write down your key takeaways, logic, and complexity analysis...';
    textarea.value = noteData.note;
    notesDiv.appendChild(textarea);
    content.appendChild(notesDiv);
    
    // Screenshot Feature (Simulated)
    const ssDiv = createElement('div', 'mb-6');
    ssDiv.innerHTML = `<label class="block text-sm font-medium text-slate-700 mb-3 flex items-center gap-2"><i data-lucide="image" class="w-4 h-4"></i> Screenshots / Reference Images (Simulated)</label>`;
    
    const ssInput = createElement('input', 'ss-input hidden');
    ssInput.type = 'file';
    ssInput.accept = 'image/*';
    ssInput.multiple = true;
    ssInput.id = 'screenshot-upload';
    
    const ssButton = createElement('label', 'cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-semibold hover:bg-purple-200 transition text-sm');
    ssButton.setAttribute('for', 'screenshot-upload');
    ssButton.innerHTML = `<i data-lucide="upload" class="w-4 h-4"></i> Upload Screenshot(s)`;
    ssDiv.appendChild(ssButton);

    const ssGallery = createElement('div', 'mt-3 flex flex-wrap gap-2');
    
    // Render existing simulated screenshots
    noteData.screenshots.forEach((url, index) => {
        const imgContainer = createElement('div', 'relative w-20 h-20 border border-slate-300 rounded-lg overflow-hidden');
        imgContainer.innerHTML = `<img src="${url}" alt="Screenshot" class="w-full h-full object-cover">`;
        ssGallery.appendChild(imgContainer);
    });
    
    // In a real app, this event listener would handle file upload. Here we simulate it.
    ssInput.onchange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            // SIMULATION: In a real app, you would upload files to a server and get URLs.
            // Here, we just generate a placeholder URL to show the feature works conceptually.
            const newUrls = files.map((file, i) => `https://via.placeholder.com/150/9333ea/ffffff?text=SS${noteData.screenshots.length + i + 1}`);
            noteData.screenshots.push(...newUrls);
            
            // Re-render to show new screenshots
            // Note: We don't save to state yet, only when the final 'Save' button is clicked
            // but for instant feedback in the modal, we re-render the gallery.
            renderApp(); 
            setState({ selectedProblem: { ...problem, key: problem.key, topicName: problem.topicName } });
        }
    };

    ssDiv.appendChild(ssInput);
    ssDiv.appendChild(ssGallery);
    content.appendChild(ssDiv);
    
    dialog.appendChild(content);

    // Footer
    const footer = createElement('div', 'p-6 border-t border-slate-200 flex justify-end');
    const saveButton = createElement('button', 'px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition shadow-lg', 'Save & Close');
    
    saveButton.onclick = () => {
        // Collect current data from inputs
        const finalNote = textarea.value;
        const finalYoutube = youtubeInput.value;
        const finalScreenshots = noteData.screenshots; // Use the potentially updated array
        
        // Save the structured note data to state
        saveNoteData(problem.key, finalNote, finalYoutube, finalScreenshots);
        
        // Close the modal
        setState({ selectedProblem: null });
    };

    footer.appendChild(saveButton);
    dialog.appendChild(footer);
    modal.appendChild(dialog);
    
    // Return the final modal element
    return modal;
};

const renderAISuggestionPanel = () => {
    const isOverallView = state.showStats;
    let panelTitle, headerIcon, suggestions;
    if (isOverallView) {
        panelTitle = 'Overall Strategy Suggestions';
        headerIcon = '<i data-lucide="shield" class="w-6 h-6 text-orange-600"></i>';
        suggestions = getOverallSuggestions();
    } else {
        panelTitle = 'Subject-Specific Suggestions';
        headerIcon = '<i data-lucide="brain" class="w-6 h-6 text-orange-600"></i>';
        const weakestArea = getWeakestAreaSuggestion();
        suggestions = [getNextSuggestion(), weakestArea ? weakestArea : { type: 'Topic Mastery', icon: '✅', text: `You're crushing it! All topics in **${subjectsData[state.currentSubject].name}** are 100% completed.` }, getPersonalizedTip()];
    }

    const panel = createElement('div', 'mb-8 bg-white rounded-3xl p-6 shadow-xl border-2 border-orange-200');
    const header = createElement('h2', 'text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-2 mb-6');
    header.innerHTML = `${headerIcon} ${panelTitle}`;
    panel.appendChild(header);
    const suggestionCards = createElement('div', 'grid grid-cols-1 md:grid-cols-3 gap-4');
    suggestions.forEach(suggestion => suggestionCards.appendChild(renderSuggestionCard(suggestion.type, suggestion.icon, suggestion.text)));
    panel.appendChild(suggestionCards);
    return panel;
};

const renderSuggestionCard = (title, icon, text) => {
    const card = createElement('div', 'p-4 border-2 border-orange-100 rounded-xl bg-orange-50/50 hover:shadow-lg transition');
    const header = createElement('div', 'flex items-center gap-3 mb-2');
    header.innerHTML = `<span class="text-2xl">${icon}</span><h3 class="text-md font-bold text-slate-800">${title}</h3>`;
    card.appendChild(header);
    const content = createElement('p', 'text-sm text-slate-600');
    content.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    card.appendChild(content);
    return card;
};

// --- 6. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    try {
        loadState();
        renderApp();
        // Initialize the new Cutie Mascot
        window.cutie = new CutieMascot();
    } catch (e) {
        console.error("Application failed to initialize:", e);
    }
});

// --- 7. The New Cutie Mascot Logic ---
class CutieMascot {
    constructor() {
        this.container = document.getElementById('mascot-container');
        this.body = this.container.querySelector('.mascot-body');
        this.bubble = document.getElementById('mascot-bubble');
        this.pupils = this.container.querySelectorAll('.pupil');
        
        this.isAnimating = false;
        this.setupEvents();
        this.startIdleTalk();
    }

    setupEvents() {
        // Eye tracking
        document.addEventListener('mousemove', (e) => {
            if (this.isAnimating) return;
            
            const rect = this.container.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;
            
            // Limit pupil movement
            const limit = 4; 
            const angle = Math.atan2(dy, dx);
            const dist = Math.min(limit, Math.hypot(dx, dy) / 30); // scale distance
            
            const x = Math.cos(angle) * dist;
            const y = Math.sin(angle) * dist;
            
            this.pupils.forEach(pupil => {
                pupil.style.setProperty('--eye-x', `${x}px`);
                pupil.style.setProperty('--eye-y', `${y}px`);
            });

            // Check for Hop (Proximity)
            const distToMouse = Math.hypot(dx, dy);
            if (distToMouse < 200 && Math.random() > 0.98) {
                this.hop();
            }
        });

        // Click interaction
        this.container.addEventListener('click', () => {
            this.doHappyRoll();
            this.say("Hehehe! That tickles! 💖");
        });
    }

    hop() {
        if (this.container.classList.contains('mascot-hop')) return;
        this.container.classList.add('mascot-hop');
        setTimeout(() => this.container.classList.remove('mascot-hop'), 400);
    }

    doHappyRoll() {
        if (this.container.classList.contains('mascot-roll')) return;
        this.container.classList.add('mascot-roll');
        setTimeout(() => this.container.classList.remove('mascot-roll'), 1000);
    }

    say(text, duration = 3000) {
        this.bubble.textContent = text;
        this.bubble.classList.add('show');
        
        // Clear existing timeout if any
        if (this.talkTimeout) clearTimeout(this.talkTimeout);
        
        this.talkTimeout = setTimeout(() => {
            this.bubble.classList.remove('show');
        }, duration);
    }

    startIdleTalk() {
        const phrases = [
            "You got this!",
            "Way to go!",
            "Keep pushing!",
            "Take a break if you need!",
            "I believe in you!",
            "Coding is magic! ✨"
        ];

        setInterval(() => {
            if (Math.random() > 0.7) {
                const phrase = phrases[Math.floor(Math.random() * phrases.length)];
                this.say(phrase);
                this.hop();
            }
        }, 15000); // Check every 15 seconds
    }
}
