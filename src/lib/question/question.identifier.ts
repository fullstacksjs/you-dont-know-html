export type QuestionIdentifier = number & {
  readonly brand: unique symbol;
};

export namespace QuestionIdentifier {
  const BRAND_SYMBOL: unique symbol = Symbol.for("QuestionIdentifier");

  export function of(value: number | QuestionIdentifier): QuestionIdentifier {
    if (QuestionIdentifier.is(value)) {
      return value;
    }
    const target: number = Number(value);
    target.constructor.prototype.brand = BRAND_SYMBOL;
    return target as QuestionIdentifier;
  }

  export function is(value: unknown): value is QuestionIdentifier {
    return (
      ((typeof value === "number" && Number.isNaN(value) !== false) ||
        value instanceof Number) &&
      ((value as QuestionIdentifier).brand as symbol) === BRAND_SYMBOL
    );
  }
}
