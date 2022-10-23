import React from "react";
import "../Skeleton/skeleton.css";
export default function Skeleton({ type }) {
  const COUNTER = 8;
  const CardSkeleton = () => (
    <div className="skeletonContainer">
      <div className="cardSk">
        <div className="photoSk">
          <div className="photoDetailsSk1"></div>
          <div className="photoDetailsSk2 "></div>
        </div>
      </div>
    </div>
  );
  if (type === "card") return Array(COUNTER).fill(<CardSkeleton />);
}
