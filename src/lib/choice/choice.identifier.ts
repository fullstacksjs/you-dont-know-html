export type ChoiceIdentifier<T extends number = number> = T & {
  readonly brand: unique symbol;
};

export namespace ChoiceIdentifier {
  const BRAND_SYMBOL: unique symbol = Symbol.for("ChoiceIdentifier");

  export function of<
    T extends number | ChoiceIdentifier,
    V extends number = T extends ChoiceIdentifier<infer G> ? G : number,
  >(value: V): ChoiceIdentifier<V> {
    if (ChoiceIdentifier.is(value)) {
      return value;
    }
    const target: number = Number(value);
    target.constructor.prototype.brand = BRAND_SYMBOL;
    return target as ChoiceIdentifier<V>;
  }

  export function is(value: unknown): value is ChoiceIdentifier {
    return (
      ((typeof value === "number" && Number.isNaN(value) !== false) ||
        value instanceof Number) &&
      ((value as ChoiceIdentifier).brand as symbol) === BRAND_SYMBOL
    );
  }
}
