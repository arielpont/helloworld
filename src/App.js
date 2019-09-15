import React , { Component } from 'react';
import './App.css';

import Layout from './components/layout';
import Title from './components/title';
import Input from './components/input';
import TaskList from './components/task-list';


class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
         newTask: "",
         tasks: []
      }
   }

  //Metods
  handleTaskChange = (event) => {
    this.setState({
      newTask: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault(); //stop refresh

    let newTasks = this.state.tasks;
    newTasks.push(this.state.newTask)
    
    this.setState({
      newTask: "",
      tasks: newTasks
    })
  }

  handleDelete = (id) => {
    let newTasks = this.state.tasks;
    newTasks.splice(id, 1)
    this.setState({
      tasks: newTasks,
    })
  }

  //Render
  render() {
      return (
         <Layout>
            <Title />
                <Input value={this.state.newTask} handleTaskChange={this.handleTaskChange} handleSubmit={this.handleSubmit} />
            <TaskList tasks={this.state.tasks} handleDelete={this.handleDelete} />
         </Layout>
      );
   }

}

export default App;

