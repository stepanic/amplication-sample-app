import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ProbaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Active" source="active" />
        <TextInput label="Location" source="location" />
        <TextInput label="Subtitle" source="subtitle" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
