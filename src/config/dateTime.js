import { setHours, setMinutes, setSeconds } from 'date-fns'

const workHours = {
  startOfDay: setSeconds(setMinutes(setHours(new Date(), 7), 0), 0),
  endOfDay: setSeconds(setMinutes(setHours(new Date(), 20), 0), 0)
}

export default workHours
