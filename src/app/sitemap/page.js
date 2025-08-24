// app/sitemap/page.js
import fs from 'fs';
import path from 'path';

const appDirPath = path.join(process.cwd(), 'src/app');

async function getRoutes(dir = appDirPath, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  for (const entry of entries) {
    if (
      entry.name.startsWith('_') ||
      entry.name === 'api' ||
      entry.name === 'layout.js'
    ) continue;

    const fullPath = path.join(dir, entry.name);
    const routePath = path.join(base, entry.name);

    if (entry.isDirectory()) {
      const hasPage =
        fs.existsSync(path.join(fullPath, 'page.js')) ||
        fs.existsSync(path.join(fullPath, 'page.jsx'));

      if (hasPage) {
        routes.push(routePath.replace(/\\/g, '/'));
      }

      const subRoutes = await getRoutes(fullPath, routePath);
      routes = routes.concat(subRoutes);
    }
  }

  return routes;
}

export default async function SiteMapPage() {
  const routes = await getRoutes();

  return (
    <div>
      <h1>Site Map</h1>
      <div>
        {routes.map((route) => (
          <span className="card-display" key={route}>
            <a href={`/${route}`}>{`/${route}`}</a>
          </span>
        ))}
      </div>
    </div>
  );
}
