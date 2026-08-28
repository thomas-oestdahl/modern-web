# modern-web

A small blog about using modern, built-in web platform features — plain
HTML, CSS and JavaScript — instead of reaching for another dependency.
There is no build step, no framework and no package manager: open the files
directly, or serve them with any static file server.

## Running locally

Any static file server works. For example, from the repository root:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## Project structure

```
index.html          Home page, listing all posts
css/style.css        Shared stylesheet for every page
js/main.js            Shared JavaScript for every page
js/<post>-demo.js    JavaScript that only powers a specific post's demo
posts/*.html         Individual blog posts
```

## Writing a new post

1. Copy an existing file in `posts/` as a starting point, so the header,
   footer and overall structure stay consistent.
2. Write the post content in the new file. Link to `../css/style.css` and
   `../js/main.js` the same way the existing posts do.
3. If the post needs its own interactive demo, add a small script under
   `js/` (for example `js/my-post-demo.js`) and include it at the bottom of
   the post, after `main.js`.
4. Add a card for the new post to the `<ul class="post-list">` in
   `index.html`, linking to `posts/<your-file>.html`.

No build step is required — the new page is live as soon as it's linked
from `index.html`.
