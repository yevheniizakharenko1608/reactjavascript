import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from '../../components/SearchBar'
import FriendsTable from '../../components/FriendsTable'
import AddFriend from '../../components/AddFriend'
import './styles.scss'


export default class Friends extends React.Component {
    constructor() {
        super();
        this.state = {
            filterText: '',
            friends: [],
            addFriend: false,
            name:'',
            surname:'',
            isBestFriend: false
        };
        this.updateForSearch = this.updateForSearch.bind(this);
        this.addFriend = this.addFriend.bind(this);
    }

    updateForSearch(e) {
        this.setState({filterText: e.target.value})
    }

    addFriend(){
        console.log(ReactDOM.findDOMNode(this.refs.adds.refs.surname).value);
    }
    handleSubmit(){
        this.setState({ addFriend: true})
    }
    
    componentDidMount(){
        if(this.state.addFriend)
            this.setState({addFriend: false})
    }

    render() {
        console.log(this.state.friends.length);
        return (
            
            <div>
                {
                    this.state.friends.length != 0 ?
                        <div>
                            <SearchBar filterText={this.state.filterText} update={this.updateForSearch}/>
                            <FriendsTable friendsList={this.state.friends} filterText={this.state.filterText}/>
                        </div>
                        :
                        <div className={'block_friends_add_friend'}>
                            <div>К сожалению, у Вас нет друзей. Желаете добавить друга?</div>
                            <div className={'button'}><button onClick={::this.handleSubmit}>Добавить друга</button></div>
                            {
                                this.state.addFriend ?
                                    <AddFriend ref='adds' addFriend={this.addFriend}/>
                                    :
                                    ''
                            }
                        </div>
                }
            </div>
        )
    }
}


