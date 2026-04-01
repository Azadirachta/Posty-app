const express = require('express');
const marked = require('marked');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const POSTS_DIR = path.join(__dirname, 'posts');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // For any static files if needed

// Helper function to get list of posts
function getPosts() {
  try {
    const files = fs.readdirSync(POSTS_DIR);
    return files.filter(file => file.endsWith('.md')).map(file => {
      const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
      const lines = content.split('\n');
      const title = lines[0].startsWith('# ') ? lines[0].substring(2) : file.replace('.md', '');
      return { filename: file, title };
    });
  } catch (err) {
    return [];
  }
}

// Routes
app.get('/', (req, res) => {
  const posts = getPosts();
  let html = `
    <html>
    <head><title>My Blog</title></head>
    <body>
    <h1>My Blog</h1>
    <a href="/new">Add New Post</a>
    <ul>
  `;
  posts.forEach(post => {
    html += `<li><a href="/post/${post.filename}">${post.title}</a></li>`;
  });
  html += `
    </ul>
    </body>
    </html>
  `;
  res.send(html);
});

app.get('/post/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(POSTS_DIR, filename);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const htmlContent = marked.parse(content);
    const html = `
      <html>
      <head><title>${filename.replace('.md', '')}</title></head>
      <body>
      <a href="/">Back to Home</a>
      <div>${htmlContent}</div>
      </body>
      </html>
    `;
    res.send(html);
  } else {
    res.status(404).send('Post not found');
  }
});

app.get('/new', (req, res) => {
  const html = `
    <html>
    <head><title>Add New Post</title></head>
    <body>
    <h1>Add New Post</h1>
    <form action="/new" method="POST">
      <label for="title">Title:</label><br>
      <input type="text" id="title" name="title" required><br><br>
      <label for="content">Content (Markdown):</label><br>
      <textarea id="content" name="content" rows="20" cols="80" required></textarea><br><br>
      <button type="submit">Submit</button>
    </form>
    <a href="/">Back to Home</a>
    </body>
    </html>
  `;
  res.send(html);
});

app.post('/new', (req, res) => {
  const { title, content } = req.body;
  if (title && content) {
    const filename = title.replace(/\s+/g, '-').toLowerCase() + '.md';
    const filePath = path.join(POSTS_DIR, filename);
    fs.writeFileSync(filePath, `# ${title}\n\n${content}`);
    res.redirect('/');
  } else {
    res.status(400).send('Title and content are required');
  }
});

app.listen(PORT, () => {
  console.log(`Blog app listening at http://localhost:${PORT}`);
});