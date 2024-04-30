import { Fragment } from "react/jsx-runtime";
import {
  enterpriseListButton,
  enterpriseListHeader,
  enterpriseListInput,
  enterpriseListStyles,
  enterpriseListTable,
  enterpriseListTableCell,
  enterpriseListTableHeader
} from "./styles.css";
import { useRef } from "react";
import { noop } from "src/constants";

export type FormDataDict = { [k: string]: FormDataEntryValue };

interface Props {
  fields: string[];
  searchByField: string;
  data: FormDataDict[];
  btnGuardar: (data: FormDataDict) => void;
  btnConsultar: (searchValue: String) => FormDataDict | null;
  btnEliminar: () => void;
  btnActualizar?: () => void;
  btnRestaurar?: () => void;
  btnSalir: () => void;
}

export function EnterpriseList({
  fields,
  searchByField,
  data,
  btnGuardar,
  btnConsultar,
  btnEliminar,
  btnActualizar,
  btnRestaurar,
  btnSalir,
}: Props) {
  const incrementalId = useRef(1);

  const forEachFormField = (callback: (field: string, input: HTMLInputElement) => void) => {
    fields.forEach((fname) => {
      const input = getInputElementForField(fname);
      if (input) {
        callback(fname, input);
      }
    });
  }

  const getInputElementForField = (fieldName: string) => {
    return window.document.querySelector(`form #${fieldName}`) as HTMLInputElement | null;
  }

  const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    data['ID'] = (incrementalId.current++).toString();
    forEachFormField((_, input) => {
      input.value = '';
    });
    btnGuardar(data);
  }

  const _handleConsultar = () => {
    // Get the value of the field we want to search by
    const input = getInputElementForField(searchByField);
    let value = input?.value ?? '';
    if (!value) {
      value = window.prompt(`Ingrese un ${searchByField} por favor`) ?? '';
    }
    const found = btnConsultar(value);
    if (!found) {
      alert('No se encontró el registro');
      return;
    }
    forEachFormField((fieldName, input) => {
      input.value = found[fieldName].toString()
    });
  };

  return (
    <main className={enterpriseListStyles}>
      <form className={enterpriseListHeader} onSubmit={_handleSubmit}>
        <div style={{ padding: 12 }}>
          <fieldset>
            <legend>Datos del empleado</legend>
            <section style={{
              display: 'grid',
              gridTemplateColumns: 'max-content max-content',
              gap: 5,
            }}>
              {
                fields.map((f, i) => (
                  <Fragment key={i}>
                    <label htmlFor={f}>{f}</label>
                    <input
                      required
                      id={f}
                      name={f}
                      type="text"
                      autoComplete="off"
                      className={enterpriseListInput}
                    />
                  </Fragment>
                ))
              }
            </section>
          </fieldset>
        </div>
        <div style={{
          display: 'grid',
          padding: 16,
          gap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
        }}>
          <button className={enterpriseListButton} type="submit">Guardar</button> {/* Handled by the submit event */}
          <button className={enterpriseListButton} type="button" onClick={btnActualizar}>Actualizar</button>
          <button className={enterpriseListButton} type="button" onClick={_handleConsultar}>Consultar</button>
          <button className={enterpriseListButton} type="button" onClick={() => {
            if (btnRestaurar) return btnRestaurar();
            forEachFormField((_, input) => {
              input.value = '';
            });
          }}>Restaurar</button>
          <button className={enterpriseListButton} type="button" onClick={btnEliminar}>Eliminar</button>
          <button className={enterpriseListButton} type="button" onClick={btnSalir}>Salir</button>
        </div>
      </form>
      <section style={{ minHeight: 200, margin: 4, borderLeft: '2px solid #8a8885', borderTop: '2px solid #8a8885', borderRight: '2px solid #fcfcfc', borderBottom: '2px solid #fcfcfc' }}>
        <table className={enterpriseListTable}>
          <thead>
            {/* Cabecera de la tabla */}
            <tr>
              <th className={enterpriseListTableHeader}>ID</th>
              {
                fields.map((f, i) => (
                  <th
                    key={i}
                    className={enterpriseListTableHeader}
                  >
                    {f}
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {/* Filas */}
            {
              data.map((row, i) => (
                <tr key={i}>
                  <td className={enterpriseListTableCell}>{row['ID'].toString()}</td>
                  {
                    fields.map((f, j) => (
                      <td key={j} className={enterpriseListTableCell}>
                        {row[f].toString()}
                      </td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
      <section>
      </section>
    </main>
  );
}
