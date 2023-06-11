

 import {BrowserRouter , Routes , Route } from "react-router-dom"
 import  Home from "./pages/Home" 
 import User from "./pages/User"
 import Orders from "./pages/Orders";



function App() {
  return (

  
    <BrowserRouter>
      
    <Routes>
  
      <Route  exact path ="/" Component={Home}/>
      <Route  path = "/user" Component={User}/>
      <Route path="/orders" Component={Orders} />

     </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
