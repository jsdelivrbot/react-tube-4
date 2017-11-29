import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyBTsOLTDazv-tifx4rS7EvtAZl72YtKfTo'
// create a new component and it should produce some html
const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  )
}
// take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
