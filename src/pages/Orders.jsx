

import Order from "../components/Order"
import Sidebar from "../components/Sidebar"


export default function Orders(){
return(
 
    <div className="flex gap-5">
        <div className="border-purple-400 border-solid border-r-[3px] bg-white p-3 shadow-xl grow-0 ">
        <Sidebar />
        </div>
        <div className="p-2 grow">
            <Order />
        </div>


        </div>

   
)

}