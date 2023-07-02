import { Fragment } from 'react';
import HomePage from './pages/homePage';
// import Toast from './componen/toast';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Fragment>
      <ToastContainer position="bottom-right" autoClose={3000}/>
      <HomePage />
    </Fragment>
  );
}

export default App;
