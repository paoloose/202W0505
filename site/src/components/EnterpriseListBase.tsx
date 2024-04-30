import { Fragment } from "react/jsx-runtime";
import {
  enterpriseListButton,
  enterpriseListHeader,
  enterpriseListInput,
  enterpriseListInputsWrapper,
  enterpriseListStyles,
  enterpriseListTable,
  enterpriseListTableCell,
  enterpriseListTableHeader,
  enterpriseListTableWrapper,
  enterpriseListWindowButton
} from "./styles.css";
import { useRef } from "react";
import { noop } from "src/constants";
import windowsTabButton1 from "@assets/icons/w95_button1.png";
import windowsTabButton2 from "@assets/icons/w95_button2.png";
import windowsTabButton3 from "@assets/icons/w95_button3.png";
import { normalizeForId } from "src/utils";

export type FormDataDict = { [k: string]: FormDataEntryValue };

interface Props {
  title: string,
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
  title,
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
  const prefixId = normalizeForId(title);

  const forEachFormField = (callback: (field: string, input: HTMLInputElement) => void) => {
    fields.forEach((fname) => {
      const input = getInputElementForField(fname);
      if (input) {
        callback(fname, input);
      }
    });
  }

  const getInputElementForField = (fieldName: string) => {
    return window.document.querySelector(`form #${prefixId}_${normalizeForId(fieldName)}`) as HTMLInputElement | null;
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
      <TitleBar title={title} />
      <form className={enterpriseListHeader} onSubmit={_handleSubmit}>
        <div style={{ padding: 12, overflow: 'auto', }}>
          <fieldset>
            <legend>Datos del empleado</legend>
            <section className={enterpriseListInputsWrapper}>
              {
                fields.map((f, i) => (
                  <Fragment key={i}>
                    <label htmlFor={`${prefixId}_${f}`}>{f}</label>
                    <input
                      required
                      id={`${prefixId}_${normalizeForId(f)}`}
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
          overflow: 'auto',
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
      <section className={enterpriseListTableWrapper}>
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

function TitleBar({ title }: { title: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 24,
      overflow: 'hidden',
      paddingRight: 1,
      background: 'linear-gradient(90deg, #15205e, #3f4c87)',
    }}>
      <div>
        <span style={{
          color: '#fff',
          marginLeft: 6,
          fontWeight: 500,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          marginRight: 15,
        }}>
            {'🐢'}{' '}{title}
        </span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifySelf: 'end',
      }}>
        <button className={enterpriseListWindowButton} onClick={noop}>
          <img src={windowsTabButton1.src} alt="Minimizar" style={{maxWidth: '100%', maxHeight: '100%',}} />
        </button>
        <button className={enterpriseListWindowButton} onClick={noop}>
          <img src={windowsTabButton2.src} alt="Maximizar" style={{maxWidth: '100%', maxHeight: '100%',}} />
        </button>
        <button className={enterpriseListWindowButton} onClick={noop}>
          <img src={windowsTabButton3.src} alt="Cerrar" style={{maxWidth: '100%', maxHeight: '100%',}} />
        </button>
      </div>
    </div>
  );
}
