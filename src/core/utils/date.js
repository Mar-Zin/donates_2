import moment from "moment"
import 'moment-precise-range'

export const getTodayDateFormat = () => {
    return moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')
}