import React from "react";
import Skeleton from "./Skeleton";

const UserSkeleton = () => {
  return (
    <div className="user-card">
      <Skeleton width="60px" height="60px" />

      <div style={{ flex: 1 }}>
        <Skeleton width="60%" height="18px" />
        <br />
        <Skeleton width="90%" height="14px" />
        <br />
        <Skeleton width="40%" height="14px" />
      </div>
    </div>
  );
};

export default UserSkeleton;