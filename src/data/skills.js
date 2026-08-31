// Each skill belongs to a tier (row) and lists the ids it depends on.
// A skill can only be started once all its prerequisites are "done".
export const TIERS = ['Foundations', 'Core', 'Advanced', 'Placement Ready']

export const INITIAL_SKILLS = [
  // Foundations
  {
    id: 'syntax',
    tier: 'Foundations',
    name: 'Java Syntax & Basics',
    description: 'Variables, control flow, loops, methods — the vocabulary of the language.',
    prereqs: [],
  },
  {
    id: 'oop',
    tier: 'Foundations',
    name: 'OOP Fundamentals',
    description: 'Classes, objects, constructors, encapsulation.',
    prereqs: ['syntax'],
  },
  {
    id: 'types',
    tier: 'Foundations',
    name: 'Type System',
    description: 'int vs Integer, primitives vs wrappers, autoboxing, generics restrictions.',
    prereqs: ['syntax'],
  },

  // Core
  {
    id: 'collections',
    tier: 'Core',
    name: 'Collections (List/Set)',
    description: 'ArrayList, LinkedList — storing and iterating groups of data.',
    prereqs: ['oop', 'types'],
  },
  {
    id: 'hashmap',
    tier: 'Core',
    name: 'HashMap & Frequency Patterns',
    description: 'Key-value storage, frequency counting, majority/top-K element problems.',
    prereqs: ['collections'],
  },
  {
    id: 'queues',
    tier: 'Core',
    name: 'ArrayDeque & PriorityQueue',
    description: 'Queue-based structures for ordering and scheduling problems.',
    prereqs: ['collections'],
  },
  {
    id: 'exceptions',
    tier: 'Core',
    name: 'Exception Handling',
    description: 'try/catch/finally, custom exceptions, fail-safe code.',
    prereqs: ['oop'],
  },

  // Advanced
  {
    id: 'streams',
    tier: 'Advanced',
    name: 'Streams & Lambdas',
    description: 'Functional-style data processing over collections.',
    prereqs: ['hashmap', 'queues'],
  },
  {
    id: 'multithreading',
    tier: 'Advanced',
    name: 'Multithreading Basics',
    description: 'Threads, synchronization, race conditions.',
    prereqs: ['exceptions'],
  },
  {
    id: 'dsa',
    tier: 'Advanced',
    name: 'DSA Problem Solving',
    description: 'Applying structures to algorithmic problems under time pressure.',
    prereqs: ['hashmap', 'queues'],
  },

  // Placement Ready
  {
    id: 'system-design-basics',
    tier: 'Placement Ready',
    name: 'System Design Basics',
    description: 'CRUD system thinking, edge cases — like the employee record system.',
    prereqs: ['streams', 'exceptions'],
  },
  {
    id: 'mock-interviews',
    tier: 'Placement Ready',
    name: 'Mock Interviews',
    description: 'Whiteboard-ready explanations, HR + technical rounds.',
    prereqs: ['dsa', 'multithreading'],
  },
]

export const STATUS = {
  LOCKED: 'locked',
  IN_PROGRESS: 'in-progress',
  DONE: 'done',
}
