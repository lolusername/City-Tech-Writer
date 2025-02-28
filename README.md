# The City Tech Writer

The City Tech Writer is a sophisticated web application that serves as a digital journal platform for student work at CUNY City Tech. Built with modern web technologies, this application showcases a robust architecture combining a powerful headless CMS backend with a performant frontend.

## Technical Architecture

### Frontend (Vue/Nuxt.js)
- Built with **Vue.js** and **Nuxt.js** for server-side rendering and optimal performance
- Implements modern component architecture with reusable Vue components
- Utilizes Vuex for state management
- Features dynamic routing for content pages
- Integrates Tailwind CSS for responsive and maintainable styling

### Backend (Sanity.io)
- Powered by **Sanity.io** as a headless CMS
- Implements a flexible content schema for various types of content:
  - Prose works
  - Image galleries
  - Author profiles
  - Multimedia content (YouTube, MP3)
- Real-time content updates through Sanity's GROQ query language
- Custom studio configuration for optimal content management

### Content Management
- Structured content model with customizable fields
- Support for rich text editing with portable text format
- Image handling with automatic transformations and optimization
- Flexible content relationships and references
- Custom dashboards for content organization

### API Integration
- Seamless integration with Sanity's Content API
- GraphQL API deployment for flexible data querying
- Real-time content updates through GROQ queries
- Optimized asset handling with Sanity's asset pipeline

## Key Features
- Server-side rendering for optimal performance and SEO
- Responsive image handling with automatic transformations
- Dynamic routing based on content structure
- Component-based architecture for maintainability
- Rich text editing with customizable formatting
- Multimedia content support (images, videos, audio)
- Author profile management
- Content categorization and tagging

## Development Setup

### Prerequisites
- Node.js (v12 or higher)
- npm or yarn
- Sanity CLI (`@sanity/cli`)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd City-Tech-Writer
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

- `npm run build`: Builds both frontend and backend
- `npm run dev`: Starts development servers for both frontend and backend
- `npm run format`: Formats code using prettier
- `npm run build-studio`: Builds the Sanity studio
- `npm run build-web`: Builds the frontend application
- `npm run graphql-deploy`: Deploys the GraphQL API
- `npm run lint`: Runs linting checks
- `npm test`: Runs test suite

## Project Structure

```
City-Tech-Writer/
├── web/                 # Frontend application (Nuxt.js)
│   ├── components/      # Vue components
│   ├── pages/          # Route pages
│   ├── plugins/        # Nuxt plugins
│   └── store/          # Vuex store
└── studio/             # Sanity Studio
    ├── schemas/        # Content schemas
    ├── plugins/        # Studio plugins
    └── config/         # Studio configuration
```

## Dependencies

### Frontend
- `nuxt`: ^2.6.2
- `@sanity/client`: ^2.0.0
- `@sanity/image-url`: ^0.140.22
- `vue-date-fns`: ^1.0.0
- `tailwindcss`: ^3.2.4

### Backend
- `@sanity/base`: ^2.0.0
- `@sanity/components`: ^2.0.0
- `@sanity/core`: ^2.0.0
- `@sanity/dashboard`: ^2.0.0

## License

This project is licensed under the [MIT License](LICENSE).
