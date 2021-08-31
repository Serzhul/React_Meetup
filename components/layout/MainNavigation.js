import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Popup from "./Popup";
import Spinner from "../ui/Spinner";

function MainNavigation(props) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (router.query.isVisible !== undefined) {
      setIsVisible(router.query.isVisible);
    } else {
      setIsVisible(false);
    }
  }, [router.query.isVisible]);

  return (
    <Fragment>
      <header className={classes.header}>
        {isVisible && <Popup />}

        <div className={classes.logo}>
          <Link href="/"> React Meetups</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">All Meetups</Link>
            </li>
            <li>
              <Link href="/new-meetup">Add New Meetup</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default MainNavigation;
