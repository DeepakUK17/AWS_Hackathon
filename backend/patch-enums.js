/**
 * patch-enums.js
 * Adds missing enum values to the Role enum in Aurora PostgreSQL.
 * Run once after initial migration deploy.
 */
require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🔧 Patching Role enum — adding hr and customer values...');

  try {
    // ALTER TYPE ADD VALUE is idempotent-safe with IF NOT EXISTS (Postgres 9.6+)
    await prisma.$executeRawUnsafe(`ALTER TYPE "Role" ADD VALUE IF NOT EXISTS 'hr'`);
    console.log('  ✅ Added: hr');

    await prisma.$executeRawUnsafe(`ALTER TYPE "Role" ADD VALUE IF NOT EXISTS 'customer'`);
    console.log('  ✅ Added: customer');

    console.log('\n✅ Enum patch complete! You can now run the seed.');
  } catch (err) {
    console.error('❌ Patch failed:', err.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
