import React, { useContext, useEffect } from "react";
import AuthContext from "../../../Context/auth/authContext";
const UserLink = ({ id }) => {
  const authContext = useContext(AuthContext);
  const { userInfo, getUserById } = authContext;
  console.log(id, "ravi");
  useEffect(() => {
    getUserById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  console.log(userInfo, "getuser");
  return <>{userInfo?.name} </>;
};

export default UserLink;
