import ViewsBarChart from './ViewsBarChart';

import classes from './Views.module.css'
import { useSelector } from "react-redux";

import { getDate } from '../../../otherFunctions/getDates';

import { InitialState } from '../../../store/rootReducer';


const Views = () => {
   
    const summaryViewsCurrentYear = useSelector((state: InitialState) => {
        const views = state.actualViews

        let summ = 0;

        for (let i = 0; i < views.length; i++) {
            summ += views[i].view
        }

        return summ;
    })

    const summaryViewsPastYear = useSelector((state: InitialState) => {
        const views = state.pastViews

        let summ = 0;

        for (let i = 0; i < views.length; i++) {
            summ += views[i].view
        }

        return summ;
    })

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

    const growth = (summaryViewsCurrentYear && summaryViewsPastYear) ? ((summaryViewsCurrentYear / summaryViewsPastYear - 1) * 100).toFixed(1) + '%' : '';

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
            <span className={classes.text}>просмотры → клики</span>
            <div >
                <div className={classes.viewsConversation}>{growth}</div>
                <div className={classes.container}>
                    <div className={classes.viewsText}>{summaryViewsCurrentYear} → {summaryClicksCurrentYear}</div>
                    <div className={classes.viewsPastText}>{summaryViewsPastYear} → {summaryClicksPastYear}</div>
                </div>
            </div>
            <div className={classes.diagramContainer}>
                <ViewsBarChart />
            </div>
            <div className={classes.spanContainer}>
                <span>{firstDate} {month} {year}</span>
                <span>{secondDate} {month} {year}</span>
            </div>
        </div>
    )
}

export default Views;