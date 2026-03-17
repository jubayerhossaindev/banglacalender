# Development Tools & Technologies

Complete documentation of all tools, libraries, and technologies used in the Bangla Calendar project.

## 📦 Build & Development Tools

### Vite

- **Version**: 8.0.0
- **Purpose**: Fast build tool and development server
- **Benefits**:
  - Lightning-fast HMR (Hot Module Replacement)
  - Optimized production builds
  - ESM-based development
- **Commands**:
  ```bash
  pnpm run dev      # Start dev server
  pnpm run build    # Build for production
  pnpm run preview  # Preview production build
  ```

### TypeScript

- **Version**: 5.9.3
- **Purpose**: Static type checking and type safety
- **Configuration**: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- **Benefits**:
  - Catch errors before runtime
  - Better IDE autocomplete
  - Self-documenting code
- **Key Settings**:
  - `strict: true` - Enable all strict type checking
  - `noImplicitAny: true` - Disallow implicit any
  - `noUnusedLocals: true` - Flag unused variables
- **Commands**:
  ```bash
  pnpm run type-check  # Check types without building
  ```

### Node.js & Package Manager

- **Node.js**: v20+ (via nvm)
- **Package Manager**: pnpm v9+
- **Why pnpm**:
  - Faster installation
  - Better disk space usage (linked packages)
  - Strict dependency management
  - Monorepo support

## 🎨 Frontend Framework & UI

### React

- **Version**: 19.2.4
- **Purpose**: UI library for building interactive components
- **Key Features**:
  - Component-based architecture
  - Virtual DOM for performance
  - Hooks for state management
- **React Router**: 7.13.1 - Client-side routing

### Tailwind CSS

- **Version**: 4.2.1
- **Purpose**: Utility-first CSS framework
- **Configuration**: `tailwind.config.ts`
- **Benefits**:
  - Rapid UI development
  - Consistent design system
  - Small production bundle
- **Plugins**:
  - `tailwindcss-animate` - Animation utilities
  - `@tailwindcss/typography` - Professional typography

### shadcn-ui

- **Version**: 4.0.8
- **Purpose**: High-quality React components built on Radix UI
- **Components Used**:
  - Accordion
  - Button
  - Label
  - Tooltip
  - Toast/Sonner
- **Benefits**:
  - Copy-paste components (not dependency)
  - Full customization
  - Dark mode support
- **Installation**: `npx shadcn@latest init`

### Radix UI

- **Version**: 1.4.3
- **Purpose**: Accessible component primitives
- **Used Components**:
  - `@radix-ui/react-accordion` 1.2.12 - Collapsible sections
  - `@radix-ui/react-label` 2.1.8 - Form labels
  - `@radix-ui/react-slot` 1.2.4 - Flexible compound components
  - `@radix-ui/react-toast` 1.2.15 - Toast notifications
  - `@radix-ui/react-tooltip` 1.2.8 - Hover information
- **Benefits**:
  - Built-in accessibility (ARIA)
  - No styling included (unopinionated)
  - Headless components

### Additional UI Libraries

#### Lucide React

- **Version**: 0.577.0
- **Purpose**: Beautiful, consistent SVG icons
- **Usage**: `import { IconName } from "lucide-react"`

#### Sonner

- **Version**: 2.0.7
- **Purpose**: Toast notifications library
- **Benefits**:
  - Beautiful toast UI
  - Easy to use API
  - Accessible

#### next-themes

- **Version**: 0.4.6
- **Purpose**: Theme management (light/dark mode)
- **Features**:
  - Persistent theme preference
  - System preference detection
  - SSR support

## 🧪 Testing & Quality

### Testing Framework

#### Vitest

- **Version**: 4.1.0
- **Purpose**: Fast unit testing framework
- **Configuration**: `vitest.config.ts`
- **Advantages**:
  - Compatible with Jest API
  - Faster than Jest
  - ESM native support
- **Commands**:
  ```bash
  pnpm run test           # Run tests once
  pnpm run test:watch    # Watch mode
  pnpm run test:coverage # Generate coverage
  ```

#### @vitest/coverage-v8

- **Version**: 4.1.0
- **Purpose**: Code coverage reporting
- **Formats**: HTML, LCOV, JSON, text
- **Targets**:
  - Lines: 80%
  - Functions: 80%
  - Branches: 80%
  - Statements: 80%

#### Testing Library

- **@testing-library/react**: 16.3.2
- **@testing-library/jest-dom**: 6.9.1
- **@testing-library/user-event**: 14.5.2
- **Purpose**: UI testing utilities
- **Best For**:
  - Testing user interactions
  - Component behavior testing
  - Accessibility testing
