export default class Fraction {
  public readonly decimal: number;
  constructor(readonly num: number, readonly denom: number) {
    this.decimal = num / denom;
  }

  public toString() {
    return (
      <>
        <sup>{this.num}</sup>&frasl;<sub>{this.denom}</sub>
      </>
    );
  }
}

const oneHalf = new Fraction(1, 2);
const oneThird = new Fraction(1, 3);
const oneFourth = new Fraction(1, 4);
const oneEighth = new Fraction(1, 8);
const twoThirds = new Fraction(2, 3);
const threeFourths = new Fraction(3, 4);

export { oneHalf, oneThird, oneFourth, oneEighth, twoThirds, threeFourths };
