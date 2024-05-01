import { useRef, useState } from "react";
import { EnterpriseList, type FormDataDict } from "./EnterpriseListBase";
import { Queue } from "src/structs/queue";

export function EnterpriseListProposedExerciseQueue() {
  const [_, refresh] = useState({});
  const list = useRef(new Queue<FormDataDict>());

  return (
    <EnterpriseList
      title='Ejercicio propuesto con queues'
      fields={['NOMBRE', 'SUELDO', 'VENTAS', 'E_CIVIL', 'HIJOS']}
      searchByField='NOMBRE'
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

      computeFields={{
        'COMISION': (data) => Number(data['VENTAS']) * 0.05,
        'DCTO_SEGURO': (data) => {
          const casado = data['E_CIVIL'] === 'CASADO';
          const hijos = Number(data['HIJOS']);

          if (casado && hijos == 0) return 120;
          if (casado && hijos > 0)  return 140 + 70 * hijos;
          return 100;
        },
        'IMPUESTOS': (data) => {
          const TA = Number(data['SUELDO']) + Number(data['COMISION']);
          if (TA <= 1500) return 0;
          if (TA <= 2300) return 0.03 * TA;
          if (TA <= 3000) return 0.04 * TA;
          return 0.06 * TA;
        },
        'SUELDO_NETO': (data) => {
          const sueldoBase      = Number(data['SUELDO']);
          const comision        = Number(data['COMISION']);
          const descuentoSeguro = Number(data['DCTO_SEGURO']);
          const impuestos       = Number(data['IMPUESTOS']);
          return sueldoBase + comision - descuentoSeguro - impuestos;
        }
      }}

      footerInformation={{
        'Empleado con el mayor sueldo': () => {
          const max = list.current.toArray().reduce((acc, e) => {
            if (!acc) return e;
            return Number(e['SUELDO']) > Number(acc['SUELDO']) ? e : acc;
          }, null as any);
          if (!max) return '';
          return max['NOMBRE'].toString().toUpperCase();
        },
        'Monto de sueldos acumulado': () => {
          return list.current.toArray().reduce((acc, e) => acc + Number(e['SUELDO']), 0).toString();
        },
        'Tamaño': () => list.current.toArray().length.toString(),
      }}
    >
    </EnterpriseList>
  );
}
