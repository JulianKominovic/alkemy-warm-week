import * as yup from "yup";
const postCreationSchema = yup.object().shape({
  body: yup.string().required(),
  title: yup.string().required(),
  userId: yup.number().required(),
});
export default postCreationSchema;
