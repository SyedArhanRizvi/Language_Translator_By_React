import React from 'react'
function Option({code, value}) {

  // console.log("Hello");
  return (
    <option value={code}>

      {value}
    </option>
  )
}

export default Option
