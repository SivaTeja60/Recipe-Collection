import { Fragment } from "react";
import classes from './App.module.css'
import Header from "./components/headerLayout/Header";
import Recipe from "./components/Recipe/Recipe";
function App() {
  
  return (
    <Fragment>
      <Header />
        <main >
          <Recipe className={classes.app}/>
        </main>
    </Fragment>
  );
}

export default App;
