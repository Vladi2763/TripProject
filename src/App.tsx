import { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import { useDispatch, useSelector } from 'react-redux';

import { getPurchasesAsyns, getViewsAsyns } from "./store/Actions";


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPurchasesAsyns())
    dispatch(getViewsAsyns())
  }, [dispatch])

  const pursh = useSelector((state: any) => state.views)
  console.log(pursh)

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
