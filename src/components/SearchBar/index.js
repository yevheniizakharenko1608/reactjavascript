import React from 'react'

export default class SearchBar extends React.Component{
    render() {
        return (
            <form>
                <input type='text' onChange={this.props.update} placeholder='Search...' value={this.props.filterText} />
            </form>
        );
    }
}