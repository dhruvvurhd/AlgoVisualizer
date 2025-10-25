# ⭐ Mark to Review Later Feature

## Overview
This feature allows users to mark algorithms for later review by clicking a star button on algorithm cards. The marked algorithms are saved to localStorage and can be viewed on a dedicated "Review Later" page.

## Implementation Details

### Files Added/Modified

#### New Components
- `src/components/StarButton.jsx` - Reusable star button component
- `src/hooks/useStarredAlgorithms.js` - Custom hook for managing starred algorithms
- `src/pages/ReviewLater.jsx` - Dedicated page for viewing starred algorithms

#### Modified Files
- `src/pages/HomePage.jsx` - Added Review Later navigation and page routing
- `src/pages/Arrays/Arrays.jsx` - Added StarButton to algorithm cards
- `src/pages/Sorting/Sorting.jsx` - Added StarButton to algorithm cards  
- `src/pages/Graphs/Graphs.jsx` - Added StarButton to algorithm cards

### Features Implemented

1. **Star Button Component**
   - Clickable star button on algorithm cards
   - Visual feedback (filled/unfilled star)
   - Prevents card click when clicking star
   - Hover effects and accessibility

2. **localStorage Integration**
   - Saves starred algorithms to browser localStorage
   - Persists across browser sessions
   - Handles multiple tabs with storage events

3. **Review Later Page**
   - Displays all starred algorithms in a grid layout
   - Shows algorithm name, category, and date added
   - Allows removal of individual algorithms
   - Clear all functionality
   - Navigation back to algorithm pages

4. **Navigation**
   - Added "Review Later" button on homepage
   - Integrated with existing navigation system
   - Breadcrumb navigation support

### Usage

1. **Marking Algorithms**
   - Click the ⭐ button on any algorithm card
   - Star fills in yellow when algorithm is marked
   - Algorithm is saved to localStorage

2. **Viewing Starred Algorithms**
   - Click "Review Later" button on homepage
   - View all marked algorithms in organized grid
   - See when each algorithm was added

3. **Managing Starred Algorithms**
   - Click star again to remove from list
   - Use "Clear All" button to remove all
   - Click algorithm card to navigate to it

### Technical Details

#### StarButton Component Props
```jsx
<StarButton
  algorithmId={algo.name}        // Unique identifier
  algorithmName={algo.name}       // Display name
  category="Arrays"               // Category name
  onToggle={callback}            // Optional callback
/>
```

#### localStorage Structure
```json
[
  {
    "id": "Bubble Sort",
    "name": "Bubble Sort", 
    "category": "Sorting",
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
]
```

#### useStarredAlgorithms Hook
```javascript
const {
  starredAlgorithms,    // Array of starred algorithms
  addToStarred,        // Function to add algorithm
  removeFromStarred,   // Function to remove algorithm
  isStarred,          // Function to check if starred
  clearAllStarred     // Function to clear all
} = useStarredAlgorithms();
```

### Adding to More Pages

To add StarButton to additional algorithm pages:

1. **Import the component:**
```jsx
import StarButton from "../../components/StarButton.jsx";
```

2. **Add to algorithm card header:**
```jsx
<div className="flex items-start justify-between mb-4">
  {/* Existing content */}
  <StarButton
    algorithmId={algo.name}
    algorithmName={algo.name}
    category="[CategoryName]"
  />
</div>
```

3. **Replace [CategoryName] with appropriate category:**
   - "Arrays", "Sorting", "Graphs", "Strings", etc.

### Testing

A test file is provided at `src/test-star-feature.html` to verify:
- localStorage functionality
- Star button toggling
- Data persistence
- Component behavior

### Browser Compatibility

- Modern browsers with localStorage support
- React 18+ compatible
- Tailwind CSS styling

### Future Enhancements

Potential improvements:
- Export/import starred algorithms
- Categories for starred algorithms
- Search within starred algorithms
- Sync across devices
- Algorithm difficulty filtering
- Study progress tracking

## Installation

The feature is already integrated into the existing codebase. No additional dependencies are required.

## Usage in Development

1. Start the development server: `npm run dev`
2. Navigate to any algorithm category
3. Click the ⭐ button on algorithm cards
4. Visit the "Review Later" page to see marked algorithms
5. Test the feature using `src/test-star-feature.html`
