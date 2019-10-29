import React from "react"
import Button from "../Button"

const LikeButton = (props) => {
  return (
    <Button
      customStyle={{
        minWidth: "60px",
        justifyContent: "space-evenly",
        alignItems: "center",
        display: "flex",
      }}
    >
      {props.children}
    </Button>
  )
}

export default LikeButton
