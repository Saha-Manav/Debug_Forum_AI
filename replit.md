# Overview

This is a full-stack debugging assistant application that helps users analyze code issues through chat-based interactions with AI. The system allows users to create projects, upload code files (logs, source code, etc.), and get intelligent debugging assistance through OpenAI integration. Built with React frontend and Express backend, it features a three-panel interface: project sidebar, chat area, and file panel for comprehensive debugging workflows.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite for build tooling
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent UI components
- **Routing**: Wouter for client-side routing with simple path-based navigation
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Layout**: Three-panel layout with resizable components - project sidebar, central chat area, and file panel

## Backend Architecture
- **Framework**: Express.js with TypeScript running in ESM mode
- **API Design**: RESTful API structure with endpoints for projects, files, and messages
- **File Handling**: Multer middleware for file upload processing with type validation for code files
- **Development**: Custom Vite integration for hot module replacement in development mode
- **Error Handling**: Centralized error middleware with structured error responses

## Data Storage
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **Schema Design**: Three main entities - projects, files, and messages with proper foreign key relationships
- **Development Fallback**: In-memory storage implementation for development/testing scenarios
- **Connection**: Neon Database serverless PostgreSQL with connection pooling

## Authentication & Session Management
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple
- **Security**: CORS configuration and credential handling for cross-origin requests
- **State Persistence**: Cookie-based session management for user state

## AI Integration
- **Service Provider**: OpenAI API integration for debugging assistance
- **Model**: Uses GPT-5 (as specified in code comments)
- **Features**: Contextual code analysis, conversation history, structured response format with suggestions and code snippets
- **Request Processing**: Combines user messages, uploaded files, and conversation history for comprehensive analysis

## File Management
- **Upload Constraints**: 10MB file size limit with validation for code file types
- **Supported Formats**: JavaScript, TypeScript, Python, Java, C/C++, HTML, CSS, JSON, XML, and plain text files
- **Storage**: File content stored in database with metadata (name, size, type)
- **Processing**: Server-side file validation and content extraction

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migration and schema management tools

## AI Services  
- **OpenAI API**: GPT-5 model for intelligent code analysis and debugging assistance

## UI Framework Dependencies
- **Radix UI**: Comprehensive set of accessible React components for complex UI interactions
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Pre-built component library based on Radix UI and Tailwind

## Build and Development Tools
- **Vite**: Frontend build tool with React plugin and development server
- **esbuild**: Backend bundling for production builds
- **tsx**: TypeScript execution engine for development server

## File Processing
- **Multer**: Express middleware for handling multipart/form-data file uploads

## Additional Libraries
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight React routing
- **Zod**: Schema validation integrated with Drizzle ORM
- **date-fns**: Date manipulation utilities