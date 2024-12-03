
# Standard Operating Procedure (SOP) for Best Coding Practices

## Objective
This SOP outlines the best practices to follow when using the tech stack comprising **Astro**, **React**, **Tailwind CSS**, and **Directus CMS** to ensure clean, maintainable, and efficient code.

---

## 1. Project Structure and Organization

### 1.1 Directory Structure
- Follow a modular folder structure:
  ```
  /src
    /components
    /pages
    /layouts
    /styles
    /hooks
    /utils
  /public
  /directus
  ```
- Keep Astro pages in the `/pages` directory.
- Store reusable React components in `/components`.
- Organize Tailwind utilities or custom CSS in `/styles`.

### 1.2 File Naming
- Use **PascalCase** for React components: `MyComponent.jsx`.
- Use **kebab-case** for CSS/Tailwind files: `custom-styles.css`.
- Name utility files descriptively: `dateFormatter.js`.

---

## 2. Coding Standards

### 2.1 JavaScript/React
- Use **ESLint** with Prettier for consistent formatting.
- Adhere to the **Airbnb JavaScript Style Guide** with React-specific rules.
- Avoid inline styles; prefer Tailwind CSS for styling.
- Ensure all components are functional components unless stateful class components are strictly necessary.
- Use PropTypes or TypeScript for type safety.

#### Example:
```jsx
import PropTypes from 'prop-types';

const Button = ({ label, onClick }) => (
  <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
```

### 2.2 Astro
- Use `.astro` files for page templates to keep HTML/CSS/JavaScript modular.
- Minimize direct React imports in Astro files unless dynamic functionality is required.
- Leverage Astro's **Markdown (.md)** or **MDX** support for static content.

### 2.3 Tailwind CSS
- Use Tailwind classes directly in JSX or Astro files.
- For repetitive styles, create reusable utility classes in `tailwind.config.js`.
- Keep custom CSS in a separate file only if absolutely necessary.

#### Example:
```jsx
<div className="container mx-auto p-4">
  <h1 className="text-2xl font-bold">Welcome</h1>
</div>
```

---

## 3. Integration with Directus CMS

### 3.1 Data Fetching
- Use the **Directus SDK** for API interactions.
- Store API logic in reusable hooks in the `/hooks` directory.

#### Example Hook:
```javascript
import { Directus } from '@directus/sdk';

const directus = new Directus('<API_URL>');

export const useFetchItems = async (collection) => {
  const items = await directus.items(collection).readByQuery();
  return items;
};
```

### 3.2 Security
- Store API keys and sensitive data in environment variables.
- Use `.env` files and configure Astro for environment variable usage:
  ```
  DIRECTUS_API_URL=<your-api-url>
  DIRECTUS_API_TOKEN=<your-api-token>
  ```

### 3.3 CMS Best Practices
- Define a schema in Directus that reflects the required content structure.
- Use proper field validation to minimize frontend validation.

---

## 4. Performance Optimization

### 4.1 Code Splitting
- Leverage Astro’s **islands architecture** for lightweight pages.
- Dynamically import React components only when needed:
  ```javascript
  import dynamic from 'next/dynamic';
  const DynamicComponent = dynamic(() => import('./MyComponent'));
  ```

### 4.2 CSS Optimization
- Purge unused Tailwind CSS styles using `purge` settings in `tailwind.config.js`.
- Use `@apply` in Tailwind to consolidate styles when needed.

### 4.3 Lazy Loading
- Lazy load images and assets:
  ```jsx
  <img src="image.jpg" loading="lazy" alt="description" />
  ```
- Implement React’s lazy loading for components.

---

## 5. Testing and Quality Assurance

### 5.1 Testing Frameworks
- Use **Jest** for unit tests.
- Use **React Testing Library** for testing React components.

#### Example Test:
```javascript
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with label', () => {
  render(<Button label="Click Me" onClick={() => {}} />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});
```

### 5.2 Content Testing
- Verify data retrieved from Directus CMS matches the schema and is displayed correctly on the frontend.

---

## 6. Version Control

### 6.1 Git Workflow
- Use a branching strategy like **Git Flow**:
  - `main`: Production-ready code.
  - `develop`: Integrates features before pushing to main.
  - `feature/*`: For individual features or tasks.

### 6.2 Commit Messages
- Follow the Conventional Commits specification:
  ```
  feat: add new feature
  fix: resolve bug in API integration
  chore: update dependencies
  ```

---

## 7. Deployment

### 7.1 Build Optimization
- Use Astro's `build` command for static builds.
  ```bash
  npm run build
  ```
- Optimize Tailwind for production:
  ```bash
  NODE_ENV=production npx tailwindcss -o build.css
  ```

### 7.2 Hosting
- Deploy Astro applications on **Vercel**, **Netlify**, or any other static hosting provider.
- Set up CI/CD pipelines to automate builds and deployments.

---

## 8. Documentation

### 8.1 Component Documentation
- Document React components with **JSDoc** or inline comments.
- Provide usage examples in README or Storybook.

### 8.2 Tech Stack Documentation
- Maintain a central README file with setup instructions for Astro, React, Tailwind, and Directus.
- Link to external documentation for each tool.

---

## Conclusion
Adhering to these best practices will help maintain consistency, efficiency, and scalability across projects using the Astro, React, Tailwind CSS, and Directus CMS tech stack. Regularly review and update this SOP to incorporate new tools or techniques.
