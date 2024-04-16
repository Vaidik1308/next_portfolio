import React, { ReactNode } from 'react'
import { RoughNotation } from 'react-rough-notation'

type Props = {
    children:ReactNode;
    color:string
}


const RainbowHighlight = ({children,color}: Props) => {
    const animationDuration = Math.floor(30 * children.length);
  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  )
}

export default RainbowHighlight