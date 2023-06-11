
import {data} from "../Data/data"

export default function Users() {
    return(
        <div>
        <div className="w-full p-3 ">
              
        <div className="hidden md:flex justify-between align-center font-bold">

            <p>Users Dashboard</p>

            <p>Welcome Back James </p>
        </div>



           <div className="hidden md:grid mt-10 bg-white rounded-2xl h-[70vh] shadow-xl overflow-scroll">
        <div className="hidden md:flex text-purple-600 px-20 pt-10 font-bold justify-between align-center">
            
            <div><h1>Id</h1></div>
            <div><h1>Name</h1></div>
            <div><h1>Date</h1></div>
            <h1>Update | Delete</h1>
           
        </div>
        <div className="justify-center self-center ">
            <ul>
        {data.map((order,id) => (
                <li className="hidden md:flex justify-between px-20 mt-5 font-bold text-center " key={id}>
                    <h1 className="text-center">{order.id}</h1>
                    <h1 className=" text-center">{order.name.first +" "+ order.name.last}</h1>
                    <h1 className="text-center">{order.date}</h1>
                    <h1>Update | Delete</h1>
            </li>
            )
            )}
            </ul>
            </div>
            </div>
    
         </div>   
         

            {/* for mobile devices */}
                 <div className="md:hidden sm: font-bold bg-white ">
                <div className="flex justify-between">
                    <h1>Users Dashboard</h1>
                    <h1>Hi James</h1>
                </div>
                <div className="absolute bottom-20">
                <h1>To view this kindly use a bigger screen like a pc / monitor / ipad</h1>
                </div>
       
       
         </div>
         </div>





         
        
    )
}