import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  UsersIcon,
  KeyIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  // { name: 'Dashboard', to: '/dashboard', icon: HomeIcon },
  { name: 'Users', to: '/users', icon: UsersIcon },
  { name: 'Roles', to: '/roles', icon: KeyIcon },
  { name: 'Permissions', to: '/permissions', icon: ShieldCheckIcon },
];

function Header() {
  return (
    <header className="bg-gray-900 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-white">RBAC System</h1>
        <nav className="flex space-x-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`
              }
            >
              <item.icon className="mr-2 h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
