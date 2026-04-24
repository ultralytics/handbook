#!/usr/bin/env node
// Ultralytics 🚀 AGPL-3.0 License - https://ultralytics.com/license

const { spawnSync } = require("child_process");

const script = "docs/build_docs.py";
const candidates = [];

if (process.env.PYTHON) {
  candidates.push([process.env.PYTHON]);
}

if (process.platform === "win32") {
  candidates.push(["py", "-3"], ["python"], ["python3"]);
} else {
  candidates.push(["python3"], ["python"]);
}

const tried = [];

for (const candidate of candidates) {
  const [command, ...prefixArgs] = candidate;
  const label = candidate.join(" ");

  if (tried.includes(label)) {
    continue;
  }
  tried.push(label);

  const probe = spawnSync(command, [...prefixArgs, "-c", "import zensical, plugin"], { stdio: "ignore" });
  if (probe.error || probe.status !== 0) {
    continue;
  }

  const result = spawnSync(command, [...prefixArgs, script], {
    stdio: "inherit",
  });
  if (result.error) {
    console.error(`Failed to run ${label}: ${result.error.message}`);
    process.exit(1);
  }
  process.exit(result.status ?? 1);
}

console.error(`No usable Python interpreter found for ${script}. Tried: ${tried.join(", ")}`);
console.error("Install dependencies with: pip install -r requirements.txt mkdocs mkdocs-material");
process.exit(1);
