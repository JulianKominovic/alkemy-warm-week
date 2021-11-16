import { SignupSchema } from "../schemas/signup";
import axios from "axios";

export const sendAuthData = (email, password) => {
  // VALIDATE EMAIL AND PASSWORD WITH YUP

  const authObject = {
    email: email,
    password: password,
  };

  return new Promise((resolve, reject) => {
    if (SignupSchema.isValidSync(authObject)) {
      // MY OWN API -> A bridge between Alkemy's auth api and the client.
      axios({
        url: "https://heroes-alkemy.herokuapp.com/api/login",
        method: "post",
        data: authObject,
      })
        .then((res) => {
          if (res.data.error === undefined) {
            localStorage.setItem("token", res.data.token);
            resolve("Authenticated");
          } else {
            reject("Auth error");
          }
        })
        .catch((err) => err);
    } else {
      reject("invalid format");
    }
  });
};
