import React, { useState } from "react";
import { Datepicker,Button } from "flowbite-react";
import { Link } from "react-router-dom";
// import 'flowbite-datepicker';
// import { Datepicker } from "flowbite-react";

function TicketBooking() {
  const [date, setDate] = useState();
  return (
    <>
      <div className="flex justify-center min-w-[600px]">
        <h2>{date}</h2>
        <Datepicker
          autoHide={true}
          showClearButton={false}
          showTodayButton={false}
          // defaultDate={ new Date("2024-04-29")}
          // minDate={ Date}
          // maxDate={ Date}
          onChange={(e) => {
            console.log(e);
          }}
        />
      </div>
      <div className="">
        {/* show timings */}
     </div>
     <div className="">
     {/* no of sheets */}
     </div>
     <div className="flex justify-center">
        <Link to="/finalbooking">
        <Button>Pay And Book</Button>
        </Link>
     </div>
    </>
  );
}

export default TicketBooking;
