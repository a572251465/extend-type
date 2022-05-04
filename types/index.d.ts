/**
 * DeepPartial<XXX>
 * {
 *   home: string,
 *   school: {name: string, age: number}
 * }
 *
 * =>
 *
 * {
 *   home?: string,
 *   school?: {name?: string, age?: number}
 * }
 */
export declare type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

/**
 * PartPartial<XXX, 'name'>
 * {
 *   name: string,
 *   age: number
 * }
 * =>
 * {
 *   name?: string
 *   age: number
 * }
 */
export declare type PartPartial<T, K extends keyof T> = {
  [P in K]?: T[P]
} & Omit<T, Exclude<keyof T, K>>

export declare type isAny<T> = 0 extends 1 & any ? true : false

export declare type isUnknown<T> = keyof T extends never ? true : false

export declare type FirstChar<T extends string | any[]> =
  T extends `${infer A}${infer B}`
    ? A
    : T extends [infer L, ...infer R]
    ? L
    : never

export declare type SplitString<
  T,
  K extends string = '',
  S extends any[] = [T]
> = T extends `${infer L}${K}${infer R}` ? SplitString<R, K, [...S, L]> : S

export declare type KebabCase<
  T,
  S extends string = ''
> = T extends `${infer L}${infer R}`
  ? Uppercase<L> extends L
    ? KebabCase<R, `${S extends '' ? S : `${S}-`}${Lowercase<L>}`>
    : KebabCase<R, `${S}${L}`>
  : S

type FirstUppercase<T> = T extends `${infer L}${infer R}`
  ? `${Uppercase<L>}${R}`
  : T
export declare type CamelCase<
  T extends string = '',
  S extends string = ''
> = T extends `${infer L}-${infer R}`
  ? CamelCase<R, `${FirstUppercase<S>}${FirstUppercase<L>}`>
  : `${S}${FirstUppercase<T>}`
