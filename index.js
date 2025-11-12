
// Sample to-do list data
const tasks = [
  { task: "Finish LaunchCode homework", completed: false, priority: 1 },
  { task: "Do laundry", completed: true, priority: 3 },
  { task: "Workout", completed: false, priority: 2 },
  { task: "Pay bills", completed: false, priority: 1 }
];

// 1️⃣ Filter incomplete tasks (using an anonymous function)
const incompleteTasks = tasks.filter(function(item) {
  return !item.completed;
});
console.log("Incomplete tasks:", incompleteTasks);

// 2️⃣ Sort tasks by priority (1 = highest)
const sortedByPriority = [...tasks].sort(function(a, b) {
  return a.priority - b.priority;
});
console.log("Tasks sorted by priority:", sortedByPriority);

// 3️⃣ Combine filter + sort
const incompleteSorted = tasks
  .filter(t => !t.completed)
  .sort((a, b) => a.priority - b.priority);
console.log("Incomplete tasks sorted by priority:", incompleteSorted);

// 4️⃣ Mark all tasks as completed (using map)
const allCompleted = tasks.map(function(t) {
  return { ...t, completed: true };
});
console.log("All tasks marked completed:", allCompleted);