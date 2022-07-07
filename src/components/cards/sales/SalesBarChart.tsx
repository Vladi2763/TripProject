import { useSelector } from 'react-redux';
import { InitialState } from '../../../store/rootReducer';
import classes from './SalesBarChart.module.css'

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function SalesBarChart() {

  const purchases = useSelector((state: InitialState) => state.purchasesForDiagram)


  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={classes.customTooltip}>
          <p className={classes.labelDate}>{`${new Date(payload[0].payload.purchase.date).toLocaleDateString()}`}</p>
          <p className={classes.labelPrice}>{`${payload[0].payload.purchase.value.toFixed(0)}₽`}</p>
          <p className={classes.labelDate}>{`${new Date(payload[1].payload.pastPurchase.date).toLocaleDateString()}`}</p>
          <p className={classes.labelPrice}>{`${payload[1].payload.pastPurchase.value.toFixed(0)}₽`}</p>
        </div>
      );
    }

    return null;
  };


  return (
    <ResponsiveContainer width={'100%'} height={135}>
      <BarChart
        data={purchases}
        margin={{
          top: 20,
          bottom: 5
        }}
      >
        <Tooltip content={<CustomTooltip />} />
        <Bar barSize={15} dataKey='purchase.value' stackId="a" fill="#2196F3" />
        <Bar barSize={15} dataKey="pastPurchase.value" stackId="a" fill="#64B6F7" />
      </BarChart>
    </ResponsiveContainer>
  );
}