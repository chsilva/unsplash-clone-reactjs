import React from "react"
import Button from "../Button"

const AddCollectionButton = (props) => {
  return (
    <Button
      customStyle={{
        width: "80px",
        justifyContent: "space-evenly",
        alignItems: "center",
        display: "flex",
      }}
    >
      {props.children}
    </Button>
  )
}

export default AddCollectionButton