- **Commands**:
  ```bash
  pnpm run test       # Run tests
  pnpm run test:ui    # Interactive test UI
  pnpm run test:watch # Watch mode
  ```

#### Vitest UI

- **Version**: 4.1.0
- **Purpose**: Interactive test runner UI
- **Features**:
  - Visual test execution
  - Real-time test results
  - Code coverage visualization
- **Usage**:
  ```bash
  pnpm run test:ui
  ```

#### vitest-dom

- **Version**: 0.1.1
- **Purpose**: Additional DOM matchers for Vitest
- **Examples**:
  - `toBeInTheDocument()`
  - `toBeVisible()`
  - `toBeDisabled()`

### Code Quality

#### ESLint

- **Version**: 10.0.3
- **Configuration**: `eslint.config.js`
- **Plugins**:
  - `typescript-eslint` 8.57.1 - TypeScript linting
  - `eslint-plugin-react-hooks` 7.0.1 - React Hooks rules
  - `eslint-plugin-react-refresh` 0.5.2 - React Fast Refresh
  - `eslint-plugin-prettier` 5.5.5 - Prettier integration
  - `eslint-config-prettier` 10.1.8 - Prettier config
  - `eslint-plugin-import` 2.32.0 - Import checking
  - `eslint-plugin-jsx-a11y` 6.10.2 - Accessibility rules
- **Commands**:
  ```bash
  pnpm run lint      # Check code style
  pnpm run lint:fix  # Fix issues automatically
  ```

#### Prettier

- **Version**: 3.8.1
- **Configuration**: `.prettierrc`
- **Features**:
  - Opinionated code formatter
  - Auto-fixes formatting on save
  - Consistent style across project
- **Commands**:
  ```bash
  pnpm run format        # Format code
  pnpm run format:check  # Check formatting
  ```

#### Type Checking

- **TypeScript Compiler**: Built-in type checking
- **Commands**:
  ```bash
  pnpm run type-check  # Check types without building
  ```

## 📝 Git & Development Workflow

### Husky

- **Version**: 9.1.7
- **Purpose**: Git hooks framework
- **Hooks Setup**:
  - `.husky/pre-commit` - Run linting and formatting
  - `.husky/commit-msg` - Validate commit messages
- **Usage**: Automatic (no manual setup needed after install)

### lint-staged

- **Version**: 16.4.0
- **Purpose**: Run linters on staged files
- **Configuration**: `.lintstagedrc`
- **Runs**:
  - ESLint fix on TypeScript files
  - Prettier format on all files
- **Benefit**: Only checks changed code

### commitlint

- **Version**: 20.5.0
- **Configuration**: `commitlint.config.js`
- **Purpose**: Validate commit message format
- **Standard**: Conventional Commits
- **Valid Types**:
  - `feat` - New feature
  - `fix` - Bug fix
  - `docs` - Documentation
  - `style` - Formatting
  - `refactor` - Code refactoring
  - `perf` - Performance
  - `test` - Tests
  - `build` - Build changes
  - `ci` - CI/CD changes
  - `chore` - Maintenance

## �️ Utility & Scripting Tools

### concurrently

- **Version**: 10.0.1
- **Purpose**: Run multiple npm scripts concurrently
- **Usage**:
  ```bash
  concurrently "pnpm run dev" "pnpm run test:watch"
  ```
- **Benefits**:
  - Run independent tasks in parallel
  - Better developer experience
  - Faster workflow

### npm-run-all

- **Version**: 4.1.5
- **Purpose**: Run multiple npm scripts sequentially or in parallel
- **Usage**:
  ```bash
  npm-run-all --parallel dev test:watch
  npm-run-all --sequential build test
  ```

### tsx

- **Version**: 4.16.2
- **Purpose**: TypeScript executor - run TS files directly
- **Usage**:
  ```bash
  tsx src/script.ts
  ```
- **Benefits**:
  - No build step needed
  - Direct TypeScript execution
  - Great for utilities and scripts

### rimraf

- **Version**: 6.0.1
- **Purpose**: Cross-platform remove files/directories
- **Usage**:
  ```bash
  rimraf dist coverage node_modules
  pnpm run clean  # Uses rimraf
  ```
- **Benefits**:
  - Works on Windows, macOS, Linux
  - Safer than rm -rf
  - Recursive directory removal

### taze

- **Version**: 19.10.0
- **Purpose**: Interactive dependency updater
- **Usage**:
  ```bash
  pnpm exec taze
  ```
- **Features**:
  - Interactive update prompts
  - Check outdated packages
  - Update with yes/no prompts

## �🔄 CI/CD & Automation

### GitHub Actions

