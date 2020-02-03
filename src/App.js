import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
  state={
persons:[
  {name:'Rajesh',age:24},
  {name:'Neeraj',age:26},
  {name:'Amit',age:25}
]
  }
render() {
  return (
    <div className="App">
      Hi i am React App
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby is to play cricket</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
    // React.createElement('div' ,{className:'custom'},'hii thsi is react')
  );
}
}
export default App;
