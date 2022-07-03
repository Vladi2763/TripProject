import { useState } from "react";
import Calendar from "./Calendar";
import PastCalendar from "./PastCalendar";
import { useDispatch, useSelector } from 'react-redux';

import { InitState } from "../../store/rootReducer";

const Header = () => {

    const [isCalendarShow, setIsCalendarShow] = useState(false)
    const [isPastCalendarShow, setIsPastCalendarShow] = useState(false)
    const firstDate = useSelector((state: InitState) => state.firstDate)
    const secondDate = useSelector((state: InitState) => state.secondDate)
    const thirdDate = useSelector((state: InitState) => state.thirdDate)
    const fourthDate = useSelector((state: InitState) => state.fourthDate)

    console.log(typeof firstDate)

    const setFirstDateHandler = () => {
        setIsCalendarShow((prev)=> !prev)
        setIsPastCalendarShow(false)
    }

    const setSecondDateHandler = () => {
        setIsPastCalendarShow((prev)=> !prev)
        setIsCalendarShow(false)
    }

    return (
        <header>
            <div>
                <img onClick={setFirstDateHandler} src='./images/calendar.svg' alt='calendar' />
                <span>{firstDate}-{secondDate}</span>
            </div>
            <div>
                <img onClick={setSecondDateHandler} src='./images/calendar.svg' alt='calendar' />
                <span>{thirdDate}-{fourthDate}</span>
            </div>
            {isCalendarShow && <Calendar />}
            {isPastCalendarShow && <PastCalendar/>}
        </header>
    )
}

export default Header;