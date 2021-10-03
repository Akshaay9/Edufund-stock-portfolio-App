import { toast } from "react-toastify";

export const checkForLogin = (email, passowrd, allUser) => {
  let user = allUser.find((ele) => ele.email === email);
  if (!user) {
    toast.error("user does not exist, please log in");
    return [null, false];
  } else if (user.passowrd !== passowrd) {
    toast.error("wrong credentials");
    return [null, false];
  } else {
    return [user, true];
  }
};
