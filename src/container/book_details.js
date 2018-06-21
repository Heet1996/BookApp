import React,{Component} from 'react';
import {connect} from 'react-redux';
class BookDetails extends Component 
{
    render()
    {   if(!this.props.book)
        return (
            <div>Select a Book </div>
        )
        return (
            <div>{this.props.book}</div>
        )
    }

}
//Maps the state of the reducer to the props of the component
//Return an Object
let mapStateToProps = (state) => {
    console.log(state);
    
    return {
        book: state.activeBook
    }
}
//Connect the React and Redux 
export default connect(mapStateToProps)(BookDetails);
