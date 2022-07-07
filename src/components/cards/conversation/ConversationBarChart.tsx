import { useSelector } from 'react-redux';
import { InitialState } from '../../../store/rootReducer';

import classes from './ConversationBarChart.module.css'

import {
    BarChart,
    Bar,
    Tooltip,
    ResponsiveContainer
} from "recharts";

export default function ConversatiobBarChart() {
   
    const clicks = useSelector((state: InitialState) => state.clicksForDiagram)
    
    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className={classes.customTooltip}>
                    <p className={classes.labelDate}>{new Date(payload[0].payload.click.date).toLocaleDateString()}</p>
                    <p className={classes.labelPrice}>{payload[0].payload.click.value}</p>
                    <p className={classes.labelDate}>{new Date(payload[1].payload.pastClick.date).toLocaleDateString()}</p>
                    <p className={classes.labelPrice}>{payload[1].payload.pastClick.value}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <ResponsiveContainer width={'100%'} height={135}>
        <BarChart
            width={472}
            height={135}
            data={clicks}
            margin={{
                top: 20,
                bottom: 5
            }}
        >
            
            <Tooltip content={<CustomTooltip />} />
            <Bar barSize={15} dataKey='click.value' stackId="a" fill="#2196F3" />
            <Bar barSize={15} dataKey="pastClick.value" stackId="a" fill="#64B6F7" />
        </BarChart>
        </ResponsiveContainer>
    );
}