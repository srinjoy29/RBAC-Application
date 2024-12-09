import SortableTableHeader from './SortableTableHeader'; // Importing the SortableTableHeader component for sortable columns

function Table({ columns, data, sortConfig, onSort, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto"> {/* Wrapper for horizontal scrolling on smaller screens */}
      <table className="min-w-full divide-y divide-gray-200"> {/* Table with full width and row dividers */}
        <thead className="bg-gray-50"> {/* Table header with light background */}
          <tr>
            {columns.map((column) => ( // Iterate over columns to render headers
              column.sortable ? ( // Check if the column is sortable
                <SortableTableHeader
                  key={column.key} // Unique key for each column
                  field={column.key} // Field associated with the column
                  label={column.label} // Label to display
                  sortConfig={sortConfig} // Current sorting configuration
                  onSort={onSort} // Function to handle sorting
                />
              ) : (
                <th
                  key={column.key} // Unique key for non-sortable columns
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.label} {/* Display the column label */}
                </th>
              )
            ))}
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions {/* Header for the actions column */}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200"> {/* Table body with row dividers */}
          {data.length === 0 ? ( // Check if there is no data
            <tr>
              <td
                colSpan={columns.length + 1} // Span across all columns, including the actions column
                className="px-6 py-4 text-center text-gray-500"
              >
                No data available {/* Display message when no data is present */}
              </td>
            </tr>
          ) : (
            data.map((item) => ( // Iterate over data to render rows
              <tr key={item.id}> {/* Use a unique ID for each row */}
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap"> {/* Cell for column data */}
                    {column.render ? column.render(item[column.key], item) : item[column.key]} {/* Render custom content or default value */}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> {/* Actions column */}
                  <button
                    onClick={() => onEdit(item)} // Trigger the onEdit function with the current item
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit {/* Edit button */}
                  </button>
                  <button
                    onClick={() => onDelete(item)} // Trigger the onDelete function with the current item
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete {/* Delete button */}
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table; // Export the Table component for use in rendering data tables
