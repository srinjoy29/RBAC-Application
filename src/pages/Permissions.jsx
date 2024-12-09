import { useQuery } from '@tanstack/react-query'; // Import the useQuery hook for data fetching
import { roles, permissions } from '../services/api'; // Import API methods for fetching roles and permissions
import { ShieldCheckIcon } from '@heroicons/react/24/outline'; // Icon for visual representation
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'; // Icons for status indicators

// Component to display individual permission details
function PermissionCard({ name, roles: assignedRoles }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 space-y-3">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center">
        <span className="mr-2 text-blue-600"></span>
        {name} {/* Display permission name */}
      </h3>
      <div>
        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Assigned Roles:</p>
        <div className="flex flex-wrap gap-2">
          {assignedRoles.map((role) => ( // Display assigned roles as tags
            <span
              key={role}
              className="px-2.5 py-1 rounded-full text-xs bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition-colors"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Component to display role-permission matrix (currently empty, to be extended)
function RolePermissionMatrix({ roles: rolesData, permissions: permissionsData }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      {/* Placeholder for role-permission matrix */}
    </div>
  );
}

// Main component for managing and displaying permissions
function Permissions() {
  const { data: permissionsData } = useQuery({
    queryKey: ['permissions'], // Query key for permissions data
    queryFn: permissions.getAll, // API call to fetch permissions
  });

  const { data: rolesData } = useQuery({
    queryKey: ['roles'], // Query key for roles data
    queryFn: roles.getAll, // API call to fetch roles
  });

  // Show a loading indicator if data is not yet available
  if (!permissionsData || !rolesData) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-pulse text-gray-500 text-lg">Loading permissions...</div>
      </div>
    );
  }

  // Function to retrieve roles assigned to a specific permission
  const getAssignedRoles = (permissionName) => {
    return rolesData
      .filter((role) => role.permissions.includes(permissionName)) // Check if the role has the given permission
      .map((role) => role.name); // Return the names of the assigned roles
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl space-y-10">
      <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
        <h1 className="text-3xl font-bold text-gray-900">Permissions Dashboard</h1> {/* Dashboard title */}
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center border-b pb-2 border-gray-200">
          <span className="mr-3 text-lg"></span>
          Available Permissions {/* Section heading */}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {permissionsData.map((permission) => ( // Iterate over permissions data
            <PermissionCard
              key={permission.name} // Unique key for each permission
              name={permission.name} // Pass permission name
              roles={getAssignedRoles(permission.name)} // Pass assigned roles
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Permissions; // Export the Permissions component for use
