const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function resetReserved() {
  console.log('Resetting all reserved quantities to 0...');

  await prisma.product.updateMany({
    data: { reservedQty: 0 }
  });

  await prisma.salesOrderItem.updateMany({
    data: { reservedQty: 0 }
  });

  console.log('✅ Reserved quantities reset to 0 for all products and sales items.');
}

resetReserved()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
