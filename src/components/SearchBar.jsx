import { useState } from 'react' // Import useState hook for managing local state
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline' // Import MagnifyingGlassIcon for the search icon

// Define the SearchBar component
function SearchBar({ onSearch, placeholder = 'Search...' }) {
  // Local state to track the value of the search input
  const [value, setValue] = useState('')

  // Handle input value changes
  const handleChange = (e) => {
    const newValue = e.target.value // Get the new value from the input
    setValue(newValue) // Update the local state
    onSearch(newValue) // Call the onSearch callback with the updated value
  }

  // Render the search bar UI
  return (
    <div className="relative">
      {/* Icon inside the input field */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      </div>
      {/* Search input field */}
      <input
        type="text" // Input type set to text
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder={placeholder} // Dynamic placeholder text
        value={value} // Bind the input value to the local state
        onChange={handleChange} // Handle changes to the input value
      />
    </div>
  )
}

// Export the SearchBar component
export default SearchBar
