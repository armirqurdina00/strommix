import { PieChart, Pie, Sector, Cell, ResponsiveContainer, LabelList, Label } from 'recharts';

const data = [
    { name: 'Wind', value: 46, colour: 'lightblue', svg: "M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" },
    { name: 'Sonne', value: 25, colour: 'yellow', svg: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" },
    { name: 'Wasser', value: 29, colour: 'lightgray', svg: "M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" },
];
const COLORS = ['lightblue', 'yellow', 'lightgray', '#FF8042'];

let sum = 0

data.forEach(record => {
    sum += record.value
})

const RADIAN = Math.PI / 180;

const Chart = () => {

    let renderLabel = function (entry) {
        return entry.name
    }

    const renderCustomizedLabel = (props) => {
        const outerRadius = props.outerRadius;
        const cx = props.cx;
        const cy = props.cy;
        const innerRadius = props.innerRadius;
        const midAngle = props.midAngle;

        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 1.6;

        return (
            <svg fill={props.colour} x={cx - 195 + radius * Math.cos(-midAngle * RADIAN)} y={cy - 15 + radius * Math.sin(-midAngle * RADIAN)}
                xmlns="http://www.w3.org/2000/svg" height="2.5em" viewBox="0 0 512 512">
                <path d={props.svg} />
            </svg>

        );
    };

    const labelFormatter = (value) => {
        const fvalue = Math.round(value / sum * 100)
        return fvalue + '%';
    };

    return (
        <ResponsiveContainer width="100%" height={350} className="inline-block">
            <PieChart>
                <Pie
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    startAngle={225}
                    endAngle={-45}
                    innerRadius={45}
                    outerRadius={110}
                    paddingAngle={0}
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    strokeWidth={1}
                >
                    <LabelList
                        formatter={labelFormatter}
                        style={{ fontSize: "16px", fontWeight: 100, stroke: 'black' }}
                    />
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke='false' style={{ outline: 'none' }} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default Chart;