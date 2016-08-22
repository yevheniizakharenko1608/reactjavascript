import React from 'react'

export default class SimpleFriends extends React.Component{
    render() {
        return (
            <tr>
                <td style={{color: 'blue'}}>{this.props.name}</td>
                <td style={{color: 'blue'}}>{this.props.surname}</td>
            </tr>
        );
    }
}