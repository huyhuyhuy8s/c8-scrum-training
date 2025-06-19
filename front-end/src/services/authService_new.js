/**
 * Authentication Service - Mock implementation for local development
 * @author GitHub Copilot
 */

// Mock user database - stored locally
const MOCK_USERS = [
  {
    id: 1,
    name: 'John Doe',
    email: 'admin@example.com',
    password: 'admin123',
    department: 'IT',
    role: 'admin'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'employee@example.com',
    password: 'employee123',
    department: 'Marketing',
    role: 'employee'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'manager@example.com',
    password: 'manager123',
    department: 'Sales',
    role: 'manager'
  },
  {
    id: 4,
    name: 'Alice Wilson',
    email: 'finance@example.com',
    password: 'finance123',
    department: 'Finance',
    role: 'financial officer'
  }
];

/**
 * Generate a mock JWT token
 * @param {Object} user - User object
 * @returns {string} Mock JWT token
 */
const generateMockToken = (user) => {
  const tokenData = {
    id: user.id,
    email: user.email,
    role: user.role,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
  };

  // Simple base64 encoding for mock token (NOT secure, only for development)
  return 'mock_' + btoa(JSON.stringify(tokenData));
};

/**
 * Simulate API delay
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} Promise that resolves after delay
 */
const mockDelay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Login user - Mock implementation
 * @param {Object} credentials - The login credentials
 * @param {string} credentials.email - User email
 * @param {string} credentials.password - User password
 * @returns {Promise<Object>} The login response with user data and token
 * @throws {Error} Authentication errors
 */
export const loginUser = async (credentials) => {
  try {
    const { email, password } = credentials;

    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Simulate API delay
    await mockDelay();

    // Find user in mock database
    const user = MOCK_USERS.find(u =>
      u.email.toLowerCase() === email.trim().toLowerCase() &&
      u.password === password
    );

    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Generate mock token
    const token = generateMockToken(user);

    // Store token and user info in localStorage
    localStorage.setItem('authToken', token);
    localStorage.setItem('currentUser', JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email,
      department: user.department,
      role: user.role
    }));

    return {
      success: true,
      message: 'Login successful',
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        department: user.department,
        role: user.role
      }
    };

  } catch (error) {
    throw error;
  }
};

/**
 * Register new user - Mock implementation
 * @param {Object} userData - The user data for registration
 * @param {string} userData.name - User's full name
 * @param {string} userData.email - User's email
 * @param {string} userData.password - User's password
 * @param {string} userData.department - User's department
 * @param {string} userData.role - User's role (employee, manager, financial officer, admin)
 * @returns {Promise<Object>} The created user data
 * @throws {Error} Validation errors or registration errors
 */
export const registerUser = async (userData) => {
  try {
    const { name, email, password, department, role } = userData;

    if (!name || !email || !password || !department || !role) {
      throw new Error('All fields are required');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address');
    }

    // Validate password strength
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }

    // Validate role
    const validRoles = ['employee', 'manager', 'financial officer', 'admin'];
    if (!validRoles.includes(role)) {
      throw new Error('Invalid role selected');
    }

    // Simulate API delay
    await mockDelay();

    // Check if email already exists
    const existingUser = MOCK_USERS.find(u =>
      u.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (existingUser) {
      throw new Error('Email address is already registered');
    }

    // Create new user (in real app, this would be saved to database)
    const newUser = {
      id: MOCK_USERS.length + 1,
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      password: String(password),
      department: String(department).trim(),
      role: String(role)
    };

    // Add to mock database (this is temporary and will reset on page refresh)
    MOCK_USERS.push(newUser);

    return {
      success: true,
      message: 'User created successfully',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        department: newUser.department,
        role: newUser.role
      }
    };

  } catch (error) {
    throw error;
  }
};

/**
 * Logout user
 * @returns {Promise<void>}
 */
export const logoutUser = async () => {
  try {
    // Clear token and user data from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');

    // Simulate API delay
    await mockDelay(200);

  } catch (error) {
    // Even if logout fails, we still clear local storage
    console.error('Logout error:', error);
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
  }
};

/**
 * Check if user is authenticated
 * @returns {boolean} True if user has valid token
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  if (!token || !token.startsWith('mock_')) {
    return false;
  }

  try {
    // Decode the token to check expiration
    const tokenData = JSON.parse(atob(token.replace('mock_', '')));
    const currentTime = Math.floor(Date.now() / 1000);

    // Check if token is expired
    if (tokenData.exp < currentTime) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('currentUser');
      return false;
    }

    return true;
  } catch (error) {
    // Invalid token format
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    return false;
  }
};

/**
 * Get stored authentication token
 * @returns {string|null} The auth token or null
 */
export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

/**
 * Get current user information
 * @returns {Object|null} User info or null
 */
export const getCurrentUser = () => {
  try {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

/**
 * Get all mock users (for development purposes)
 * @returns {Array} Array of mock users (without passwords)
 */
export const getMockUsers = () => {
  return MOCK_USERS.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    department: user.department,
    role: user.role
  }));
};

// Default export
export default {
  loginUser,
  registerUser,
  logoutUser,
  isAuthenticated,
  getAuthToken,
  getCurrentUser,
  getMockUsers
};
