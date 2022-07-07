import { useState } from "react";
import Calendar from './Calendar'
import PastCalendar from './PastCalendar'
import { useSelector } from 'react-redux';
import { getDate } from '../../otherFunctions/getDates'

import classes from './Header.module.css'


import { InitialState } from "../../store/rootReducer";

const Header = () => {

    const [isCalendarShow, setIsCalendarShow] = useState(false)
    const [isPastCalendarShow, setIsPastCalendarShow] = useState(false)
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

    const documentClickHandler = (event: any) => {
        if (event.target !== document.getElementById('calendar')) {
            if (event.target.closest('.css-1xhj18k') !== document.getElementsByClassName('css-1xhj18k')[0]) {
                setIsCalendarShow(false);
                document.removeEventListener('click', documentClickHandler);
            }
        }
    }

    const documentPastClickHandler = (event: any) => {
        if (event.target !== document.getElementById('pastCalendar')) {
            if (event.target.closest('.css-1xhj18k') !== document.getElementsByClassName('css-1xhj18k')[0]) {
                setIsPastCalendarShow(false);
                document.removeEventListener('click', documentPastClickHandler);
            }
        }
    }

    const setFirstDateHandler = () => {
        setIsCalendarShow((prev) => !prev)
        setIsPastCalendarShow(false)
        if (!isCalendarShow) {
            document.addEventListener('click', documentClickHandler);
        }
    }

    const setSecondDateHandler = () => {
        setIsPastCalendarShow((prev) => !prev)
        setIsCalendarShow(false)
        if (!isPastCalendarShow) {
            document.addEventListener('click', documentPastClickHandler);
        }
    }

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div>
                    <img className={classes.img} id='calendar' onClick={setFirstDateHandler} src='./images/calendar.svg' alt='calendar' />
                    <span className={classes.text}>{firstDate}-{secondDate} {month} {year}</span>
                </div>
                <span className={classes.text}>vs</span>
                <div>
                    <img className={classes.img} id='pastCalendar' onClick={setSecondDateHandler} src='./images/calendar.svg' alt='calendar' />
                    <span className={classes.text}>{thirdDate}-{fourthDate} {pastMonth} {pastYear}</span>
                </div>
            </div>
            {isCalendarShow && <Calendar />}
            {isPastCalendarShow && <PastCalendar />}
        </header>
    )
}

export default Header;