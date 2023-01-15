import Iteams from "./Iteams"

function IteamList({data, handleDelete}) {
    
    return (
        <>
            {data.map(function(c, i){
                return <Iteams key={i} data={c} handleDelete={handleDelete} />
            })}
        </>
  )
}

export default IteamList