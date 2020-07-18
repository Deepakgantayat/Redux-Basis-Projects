import React from 'react'
import {connect} from 'react-redux'

class Account extends React.Component{
   

    render(){
        return(
            <div>
                <h2>Account -{this.props.account.username} - {this.props.account.email}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        account : state.user
    }
}

export default connect(mapStateToProps)(Account)