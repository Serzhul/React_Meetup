import { Fragment } from "react";
import MeetupItem from "./MeetupItem";
import Spinner from "../ui/Spinner";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <Fragment>
      {props.isLoading && <Spinner />}
      <ul className={classes.list}>
        {props.meetups.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default MeetupList;
