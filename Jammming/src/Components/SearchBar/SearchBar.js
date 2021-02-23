import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component{
    constructor(props) {
        super(props);

        // This binding is necessary to make 'this' work in the callback
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search(term) {
        this.props.onSearch(this.props.term);
    }

    handleTermChange(event) {
        this.props.onSearch({term: event.target.value});
    }

    render() {
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}


export default SearchBar;