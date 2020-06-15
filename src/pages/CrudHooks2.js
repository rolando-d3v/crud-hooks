import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Form, Alert } from "react-bootstrap";

function CrudHooks2() {
  const [tarea, setTarea] = useState("");
  const [listaTarea, setListaTarea] = useState([]);
  const [modoEditor, setModoEditar] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState(null);

  const cargarDatos = (e) => {
    setTarea(e.target.value);
    setError(null);
  };

  const enviarTarea = (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      //   alert("esta vacio");
      setError("falta ingresar tarea");
    } else {
      setListaTarea([...listaTarea, { id: uuid(), nombre: tarea }]);
    }
    setTarea("");
  };

  const eliminarTarea = (id) => {
    console.log(id);
    const arrayDelete = listaTarea.filter((ev) => ev.id !== id);
    setListaTarea(arrayDelete);
  };

  const editar = (ev) => {
    console.log(ev.id);
    setId(ev.id);
    setModoEditar(true);
    setTarea(ev.nombre);
  };

  const editarTarea = (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      setError("falta tarea 25");
    } else {
      const arrayEditado = listaTarea.map((ev) =>
        ev.id === id ? { id, nombre: tarea } : ev
      );
      setListaTarea(arrayEditado);
      setModoEditar(false);
      setTarea("");
      setId("");
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-7">
          <h3 className="text-center">Lista Tareas</h3>
          <ListaTareas
            listaTarea={listaTarea}
            eliminarTarea={eliminarTarea}
            editar={editar}
          />
        </div>
        <div className="col-5">
          <Formulario
            enviarTarea={enviarTarea}
            cargarDatos={cargarDatos}
            tarea={tarea}
            modoEditor={modoEditor}
            editarTarea={editarTarea}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}

export default CrudHooks2;

function Formulario(props) {
  return (
    <div>
      {props.modoEditor ? (
        <Form onSubmit={props.editarTarea}>
          <h3 className="text-center text-info">Editar Tarea</h3>
          <div className="form-group">
          {props.error ? (
              <Alert variant="danger" className="text-center p-2">
                {props.error}
              </Alert>
            ) : null}
            <input
              className="form-control"
              type="text"
              placeholder="escribe tarea"
              name="nombre"
              value={props.tarea}
              onChange={props.cargarDatos}
            />
          </div>
          <button className="btn btn-info btn-block "> Editar Tarea </button>
        </Form>
      ) : (
        <Form onSubmit={props.enviarTarea}>
          <h3 className="text-center">Formulario</h3>
          <div className="form-group">
            {props.error ? (
              <Alert variant="danger" className="text-center p-2">
                {props.error}
              </Alert>
            ) : null}
            <input
              className="form-control"
              type="text"
              placeholder="escribe tarea"
              name="nombre"
              value={props.tarea}
              onChange={props.cargarDatos}
            />
          </div>
          <button className="btn btn-primary btn-block "> Crear Tarea </button>
        </Form>
      )}
    </div>
  );
}

function ListaTareas(props) {
  return (
    <ul className="list-group">
      {props.listaTarea.length === 0 ? (
        <div className="my-5">
          <h3 className="text-center">no hay tareas...</h3>
        </div>
      ) : (
        props.listaTarea.map((ev) => (
          <li key={ev.id} className="list-group-item">
            <span> {ev.nombre} </span>
            <div className="float-right">
              <button
                onClick={() => props.editar(ev)}
                className="btn btn-info mx-2"
              >
                Editar
              </button>
              <button
                onClick={() => props.eliminarTarea(ev.id)}
                className="btn btn-danger mx-2"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}
