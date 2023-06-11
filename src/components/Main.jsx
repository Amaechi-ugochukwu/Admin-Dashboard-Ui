import Cards from "./Cards"
import Barchart from "./Barchart"



export default function Main(){
    return(
        <div>
              <div className="md:hidden sm:mt-30 font-bold bg-white ">
                <div className="flex justify-between m-7">
                    <h1> Dashboard</h1>
                    <h1>Hi James</h1>
                </div>
               </div>
       
        <div className="w-full">
        <div className="hidden md:flex justify-between align-center p-3 font-bold">

            <p>Dashboard</p>

            <p>Welcome Back James </p>
        </div>
        <Cards />
        <div className=" hidden md:flex p-3 w-[90%] self-center px-20">
            <Barchart />
        </div>

        </div>

              {/* for mobile devices */}
              <div className="md:hidden sm: font-bold bg-white ">
               
                <div className="mt-5">
                <h1>To view all components kindly use a bigger screen like a pc / monitor / ipad</h1>
                </div>
       
</div>
</div>

      
    )
}