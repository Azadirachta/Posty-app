# Contributing to Posty-app

Thanks for your interest in contributing! This document explains how to add new posts and submit changes.

## Adding a New Post

- Posts live in the `posts/` folder as Markdown files with a `.md` extension.
- The first line of the file should be the title in the form of a level-1 header, e.g.:

  # My New Post Title

- After the title, write your post using standard Markdown. You can include headings, lists, code blocks, images, etc.
- Filename rules:
  - Use a URL-friendly slug: lowercase letters, numbers and dashes only (no spaces). Example: `my-new-post.md`.
  - Recommended filename pattern: `YYYY-MM-DD-your-slug.md` if you want dates in filenames.
- Example file content:

  # My New Post Title

  Here is the post body in Markdown.

## How the App Uses Posts

- The server extracts the post title from the first line starting with `# `.
- The filename is used in the post URL, e.g. `/post/welcome.md`.
- Keep images and other assets in a public folder and link them from the post.

## Contribution Workflow

1. Fork the repository (or create a branch in this repository).
2. Create a branch named `add-post-<your-slug>` or similar.
3. Add your Markdown file to `posts/` following the rules above.
4. Commit your changes and push your branch.
5. Open a Pull Request describing your changes and include a short preview of the post.

## Pull Request Guidelines

- Use a clear PR title: `Add post: My New Post Title`.
- Describe what you changed and include any notes the reviewer should know.
- Small, focused PRs are preferred.

## Style and Formatting

- Use Markdown conventions; prefer fenced code blocks for code.
- Keep sentences concise and check grammar/spelling.

## Questions

If you're unsure about anything, open an issue or mention a maintainer in the PR.

Thank you for contributing!