import type { TimeEvent } from "../types/Event"

export async function getData(){
    const response = await fetch("data.json")
    const data : TimeEvent[] = await response.json()
    return data
}