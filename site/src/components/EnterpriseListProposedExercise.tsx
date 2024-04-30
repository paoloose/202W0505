import { useRef, useState } from "react";
import { EnterpriseList, type FormDataDict } from "./EnterpriseListBase";
import { Queue } from "src/structs/queue";

export function EnterpriseListProposedExercise() {
  const [_, refresh] = useState({});
  const list = useRef(new Queue<FormDataDict>());

  return (
    <EnterpriseList
      title='Ejercicio propuesto'
      fields={['CODIGO', 'NOMBRE_COMPLETO', 'SUELDO_BASE', 'VENTAS', 'ESTADO_CIVIL', 'HIJOS']}

      // Calculated:
      //
      // COMISION = 0.05 * VENTAS
      // DESCUENTO_SEGURO = {
      //   'SOLTERO': 100,
      //   'CASADO_SIN_HIJOS': 120,
      //   'CASADO_CON_HIJOS': 140 + 70 * HIJOS,
      // }
      // SUELDO_NETO = SUELDO_BASE + COMISION - DESCUENTO_SEGURO - IMPUESTOS

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
