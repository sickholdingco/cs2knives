interface PriceRangeProps {
  range: string
}
export default async function PriceRange({ range }: PriceRangeProps) {
  return (
    <p className="font-inter text-xl font-medium text-card-title">{range}</p>
  )
}
