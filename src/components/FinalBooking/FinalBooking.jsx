import React from "react";
import QRCode from "react-qr-code";
import { Card } from "flowbite-react";

function FinalBooking() {
  return (
    <div className="flex justify-center gap-7 py-56">
      <QRCode value="hey" />
      <div>
        <Card className="max-w-[300px] min-h-[250px]">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Your Booking Details</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default FinalBooking;
