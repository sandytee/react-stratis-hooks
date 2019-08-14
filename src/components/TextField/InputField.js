import React from "react";
import TextField from "@material-ui/core/TextField";

export const InputField = ({
    field,    
    minwidth = 450,
    width,
    label,
    margin = "normal",
    ...props
    }) => (
    <div>
        <TextField
        style={{ minWidth: minwidth, width: width }}
        {...field}
        {...props}
        id={`${field.name}-id`}
        label={label}
        margin={margin}
        />
    </div>
);

export default InputField