export type QuestionIdentifier = number & {
  readonly brand: unique symbol;
};

export namespace QuestionIdentifier {
  const QUESTION_IDENTIFIER_SYMBOL: unique symbol = Symbol.for("QuestionIdentifier");

  export function of(value: number | QuestionIdentifier): QuestionIdentifier {
    if (QuestionIdentifier.is(value)) {
      return value;
    }
    const target: Number = new Number(value);
    // @ts-expect-error: TypeScript does not recognize the dynamic property assignment.
    target["brand"] = QUESTION_IDENTIFIER_SYMBOL;
    return target as QuestionIdentifier;
  }

  export function is(value: unknown): value is QuestionIdentifier {
    return (
      QuestionIdentifier.can(value) &&
      // @ts-expect-error: TypeScript cannot verify the existence of the 'brand' property.
      value["brand"] === QUESTION_IDENTIFIER_SYMBOL
    );
  }

  export function can(value: unknown): value is number | Number {
    return (
      (typeof value === "number" && Number.isNaN(value) === false) ||
      value instanceof Number
    );
  }
}
