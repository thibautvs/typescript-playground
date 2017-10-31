export const add = (a: number, b: number): number => a + b

export const sayHello = (name: string): string => `Hello ${name}`

export const isItXmas = (): boolean => {
  const today = new Date()
  return today.getDate() === 25 && today.getMonth() === 11
}
