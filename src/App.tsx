import classes from './App.module.css'
import { useEffect } from "react";
import Header from "./components/header/Header";
import Main from './components/main/Main'
import { useDispatch, useSelector } from 'react-redux';

import {
  getPurchasesAsyns, getViewsAsyns,
  addPurchasesDiagram, addClicksDiagram,
  addViewsDiagram
} from "./store/Actions";

import { InitialState } from "./store/rootReducer";


function App() {

  const actualPurchases = useSelector((state: InitialState) => state.actualPurchases)
  const pastPurchases = useSelector((state: InitialState) => state.pastPurchases)
  const actualViews = useSelector((state: InitialState) => state.actualViews)
  const pastViews = useSelector((state: InitialState) => state.pastViews)
  const actualClicks = useSelector((state: InitialState) => state.actualClicks)
  const pastClicks = useSelector((state: InitialState) => state.pastClicks)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesAsyns())
    dispatch(getViewsAsyns())
  }, [dispatch])

  useEffect(() => {
    dispatch(addPurchasesDiagram())
  }, [actualPurchases, pastPurchases])

  useEffect(() => {
    dispatch(addViewsDiagram())
  }, [actualViews, pastViews])

  useEffect(() => {
    dispatch(addClicksDiagram())
  }, [actualClicks, pastClicks])

  return (
    <div className={classes.container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
