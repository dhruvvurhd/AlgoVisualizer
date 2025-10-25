// Script to add StarButton to remaining algorithm pages
// This is a helper script to add StarButton imports and usage to other algorithm pages

const pagesToUpdate = [
  'src/pages/Strings/Strings.jsx',
  'src/pages/Searching/Searching.jsx', 
  'src/pages/LinkedList/LinkedList.jsx',
  'src/pages/Stack/Stack.jsx',
  'src/pages/Queue/Queue.jsx',
  'src/pages/Heaps/Heaps.jsx',
  'src/pages/Trees/Trees.jsx',
  'src/pages/Recursion/Recursion.jsx',
  'src/pages/Backtracking/Backtracking.jsx',
  'src/pages/DynamicProgramming/DynamicProgramming.jsx',
  'src/pages/BitManipulation/BitManipulation.jsx',
  'src/pages/Hashing/Hashing.jsx',
  'src/pages/Design/Design.jsx',
  'src/pages/SlidingWindows/SlidingWindows.jsx',
  'src/pages/Pathfinding/Pathfinding.jsx',
  'src/pages/GreedyAlgorithms/Greedy.jsx'
];

// Instructions for manual implementation:
console.log('To add StarButton to remaining pages:');
console.log('1. Add import: import StarButton from "../../components/StarButton.jsx";');
console.log('2. Add StarButton component in the algorithm card header section:');
console.log(`
<StarButton
  algorithmId={algo.name}
  algorithmName={algo.name}
  category="[CategoryName]"
/>
`);
console.log('3. Replace [CategoryName] with the appropriate category name for each page.');
