import React, { Component } from 'react'


export default class AddFriend extends Component {
    constructor(){
        super();
        this.state = {
            rightInputValue: false
        }
    }
    handleSubmit(e){
        if(e.target.elements[0].value != '' && e.target.elements[1].value != '')
            this.setState({rightInputValue: true});
        
    }
    componentDidMount(){
        if(this.state.rightInputValue)
            this.setState({rightInputValue: false})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.addFriend}>
                    <input className='form-control' type='text' ref='name' placeholder='Name'/>
                    <input className='form-control' type='text' ref='surname' placeholder='Surname'/>
                    <button className='btn btn-primary' type='submit'>Добавить друга</button>
                </form>
            </div>
        )
    }
}

AddFriend.propTypes = {
    addFriend: React.PropTypes.func.isRequired
};