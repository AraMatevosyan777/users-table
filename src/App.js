import React from 'react'
import Registration from './components/Registration/Registration';
import './App.css';
import {connect} from 'react-redux';
import {requestUsers,addUser,deleteUser} from './redux/reducer';
import Table from './components/Table/Table';

class App extends React.Component{
  componentDidMount(){
    this.props.requestUsers();
  }

  render(){
  this.state = {
    users: this.props.users
  }
  
  const sortByAge = () => {
    this.setState({
      users: this.state.users.sort((a,b)=> a.age - b.age)
    })
  }
  const sortByName = () => {
    this.setState({
      users: this.state.users.sort((a, b) => a.firstName.localeCompare(b.firstName))
    })
  }
    return (
      <div className='app'>
        <Registration addUser={this.props.addUser}/>
        <Table users={this.state.users} deleteUser={this.props.deleteUser} load={this.props.load} 
        sortByAge={sortByAge} sortByName={sortByName}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  users: state.reducer.users,
  load: state.reducer.load,
})
export default connect(mapStateToProps,{requestUsers,addUser,deleteUser})(App);
