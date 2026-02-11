import { execSync } from 'child_process';

try {
  // Remove existing lockfile
  try {
    execSync('rm -f /vercel/share/v0-project/pnpm-lock.yaml', { stdio: 'inherit' });
  } catch (e) {
    // Ignore if doesn't exist
  }

  // Regenerate lockfile with current .npmrc settings
  execSync('cd /vercel/share/v0-project && pnpm install --no-frozen-lockfile', {
    stdio: 'inherit',
    env: { ...process.env, CI: '' }
  });

  console.log('[v0] Lockfile regenerated successfully');
} catch (error) {
  console.error('[v0] Error:', error.message);
  process.exit(1);
}
