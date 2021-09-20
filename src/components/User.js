import React from "react";

function User ({userData}) {
    return(
    <>
    <span className="name">{userData.name}</span>
    <span className="handle">@{userData.handle}</span>
    </>
    );
}

export default User;