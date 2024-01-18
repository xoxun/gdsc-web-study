import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
import { Helmet } from "react-helmet-async";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface IHistorical{
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ChartProps{
  coinId:string;
}

function Chart({coinId}:ChartProps){
  const isDark = useRecoilValue(isDarkAtom);
  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv",coinId],()=>fetchCoinHistory(coinId));
  console.log(data);
  return(
    <div>{isLoading? "loading chart...":<ApexCharts type="line" 
    series={[
      {
        name: "Price",
        data:data?.map((price=> parseFloat(price.close)))??[]
      },
    ]}  
    options={{
      theme:{
        mode:isDark? "dark" : "light",
      },
        chart:{
          height: 500,
          width : 500,
          toolbar:{
            show:false
          },
          background:"transparent",
        },
        stroke:{
          curve:"smooth",
          width:3,
        },
        grid:{
          show:false,
        },yaxis: {
          show: false
        },xaxis: {
          labels:{show:false},
          axisTicks:{show:false},
          axisBorder:{show:false},
          type: "datetime",
          categories: data?.map((price) =>
          new Date(price.time_close * 1000).toUTCString()
          ),
        },fill: {
          type: "gradient",
          gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
        },
        colors: ["#0fbcf9"],
        tooltip: {
          y: {
            formatter: (value) => `$${value.toFixed(2)}`,
          },
        }
      }}
    />}</div>
  );
}

export default Chart;
