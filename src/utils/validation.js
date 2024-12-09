export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for validating email format
  return emailRegex.test(email); // Returns true if email matches the pattern
};

export const validatePassword = (password) => {
  return password.length >= 8; // Ensures password is at least 8 characters long
};

export const validateName = (name) => {
  return name.trim().length >= 2; // Ensures name is at least 2 characters after trimming whitespace
};

// Function to get specific validation error messages for various fields
export const getValidationError = (field, value) => {
  switch (field) {
    case 'email':
      if (!value) return 'Email is required'; // Error message for missing email
      if (!validateEmail(value)) return 'Invalid email format'; // Error message for invalid email format
      return null; // No error

    case 'password':
      if (!value) return 'Password is required'; // Error message for missing password
      if (!validatePassword(value)) return 'Password must be at least 8 characters'; // Error message for short password
      return null; // No error

    case 'name':
      if (!value) return 'Name is required'; // Error message for missing name
      if (!validateName(value)) return 'Name must be at least 2 characters'; // Error message for short name
      return null; // No error

    default:
      return null; // No validation rule defined for this field
  }
};
