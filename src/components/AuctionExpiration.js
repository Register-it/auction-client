import dayjs from "dayjs";
import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

export default function AuctionExpiration({ date }) {
  const [expired, setExpired] = useState();
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: dayjs(date).toDate(),
    onExpire: () => setExpired(true),
  });

  if (expired) {
    return `Scaduta il ${dayjs(date).format("DD MMM YYYY HH:mm:ss")}`;
  }

  return (
    <span>
      <strong>
        <small>{dayjs(date).format("DD MMM YYYY HH:mm:ss")}</small>
      </strong>{" "}
      {days > 0 && `${days} giorni `}
      {hours > 0 && `${hours} ore `}
      {minutes} minuti {days === 0 && `${seconds} secondi`}
    </span>
  );
}
