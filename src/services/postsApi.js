import postSchema from "../schemas/postSchema";
import { responseSchemaPut } from "../schemas/apiResponsesSchema";
import postCreationSchema from "../schemas/postCreationSchema";
import axios from "axios";

// TODO hacer un objeto con cada status que podria devolver la api y en base a eso retornar los mensajes correspondientes
// TODO implementarlo en las response, reject de cada llamada a la api
// const responses = {
//   200: "OK",
//   201: "Created",
//   204: "No content",
//   400: "Bad request",
//   404: "Not found",
//   500: "Internal server error",
// };
// https://http.cat/

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const getAllPosts = () => {
  return axios
    .get(BASE_URL)

    .then(({ data }) => data)
    .catch((err) => err);
};

export const getPostById = (id) => {
  return new Promise((resolve, reject) => {
    if (typeof id === typeof 1) {
      axios
        .get(`${BASE_URL}/${id}`)

        .then(({ data }) => resolve(data))
        .catch((err) => reject(err));
    } else {
      reject("Only receives numbers");
    }
  });
};

export const updatePost = (newPost) => {
  return new Promise((resolve, reject) => {
    if (postSchema.isValidSync(newPost)) {
      axios
        .put(`${BASE_URL}/${newPost.id}`, {
          ...newPost,
        })
        .then(({ data }) => {
          if (responseSchemaPut.isValidSync(data)) {
            resolve(data);
          } else {
            reject("Server error");
          }
        })
        .catch((err) => reject(err));
    } else {
      reject("Format error");
    }
  });
};

export const removePost = (id) => {
  return new Promise((resolve, reject) => {
    // ID HAS TO BE NUMBER
    if (typeof id === typeof 2) {
      axios
        .delete(`${BASE_URL}/${id}`)
        .then((res) => {
          if (res.status === 200) {
            resolve(res.status);
          } else {
            reject("An error has ocurred");
          }
        })
        .catch((err) => reject(err));
    } else {
      reject("Wrong type of ID");
    }
  });
};

export const createPost = (newPost) => {
  return new Promise((resolve, reject) => {
    if (postCreationSchema.isValidSync(newPost)) {
      axios
        .post(BASE_URL, {
          ...newPost,
        })
        .then((res) => {
          if (res.status === 201 && res.data.id !== undefined) {
            resolve(res.data);
          } else {
            reject("An error has ocurred");
          }
        })
        .catch((err) => reject(err));
    } else {
      reject("Wrong post format");
    }
  });
};
