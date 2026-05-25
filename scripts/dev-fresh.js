/**
 * Windows-friendly: stop anything listening on the dev port, remove .next, start next dev.
 * Use when /_next/static/* returns 404/500 after cleaning .next while an old dev server was still running.
 */
const { spawn, execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const port = process.env.PORT || '3030'
const nextBin = path.join(root, 'node_modules', 'next', 'dist', 'bin', 'next')

if (process.platform === 'win32') {
  const ps = `$conns = Get-NetTCPConnection -LocalPort ${port} -ErrorAction SilentlyContinue; if ($conns) { $conns | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue } }`
  try {
    execSync(`powershell -NoProfile -Command ${JSON.stringify(ps)}`, {
      stdio: 'inherit',
      cwd: root,
    })
  } catch {
    /* ignore */
  }
}

const nextDir = path.join(root, '.next')
try {
  fs.rmSync(nextDir, { recursive: true, force: true })
  process.stdout.write('Removed .next\n')
} catch (e) {
  process.stderr.write(String(e) + '\n')
}

const webpackCache = path.join(root, 'node_modules', '.cache')
try {
  fs.rmSync(webpackCache, { recursive: true, force: true })
  process.stdout.write('Removed node_modules/.cache\n')
} catch {
  /* optional */
}

const child = spawn(process.execPath, [nextBin, 'dev', '-p', port], {
  cwd: root,
  stdio: 'inherit',
  shell: false,
})
child.on('exit', (code) => process.exit(code ?? 0))
