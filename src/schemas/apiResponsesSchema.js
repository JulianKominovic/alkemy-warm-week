import * as yup from "yup";
const responseSchema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
  userId: yup.number().required(),
  id: yup.number().required(),
});

const responseSchemaPut = yup.object().shape({
  id: yup.number().required(),
});

export { responseSchema, responseSchemaPut };
