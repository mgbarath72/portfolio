// GitHub Pages only serves files that exist, so after `react-scripts build` copy the app
// shell to every project route (and to 404.html for anything else). That way a link like
// barathb.com/projects/ar-surgery loads the app instead of GitHub's 404 page.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const build = path.join(root, "build");
const shell = fs.readFileSync(path.join(build, "index.html"));
const projectsSource = fs.readFileSync(path.join(root, "src", "projects.js"), "utf8");
const slugs = [...projectsSource.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);

for (const route of ["projects", ...slugs.map((slug) => `projects/${slug}`)]) {
  fs.mkdirSync(path.join(build, route), { recursive: true });
  fs.writeFileSync(path.join(build, route, "index.html"), shell);
}
fs.writeFileSync(path.join(build, "404.html"), shell);

console.log(`Created route pages for /projects and ${slugs.length} projects.`);
