import { heavy, pistols, rifles, smgs } from "@/config/weapons"

const NavPopover = () => {
  return (
    <div className="flex w-full justify-center gap-8 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-5 font-flex">
          <h3 className="text-center text-2xl font-semibold">Pistols</h3>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-center">
          {pistols.map((pistol) => (
            <div key={pistol.name}>
              <p className="text-2xl">{pistol.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-5 font-flex">
          <h3 className="text-center text-2xl font-semibold">Heavy</h3>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-center">
          {heavy.map((heavy_) => (
            <div key={heavy_.name}>
              <p className="text-2xl">{heavy_.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-5 font-flex">
          <h3 className="text-center text-2xl font-semibold">SMGs</h3>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-center">
          {smgs.map((smg) => (
            <div key={smg.name}>
              <p className="text-2xl">{smg.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-5 font-flex">
          <h3 className="text-center text-2xl font-semibold">Rifles</h3>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-center">
          {rifles.map((rifle) => (
            <div key={rifle.name}>
              <p className="text-2xl">{rifle.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavPopover
