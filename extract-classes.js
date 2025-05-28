const fs = require("fs");

// Load your HTML file
const html = fs.readFileSync("index.html", "utf8");

// Match all class attributes
const matches = html.match(/class\s*=\s*["']([^"']+)["']/g);

if (!matches) {
	console.log("No classes found.");
	process.exit();
}

// Extract individual class names
let classList = [];
matches.forEach((match) => {
	const classes = match.match(/["']([^"']+)["']/)[1].split(/\s+/);
	classList.push(...classes);
});

// Remove duplicates and sort
const uniqueClasses = [...new Set(classList)].sort();

// Output to console
console.log("Classes found:\n");
console.log(uniqueClasses.join("\n"));

// Optional: write to file
fs.writeFileSync("class-names.txt", uniqueClasses.join("\n"), "utf8");
console.log("\n✅ Saved to class-names.txt");
