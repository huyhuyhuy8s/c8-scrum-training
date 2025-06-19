// Sample expense data for development and testing
// Enhanced sample data with more diversity and better status distribution

export const sampleExpenseData = [
  // Draft expenses (3 items)
  {
    id: 1,
    date: "2025-06-18",
    employee: {
      name: "Alex Thompson",
      department: "IT",
    },
    category: "Software License",
    amount: "$299.99",
    status: "draft",
    statusText: "Draft",
  },
  {
    id: 2,
    date: "2025-06-17",
    employee: {
      name: "Maria Garcia",
      department: "Design",
    },
    category: "Office Supplies",
    amount: "$89.50",
    status: "draft",
    statusText: "Draft",
  },
  {
    id: 3,
    date: "2025-06-16",
    employee: {
      name: "James Wilson",
      department: "Sales",
    },
    category: "Transportation",
    amount: "$145.75",
    status: "draft",
    statusText: "Draft",
  },

  // Pending expenses (5 items)
  {
    id: 4,
    date: "2025-06-15",
    employee: {
      name: "Sarah Johnson",
      department: "Marketing",
    },
    category: "Advertising",
    amount: "$1,250.00",
    status: "pending",
    statusText: "Pending",
  },
  {
    id: 5,
    date: "2025-06-14",
    employee: {
      name: "Michael Chen",
      department: "Engineering",
    },
    category: "Equipment",
    amount: "$2,150.00",
    status: "pending",
    statusText: "Pending",
  },
  {
    id: 6,
    date: "2025-06-13",
    employee: {
      name: "Lisa Rodriguez",
      department: "HR",
    },
    category: "Training",
    amount: "$850.00",
    status: "pending",
    statusText: "Pending",
  },
  {
    id: 7,
    date: "2025-06-12",
    employee: {
      name: "David Park",
      department: "Finance",
    },
    category: "Meals",
    amount: "$95.40",
    status: "pending",
    statusText: "Pending",
  },
  {
    id: 17,
    date: "2025-05-25",
    employee: {
      name: "Daniel Kim",
      department: "IT",
    },
    category: "Software License",
    amount: "$199.99",
    status: "pending",
    statusText: "Pending",
  },

  // Approved expenses (9 items)
  {
    id: 8,
    date: "2025-06-11",
    employee: {
      name: "Emma Davis",
      department: "IT",
    },
    category: "Software License",
    amount: "$399.00",
    status: "approved",
    statusText: "Approved",
  },
  {
    id: 9,
    date: "2025-06-10",
    employee: {
      name: "Robert Taylor",
      department: "Operations",
    },
    category: "Transportation",
    amount: "$675.25",
    status: "approved",
    statusText: "Approved",
  },
  {
    id: 10,
    date: "2025-06-09",
    employee: {
      name: "Jennifer Lee",
      department: "Marketing",
    },
    category: "Accommodation",
    amount: "$450.00",
    status: "approved",
    statusText: "Approved",
  },
  {
    id: 11,
    date: "2025-06-08",
    employee: {
      name: "Kevin Brown",
      department: "Sales",
    },
    category: "Meals",
    amount: "$125.75",
    status: "approved",
    statusText: "Approved",
  },
  {
    id: 12,
    date: "2025-06-07",
    employee: {
      name: "Sophie Miller",
      department: "Design",
    },
    category: "Office Supplies",
    amount: "$189.99",
    status: "approved",
    statusText: "Approved",
  },
  {
    id: 16,
    date: "2025-05-30",
    employee: {
      name: "Anna White",
      department: "Operations",
    },
    category: "Training",
    amount: "$549.00",
    status: "approved",
    statusText: "Approved",
  },
  {
    id: 18,
    date: "2025-05-20",
    employee: {
      name: "Grace Liu",
      department: "Marketing",
    },
    category: "Advertising",
    amount: "$2,800.00",
    status: "approved",
    statusText: "Approved",
  },
  {
    id: 19,
    date: "2025-04-15",
    employee: {
      name: "Peter Johnson",
      department: "Sales",
    },
    category: "Accommodation",
    amount: "$650.00",
    status: "approved",
    statusText: "Approved",
  },
  {
    id: 20,
    date: "2025-03-10",
    employee: {
      name: "Nina Patel",
      department: "Design",
    },
    category: "Equipment",
    amount: "$1,100.00",
    status: "approved",
    statusText: "Approved",
  },

  // Rejected expenses (3 items)
  {
    id: 13,
    date: "2025-06-06",
    employee: {
      name: "Tom Anderson",
      department: "Engineering",
    },
    category: "Equipment",
    amount: "$3,500.00",
    status: "rejected",
    statusText: "Rejected",
  },
  {
    id: 14,
    date: "2025-06-05",
    employee: {
      name: "Rachel Green",
      department: "HR",
    },
    category: "Entertainment",
    amount: "$750.00",
    status: "rejected",
    statusText: "Rejected",
  },
  {
    id: 15,
    date: "2025-06-04",
    employee: {
      name: "Chris Martinez",
      department: "Finance",
    },
    category: "Transportation",
    amount: "$1,200.00",
    status: "rejected",
    statusText: "Rejected",
  },
];

