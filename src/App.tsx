import classes from './App.module.css'
import { useEffect } from "react";
import Header from "./components/header/Header";
import Main from './components/main/Main'
import { useDispatch, useSelector } from 'react-redux';

import { getPurchasesAsyns, getViewsAsyns } from "./store/Actions";

import { InitialState } from "./store/rootReducer";


function App() {

  const actualPurchases = useSelector((state: InitialState) => state.actualPurchases)
  const pastPurchases = useSelector((state: InitialState) => state.pastPurchases)
  const actualViews =useSelector((state: InitialState) => state.actualViews)
  const pastViews =useSelector((state: InitialState) => state.pastViews)
  const actualClicks =useSelector((state: InitialState) => state.actualClicks)
  const pastClicks =useSelector((state: InitialState) => state.pastClicks)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesAsyns())
    dispatch(getViewsAsyns())
  }, [dispatch])

  useEffect(()=> {
    dispatch({type: 'ADDPURCHASESBAR'})
  },[actualPurchases, pastPurchases])

  useEffect(()=> {
    dispatch({type: 'ADDVIEWSBAR'})
  },[actualViews, pastViews])

  useEffect(()=> {
    dispatch({type: 'ADDCLICKSBAR'})
  },[actualClicks, pastClicks])

  return (
    <div className={classes.container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
