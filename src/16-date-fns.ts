import { subDays, format } from 'date-fns';


const date = new Date(1998, 1, 28)
const rta = subDays(date, 30)
const string = format(rta, 'yyy/MM/dd')

console.log(string)
