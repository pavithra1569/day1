// import Child from './components/Child'
// import Home from './page/Home'
//  import About from './page/About'
//  import Contact from './page/Contact'
//  import Skills from './page/Skills'

// const App = () => {
  // var fruits = ["Apple","Banana","Custardapple","dragon fruit","guava"];
  // var users = {name:"pavi",pass:"12345"};
//   return (
//     <>
//       <div>
//         <Child name="pavi" phno="9874561230" dept="IT" />
//         <Child name ="thara" phno="9875641230" dept="CSE"/>
//         <Home items = {fruits} users={users}/>
//         <About/>
//         <Skills/>
//         <Contact/>
//         </div>
//         </>
//   )
// }

// export default App
// import React from 'react';
// import Login from './components/Login';

// function App() {
//   return (
//     <div>
//       <Login />
//     </div>
//   );
// }

// export default App;
// import React from 'react'
// import Counter from './components/Counter'
// const App = () => {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   )
// }

// export default App
import React from 'react'
import Home from './page/Home'
 import About from './page/About'
 import Contact from './page/Contact'
 import Skills from './page/Skills'
 import Login from './components/Login'
import Navbar from './components/Navbar'
import Hooks from './page/Hooks'
import State from './Hook/State'
import Effect from './Hook/Effect'
import Effect2 from './Hook/Effect2'
import Reducer from './Hook/Reducer'
import Ref from './Hook/Ref'
import {Routes,Route} from 'react-router-dom'
const App = () => {
   var fruits = ["Apple","Banana","Custardapple","dragon fruit","guava"];
  var users = {name:"pavi",pass:"12345"};
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home items = {fruits} users={users}/>}/>
        <Route path='/about' element={<About items = {fruits} users={users}/>}/>
        <Route path='/skills' element ={<Skills/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path ='/hooks' element={<Hooks/>}/>
        <Route path = '/state' element = {<State/>}/>
       <Route path='/effect' element = {<Effect/>}/> 
       <Route path='/effect2' element = {<Effect2/>}/>
       <Route path='/ref' element = {<Ref/>}/>
       <Route path='/useReducer' element = {<Reducer/>}/>
      </Routes>
    </div>
  )
}
export default App
