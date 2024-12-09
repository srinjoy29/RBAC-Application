import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

function Sidebar() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-sm">
      <div className="px-6 py-4 border-b">
        <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
      </div>
      <div className="px-6 py-4">
        <span className="block text-gray-600 mb-4">Welcome, {user?.name}</span>
        <button
          onClick={handleLogout}
          className="btn btn-secondary"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
