import React from 'react'

export default class SimpleFriends extends React.Component{
    render() {
        return (
            <tr>
                <td style={{color: 'red'}}>{this.props.name}</td>
                <td style={{color: 'red'}}>{this.props.surname}</td>
            </tr>
        );
    }
}