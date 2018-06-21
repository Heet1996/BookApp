import React, { Component } from 'react';
import BookList from '../container/book_list';
import BookDetails from '../container/book_details'
export default class App extends Component {
  render() {
    return (
      <div>
      <BookList />
      <BookDetails />
      </div>
      
    );
  }
}
