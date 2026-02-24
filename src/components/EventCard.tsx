import type { TimeEvent } from "../types/Event"
import type { TimeFramesType } from "../types/Event"

type EventCardProps = {
  data: TimeEvent,
  timeframes: TimeFramesType
}

const EventCard = ({data, timeframes}: EventCardProps) => {
    const small = data.title.toLocaleLowerCase().replaceAll(" ", "-")

  return (
    <div>
        <div className="container" style={{background: `var(--color-${small})`}}>
      <img src={`/images/icon-${small}.svg`} id="icon"/>
      <div className="displayBox">
        <p id="title">Work</p>
        <img id="dotButton" src="public\images\icon-ellipsis.svg"/>
        <p id="hrsTime">32hrs</p>

        {timeframes == "daily" && <p id="timeFrames">Yesterday - {data.timeframes.daily.previous}hrs</p>}
        {timeframes == "weekly" && <p id="timeFrames">Last Week - {data.timeframes.weekly.previous}hrs</p>}
        {timeframes == "monthly" && <p id="timeFrames">Last Month - {data.timeframes.monthly.previous}hrs</p>}

      </div>
    </div>
    </div>
  )
}

export default EventCard