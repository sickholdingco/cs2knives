interface PriceRangeProps {
  range: string
}
export default async function PriceRange({ range }: PriceRangeProps) {
  return <p className="font-inter">{range}</p>
}
