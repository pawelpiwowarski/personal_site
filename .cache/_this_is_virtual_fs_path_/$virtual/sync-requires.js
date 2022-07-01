
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/pawelpiwowarski/personal_site/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/pawelpiwowarski/personal_site/src/pages/404.tsx")),
  "component---src-pages-about-tsx": preferDefault(require("/Users/pawelpiwowarski/personal_site/src/pages/about.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/pawelpiwowarski/personal_site/src/pages/index.tsx")),
  "component---src-pages-projects-index-tsx": preferDefault(require("/Users/pawelpiwowarski/personal_site/src/pages/projects/index.tsx")),
  "component---src-pages-projects-mdx-slug-tsx": preferDefault(require("/Users/pawelpiwowarski/personal_site/src/pages/projects/{mdx.slug}.tsx"))
}

