
import { Fragment } from "react";
import image from "../../assets/image.jpg";
import classes from "./Header.module.css";
function Header(props) {
  //TODO

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Cooking Recipe</h1>
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="Food" />
      </div>
    </Fragment>
  );
}

export default Header;
