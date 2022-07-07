import classes from './Balance.module.css'
import { useSelector } from "react-redux";

import { getDate } from '../../../otherFunctions/getDates';

import { InitialState } from '../../../store/rootReducer';

import BalanceBarChart from './BalanceBarChart';

const Balance = () => {


    const firstDate = useSelector((state: InitialState) => {
        if (state.firstDate) {
            return new Date(state.firstDate).getDate().toString()
        }
        return ''
    })
    const secondDate = useSelector((state: InitialState) => {
        if (state.secondDate) {
            return new Date(state.secondDate).getDate().toString()
        }
        return ''
    })

    const month = useSelector((state: InitialState) => {
        return getDate(new Date(state.firstDate).getMonth())
    })

    const year = useSelector((state: InitialState) => {
        if (state.firstDate) {
            return new Date(state.firstDate).getFullYear();
        }
        return ''
    })
    return (
        <div className={classes.wrapper}>
            <span className={classes.text}>баланс</span>
            <div className={classes.container}>
                <div className={classes.balanceText}>₽</div>
                <div className={classes.growth}>%</div>
            </div>
            <div className={classes.diagramContainer}>
                <BalanceBarChart />
            </div>
            <div className={classes.spanContainer}>
                <span>{firstDate} {month} {year}</span>
                <span>{secondDate} {month} {year}</span>
            </div>
        </div>
    )
}

export default Balance;