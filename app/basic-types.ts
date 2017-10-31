// Boolean
let isDone: boolean = true

// Number
let age: number = 32

// Array
let list: number[] = [1, 2, 3]
let names: string[] = ['Catherine', 'Léa', 'Thibaut']

// Tuple
let tuple: [string, number]
tuple = ['hello', 10]
tuple[0] += ' world'

// Enum
enum Color { Red, Green, Blue }
let color: Color = Color.Blue
let colorName: string = Color[2]

// Any
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = true
notSure.aMethod()

let differentTypes: any[] = [1, true, 'string']
differentTypes[2] = 4

// Void
function doSomething(): void {
  console.log('done')
}

// Never
function error(message: string): never {
  throw new Error(message)
}

function inifiniteLoop(): never {
  while (true) {
  }
}

// Type assertions
let user: any = 'John'
let len: number = (user as string).length;
