import type { ForecastData } from "@/api/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LineChart, ResponsiveContainer} from "recharts";

interface HourlyTemperatureProps{
  data:ForecastData;
}

  

const HourlyTemprature = ({data}:HourlyTemperatureProps) => {
  return (
    <Card className="flex-1">
        <CardHeader>
           <CardTitle>Today's Temperature</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full ">
              <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart>
                  
                </LineChart>
              </ResponsiveContainer>
          </div>
        </CardContent>
    </Card>
  )
}

export default HourlyTemprature