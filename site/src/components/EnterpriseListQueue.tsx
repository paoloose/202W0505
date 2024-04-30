import { useRef, useState } from "react";
import { EnterpriseList, type FormDataDict } from "./EnterpriseListBase";
import { Queue } from "src/structs/queue";

export function EnterpriseListQueue() {
  const [_, refresh] = useState({});
  const list = useRef(new Queue<FormDataDict>());

  return (
    <EnterpriseList
      title='Utilizando queues'
      fields={['CODIGO', 'NOMBRE', 'APELLIDO', 'SEXO', 'SUELDO']}
      searchByField='CODIGO'
      data={list.current.toArray()}

      btnGuardar={(data) => {
        list.current.enqueue(data);
        refresh({});
      }}
      btnEliminar={() => {
        list.current.dequeue();
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
