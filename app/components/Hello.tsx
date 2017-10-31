import * as React from 'react'
import { Component } from 'react'
import { sayHello, isItXmas } from '../utils'

interface HelloProps {
  name: string
}

class Hello extends Component<HelloProps, {}> {
  render() {
    return <article>
        <div>{sayHello(this.props.name)}</div>
        <p>Is it Christmas: {isItXmas() ? 'YES' : 'NO'}</p>
      </article>
  }
}

export default Hello
