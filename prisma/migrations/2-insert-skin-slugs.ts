const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
  // Fetch all skins
  const skins = await prisma.skin.findMany()

  // Iterate over skins
  for (const skin of skins) {
    // Generate slug
    const slug = skin.name
      .toLowerCase()
      .split(/[\s|]+/)
      .join("-")

    // Update skin with new slug
    await prisma.skin.update({
      where: {
        name: skin.name,
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