- **Location**: `.github/workflows/`
- **Workflows**:
  1. **ci.yml** - Main CI pipeline
     - Lint & format checks
     - Type checking
     - Unit tests with coverage
     - Build verification
  2. **pr-validation.yml** - Pull request checks
     - Commit message validation
     - Full quality checks
     - Automated comments
  3. **quality.yml** - Code quality analysis
     - SonarCloud integration
     - Coverage upload
  4. **dependencies.yml** - Dependency checks
     - Outdated package detection
     - Security vulnerability scan
  5. **release.yml** - Release automation
     - Build and publish on tag

### SonarCloud (Optional)

- **Configuration**: `sonar-project.properties`
- **Purpose**: Comprehensive code quality analysis
- **Features**:
  - Code smell detection
  - Vulnerability scanning
  - Technical debt tracking
  - Coverage tracking

### Codecov

- **Integration**: Via GitHub Actions
- **Purpose**: Coverage report tracking
- **Benefit**: Historical coverage trends

## 📚 Data Handling & Utilities

### Date Utilities

- **date-fns**: 4.1.0 - Date utility functions
- **react-day-picker**: 9.14.0 - Calendar date picker

### Form & Validation

- **React Hook Form**: 7.71.2
  - Performant form state management
  - Minimal re-renders
  - Easy integration with validation

- **Zod**: 4.3.6
  - TypeScript-first schema validation
  - Runtime type checking
  - Error handling

### UI Utilities

- **class-variance-authority**: 0.7.1
  - Type-safe component variants
  - Tailwind CSS class generation

- **tailwind-merge**: 3.5.0
  - Merge Tailwind CSS classes intelligently
  - Prevents class conflicts

- **clsx**: 2.1.1
  - Utility for conditional classes
  - Works with objects and arrays

## 🌐 Additional Libraries

### Animation

- **tw-animate-css**: 1.4.0 - Tailwind animation utilities
- **tailwindcss-animate**: 1.0.7 - Additional animations

### Typography & Fonts

- **@fontsource-variable/geist**: 5.2.8
  - Custom font (Geist)
  - Variable font support

- **postcss**: 8.5.8 - CSS transformation framework

- **cross-env**: 10.1.0 - Cross-platform environment variable setter

### Development Dependencies

- **@vitejs/plugin-react-swc**: 4.3.0
  - Fast JSX transformation using SWC

- **@types/** packages - TypeScript type definitions
  - @types/node 25.5.0 - Node.js types
  - @types/react 19.2.14 - React types
  - @types/react-dom 19.2.3 - React DOM types

- **globals**: 17.4.0 - Global browser types

- **jsdom**: 29.0.0 - JavaScript DOM implementation for testing

- **taze**: 19.10.0 - Interactive dependency updater

## 📋 Configuration Files

| File                       | Purpose                           |
| -------------------------- | --------------------------------- |
| `package.json`             | Project metadata and dependencies |
| `tsconfig.json`            | TypeScript main configuration     |
| `tsconfig.app.json`        | App-specific TypeScript settings  |
| `tsconfig.node.json`       | Build tool TypeScript settings    |
| `vite.config.ts`           | Vite build configuration          |
| `vitest.config.ts`         | Vitest testing configuration      |
| `tailwind.config.ts`       | Tailwind CSS configuration        |
| `eslint.config.js`         | ESLint rules configuration        |
| `.prettierrc`              | Prettier formatting rules         |
| `.prettierignore`          | Prettier exceptions               |
| `.editorconfig`            | Editor configuration              |
| `postcss.config.js`        | PostCSS configuration             |
| `commitlint.config.js`     | Commit message validation         |
| `components.json`          | shadcn-ui configuration           |
| `sonar-project.properties` | SonarCloud analysis config        |

## 🔧 Installation & Setup

### First Time Setup

```bash
# Clone and enter project
git clone <repo-url>
cd banglacalender

# Install dependencies
pnpm install

# Setup git hooks
pnpm prepare

# Start development
pnpm run dev
```

### Updating Dependencies

```bash
# Check outdated packages
pnpm outdated

# Update specific package
pnpm update package-name

# Update all packages
pnpm update -r
```

## 📚 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [GitHub Actions](https://github.com/features/actions)

## 🚀 Performance Optimization

### Current Optimizations

- Tree-shaking with ES modules
- Code splitting via Vite
- Lazy loading components
- Tailwind CSS purging
- SWC for fast JSX transformation

### Future Optimizations

- React.memo for component memoization
- useMemo/useCallback for expensive operations
- Image optimization
- Bundle size monitoring

---

**Last Updated**: March 2026
**Version**: 1.0.0
