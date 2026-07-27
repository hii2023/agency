# Adding Digital Solutions to the existing Axiotrix website

Everything is built into **one file**: `dist/axiotrix-digital-solutions.html` (about 68 KB).

It contains the home page, all five service pages, the About page and the
contact form. No build tools, no server code, no database. The only thing it
loads from outside is Google Fonts.

Rebuild it any time after editing content with:

```bash
node build.js
```

---

## Option 1: Upload the single file (simplest, recommended)

1. Upload `dist/axiotrix-digital-solutions.html` to the web server, next to the
   existing site files.
2. It is live at `https://www.axiotrix.com/axiotrix-digital-solutions.html`.
3. Link to it from the existing menu, for example as a new item called
   **Digital Solutions**.

Rename the file to whatever suits the URL, for example `digital-solutions.html`.
Nothing inside depends on the filename.

**Why this one:** nothing can conflict. The page brings its own styles and
scripts, so it cannot break the existing theme and the existing theme cannot
break it.

### WordPress version of the same thing

If the site runs on WordPress, upload the file with FTP or cPanel File Manager
into the WordPress root folder (the one containing `wp-content`). WordPress
ignores plain `.html` files, so it will serve normally.

---

## Option 2: Embed it inside an existing page

Use this when the page needs to sit inside the current header and footer.

1. Upload the single file as in Option 1.
2. Create a new page in the CMS, add a **Custom HTML** block, and paste the
   contents of `dist/embed-snippet.html`.
3. Adjust the `src` if the file was renamed or placed in a subfolder.

The iframe keeps both style sheets completely separate, so there is still no
risk of the two designs interfering with each other.

Trade-off: an iframe adds a scrollbar unless its height is managed. The snippet
includes a listener that resizes it, which needs one extra line inside the
embedded page if exact auto-height is required. For most cases the
`min-height:100vh` in the snippet is enough.

---

## Option 3: Serve the multi-page version from a subfolder

Use this if separate, shareable URLs per service are wanted, which is better
for SEO than the hash URLs the single file uses.

1. Upload these to a folder such as `/digital/`:
   - `index.html`
   - `service.html`
   - `about.html`
   - `submit.html`
   - `assets/` (the whole folder)
2. It is live at `https://www.axiotrix.com/digital/`.
3. Each service then has its own indexable URL, for example
   `/digital/service.html?s=tool-development`.

Do **not** upload `admin.html` to a public server without protecting it first.
See the note below.

---

## Which to choose

| Need | Use |
| --- | --- |
| Fastest, least risk | Option 1 |
| Must sit inside the current page shell | Option 2 |
| Best SEO, separate URL per service | Option 3 |

---

## Matching the existing site header

The single file ships with its own header, which copies the axiotrix.com design
(blue top bar, white nav, blue active pill). Its Home, Healthcare and Financial
links point back to `https://www.axiotrix.com/`.

To use the real site header instead, delete the header and footer calls in the
router near the bottom of the built file, or better, edit `build.js` and
rebuild:

```js
// in build.js, inside route()
body = window.axHeader('') + homeHtml() + window.axCta() + window.axFooter();
//     ^ remove this                                      ^ and this
```

---

## Editing the content

Content lives in `assets/content.js`. Two ways to change it:

- **Directly:** edit `assets/content.js`, then run `node build.js`.
- **Through the control panel:** open `admin.html` in a browser, edit any
  section, click Save, then use **Export content** to download the JSON.

The control panel currently saves to the browser's local storage, so edits stay
on the machine that made them. To make it a shared, live CMS, the content layer
needs to be pointed at a database. That work is not done yet.

**Security note:** `admin.html` has no password. Keep it off the public server,
or put it behind HTTP basic auth first.

---

## What is not wired up yet

The contact form currently stores submissions in the visitor's own browser, so
it is a working demo, not a live lead pipeline. Before going live, point the
form at one of these:

- an email service such as FormSubmit or Formspree (fastest, no backend)
- the existing CRM or an email inbox through a form endpoint
- a database, alongside the control panel work above

The submit handler that needs changing is `wireForm()` in `build.js`, and
`submit.html` for the multi-page version.
