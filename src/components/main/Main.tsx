import Sales from '../cards/sales/Sales';
import Balance from '../cards/balance/Balance'
import Conversion from "../cards/conversation/Conversion";
import Views from "../cards/views/Views";

import classes from './Main.module.css'

const Main = () => {
    return (
        <main className={classes.main}>
            <div className={classes.container}>
                <div className={classes.cardContainer}><Sales /></div>
                <div className={classes.cardContainer}><Balance /></div>
                <div className={classes.cardContainer}><Views /></div>
                <div className={classes.cardContainer}><Conversion /></div>
            </div>
        </main>
    )
}

export default Main;