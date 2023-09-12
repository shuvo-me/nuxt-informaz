import moment from "moment"

export default defineNuxtPlugin(nuxtApp => {
    return{
        provide:{
            timeFormat: (date: string) => moment(date).format('DD MMM, YYYY')
        }
    }
})