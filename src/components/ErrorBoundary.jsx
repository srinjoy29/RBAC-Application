import { Component } from 'react'

// Define the ErrorBoundary class component
class ErrorBoundary extends Component {
  // Constructor to initialize the state
  constructor(props) {
    super(props)
    this.state = { hasError: false } // Initialize with no error
  }

  // Update state if an error is encountered
  static getDerivedStateFromError(error) {
    return { hasError: true } // Set hasError to true when an error occurs
  }

  // Log error details for debugging
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  // Render the fallback UI or children components
  render() {
    if (this.state.hasError) {
      // Display fallback UI when an error occurs
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold text-gray-900">Something went wrong</h2>
            <p className="text-gray-600">Please try refreshing the page</p>
            <button
              onClick={() => window.location.reload()} // Reload the page on button click
              className="btn btn-primary"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    // Render children components if no error occurs
    return this.props.children
  }
}

// Export the ErrorBoundary component
export default ErrorBoundary
