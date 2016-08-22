import React from 'react'
import BestFriends from '../BestFriends'
import SimpleFriend from '../SimpleFriends'

export default class FriendsTable extends React.Component{
    render() {
        let rows = this.props.friends.map( (friend, i) => {
            if (friend.name.indexOf(this.props.filterText) === -1) {
                return;
            }
            if (friend.isBestFriend)    return <BestFriends key={i} name={friend.name} surname={friend.surname}/>;
            else   return <SimpleFriend key={i} name={friend.name} surname={friend.surname}/>
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}