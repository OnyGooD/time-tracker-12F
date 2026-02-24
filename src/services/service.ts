import type { TimeEvent } from "../types/Event"

export async functon getData(){
    const response = await fetch("data.json")
    const data : TimeEvent[] = await response.json()
    return data
}