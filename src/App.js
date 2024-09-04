import { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const initialMarkdown = `
### Type markdown language here and see it rendered live in HTML in the previewer.

# This is an h1 element
## This is an h2 element
[Link-TO-Some-Website](https://www.example.com)

\`code\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**
`;

  marked.setOptions({
    breaks: true
  });

  const [text, setText] = useState(initialMarkdown);
  const [html, setHtml] = useState('');

  useEffect(() => {
    setHtml(marked(text));
  }, [text]);

  return (
    <div className="App">
      <div className="editor-container">
        <label htmlFor="editor">Markdown Editor: Type Here</label>
        <textarea
          id="editor"
          onChange={(event) => setText(event.target.value)}
          value={text}
        ></textarea>
      </div>
      <div className="preview-container">
        <label htmlFor="preview">Markdown Rendered Live as HTML</label>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </div>
  );
}

export default App;
