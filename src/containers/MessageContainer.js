import React from 'react';
import { connect } from 'react-redux'; //connect react-redux'
import Message from './../components/Message';


class MessageContainer extends React.Component {
    render() {
        var {message}=this.props;
        return(
            <Message message={message}/>
        )
    }
}


//create MapStateToProp mean from state of store to prop for this component
const mapStateToProps = state=>{
    return{
        message : state.message
    }
}

export default connect(mapStateToProps,null)(MessageContainer);