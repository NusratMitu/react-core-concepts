import logo from './logo.svg';
import './App.css';
const number = 25;
const student = {
  name:'sakib',
  job:'study'
};
const studentStyle = {
  backgroundColor: 'red',
  color: 'white'
}
function App() {
  // const players = ['sakib', 'tamim', 'taskin','mushfiq'];
  const players = [
    {name:'sakib', height:5.10},
    {name:'tamim', height:5.9},
    {name:'taskin', height:6},
    {name:'riyad', height:5.8},
    {name:'mushfiq', height:5.6}
  ];
  return (
    <div className="App">
     
        {
          players.map(player => <Players name= {player.name}height= {player.height}></Players>) 
        }
    
    </div>
  );
}
function Players(props) {
  return (
    <div className="person">
      <h2>Name: {props.name}</h2>
      <h5>Height: {props.height}</h5>
    </div>
  );
}
function Friend(props){
  console.log(props);
  return(
    <div className="person">
      <h3>Phone: {props.phone}</h3>
      <h5>Address: {props.address}</h5>
    </div>
  );
}
function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: 'lightsteelblue',
  border: '1px solid steelblue',
  borderRadius: '20px',
  margin: '20px'
  }
  return (
   <div style = {person}>
    <h1>Name: {props.name}</h1>
    <h4>Profession: {props.profession}</h4>
   </div>
  );
}
export default App;

/* 
      <Friend phone="01788" address="ctg"></Friend>
      <Friend phone="01711" address="dhaka"></Friend>
      <Friend phone="01789" address="ctg"></Friend>
*/

/* 
   <ul>
        {
          players.map(player => <li> {player}</li>) 
        }
      </ul>
 <p id="title">title</p>
      <Person name={players[0]} profession="crickter"></Person>
      <Person name={players[1]}></Person>
      <Person></Person>
*/
