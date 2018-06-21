import React,{Component} from 'react';
import {connect} from 'react-redux';
import selectBook from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component
{   renderList()
    {  return this.props.books.map((book)=>{
        return (
            <li 
            onClick={()=>selectBook(book)}
            className="list-group-item" 
            key={book.title}>
            {book.title}
            </li>
        )
    })
        
    }
    render()
    {   
        return (
            <ul className="list-group-item col-md-4">
                {this.renderList()}
            </ul>
        )
    }
}
 let mapStateToProps = (state) => {
    return {
        books: state.books
    }
}
let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectBook:selectBook},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(BookList);