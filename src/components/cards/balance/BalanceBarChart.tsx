
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

export default function BalanceBarChart() {

    return (
        <ResponsiveContainer width={'100%'} height={135}>
        <BarChart
            width={472}
            height={135}
            data={[]}
            margin={{
                top: 20,
                bottom: 5
            }}
        >
            
            <Tooltip />
            <Bar barSize={15} dataKey='' stackId="a" fill="#2196F3" />
            <Bar barSize={15} dataKey='' stackId="a" fill="#64B6F7" />
        </BarChart>
        </ResponsiveContainer>
    );
}