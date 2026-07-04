const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const SITE_URL = 'https://onerdy.com'

function readEntries(dir) {
  const directory = path.join(process.cwd(), dir)
  return fs.readdirSync(directory).map((filename) => {
    const slug = filename.replace(/\.md$/, '')
    const fileContents = fs.readFileSync(path.join(directory, filename), 'utf8')
    const { data } = matter(fileContents)
    return { slug, ...data }
  })
}

function escapeXml(value) {
  return String(value).replace(/[<>&'"]/g, (c) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
  }[c]))
}

function writeFeed(posts) {
  const items = posts
    .slice()
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/posts/${post.slug}</link>
      <guid>${SITE_URL}/posts/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt || '')}</description>
    </item>`)
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>onerdy.com</title>
    <link>${SITE_URL}</link>
    <description>The personal website for Rodney Mort.</description>${items}
  </channel>
</rss>
`
  fs.writeFileSync(path.join(process.cwd(), 'public', 'feed.xml'), rss)
}

function writeSitemap(posts, projects) {
  const routes = [
    '',
    '/blog',
    '/projects',
    ...posts.map((post) => `/posts/${post.slug}`),
    ...projects.map((project) => `/projects/${project.slug}`),
  ]

  const urls = routes
    .map((route) => `
  <url>
    <loc>${SITE_URL}${route}</loc>
  </url>`)
    .join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>
`
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap)
}

const posts = readEntries('_posts')
const projects = readEntries('_projects')

writeFeed(posts)
writeSitemap(posts, projects)

console.log(`Generated feed.xml (${posts.length} posts) and sitemap.xml (${posts.length + projects.length + 3} routes)`)
