import { Skin, prisma } from "./client"

type WeaponClass = "Rifle" | "SMG" | "Pistol" | "Heavy"

export const getSkinsByWeaponClass = async (weaponClass: WeaponClass) => {
  try {
    const results = await prisma.skin.findMany({
      take: 50,
      where: {
        weapon: {
          weaponClass: weaponClass,
        },
      },
      orderBy: {
        name: "asc",
      },
    })
    return results
  } catch (error) {
    console.error(error)
    return []
  } finally {
    await prisma.$disconnect()
  }
}

export const getSkinsByWeaponName = async (weaponName: string) => {
  try {
    const results = await prisma.skin.findMany({
      where: {
        weaponName: decodeURIComponent(weaponName),
      },
    })
    return results
  } catch (error) {
    console.error(error)
    return []
  } finally {
    await prisma.$disconnect()
  }
}

export const getSkinBySlugAndWeapon = async (
  skinSlug: string,
  weaponSlug: string
): Promise<Skin | null> => {
  try {
    const weaponResults = await prisma.weapon.findFirst({
      where: {
        slug: weaponSlug,
      },
    })

    if (!weaponResults) {
      return null
    }

    const results = await prisma.skin.findFirst({
      where: {
        weaponName: weaponResults.name,
        slug: skinSlug,
      },
    })

    return results
  } catch (error) {
    console.error(error)
    return null
  } finally {
    await prisma.$disconnect()
  }
}

export const getSkinsByWeaponSlug = async (weaponSlug: string) => {
  try {
    const weaponResults = await prisma.weapon.findFirst({
      where: {
        slug: weaponSlug,
      },
    })

    if (!weaponResults) {
      return []
    }

    const weaponName = weaponResults.name

    const results = await prisma.skin.findMany({
      where: {
        weaponName: decodeURIComponent(weaponName),
      },
    })
    return results
  } catch (error) {
    console.error(error)
    return []
  } finally {
    await prisma.$disconnect()
  }
}

export const getAllSkins = async () => {
  try {
    const results = await prisma.skin.findMany({
      take: 50,
      // select: {
      //   name: true,
      //   collectionName: true,
      //   rarity: true,
      //   baseImage: true,
      // },
      orderBy: {
        name: "asc",
      },
    })
    return results
  } catch (error) {
    console.error(error)
    return []
  } finally {
    await prisma.$disconnect()
  }
}
