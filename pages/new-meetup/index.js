// our-domain.com/new-meetup
import { useRouter } from "next/router";
import { Fragment, useState, useEffect } from "react";
import Head from "next/head";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Spinner from "../../components/ui/Spinner";

function NewMeetupPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isVisible && message) {
      router.replace({
        pathname: "/",
        query: {
          isVisible: isVisible,
          message: message,
        },
      });
    }
  }, [isVisible, message]);

  async function addMeetupHandler(enteredMeetupData) {
    setIsLoading(true);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    await setIsVisible(true);
    await setMessage(data.message);
    await setIsLoading(false);

    // router.push({
    //   pathname: "/",
    //   query: { isVisible: isVisible, message: message },
    // });
  }

  return (
    <Fragment>
      {isLoading && <Spinner />}
      <Head>
        <title>Add Meetup!</title>
        <meta name="description" description="add the meetup"></meta>
      </Head>

      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
