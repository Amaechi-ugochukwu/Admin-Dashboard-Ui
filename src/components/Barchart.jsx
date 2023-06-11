import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale ,
    BarElement , 
    Title , 
    Tooltip , 
    Legend
} from "chart.js"
import { useState ,useEffect } from "react";


ChartJs.register(
    CategoryScale ,
    LinearScale ,
    BarElement,
    Title,
    Tooltip,
    Legend
)
export default function Barchart(){
    const [chartData , setChartData] = useState({datasets : []})
    const [chartOptions , setChartOptions] = useState({});

    useEffect(() => {
        setChartData ({
            labels:['Mon' , 'Tues' , 'Weds' , 'Thurs' , 'Fri' , 'Sat' , 'Sun'],
            datasets : [
                {
                labels: 'Sales $',
                data: [18000 , 20000 , 15000, 19000 , 10000 , 24000 , 28000] ,
                borderColor : '#fff' ,
                backgroundColor: '#dea6ed',
                }
            ]
        

        })

        setChartOptions ({
            plugins : {
                legend : {
                    position :'Top'
                },
                title : {
                    display : true ,
                    text :'Daily Revenue'
                }
            },
            maintainAspectRatio : false , 
            responsive : true
        })

    }, [])

    return(
        <div className="w-full h-[70vh]">
            <Bar data={chartData}  options={chartOptions}/>
        </div>
    )

}