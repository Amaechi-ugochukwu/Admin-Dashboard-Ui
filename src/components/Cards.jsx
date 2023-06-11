



export default function Cards(){
    return(
        <div className="w-full p-5 px-10">
            <div className= " grid md:grid-cols-3 gap-8 p-3 ">
                <div className="bg-white p-5 w-[100%] shadow-xl font-bold rounded-md  hover:scale-105 duration-300  " >
                    <h3>$17,000</h3>
                    <div className="flex justify-between align-center ">
                    <p className="mt-10">Daily  Revenue</p>
                    <span className="text-green-400 text-bold">+18%</span>
                    </div>
                </div>
                <div className="bg-white p-5 w-[100%] shadow-xl font-bold rounded-md  hover:scale-105 duration-300">
                    <h3>$30,000</h3>
                    <div className="flex justify-between align-center ">
                    <p className="mt-10">Weekly Revenue</p>
                    <span className="text-red-700 text-bold">-10%</span>
                    </div>
                </div>
                <div className="bg-white p-5 w-[100%] shadow-xl font-bold rounded-md  hover:scale-105 duration-300">
                    <h3>$100,000</h3>
                    <div className="flex justify-between align-center ">
                    <p className="mt-10">Monthly Revenue</p>
                    <span className="text-red-700 text-bold">-3%</span>
                    </div>
                </div>

            </div>
        </div>
    )

 }