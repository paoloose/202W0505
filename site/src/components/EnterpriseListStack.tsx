import { useRef, useState } from "react";
import { EnterpriseList, type FormDataDict } from "./EnterpriseListBase";
import { Stack } from "src/structs/stack";

export function EnterpriseListStack() {
  const [_, refresh] = useState({});
  const list = useRef(new Stack<FormDataDict>());

  return (
    <EnterpriseList
      title='Utilizando stacks'
      fields={['CODIGO', 'NOMBRE', 'APELLIDO', 'SEXO', 'SUELDO']}
      searchByField='CODIGO'
      data={list.current.toArray()}

      btnGuardar={(data) => {
        list.current.push(data);
        refresh({});
      }}
      btnEliminar={() => {
        list.current.pop();
        refresh({});
      }}
      btnSalir={() => {
        list.current.clear();
        refresh({});
      }}
      btnConsultar={(code) => {
        return list.current.find((e) => e['CODIGO'] === code);
      }}
    >
    </EnterpriseList>
  );
}
