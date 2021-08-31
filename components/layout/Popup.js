import { Fragment } from "react";
import { useRouter } from "next/router";
import classes from "./Popup.module.css";

const Popup = () => {
  let router = useRouter();

  const hidePopup = () => {
    router.push("/");
  };

  return (
    <Fragment>
      <div className={classes.layout} onClick={hidePopup}></div>
      <div className={classes.popup}>{router.query.message}</div>
    </Fragment>
  );
};

export default Popup;
