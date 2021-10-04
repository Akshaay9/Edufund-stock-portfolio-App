import { toast } from "react-toastify";

export const checkForLogin = (email, passowrd, allUser, presentUser) => {
  let user = allUser.find((ele) => ele.email === email);
  if (!user) {
    toast.error("user does not exist, please log in");
    return [null, false];
  } else if (user.pass !== passowrd) {
    toast.error("wrong credentials");
    return [null, false];
  } else {
    return [user, true];
  }
};

export const checkSignUp = (email, allUser, presentUser) => {
  if (allUser.some((ele) => ele.email === email)) {
    return true;
  } else if (email === presentUser.email) {
    return true;
  }
};
