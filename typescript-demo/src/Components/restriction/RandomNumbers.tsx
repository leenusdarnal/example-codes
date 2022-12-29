type RandomNumberType = {
  value: number
}

type PositiveNumber = RandomNumberType & {
  isPositive: boolean
  isNegative?: never
  isZero?: never
}
type NegtiveNumber = RandomNumberType & {
  isNegative: boolean
  isPositive?: never
  isZero?: never
}
type Zero = RandomNumberType & {
  isZero: boolean
  isPositive?: never
  isNegative?: never
}

type RandomNumbers = PositiveNumber | NegtiveNumber | Zero

const RandomNumbers = ({
  value,
  isNegative,
  isPositive,
  isZero,
}: RandomNumbers) => {
  return (
    <div>
      {value}
      <br />
      {isPositive && 'positive'}
      {isNegative && 'negative'}
      {isZero && 'zero'}
    </div>
  )
}

export default RandomNumbers
