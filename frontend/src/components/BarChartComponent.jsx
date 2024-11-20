import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = () => {
    const { age, gender, dateRange, chartData, setChartData } = useContext(AppContext)

    useEffect(() => {
        const fetchChartData = async () => {
            let sendData = { age, gender, dateRange }
            let data = await fetch('http://localhost:3000/getchartdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sendData)
            })

            data=await data.json()
            data=data.result
            setChartData(data)
        }
        fetchChartData()
    }, [age, gender, dateRange])


    return (
      chartData==null?"Loading":<ResponsiveContainer width={"100%"} height={300}>
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Day" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="A"
            fill="#B3CDAD"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="B"
            fill="#B3CDAD"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="C"
            fill="#FF5F5E"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
          <Bar
            dataKey="D"
            fill="orange"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    );
}

export default BarChartComponent
