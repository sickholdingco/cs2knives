import { NextRequest } from "next/server"
import { connect } from "@planetscale/database"

const getWeaponSkins = async (weapon: string) => {
  const config = {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  }

  const conn = connect(config)

  const query =
    "SELECT * FROM Skin WHERE weapon_name NOT IN (SELECT name FROM Weapon WHERE weapon_class = 'Knife');"

  const results = await conn.execute(query)
  return results
}

export async function GET(req: NextRequest, res: Response) {
  try {
    const skins = await getWeaponSkins("AK-47")

    return new Response(JSON.stringify(skins.rows), {
      status: 200,
    })
  } catch (error) {
    return new Response(`${error} failed to get prices`, {
      status: 500,
    })
  }
}
