# Product Inventory Management

A production-style Product Inventory Management application built with **React, TypeScript, Vite, React Query, Zustand, Axios, Tailwind CSS, and Zod**.

The application demonstrates authentication, role-based authorization, reusable components, API integration, search, sorting, pagination, and production-level project architecture.

---

# Tech Stack

- React
- TypeScript
- Vite
- React Router DOM
- Axios
- TanStack React Query
- Zustand
- Tailwind CSS
- Zod
- ESLint

---

# Features

- Authentication
- Protected Routes
- Role-Based Authorization
- Product Listing
- Product Details
- Product Edit (Manager Only)
- Product Search
- Product Sorting
- Pagination
- Axios Interceptors
- Global API Error Handling
- Loading State
- Empty State
- Error State
- Reusable Shared Components
- TypeScript Type Safety
- Environment Variable Support

---

# Project Setup

## Clone Repository

```bash
git clone <repository-url>
cd product-inventory
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

Example:

```env
VITE_API_BASE_URL=https://dummyjson.com
```

---

## Start Development Server

```bash
npm run dev
```

Application will start on:

```
http://localhost:5173
```

---

# Available Scripts

### Development

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

# Build Verification

The project has been verified successfully with:

- ✅ npm run build
- ✅ npm run lint
- ✅ npm run preview

---

# Environment Variables

| Variable | Description |
|----------|-------------|
| VITE_API_BASE_URL | Base URL for DummyJSON API |

---

# Route Access Matrix

| Route | Viewer | Manager |
|--------|:------:|:-------:|
| /login | ✅ | ✅ |
| /products | ✅ | ✅ |
| /products/:id | ✅ | ✅ |
| /products/:id/edit | ❌ | ✅ |
| /403 | ✅ | ✅ |
| * | ✅ | ✅ |

---

# Role Permission Matrix

| Feature | Viewer | Manager |
|----------|:------:|:-------:|
| Login | ✅ | ✅ |
| View Product List | ✅ | ✅ |
| Search Products | ✅ | ✅ |
| Sort Products | ✅ | ✅ |
| View Product Details | ✅ | ✅ |
| Edit Product | ❌ | ✅ |

---

# Project Architecture

```
src
│
├── app
│
├── features
│   ├── auth
│   └── products
│
├── lib
│   └── axios
│
├── shared
│   ├── components
│   ├── constants
│   ├── hooks
│   ├── layouts
│   ├── providers
│   ├── routes
│   ├── types
│   └── utils
│
├── assets
│
├── App.tsx
│
└── main.tsx
```

---

# Data Flow

```
User
   │
   ▼
React Component
   │
   ▼
Custom Hook
   │
   ▼
React Query
   │
   ▼
Axios Client
   │
   ▼
Axios Interceptor
   │
   ▼
DummyJSON API
   │
   ▼
Mapped Response
   │
   ▼
UI
```

---

# Shared Components

- Button
- Input
- Select
- Pagination
- Loader
- QueryState
- ErrorState
- EmptyState

---

# Authentication Flow

```
Login
   │
   ▼
Validate Credentials
   │
   ▼
Store User (Zustand)
   │
   ▼
Protected Route
   │
   ▼
Role Permission Check
   │
   ▼
Render Page / Redirect to 403
```

---

# API Integration

The application uses **DummyJSON REST API**.

Base URL

```
https://dummyjson.com
```

Main Endpoints

```
POST /auth/login

GET /products

GET /products/search

GET /products/:id

PUT /products/:id
```

---

# API Limitations

This project uses DummyJSON, which has some limitations:

- Product updates are simulated.
- Data is not permanently stored.
- Authentication is mock-based.
- Search and sorting depend on DummyJSON API support.

---

# Error Handling

The application includes:

- Axios Response Interceptors
- Centralized API Error Mapping
- Custom ApiError Class
- Network Error Handling
- Loading State
- Empty State
- Retry Support
- Unauthorized Handling
- Forbidden Handling

---

# Project Structure Summary

```
app
features
lib
shared
assets
```

Feature modules contain:

- components
- hooks
- pages
- services
- store
- types

Shared module contains:

- reusable components
- constants
- layouts
- hooks
- utilities
- common types

---

# Production Practices

- Feature-Based Folder Structure
- Reusable Shared Components
- Centralized Axios Client
- React Query Data Fetching
- Zustand State Management
- Protected Routes
- Permission-Based Authorization
- Environment Variables
- TypeScript
- ESLint
- Production Build Validation

---

# Future Improvements

- Create Product
- Delete Product
- Unit Testing
- Toast Notifications
- Dark Theme
- Docker
- CI/CD Pipeline

---

# Author

**Vaishnavi Thakare**