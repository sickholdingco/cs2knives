import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  //   for (const container of containers) {
  //     if (container.skins.length !== 0) {
  //       for (const skin of container.skins) {
  //         try {
  //           const connection = await prisma.container.update({
  //             where: {
  //               name: container.name,
  //             },
  //             data: {
  //               skins: {
  //                 connect: {
  //                   name: skin,
  //                 },
  //               },
  //             },
  //           })
  //           console.log(connection)
  //         } catch (e: any) {
  //           if (e.code !== "P2002") {
  //             console.log(container)
  //             throw e
  //           }
  //         }
  //       }
  //     }
  //   }
  // for (const container of containers) {
  //     try {
  //         const data = await prisma.container.create({
  //             data: {
  //                 name: container.name,
  //                 releaseDate: container.release_date,
  //                 image: container.image,
  //                 containerSeries: container.container_series,
  //                 collectionName: container.collection_name,
  //             }
  //         });
  //         console.log(data);
  //     } catch (e: any) {
  //         if(e.code !== 'P2002') {
  //             console.log(container);
  //             throw e;
  //         }
  //     }
  // }
}

main()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
