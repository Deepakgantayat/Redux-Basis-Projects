import Axios from 'axios'

const axios = Axios.create({
    baseUrl: 'http://dct-ticket-master.herokuapp.com'
})

export default axios