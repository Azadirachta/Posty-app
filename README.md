# Simple Node.js Blog App

A simple blog application built with Node.js that serves markdown posts from a `posts/` folder.

## Features

- List all blog posts on the home page
- View individual posts rendered from Markdown
- Add new posts via a web form
- Includes one sample post

## Installation

1. Ensure you have Node.js installed.
2. Run `npm install` to install dependencies.

## Running the App

Run `npm start` or `node app.js` to start the server on http://localhost:3000.

## Usage

- Visit http://localhost:3000 to see the list of posts.
- Click on a post title to view it.
- Click "Add New Post" to create a new post using the form.

## Project Structure

- `app.js`: Main server file
- `posts/`: Folder containing Markdown posts
- `package.json`: Project dependencies

## Dependencies

- Express: Web framework
- Marked: Markdown parser
- Body-parser: Form data parser