// Sample notification data for development and testing
// Following the API response structure from requirements
export const sampleNotificationData = [
  // Employee notifications - status changes from managers/finance
  {
    id: 1,
    action: "Expense approved",
    timestamp: "2025-06-19T08:30:00.000Z",
    requestId: 8,
    request: {
      id: 8,
      employeeId: 1,
      description: "Client meeting transportation",
      amount: 45.50,
      status: "APPROVED",
      imageUrl: null,
      createdAt: "2025-06-18T14:20:00.000Z",
      approvedById: 2,
      rejectedReason: null,
      finalApprovedById: null,
      employee: {
        id: 1,
        name: "Current User",
        department: "Marketing",
        role: "EMPLOYEE",
        email: "employee@example.com"
      }
    }
  },
  {
    id: 2,
    action: "Expense rejected",
    timestamp: "2025-06-19T07:15:00.000Z",
    requestId: 12,
    request: {
      id: 12,
      employeeId: 1,
      description: "Office supplies - unauthorized vendor",
      amount: 89.99,
      status: "REJECTED",
      imageUrl: null,
      createdAt: "2025-06-18T16:45:00.000Z",
      approvedById: null,
      rejectedReason: "Please use approved vendors only",
      finalApprovedById: null,
      employee: {
        id: 1,
        name: "Current User",
        department: "Marketing",
        role: "EMPLOYEE",
        email: "employee@example.com"
      }
    }
  },
  {
    id: 3,
    action: "Expense under review",
    timestamp: "2025-06-19T06:45:00.000Z",
    requestId: 15,
    request: {
      id: 15,
      employeeId: 1,
      description: "Conference attendance fees",
      amount: 299.00,
      status: "PENDING",
      imageUrl: null,
      createdAt: "2025-06-19T06:30:00.000Z",
      approvedById: null,
      rejectedReason: null,
      finalApprovedById: null,
      employee: {
        id: 1,
        name: "Current User",
        department: "Marketing",
        role: "EMPLOYEE",
        email: "employee@example.com"
      }
    }
  },

  // Manager notifications - new submissions from employees
  {
    id: 4,
    action: "New expense submitted",
    timestamp: "2025-06-19T09:20:00.000Z",
    requestId: 16,
    request: {
      id: 16,
      employeeId: 3,
      description: "Uber to client meeting",
      amount: 32.50,
      status: "PENDING",
      imageUrl: null,
      createdAt: "2025-06-19T09:15:00.000Z",
      approvedById: null,
      rejectedReason: null,
      finalApprovedById: null,
      employee: {
        id: 3,
        name: "Sarah Johnson",
        department: "Marketing",
        role: "EMPLOYEE",
        email: "sarah.johnson@example.com"
      }
    }
  },
  {
    id: 5,
    action: "New expense submitted",
    timestamp: "2025-06-19T08:55:00.000Z",
    requestId: 17,
    request: {
      id: 17,
      employeeId: 4,
      description: "Office lunch for team meeting",
      amount: 85.75,
      status: "PENDING",
      imageUrl: null,
      createdAt: "2025-06-19T08:50:00.000Z",
      approvedById: null,
      rejectedReason: null,
      finalApprovedById: null,
      employee: {
        id: 4,
        name: "Michael Chen",
        department: "Engineering",
        role: "EMPLOYEE",
        email: "michael.chen@example.com"
      }
    }
  },
  {
    id: 6,
    action: "Created request",
    timestamp: "2025-06-18T16:30:00.000Z",
    requestId: 18,
    request: {
      id: 18,
      employeeId: 5,
      description: "Software licensing for development tools",
      amount: 199.99,
      status: "PENDING",
      imageUrl: null,
      createdAt: "2025-06-18T16:25:00.000Z",
      approvedById: null,
      rejectedReason: null,
      finalApprovedById: null,
      employee: {
        id: 5,
        name: "Lisa Rodriguez",
        department: "Engineering",
        role: "EMPLOYEE",
        email: "lisa.rodriguez@example.com"
      }
    }
  }
];

export default sampleExpenseData;
