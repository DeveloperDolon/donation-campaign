import Chart from "react-apexcharts";
import { getLocalDonateID } from "../../LocalStorage/localStorage";


const Statistics = () => {

    const storedId = getLocalDonateID();

    return (
        <div className={`md:h-[80vh] h-auto flex justify-center items-center w-full`}>
            <div id="targetElement" className="md:w-[50%] w-[90%] mx-auto flex justify-center">
                <Chart
                type="pie"
                width={600}
                height={500}
                series={[(12 - storedId.length), storedId.length]}

                options={{
                    labels: ['Total Donation', "Your Donation"],
                    noData: {text: "Empty Data"},
                    legend: {
                        position: 'bottom',
                      },
                    colors: ["#FF444A", "#00C49F"],
                    dataLabels: {
                        enabled: true,
                        style: {
                            fontSize: "20px",
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontWeight: "bold"
                        }
                    },
                    responsive: [
                        {
                          breakpoint: 480,
                          options: {
                            chart: {
                              width: 300
                            },
                            legend: {
                              position: "bottom"
                            }
                          }
                        }
                      ]
                }}
                >
                </Chart>
            </div>
        </div>
       
    );
};

export default Statistics;