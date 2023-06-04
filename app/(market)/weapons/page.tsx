import { Filter } from "lucide-react"

import SkinCard from "../../../components/skin-card/skin-card"
import WeaponCategories from "../../../components/weapon-categories/weapon-categories"

export default async function WeaponsPage() {
  const ak = [
    {
      name: "AK-47 | Fire Serpent",
      weapon_name: "AK-47",
      collection_name: "The Bravo Collection",
      rarity: "Covert",
      release_date: "19 September 2013",
      stattrak_available: true,
      containers: ["Operation Bravo Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_fireserpent_ak47_bravo_light_large.9390e7fd091ea8a0434fd2143e0acf0d5d1bbc97.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Fuel Injector",
      weapon_name: "AK-47",
      collection_name: "The Wildfire Collection",
      rarity: "Covert",
      release_date: "17 February 2016",
      stattrak_available: true,
      containers: ["Operation Wildfire Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_supercharged_light_large.8a0d53e84b7049366a3e3dbb25d29f473d76dceb.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Aquamarine Revenge",
      weapon_name: "AK-47",
      collection_name: "The Falchion Collection",
      rarity: "Covert",
      release_date: "26 May 2015",
      stattrak_available: true,
      containers: ["Falchion Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_courage_alt_light_large.27e4e7d38dc2ce36ffe86bd6ec65d6f525751eaa.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Wasteland Rebel",
      weapon_name: "AK-47",
      collection_name: "The Vanguard Collection",
      rarity: "Covert",
      release_date: "11 November 2014",
      stattrak_available: true,
      containers: ["Operation Vanguard Weapon Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_tribute_ak47_light_large.f0ccfeea8a432a82cf4fb7f0411a724dbb43459a.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Jaguar",
      weapon_name: "AK-47",
      collection_name: "The eSports 2014 Summer Collection",
      rarity: "Covert",
      release_date: "10 July 2014",
      stattrak_available: true,
      containers: ["eSports 2014 Summer Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_panther_ak47_light_large.6b7c82083b5fbb71631ad7961ac1543d1fc2a5cd.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Vulcan",
      weapon_name: "AK-47",
      collection_name: "The Huntsman Collection",
      rarity: "Covert",
      release_date: "1 May 2014",
      stattrak_available: true,
      containers: ["Huntsman Weapon Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_rubber_light_large.5836c38d3037a5a1f90ffdc8c9d0b94367ca8efd.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Neon Revolution",
      weapon_name: "AK-47",
      collection_name: "The Gamma 2 Collection",
      rarity: "Covert",
      release_date: "18 August 2016",
      stattrak_available: true,
      containers: ["Gamma 2 Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_anarchy_light_large.6e98f0c6fcb81aaeca03c56eed68962f50c9ef94.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Bloodsport",
      weapon_name: "AK-47",
      collection_name: "The Spectrum Collection",
      rarity: "Covert",
      release_date: "15 March 2017",
      stattrak_available: true,
      containers: ["Spectrum Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_bloodsport_light_large.40f076f6b92e08acc37860923533aa9768795b2b.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | The Empress",
      weapon_name: "AK-47",
      collection_name: "The Spectrum 2 Collection",
      rarity: "Covert",
      release_date: "14 September 2017",
      stattrak_available: true,
      containers: ["Spectrum 2 Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_empress_light_large.f81d0b07dca381635c89f74bcdb6b64a6da6e81c.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Asiimov",
      weapon_name: "AK-47",
      collection_name: "The Danger Zone Collection",
      rarity: "Covert",
      release_date: "06 December 2018",
      stattrak_available: true,
      containers: ["Danger Zone Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_asiimov_light_large.665fc3b83c8046398787a57d2ef7a9d938244820.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Wild Lotus",
      weapon_name: "AK-47",
      collection_name: "The St. Marc Collection",
      rarity: "Covert",
      release_date: "18 November 2019",
      stattrak_available: false,
      containers: [],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak_island_floral_light_large.1303e76d0a77ab164a46a7aba5ab1dcaf1acee6b.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Legion of Anubis",
      weapon_name: "AK-47",
      collection_name: "The Fracture Collection",
      rarity: "Covert",
      release_date: "06 August 2020",
      stattrak_available: true,
      containers: ["Fracture Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_anubis_light_large.52aec34a0d4778512f4962b7790294bbe1434795.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | X-Ray",
      weapon_name: "AK-47",
      collection_name: "The Havoc Collection",
      rarity: "Covert",
      release_date: "03 December 2020",
      stattrak_available: false,
      containers: [],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak_xray_light_large.a16215bb471dac8cc257c13dbc03e24514a7f018.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Neon Rider",
      weapon_name: "AK-47",
      collection_name: "The Horizon Collection",
      rarity: "Covert",
      release_date: "03 August 2018",
      stattrak_available: true,
      containers: ["Horizon Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak_neon_rider_light_large.9209192b514c4ec98146b4747dec8ce407a977c8.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Leet Museo",
      weapon_name: "AK-47",
      collection_name: "The Operation Riptide Collection",
      rarity: "Covert",
      release_date: "22 September 2021",
      stattrak_available: true,
      containers: ["Operation Riptide Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_abstract_light_large.c0eca2ab0cee2c60491b9b64358f72ae4398e78a.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Gold Arabesque",
      weapon_name: "AK-47",
      collection_name: "The 2021 Dust 2 Collection",
      rarity: "Covert",
      release_date: "22 September 2021",
      stattrak_available: false,
      containers: [
        "Rio 2022 Dust II Souvenir Package",
        "Antwerp 2022 Dust II Souvenir Package",
        "Stockholm 2021 Dust II Souvenir Package",
      ],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_gold_arabesque_light_large.0d1b0b2bfcafe8d214837077367e7dd42394822e.png",
      souvenir_available: true,
    },
    {
      name: "AK-47 | Nightwish",
      weapon_name: "AK-47",
      collection_name: "The Dreams & Nightmares Collection",
      rarity: "Covert",
      release_date: "20 January 2022",
      stattrak_available: true,
      containers: ["Dreams & Nightmares Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_nightwish_light_large.0c4581be094e2bd732bec18ebdad2f71b1018af2.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Head Shot",
      weapon_name: "AK-47",
      collection_name: "The Revolution Collection",
      rarity: "Covert",
      release_date: "09 February 2023",
      stattrak_available: true,
      containers: ["Revolution Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak_head_shot_holo_light_large.85be84ba7c07917493b8e8a66c9d95c928ebe8b6.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Case Hardened",
      weapon_name: "AK-47",
      collection_name: "The Arms Deal Collection",
      rarity: "Classified",
      release_date: "14 August 2013",
      stattrak_available: true,
      containers: ["CS:GO Weapon Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_aq_oiled_light_large.92c8d125e4e54758d37e946496030e9a18833b58.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Red Laminate",
      weapon_name: "AK-47",
      collection_name: "The eSports 2013 Collection",
      rarity: "Classified",
      release_date: "14 August 2013",
      stattrak_available: true,
      containers: ["eSports 2013 Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_hy_ak47lam_light_large.199620e808579639264cf753d0650721b4bc1f37.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Redline",
      weapon_name: "AK-47",
      collection_name: "The Phoenix Collection",
      rarity: "Classified",
      release_date: "20 February 2014",
      stattrak_available: true,
      containers: ["Operation Phoenix Weapon Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_cobra_light_large.7494bfdf4855fd4e6a2dbd983ed0a243c80ef830.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Point Disarray",
      weapon_name: "AK-47",
      collection_name: "The Revolver Case Collection",
      rarity: "Classified",
      release_date: "8 December 2015",
      stattrak_available: true,
      containers: ["Revolver Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_point_disarray_light_large.ba0f6ccdcb917aa2bde2ef0312c57d763a61d341.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Frontside Misty",
      weapon_name: "AK-47",
      collection_name: "The Shadow Collection",
      rarity: "Classified",
      release_date: "17 September 2015",
      stattrak_available: true,
      containers: ["Shadow Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_winter_sport_light_large.785a08aecd996dcffc6f38373fdc73697e601a6a.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Cartel",
      weapon_name: "AK-47",
      collection_name: "The Chroma Collection",
      rarity: "Classified",
      release_date: "8 January 2015",
      stattrak_available: true,
      containers: ["Chroma Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_aq_ak47_cartel_light_large.2e7be9f4c7bda304f2a7c374260d95affca93f0b.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Hydroponic",
      weapon_name: "AK-47",
      collection_name: "The Rising Sun Collection",
      rarity: "Classified",
      release_date: "26 May 2015",
      stattrak_available: false,
      containers: [],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_am_bamboo_jungle_light_large.98cd023e9d2207ad765b600b281352cbc5009051.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Jet Set",
      weapon_name: "AK-47",
      collection_name: "The Baggage Collection",
      rarity: "Classified",
      release_date: "1 July 2014",
      stattrak_available: false,
      containers: [],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_well_traveled_ak47_light_large.708a53ac473d7cd02037876a82b6b4c004bf9a31.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Phantom Disruptor",
      weapon_name: "AK-47",
      collection_name: "The Prisma 2 Collection",
      rarity: "Classified",
      release_date: "31 March 2020",
      stattrak_available: true,
      containers: ["Prisma 2 Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak-47_phantom_disruptor_light_large.c14fcebe17a4c1a509edc597b33dcb9b5dcda32b.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Panthera onca",
      weapon_name: "AK-47",
      collection_name: "The Ancient Collection",
      rarity: "Classified",
      release_date: "03 December 2020",
      stattrak_available: false,
      containers: [
        "Paris 2023 Ancient Souvenir Package",
        "Rio 2022 Ancient Souvenir Package",
        "Antwerp 2022 Ancient Souvenir Package",
        "Stockholm 2021 Ancient Souvenir Package",
      ],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak_jaguar_light_large.92dd85d59d2615eab90bf86d7e4df6ee9e095132.png",
      souvenir_available: true,
    },
    {
      name: "AK-47 | Ice Coaled",
      weapon_name: "AK-47",
      collection_name: "The Recoil Collection",
      rarity: "Classified",
      release_date: "01 July 2022",
      stattrak_available: true,
      containers: ["Recoil Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_cogthings_light_large.9b4678a70c315e5d60a203436b7a95cd4c5dcc89.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Blue Laminate",
      weapon_name: "AK-47",
      collection_name: "The eSports 2013 Winter Collection",
      rarity: "Restricted",
      release_date: "18 December 2013",
      stattrak_available: true,
      containers: ["eSports 2013 Winter Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_hy_ak47lam_blue_light_large.9f8ec5103efa5b7a0b3919a13b4de78e1bd612a0.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Emerald Pinstripe",
      weapon_name: "AK-47",
      collection_name: "The Bank Collection",
      rarity: "Restricted",
      release_date: "1 May 2014",
      stattrak_available: false,
      containers: [],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_pinstripe_ak47_light_large.2123421a26fbe673eea7c0238c7441a83b97aa17.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | First Class",
      weapon_name: "AK-47",
      collection_name: "The Baggage Collection",
      rarity: "Restricted",
      release_date: "1 July 2014",
      stattrak_available: false,
      containers: [],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_green_leather_ak47_light_large.9622f0d289d98aa50238c0c956631b73bc3171ed.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Orbit Mk01",
      weapon_name: "AK-47",
      collection_name: "The Operation Hydra Collection",
      rarity: "Restricted",
      release_date: "23 May 2017",
      stattrak_available: true,
      containers: ["Operation Hydra Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak_colony01_red_light_large.b688da7615b6e76fa34f775e200914dc44d5336c.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Safety Net",
      weapon_name: "AK-47",
      collection_name: "The 2018 Inferno Collection",
      rarity: "Restricted",
      release_date: "01 September 2018",
      stattrak_available: false,
      containers: [
        "Paris 2023 Inferno Souvenir Package",
        "Rio 2022 Inferno Souvenir Package",
        "Antwerp 2022 Inferno Souvenir Package",
        "Stockholm 2021 Inferno Souvenir Package",
        "Berlin 2019 Inferno Souvenir Package",
        "Katowice 2019 Inferno Souvenir Package",
        "London 2018 Inferno Souvenir Package",
      ],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_hy_mesh_safetyorange_light_large.f4ee68bc3bbd972ded65ec36b66259199b7fafb7.png",
      souvenir_available: true,
    },
    {
      name: "AK-47 | Rat Rod",
      weapon_name: "AK-47",
      collection_name: "The Shattered Web Collection",
      rarity: "Restricted",
      release_date: "18 November 2019",
      stattrak_available: true,
      containers: ["Shattered Web Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_nibbler_light_large.1c402d395b628aa5667239eec44640d7f603d754.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Slate",
      weapon_name: "AK-47",
      collection_name: "The Snakebite Collection",
      rarity: "Restricted",
      release_date: "03 May 2021",
      stattrak_available: true,
      containers: ["Snakebite Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_professional_light_large.d09d623d0a725c63e8a3905f66bba41ba2ed59e8.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Elite Build",
      weapon_name: "AK-47",
      collection_name: "The Chroma 2 Collection",
      rarity: "Mil-spec",
      release_date: "15 April 2015",
      stattrak_available: true,
      containers: ["Chroma 2 Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_mastery_light_large.4305c0ba4b02ce531fc08c275fa6a9d87da2cf7e.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Black Laminate",
      weapon_name: "AK-47",
      collection_name: "The Vertigo Collection",
      rarity: "Mil-spec",
      release_date: "14 August 2013",
      stattrak_available: false,
      containers: ["Berlin 2019 Vertigo Souvenir Package"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_hy_ak47lam_bw_light_large.c504cab278a4955e92255ee2022340be2d0982a4.png",
      souvenir_available: true,
    },
    {
      name: "AK-47 | Uncharted",
      weapon_name: "AK-47",
      collection_name: "The Prisma Collection",
      rarity: "Mil-spec",
      release_date: "13 March 2019",
      stattrak_available: true,
      containers: ["Prisma Case"],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_aztec_light_large.368d90ba7bc01aa56489792a8962df5343238c5c.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Green Laminate",
      weapon_name: "AK-47",
      collection_name: "The 2021 Vertigo Collection",
      rarity: "Mil-spec",
      release_date: "22 September 2021",
      stattrak_available: false,
      containers: [
        "Paris 2023 Vertigo Souvenir Package",
        "Rio 2022 Vertigo Souvenir Package",
        "Antwerp 2022 Vertigo Souvenir Package",
        "Stockholm 2021 Vertigo Souvenir Package",
      ],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_hy_ak47lam_green_light_large.ecbaf85e35ca08156cc305017d4dc4276a742a8f.png",
      souvenir_available: true,
    },
    {
      name: "AK-47 | Steel Delta",
      weapon_name: "AK-47",
      collection_name: "The Anubis Collection",
      rarity: "Mil-spec",
      release_date: "24 April 2023",
      stattrak_available: false,
      containers: [
        "Paris 2023 Anubis Souvenir Package",
        "Anubis Collection Package",
      ],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_strone_light_large.8434d6be7fa076ce41c86eb5ea00efe9383800c6.png",
      souvenir_available: true,
    },
    {
      name: "AK-47 | Jungle Spray",
      weapon_name: "AK-47",
      collection_name: "The Aztec Collection",
      rarity: "Industrial",
      release_date: "14 August 2013",
      stattrak_available: false,
      containers: [],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_sp_spray_jungle_light_large.af524ea61be29ab81dfb321277b98a211338de37.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Safari Mesh",
      weapon_name: "AK-47",
      collection_name: "The Dust 2 Collection",
      rarity: "Industrial",
      release_date: "27 November 2013",
      stattrak_available: false,
      containers: [
        "Berlin 2019 Dust II Souvenir Package",
        "Katowice 2019 Dust II Souvenir Package",
        "London 2018 Dust II Souvenir Package",
        "Atlanta 2017 Dust II Souvenir Package",
        "Cologne 2016 Dust II Souvenir Package",
        "MLG Columbus 2016 Dust II Souvenir Package",
        "DreamHack Cluj-Napoca 2015 Dust II Souvenir Package",
        "ESL One Cologne 2015 Dust II Souvenir Package",
        "ESL One Katowice 2015 Dust II Souvenir Package",
        "DreamHack 2014 Dust II Souvenir Package",
        "ESL One Cologne 2014 Dust II Souvenir Package",
      ],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_sp_mesh_tan_light_large.0372a5d37f473b9cf5e2ee32d2f5d36247f24a3a.png",
      souvenir_available: true,
    },
    {
      name: "AK-47 | Predator",
      weapon_name: "AK-47",
      collection_name: "The Dust Collection",
      rarity: "Industrial",
      release_date: "14 August 2013",
      stattrak_available: false,
      containers: [],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_sp_zebracam_light_large.5f15c9e41b9ac135b87cdadb407c9872e31c1f29.png",
      souvenir_available: false,
    },
    {
      name: "AK-47 | Baroque Purple",
      weapon_name: "AK-47",
      collection_name: "The Canals Collection",
      rarity: "Industrial",
      release_date: "18 November 2019",
      stattrak_available: false,
      containers: [],
      base_image:
        "http://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_ak47_hy_veneto_purple_light_large.4d9f7f4ed3034ce7d712c68640eb33f9f66f5daf.png",
      souvenir_available: false,
    },
  ]

  return (
    <div>
      <WeaponCategories />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between font-flex">
          <h2 className="text-2xl font-semibold">All Weapons</h2>
          <div className="flex items-center gap-1 text-2xl font-semibold">
            <h2>Filter</h2>
            <Filter className="h-4" />
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-between gap-8">
          {ak.map((skin) => {
            return (
              <SkinCard
                key={skin.name}
                name={skin.name}
                collection={skin.collection_name}
                rarity={skin.rarity}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}