import { useEffect, useState } from "react"
import { getData } from "./services/service"
import type { TimeEvent } from "./types/Event"
import type { TimeFramesType } from "./types/Event"
import EventCard from "./components/EventCard"

const App = () => {
  const [data, setData] = useState<TimeEvent[]>([])
  const [timeframes, setTimeframes] = useState<TimeFramesType>("weekly")

  useEffect(()=>{
    setTimeout(()=>{
      getData().then(data => setData(data))
    },2000)
  },[])

  return (
    <div>
      <button style={{fontWeight: timeframes == "daily" ? "bold":"normal"}} onClick={()=>setTimeframes("daily")}>Daily</button>
      <button style={{fontWeight: timeframes == "weekly" ? "bold":"normal"}} onClick={()=>setTimeframes("weekly")}>Weekly</button>
      <button style={{fontWeight: timeframes == "monthly" ? "bold":"normal"}} onClick={()=>setTimeframes("monthly")}>Monthly</button>
      {data.map(temp => <EventCard timeframes={timeframes} data={temp} />)}
    </div>
  )
}

export default App