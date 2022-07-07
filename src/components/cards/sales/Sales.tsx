import SalesBarChart from "./SalesBarChart";
import classes from './Sales.module.css'
import { useSelector } from "react-redux";

import { InitialState } from "../../../store/rootReducer";
import { getDate } from '../../../otherFunctions/getDates'

const Sales = () => {

    const summaryValueCurrentYear = useSelector((state: InitialState) => {
        const purchases = state.actualPurchases

        let summ = 0;

        for (let i = 0; i < purchases.length; i++) {
            summ += purchases[i].value
        }

        return summ;
    })

    const summaryValuePastYear = useSelector((state: InitialState) => {
        const purchases = state.pastPurchases

        let summ = 0;

        for (let i = 0; i < purchases.length; i++) {
            summ += purchases[i].value
        }

        return summ;
    })
    const char = summaryValueCurrentYear > summaryValuePastYear ? '+' : ''
    const growth = (summaryValueCurrentYear && summaryValuePastYear) ? (char + ((summaryValueCurrentYear / summaryValuePastYear - 1) * 100).toFixed(0) + '%') : '';

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
    const thirdDate = useSelector((state: InitialState) => {
        if (state.thirdDate) {
            return new Date(state.thirdDate).getDate().toString()
        }
        return ''
    })
    const fourthDate = useSelector((state: InitialState) => {
        if (state.fourthDate) {
            return new Date(state.fourthDate).getDate().toString()
        }
        return ''
    })

    const month = useSelector((state: InitialState) => {
        return getDate(new Date(state.firstDate).getMonth())
    })

    const pastMonth = useSelector((state: InitialState) => {
        return getDate(new Date(state.thirdDate).getMonth())
    })

    const year = useSelector((state: InitialState) => {
        if (state.firstDate) {
            return new Date(state.firstDate).getFullYear();
        }
        return ''
    })

    const pastYear = useSelector((state: InitialState) => {
        if (state.thirdDate) {
            return new Date(state.thirdDate).getFullYear();
        }
        return ''
    })
    return (
        <div className={classes.wrapper}>
            <span className={classes.text}>продажи</span>
            <div className={classes.salesWrapper}>
                <div className={classes.currentYearContainer}>
                    <div className={classes.saleText}>{summaryValueCurrentYear.toFixed(0)}₽</div>
                    <div className={classes.growth}>{growth}</div>
                </div>
                <div className={classes.pastYearContainer}>{summaryValuePastYear.toFixed(0)}₽</div>
            </div>
            <div className={classes.diagramContainer}>
                <SalesBarChart />
            </div>
            <div className={classes.spanContainer}>
                <span>{firstDate} {month} {year}</span>
                <div className={classes.fullDatesContainer}>
                    <img src='./images/ball.svg'/>
                    <span>{firstDate}-{secondDate} {month} {year}</span>
                    <img src='./images/opacityBall.svg'/>
                    <span>{thirdDate}-{fourthDate} {pastMonth} {pastYear}</span>
                </div>
                <span>{secondDate} {month} {year}</span>
            </div>
        </div>
    )
}

export default Sales;