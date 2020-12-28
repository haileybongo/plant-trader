import React from 'react'
import SearchResults from '../components/SearchResults'
import SearchInput from '../components/SearchInput'
import { connect } from 'react-redux'
import { getToken } from  '../actions/getToken'
import { addSong } from '../actions/addSong'
import {Route,} from 'react-router-dom'


class SearchContainer extends React.Component {

    componentDidMount () {
        this.props.getToken()
    }
 
    render() {
          
        return (
            <div>
              
                <Route path='/search/new' render={() => <SearchInput token={this.props.search.token} getToken={getToken}/>}/>
                <Route path='/search/new' render={() =><SearchResults results={this.props.search.results} playlists={this.props.playlists} addSong={this.props.addSong}/>}/>                          
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playlists: state.playlists,
        search: state.search

    }
}



export default connect (mapStateToProps, {  getToken, addSong })(SearchContainer)