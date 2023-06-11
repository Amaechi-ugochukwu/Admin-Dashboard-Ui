import {Link} from "react-router-dom"

export default function Navbar2(){
    return(
        <div className="p-5  font-bold " >
            <div className="text-purple-400 h-screen">
                <h2 className="mb-20"><Link to="/">Home</Link></h2>
                <h2 className="mb-20"><Link to="/user">Users</Link></h2>
                <h2 className="mb-20"><Link to = "/orders">Orders</Link></h2>
                <h2 className="mb-20">Products</h2>

                <div className="absolute bottom-4  text-black  ">
                   <h1>Logout</h1> 
                </div>
  
           </div>
            

        </div>
    )
}