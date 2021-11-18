import * as yup from "yup";
const postSchema = yup.object().shape({
  body: yup.string().required(),
  id: yup.number().required(),
  title: yup.string().required(),
  userId: yup.number().required(),
});
export default postSchema;
