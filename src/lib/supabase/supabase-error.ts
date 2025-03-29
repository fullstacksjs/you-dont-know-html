import { isObject } from "@fullstacksjs/toolbox";

export type SupabaseError = Error & { code: string; details: string };
const isError = (e: any): e is Error & { cause?: Error } => e instanceof Error;

export const isSupabaseError = (
  e: any,
): e is Error & { cause: SupabaseError } =>
  isError(e) && isObject(e.cause) && "code" in e.cause && "details" in e.cause;

export const isPermissionError = (e: any) =>
  isSupabaseError(e) && e.cause.code === "PGRST301"; // cspell:disable-line

export const isDuplicationError = (e: any) =>
  isSupabaseError(e) && e.cause.code === "23505";
