import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Fetch all gloves
  const gloves = await prisma.glove.findMany()

  // Iterate over glove
  for (const glove of gloves) {
    // Generate slug
    const slug = glove.name
      .toLowerCase()
      .split(/[\s|]+/)
      .join("-")
      .replace(/[!'']/g, "")

    // Update glove with new slug
    await prisma.glove.update({
      where: {
        name: glove.name,
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
