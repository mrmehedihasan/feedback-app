import { useState } from "react"
import content from "./Components/data"
import Header from "./Components/Header"
import IteamList from "./Components/IteamList"
import './index.css'

function App() {
  const [data, setData] = useState(content)
  const deleteFeedback = (id)=>{
    if(window.confirm("Are you sure?")){
      setData(data.filter((item)=>
      item.id !==id));
    }
    
  }
  return (
    <>
    <Header/>
    <IteamList data={data} handleDelete={deleteFeedback}/>
    </>
  )
}

export default App