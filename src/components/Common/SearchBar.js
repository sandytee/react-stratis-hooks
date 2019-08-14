import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { InputField } from "../TextField"

// I know what you're thinking. What is Formik and Yup?
// Let's just say... I really dislike Redux Forms, and Formik with Yup makes it much easier along with making sense that it is within
// the components rather than the reducers
// Here's a link to some documentations if you're interested: 
// https://github.com/jquense/yup <- Yup
// https://jaredpalmer.com/formik/ <- Formik

const SearchBar = ({ handleSubmit }) => {
 return (
    <Formik
    initialValues={{
        value: ""
    }}
    onSubmit={({ value }) => {        
        handleSubmit(value);
    }}
    validationSchema={yup.object().shape({
      value: yup.string().required()
    })}
    render={() => (
        <Form>
          <Field
            type="text"
            label="Value"
            name="value"
            values={InputField}
          />
        </Form>        
    )}
  />
 )
}

export default SearchBar;