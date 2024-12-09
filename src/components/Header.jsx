import { NavLink } from 'react-router-dom'; // Import NavLink for navigation from react-router-dom
import {
  HomeIcon, // Importing icons for navigation links
  UsersIcon,
  KeyIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'; // Using Heroicons for consistent and visually appealing icons

// Define navigation items as an array of objects
const navigation = [
  // Each object contains a name, a route path, and an icon component
  { name: 'Users', to: '/users', icon: UsersIcon },
  { name: 'Roles', to: '/roles', icon: KeyIcon },
  { name: 'Permissions', to: '/permissions', icon: ShieldCheckIcon },
];

function Header() {
  return (
    <header className="bg-gray-900 shadow-sm"> {/* Header with a dark background and slight shadow for styling */}
      <div className="flex items-center justify-between px-6 py-4"> {/* Flex container for layout */}
        <h1 className="text-xl font-bold text-white">RBAC System</h1> {/* Title with white text */}
        <nav className="flex space-x-4"> {/* Navigation container with spacing between links */}
          {navigation.map((item) => ( // Iterate over navigation items to generate links
            <NavLink
              key={item.name} // Use name as a unique key
              to={item.to} // Set the 'to' property for navigation
              className={({ isActive }) => // Conditionally apply classes based on active state
                `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'bg-gray-800 text-white' // Active link styling: dark background and white text
                    : 'text-gray-300 hover:bg-gray-700' // Inactive link styling with hover effect
                }`
              }
            >
              <item.icon className="mr-2 h-5 w-5" /> {/* Render the icon with a margin */}
              {item.name} {/* Display the name of the navigation item */}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header; // Export the Header component for use in other parts of the app
