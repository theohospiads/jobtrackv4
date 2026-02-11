import { execSync } from 'child_process'
import { existsSync, unlinkSync } from 'fs'

// Delete existing lockfile if present
const lockpath = '/vercel/share/v0-project/pnpm-lock.yaml'
if (existsSync(lockpath)) {
  unlinkSync(lockpath)
  console.log('Deleted existing lockfile')
}

// Run pnpm install to regenerate lockfile
try {
  const result = execSync('cd /vercel/share/v0-project && pnpm install --no-frozen-lockfile', {
    encoding: 'utf-8',
    stdio: 'pipe',
    timeout: 120000
  })
  console.log(result)
  console.log('Lockfile regenerated successfully')
} catch (err) {
  console.error('Install stderr:', err.stderr)
  console.error('Install stdout:', err.stdout)
  console.error('Exit code:', err.status)
}

// Verify lockfile exists
if (existsSync(lockpath)) {
  console.log('Lockfile exists after regeneration')
} else {
  console.log('WARNING: No lockfile after regeneration')
}
