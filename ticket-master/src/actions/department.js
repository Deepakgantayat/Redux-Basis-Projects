import axios from 'axios'

export const setDepartments = (departments) => {
    return {
        type: 'SET_DEPARTMENTS',
        payload: departments
    }
}

export const startSetDepartments = () => {
    return (dispatch) => {
        axios.get('http://dct-ticket-master.herokuapp.com/departments', {
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            const departments = response.data
            dispatch(setDepartments(departments))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const addDepartment = (department) =>{
    return {
        type : 'ADD_DEPARTMENT',
        payload: department
    }
}

export const startAddDepartment = (formData, props) => {
    return (dispatch) => {
        axios.post('http://dct-ticket-master.herokuapp.com/departments', formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors.message)
            }
            else{
                const department = response.data
                dispatch(addDepartment(department))
                props.history.push(`/departments/${department._id}`)

            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const editDepartment = (department) =>{
    return {
        type: 'EDIT_DEPARTMENT',
        payload: department
    }
}

export const startEditDepartment = (formData,props) => {
    return (dispatch) => {
        axios.put(`http://dct-ticket-master.herokuapp.com/departments/${props.match.params.id}`, formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors.message)
            }
            else{
                const department = response.data
                dispatch(editDepartment(department))
                props.history.push(`/departments/${department._id}`)
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const removeDepartment = (id) => {
    return {
        type: 'REMOVE_DEPARTMENT',
        payload : id
    }
}

export const startRemoveDepartment = (id) => {
    return (dispatch) => {
        //  dispatch(removeCustomer(id))//remove it before confirmation from server may cause propblem
        axios.delete(`http://dct-ticket-master.herokuapp.com/departments/${id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            dispatch(removeDepartment(response.data._id))
        })
    }    
}