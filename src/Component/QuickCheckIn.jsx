"use client";

import CheckInButton from "./CheckInButton";

export default function QuickCheckIn({friend}) {

  const handleTimeline = (type) => {
    console.log("Timeline updated",type,friend);
  };

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body p-4 sm:p-5">

        <h2 className="text-sm font-medium text-primary sm:text-base">
          Quick Check-In
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

          <div onClick={()=> handleTimeline("Call")} className="w-full">
            <CheckInButton label="Call" />
          </div>

          <div onClick={()=> handleTimeline("Text")} className="w-full">
            <CheckInButton label="Text" />
          </div>

          <div onClick={()=> handleTimeline("Video")} className="w-full">
            <CheckInButton label="Video" />
          </div>

        </div>

      </div>
    </div>
  );
}