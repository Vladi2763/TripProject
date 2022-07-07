import ConversatiobBarChart from './ConversationBarChart';

import classes from './Conversation.module.css'
import { useSelector } from "react-redux";

import { getDate } from '../../../otherFunctions/getDates';

import { InitialState } from '../../../store/rootReducer';

const Conversion = () => {

    const summaryClicksCurrentYear = useSelector((state: InitialState) => {
        const clicks = state.actualClicks

        let summ = 0;

        for (let i = 0; i < clicks.length; i++) {
            summ += clicks[i].click
        }

        return summ;
    })

    const summaryClicksPastYear = useSelector((state: InitialState) => {
        const clicks = state.pastClicks

        let summ = 0;

        for (let i = 0; i < clicks.length; i++) {
            summ += clicks[i].click
        }

        return summ;
    })

    const growth = (summaryClicksCurrentYear && summaryClicksPastYear) ? ((summaryClicksCurrentYear / summaryClicksPastYear - 1) * 100).toFixed(1) + '%' : '';

    const countValueCurrentYear = useSelector((state: InitialState) => {
        const purchases = state.actualPurchases

        let count = 0;

        for (let i = 0; i < purchases.length; i++) {
            count += i;
        }

        return count;
    })

    const countValuePastYear = useSelector((state: InitialState) => {
        const purchases = state.pastPurchases

        let count = 0;

        for (let i = 0; i < purchases.length; i++) {
            count += i;
        }

        return count;
    })

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
            <span className={classes.text}>клики → продажи</span>
            <div>
                <div className={classes.viewsConversation}>{growth}</div>
                <div className={classes.container}>
                    <div className={classes.viewsText}>{summaryClicksCurrentYear} → {countValueCurrentYear}</div>
                    <div className={classes.viewsPastText}>{summaryClicksPastYear} → {countValuePastYear}</div>
                </div>
            </div>
            <div className={classes.diagramContainer}>
                <ConversatiobBarChart/>
            </div>
            <div className={classes.spanContainer}>
                <span>{firstDate} {month} {year}</span>
                <span>{secondDate} {month} {year}</span>
            </div>
        </div>
    )
}

export default Conversion;