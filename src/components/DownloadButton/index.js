import React from "react"
import Button from "../Button"
import { ArrowDown } from "../Icons"

const DownloadButton = (props) => {
  return (
    <a href={props.download} target="_blank" rel="noopener noreferrer" download>
      <Button customStyle={{ width: "40px", height: "32px", marginRight: "16px" }}>
        <ArrowDown />
      </Button>
    </a>
  )
}

export default DownloadButton
