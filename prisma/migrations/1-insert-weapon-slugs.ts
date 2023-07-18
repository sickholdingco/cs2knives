import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Fetch all weapons
  const weapons = await prisma.weapon.findMany()

  // Iterate over weapons
  for (const weapon of weapons) {
    // Generate slug
    const slug = weapon.name.toLowerCase().split(" ").join("-")

    // Update weapon with new slug
    await prisma.weapon.update({
      where: {
        name: weapon.name,
      },
      data: {
        slug: slug,
      },
    })
  }
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
