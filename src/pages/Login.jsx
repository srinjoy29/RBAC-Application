import { useState } from "react"; // Import useState for state management
import { useNavigate, Link } from "react-router-dom"; // Import navigation and Link for routing
import { auth } from "../services/api"; // Import authentication service
import useAuthStore from "../store/authStore"; // Import custom auth store for state management

// Define Login component
function Login() {
  const navigate = useNavigate(); // Navigation hook for route changes
  const setAuth = useAuthStore((state) => state.setAuth); // Access auth store to set user and token
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  }); // State for form data
  const [error, setError] = useState(""); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading indicator

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Clear any previous errors
    setLoading(true); // Set loading state

    try {
      const { user, token } = await auth.login(formData); // Attempt login
      setAuth(user, token); // Store user and token in auth store
      navigate("/users"); // Navigate to the users page upon success
    } catch (err) {
      setError(err.message || "Failed to login"); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Container for login form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-extrabold text-center text-blue-600 mb-4">Welcome Back</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:text-blue-500 transition-colors">
            Sign up now
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Error display */}
          {error && (
            <div className="bg-red-50 p-4 border border-red-100 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Email input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : null}
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Test account credentials */}
        <div className="mt-6 text-left">
          <p className="font-semibold text-gray-700">Test Accounts:</p>
          <div className="bg-gray-100 p-4 rounded-md mt-2">
            {[{ email: "admin@example.com", password: "admin" }].map((account, index) => (
              <div key={index} className="flex justify-between py-1 text-sm text-gray-600 hover:bg-gray-200">
                <span>{account.email}</span>
                <span>{account.password}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} RBAC System. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Login;
