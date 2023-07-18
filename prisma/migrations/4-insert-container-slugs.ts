import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Fetch all containers
  const containers = await prisma.container.findMany()

  // Iterate over container
  for (const container of containers) {
    // Generate slug
    const slug = container.name.toLowerCase().split(" ").join("-")

    // Update container with new slug
    await prisma.container.update({
      where: {
        name: container.name,
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
