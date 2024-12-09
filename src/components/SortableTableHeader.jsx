import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'; // Importing icons for sort indicators

function SortableTableHeader({ label, field, sortConfig, onSort }) {
  // Determine the current sort direction for the given field
  const direction = sortConfig.field === field ? sortConfig.direction : null;

  return (
    <th
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer group"
      onClick={() => onSort(field)} // Trigger sorting for the given field when the header is clicked
    >
      <div className="flex items-center space-x-1"> {/* Container for the label and icons */}
        <span>{label}</span> {/* Display the header label */}
        <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity"> {/* Sorting icons, visible on hover */}
          <ChevronUpIcon 
            className={`h-3 w-3 ${direction === 'asc' ? 'text-blue-500' : 'text-gray-400'}`} // Highlight up icon if sorting in ascending order
          />
          <ChevronDownIcon 
            className={`h-3 w-3 ${direction === 'desc' ? 'text-blue-500' : 'text-gray-400'}`} // Highlight down icon if sorting in descending order
          />
        </div>
      </div>
    </th>
  );
}

export default SortableTableHeader; // Export the component for use in sortable table implementations
