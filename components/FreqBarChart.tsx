import { BarChart, Bar, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, LabelList } from 'recharts';

const FreqBarChart = () => {
    const data = [
        {
            "name": "Jan",
            "windkraft": 60,
            "photovoltaik": 15,
            "wasserkraft": 0,
            "andere": 25
        },
        {
            "name": "Feb",
            "windkraft": 55,
            "photovoltaik": 20,
            "wasserkraft": 0,
            "andere": 25
        },
        {
            "name": "Mar",
            "windkraft": 45,
            "photovoltaik": 25,
            "wasserkraft": 0,
            "andere": 30
        },
        {
            "name": "Apr",
            "windkraft": 45,
            "photovoltaik": 35,
            "wasserkraft": 0,
            "andere": 20
        },
        {
            "name": "Mai",
            "windkraft": 30,
            "photovoltaik": 45,
            "wasserkraft": 0,
            "andere": 25
        },
        {
            "name": "Jun",
            "windkraft": 20,
            "photovoltaik": 60,
            "wasserkraft": 0,
            "andere": 20
        },
    ]

    return (
        <ResponsiveContainer width='100%' height={250}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="1 1" stroke='gray' />
                <XAxis dataKey="name" stroke='white' fontSize={14} />
                <YAxis stroke='white' fontSize={14} />
                {/* <Tooltip /> */}
                {/* <Legend /> */}
                <Bar dataKey="windkraft" stackId="a" fill="#C8FFF8" isAnimationActive={false} />
                <Bar dataKey="photovoltaik" stackId="a" fill='#FFEC00' />
                <Bar dataKey="wasserkraft" stackId="a" fill='blue' />
                <Bar dataKey="andere" stackId="a" fill='#AAAAAA' />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default FreqBarChart;