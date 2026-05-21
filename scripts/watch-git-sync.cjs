const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const watchTargets = ['src', 'index.html', 'package.json', 'vite.config.ts', 'tailwind.config.js'];
let timer = null;
let running = false;
let queued = false;

function runSync() {
  if (running) {
    queued = true;
    return;
  }
  running = true;
  queued = false;
  console.log('\nChange detected. Syncing to GitHub...');
  const child = spawn(process.execPath, [path.join(root, 'scripts', 'sync-github.cjs')], {
    stdio: 'inherit',
    cwd: root,
    env: process.env,
  });
  child.on('exit', () => {
    running = false;
    if (queued) scheduleSync();
  });
}

function scheduleSync() {
  clearTimeout(timer);
  timer = setTimeout(runSync, 45000);
}

for (const target of watchTargets) {
  const fullPath = path.join(root, target);
  if (!fs.existsSync(fullPath)) continue;
  fs.watch(fullPath, { recursive: fs.statSync(fullPath).isDirectory() }, (eventType, filename) => {
    if (!filename) return;
    const normalized = String(filename).replace(/\\/g, '/');
    if (normalized.includes('node_modules') || normalized.includes('.git') || normalized.includes('dist')) return;
    scheduleSync();
  });
}

console.log('Watching portfolio files. Changes will sync after 45 seconds of quiet time. Press Ctrl+C to stop.');
