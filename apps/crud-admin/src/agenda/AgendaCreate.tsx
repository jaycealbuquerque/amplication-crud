import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AgendaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Nome" source="nome" />
      </SimpleForm>
    </Create>
  );
};
