import React from "react";
import Events from "./Events";
import { useSelector, useDispatch } from "react-redux";
import { putData } from "../../Redux/EventSlice";
import axios from "axios";

function index() {
  const allEvents = useSelector((state) => state.events.value);
  const dispatch = useDispatch();

  axios
    .get(
      "http://3.17.216.66:4000/events"
    )
    .then((response) => {
      dispatch(putData(response.data));
    })
    .catch();

  return (
    <>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 lg:gap-y-8 gap-6 md:mx-5">
        {allEvents.length == 0 ? (
          <div>bhai khali h</div>
        ) : (
          <>
            {allEvents.map((v) => (
              <Events allEvents={v} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default index;
