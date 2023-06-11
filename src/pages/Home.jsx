
import Main from "../components/Main"
import Sidebar from "../components/Sidebar"


export default function Home(){
return(
 
    <div className="flex gap-5">
        <div className="border-purple-400 border-solid border-r-[3px] bg-white p-3 shadow-xl grow-0 ">
        <Sidebar />
        </div>
        <div className=" grow">
            <Main />
        </div>


        </div>

   
)

}