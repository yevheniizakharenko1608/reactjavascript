import React from 'react'

export default class Person extends React.Component {
    shouldComponentUpdate(nextProps){
        return this.props.data !== nextProps.data
    }
    render() {
        let rows = this.props.data.map( person => {
            return <PersonRow key={person.id} data={person} />
        });
        return (
            <table>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

Person.defaultProps = {
    data: [
        {id: 1, name: 'Philip'}, {id: 2, name: 'Yevhenii'},
        {id: 3, name: 'John'}, {id: 4, name: 'Alex'}
    ]
};

const PersonRow = (props) => {
    return <tr>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
    </tr>
};