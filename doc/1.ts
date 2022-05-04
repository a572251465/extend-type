interface User {
  name: string,
  age: number,
  address: string
}

type AddName<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: T[K]
}

type MoveField<T> = {
  [K in keyof T as Exclude<K, 'address'>]: T[K]
}
type test = AddName<User>
type test1 = MoveField<User>


let a!: unknown
let b!: number

type isUnknown<T> = keyof T extends never ? true : false
type a1 = isUnknown<unknown>
type a2 = isUnknown<any>
type a3 = isUnknown<never>
type a4 = isUnknown<boolean>

type a5 = keyof never

export default {}
