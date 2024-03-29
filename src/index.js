import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
// youtube api key
const API_KEY = 'AIzaSyBTsOLTDazv-tifx4rS7EvtAZl72YtKfTo'
// create a new component and it should produce some html


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('js ninjas')
  }

  videoSearch(term) {
    YTSearch({key:API_KEY, term: term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300 )


    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail  video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    )
  }
}
// take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
