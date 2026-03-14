# 🎬 Netflix Clone — Vite + React

A fully optimized Netflix clone built with **Vite + React**, upgraded from a slow Create React App version. Fetches real movie and TV data from the TMDB API, displays categorized rows of content, and plays YouTube trailers on click.

![Netflix Clone](https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg)

---

## ✨ What's New vs the Original CRA Version

| Feature | Old (CRA) | New (Vite) |
|---|---|---|
| Build tool | Create React App | ⚡ Vite |
| API caching | None — refetched every render | ✅ React Query (5 min cache) |
| Image loading | All images loaded at once | ✅ Native lazy loading |
| Trailer source | `movie-trailer` (scraper) | ✅ Official TMDB `/videos` API |
| Nav scroll bug | `removeEventListener` memory leak | ✅ Fixed with `useCallback` |
| CSS scoping | Global CSS (collision-prone) | ✅ CSS Modules per component |
| Random banner | Re-picked on every render | ✅ Stable with `useMemo` |
| Components | Re-rendered unnecessarily | ✅ Memoized with `React.memo` |

---

## 🚀 Features

- 🎥 Dynamic banner with a random Netflix Original on every load
- 📺 Categorized movie rows — Trending, Top Rated, Action, Comedy, Horror, Romance, Documentaries
- ▶️ Click any poster to play its official YouTube trailer inline
- 🔝 Sticky navbar that turns solid on scroll
- 📱 Horizontally scrollable poster rows
- ⚡ Fast initial load with lazy image loading

---

## 🛠 Tech Stack

- [Vite](https://vitejs.dev/) — build tool and dev server
- [React 18](https://react.dev/) — UI library
- [@tanstack/react-query](https://tanstack.com/query) — data fetching and caching
- [Axios](https://axios-http.com/) — HTTP client
- [TMDB API](https://www.themoviedb.org/documentation/api) — movie and TV data
- [react-youtube](https://www.npmjs.com/package/react-youtube) — YouTube player
- CSS Modules — scoped component styling

---

## 📁 Project Structure

```
src/
├── api/
│   └── tmdb.js              # Axios instance, endpoints, params
├── components/
│   ├── Nav/
│   │   ├── Nav.jsx
│   │   └── Nav.module.css
│   ├── Banner/
│   │   ├── Banner.jsx
│   │   └── Banner.module.css
│   └── Row/
│       ├── Row.jsx
│       └── Row.module.css
├── hooks/
│   └── useMovies.js         # Reusable fetch hook with React Query
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/netflix-clone-vite.git
cd netflix-clone-vite
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get a TMDB API key

1. Go to [themoviedb.org](https://www.themoviedb.org/) and create a free account
2. Navigate to **Settings → API → Create API Key**
3. Copy your API key

### 4. Set up environment variables

Create a `.env` file in the project root:

```
VITE_TMDB_API_KEY=your_api_key_here
```

> ⚠️ Vite requires the `VITE_` prefix. Access it in code via `import.meta.env.VITE_TMDB_API_KEY`

### 5. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🏗 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 🌐 Deployment (Netlify)

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist/` folder
4. Add your environment variable in **Site Configuration → Environment Variables**:
   - Key: `VITE_TMDB_API_KEY`
   - Value: your API key
5. Rebuild and redeploy

To fix page refresh 404s, add a `netlify.toml` file in the project root:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `VITE_TMDB_API_KEY` | Your TMDB API key from themoviedb.org |

---

## 📌 Key Implementation Notes

**React Query caching** — all Row components share the same query client. If two rows use the same endpoint, only one network request fires and subsequent calls are served from cache for 5 minutes.

**Trailer fetching** — instead of the `movie-trailer` npm package (which scraped YouTube unreliably), trailers are fetched directly from TMDB's `/movie/{id}/videos` and `/tv/{id}/videos` endpoints, returning the official trailer every time.

**Nav memory leak fix** — the original CRA version called `window.removeEventListener("scroll")` without passing the handler reference, meaning the listener was never actually removed. The Vite version uses `useCallback` to create a stable reference that is correctly cleaned up.

---

## 🙏 Acknowledgements

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for the free API
- Original project built with Create React App, rebuilt and optimized with Vite

---

## 📄 License

MIT
