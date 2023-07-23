import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Fetch all collections
  const collections = await prisma.collection.findMany()

  // Iterate over collections
  for (const collection of collections) {
    // Generate slug
    const slug = collection.name.toLowerCase().split(" ").join("-")

    // Update collection with new slug
    await prisma.collection.update({
      where: {
        name: collection.name,
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
