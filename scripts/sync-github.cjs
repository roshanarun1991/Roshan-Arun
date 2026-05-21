const { spawnSync } = require('child_process');

const isWindows = process.platform === 'win32';
const env = { ...process.env, HTTP_PROXY: '', HTTPS_PROXY: '', ALL_PROXY: '' };

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: false,
    env,
    ...options,
  });
  return result.status ?? 1;
}

function capture(command, args) {
  const result = spawnSync(command, args, {
    encoding: 'utf8',
    shell: false,
    env,
  });
  if (result.status !== 0 && result.stderr) process.stderr.write(result.stderr);
  return { status: result.status ?? 1, stdout: result.stdout || '' };
}

function git(args) {
  return run('git', ['-c', 'http.sslBackend=openssl', ...args]);
}

function gitCapture(args) {
  return capture('git', ['-c', 'http.sslBackend=openssl', ...args]);
}

const branchResult = capture('git', ['branch', '--show-current']);
const branch = (branchResult.stdout || 'main').trim() || 'main';

console.log('Checking TypeScript...');
const typecheck = run(isWindows ? 'npx.cmd' : 'npx', ['tsc', '-b']);
if (typecheck !== 0) {
  console.error('TypeScript check failed. Fix errors before syncing.');
  process.exit(typecheck);
}

console.log('Trying to pull latest remote changes...');
const pullStatus = git(['pull', '--rebase', 'origin', branch]);
if (pullStatus !== 0) {
  console.warn('Pull did not complete. This is expected if the remote branch does not exist yet or GitHub auth is missing. Continuing to local commit step.');
}

const statusBefore = gitCapture(['status', '--porcelain']).stdout.trim();
if (!statusBefore) {
  console.log('No local changes to commit. Pushing current branch just in case...');
  const pushStatus = git(['push', '-u', 'origin', branch]);
  process.exit(pushStatus);
}

console.log('Staging local changes...');
const addStatus = git(['add', '-A']);
if (addStatus !== 0) process.exit(addStatus);

const now = new Date();
const stamp = now.toISOString().replace('T', ' ').slice(0, 16);
console.log('Creating sync commit...');
const commitStatus = git(['commit', '-m', 'Sync portfolio updates ' + stamp]);
if (commitStatus !== 0) process.exit(commitStatus);

console.log('Pushing to GitHub...');
const pushStatus = git(['push', '-u', 'origin', branch]);
process.exit(pushStatus);
