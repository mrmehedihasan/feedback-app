//import { useState } from "react"
import Card from "./Card"
function Iteams({data, handleDelete}) {
    //const [getText, setText] = useState(text.text)
  return (
    <div className='container'>
      <Card>
          <div className="num-display">{data.rate}</div>
          <div className="text-display">{data.text}</div>
          <button onClick={()=>handleDelete(data.id)}>Click</button>
      </Card>
    </div>
  )
}

export default Iteams