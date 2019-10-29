import React from "react"
import { CustomButton } from "./styles"

const Button = (props) => {
  return (
    <CustomButton className={props.customClass} style={props.customStyle}>
      {props.children}
    </CustomButton>
  )
}

export default Button
