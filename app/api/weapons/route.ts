import { NextRequest } from "next/server"
import { connect } from "@planetscale/database"

const getWeaponSkins = async (weapon: string) => {
  const config = {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  }

  const conn = connect(config)

  const results = await conn.execute(
    `SELECT * FROM Skin WHERE weapon_name = ?
    ORDER BY 
    CASE
      WHEN rarity = 'Consumer Grade' THEN 1
      WHEN rarity = 'Industrial' THEN 2
      WHEN rarity = 'Mil-spec' THEN 3
      WHEN rarity = 'Restricted' THEN 4
      WHEN rarity = 'Classified' THEN 5
      WHEN rarity = 'Covert' THEN 6
      WHEN rarity = 'Contraband' THEN 7
      ELSE 8
    END`,
    [weapon]
  )

  return results
}

export async function GET(req: NextRequest, res: Response) {
  try {
    const weapon = req.nextUrl.searchParams.get("name")

    if (!weapon) {
      return new Response("No weapon name provided", {
        status: 400,
      })
    }

    const skins = await getWeaponSkins(weapon)

    return new Response(JSON.stringify(skins.rows), {
      status: 200,
    })
  } catch (error) {
    return new Response(`${error} failed to get prices`, {
      status: 500,
    })
  }
}
