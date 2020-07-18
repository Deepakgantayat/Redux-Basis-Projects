import axios from 'axios'
import {setCustomers} from './customers'

export const setUser = (user = {}) => {
    return {
        type:'SET_USER',
        payload: user
    }
}

export const startResgisterUser =(formData, props)=>{
    return (dispatch) => {
        axios.post('http://dct-ticket-master.herokuapp.com/users/register', formData)
            .then((response) => {
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }
                else{
                    alert('successfully registered')
                    //redirect user to another page automatically
                    dispatch(setUser())
                   props.history.push('/users/login')
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const startLoginUser = (formData, props) => {
    return (dispatch) => {
        axios.post('http://dct-ticket-master.herokuapp.com/users/login', formData)
            .then((response) => {
                if(response.data.error){
                    alert(response.data.error)
                }
                else{
                    const token = response.data.token
                    localStorage.setItem('authToken', token)
                    alert('Succssfully logged in')

                    Promise.all([axios.get('http://dct-ticket-master.herokuapp.com/users/account',{
                        header: {
                            'x-auth' : token
                        }
                    }), axios.get('http://dct-ticket-master.herokuapp.com/customers', {
                        headers: {
                            'x-auth' : token
                        }
                    }),
                    axios.get('http://dct-ticket-master.herokuapp.com/departments', {
                        headers: {
                            'x-auth' : token
                        }
                    })])

                    .then(values => {
                        const [userResponse, customerResponse, departmentResponse] = values
                        dispatch(setUser(userResponse.data))
                        dispatch(setCustomers(customerResponse.data))
                        dispatch(setCustomers(departmentResponse.data))
                        props.history.push('/')
                    })
                    // this.props.history.push('/')
                    // window.location.reload()

                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const startGetUser = () =>{
    return(dispatch) =>{
        axios.get('http://dct-ticket-master.herokuapp.com/users/account',{
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then(response =>{
            const user = response.data
            dispatch(setUser(user))
        })
    }
}

export const startLogoutUser = () => {
    return (dispatch) => {
        axios.delete('http://dct-ticket-master.herokuapp.com/users/logout', {
            headers: {
              'x-auth': localStorage.getItem('authToken')
            }
          })
          .then(response =>{
            if(response.data.hasOwnProperty('notice')){
              localStorage.removeItem('authToken')
              dispatch(setUser({}))
              window.location.href = '/users/login'
            }
          })
    }
}