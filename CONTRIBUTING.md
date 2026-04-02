# Contributing to Posty-app

Thank you for your interest in contributing to Posty! We welcome contributions of all kinds—whether it's adding new posts, improving documentation, or fixing bugs.

## 📝 Adding a New Post

### Quick Start

Posts live in the `posts/` directory as Markdown (`.md`) files. Each post should include metadata and content.

### Post Structure

Each post file should follow this format:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
author: "Your Name"
tags: ["tag1", "tag2"]
excerpt: "A brief summary of your post (1-2 sentences)"
---

# Your Post Title

Your post content goes here in Markdown format.
```

### Filename Rules

- Use URL-friendly slugs: **lowercase letters, numbers, and hyphens only** (no spaces or special characters)
- Examples: `my-first-post.md`, `getting-started.md`, `2026-04-01-awesome-post.md`
- Recommended pattern: `YYYY-MM-DD-your-slug.md` for date-based organization

### Post Metadata (Frontmatter)

The frontmatter section at the top of your file should include:

| Field | Required | Example | Notes |
|-------|----------|---------|-------|
| `title` | ✅ Yes | `"My First Post"` | The title of your post |
| `date` | ✅ Yes | `"2026-04-01"` | Publication date in YYYY-MM-DD format |
| `author` | ⭕ Recommended | `"John Doe"` | Your name or username |
| `tags` | ⭕ Optional | `["tutorial", "beginner"]` | Relevant topics for categorization |
| `excerpt` | ⭕ Recommended | `"Learn how to..."` | Brief summary shown in previews |

### Example Post

```markdown
---
title: "Getting Started with Posty"
date: "2026-04-01"
author: "Jane Doe"
tags: ["tutorial", "beginner", "guide"]
excerpt: "A step-by-step guide to creating and publishing your first post on Posty."
---

# Getting Started with Posty

Welcome! Let's create your first post.

## Why Posty?

Posty is simple, fast, and developer-friendly.

## Your First Post

1. Create a Markdown file in `posts/`
2. Add frontmatter metadata
3. Write your content
4. Submit a PR

Happy blogging! 🚀
```

## 🔄 Step-by-Step Contribution Workflow

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/add-post-your-slug
   ```

2. **Create your post file** in the `posts/` directory with proper naming

3. **Add frontmatter and content** following the structure above

4. **Commit your changes:**
   ```bash
   git add posts/your-slug.md
   git commit -m "Add post: Your Post Title"
   ```

5. **Push your branch:**
   ```bash
   git push origin feature/add-post-your-slug
   ```

6. **Open a Pull Request** with:
   - Clear title: `Add post: Your Post Title`
   - Description including a preview or snippet of the post
   - Any context or notes for reviewers

## 💻 Code Contributions

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Azadirachta/Posty-app.git
   cd Posty-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Running Locally

```bash
npm start
```

### Commit Guidelines

- Use clear, descriptive commit messages
- Keep commits focused on a single change
- Reference issues when relevant: `Fixes #123`

## 📋 Pull Request Guidelines

- **Title:** Clear and concise (e.g., `Add post: My Blog Post` or `Fix typo in README`)
- **Description:** Explain what you changed and why
- **References:** Link related issues or PRs
- **Quality:** Keep PRs small and focused for easier review
- **Testing:** Verify your changes work locally before submitting

## 📚 Writing Tips

- Use clear, readable Markdown
- Include code examples with syntax highlighting (use ` ``` ` fenced blocks)
- Check grammar and spelling
- Keep paragraphs concise
- Use headers to organize content
- Add relevant tags for discoverability

## 🎨 Best Practices

- Follow the existing code style
- Test your changes locally before pushing
- Don't include generated files or node_modules
- Update documentation if needed
- One feature/post per PR when possible

## ❓ Questions?

- **Unsure about something?** Open an issue
- **Need clarification?** Mention a maintainer in your PR
- **Bug report?** Include steps to reproduce and your environment

---

Thank you for contributing to Posty! 🎉 Every contribution helps make the project better.


Thank you for contributing!