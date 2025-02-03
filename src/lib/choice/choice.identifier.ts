export type ChoiceIdentifier<T extends number = number> = T & {
  readonly brand: unique symbol;
};

export namespace ChoiceIdentifier {
  const CHOICE_IDENTIFIER_SYMBOL: unique symbol = Symbol.for("ChoiceIdentifier");

  export function of<
    T extends number | ChoiceIdentifier,
    V extends number = T extends ChoiceIdentifier<infer G> ? G : number,
  >(value: V): ChoiceIdentifier<V> {
    if (ChoiceIdentifier.is(value)) {
      return value;
    }
    const target: Number = new Number(value);
    // @ts-expect-error: TypeScript does not recognize the dynamic property assignment.
    target["brand"] = CHOICE_IDENTIFIER_SYMBOL;
    return target as ChoiceIdentifier<V>;
  }

  export function is(value: unknown): value is ChoiceIdentifier {
    return (
      ChoiceIdentifier.can(value) &&
      // @ts-expect-error: TypeScript cannot verify the existence of the 'brand' property.
      value["brand"] === CHOICE_IDENTIFIER_SYMBOL
    );
  }

  export function can(value: unknown): value is number {
    return (
      (typeof value === "number" && Number.isNaN(value) === false) ||
      value instanceof Number
    );
  }
}
