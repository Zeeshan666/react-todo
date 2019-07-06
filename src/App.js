import React, { Component } from 'react';
import Todos from './Todos'
import Addtodo from './Addtodo'
class App extends Component {
state={
  todos:[
    {id:1,content:"buy milk"},
    {id:2,content:"learn react "},
    {id:3,content:"javascript "},

]
}
deltodo=(id)=>{
  const todos=this.state.todos.filter(todo=>{
    return todo.id !== id
  })
  this.setState({
    todos:todos
  })

}
addtodo=(todo)=>{


  if(todo.content !==""){
    todo.id=Math.random();
    const todos=[...this.state.todos,todo]
    this.setState({
      todos:todos
    })
  }else{
     alert("add todo")
  }

}
updatetodo=(id)=>{

  let todos=this.state.todos.find(e=>{
return e.id===id

  })
   console.log(todos.id +"ye match")
let a =prompt("enter your value")
if(a!==""){
  let update={
    content:a,
    id:id,
    }
    let z = this.state.todos.map((v)=>{
      if(v.id!==id){
        return v}
    else{
     return update
    }
    })
    
    this.setState({
      todos:z
    })
}

}

  render() {
    return (
      <div className="App container">
        <h1 className="center red-text">
          CONTROLLED Component
        </h1>
        <Addtodo addtodo={this.addtodo}/>
        <Todos todos={this.state.todos} updatetodo={this.updatetodo} deltodo={this.deltodo}/>
      </div>
    );
  }
}

export default App;
