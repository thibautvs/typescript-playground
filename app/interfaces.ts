// Without interface
function printLabel(obj: { label: string }) {
  console.log(obj.label)
}

const arg = { label: 'a', size: 4 }
printLabel(arg)

// With interface
interface LabelledValue {
  label: string
}

function printLabel2(obj: LabelledValue) {
  console.log(obj.label)
}

printLabel2(arg)

// Optional properties
interface SquareConfig {
  color?: string
  width?: number
}
