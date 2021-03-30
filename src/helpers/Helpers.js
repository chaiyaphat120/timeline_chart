import dayjs from 'dayjs'
import('dayjs/locale/th')
export const getDateTimeObject = (rawDate) => {
    let result = dayjs(rawDate)
    if (`${rawDate}`.endsWith('z') || `${rawDate}`.endsWith('Z')) {
        result = dayjs(rawDate).add(-7, 'hours')
    }
    return result
}
