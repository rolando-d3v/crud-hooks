import React, { useState } from "react";
import { Alert, Card, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

function CrudHooks() {
  const [tarea, setTarea] = useState({
    nombre: "",
    dni: "",
  });
  const [listaTarea, setListaTarea] = useState([]);
  const [modoEditor, setModoEditor] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState(null);

  const { nombre, dni } = tarea;

  const cargarDatos = (e) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
    console.log(tarea);
    setError(null)
  };

  const enviarTarea = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !dni.trim()) {
      // alert("falta");
      setError("datos obligatorios");
    } else {
      setListaTarea([...listaTarea, { nombre, dni, id: uuidv4() }]);
    }
    setTarea({
      nombre: "",
      dni: "",
    });
  };

  const eliminarTarea = (id) => {
    console.log(id);
    const arrayDelete = listaTarea.filter((ev) => ev.id !== id);
    setListaTarea(arrayDelete);
  };

  const editar = (ev) => {
    setModoEditor(true);
    setTarea({ nombre: ev.nombre, dni: ev.dni });
    setId(ev.id);
  };

  const editarTarea = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !dni.trim()) {
      alert("falta");
    } else {
      const arrayEditar = listaTarea.map((ev) =>
        ev.id === id ? { nombre, dni, id } : ev
      );
      setListaTarea(arrayEditar);
      setTarea({
        nombre: "",
        dni: "",
      });
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-7">
          <h3 className="text-center">Lista de Tareas</h3>
          <div className="row">
            {listaTarea.length === 0 ? (
              <div className="text-center col-12 my-auto text-info" >No hay tareas</div>
            ) : (
              listaTarea.map((ev) => (
                <Card key={ev.id} style={{ width: "20rem" , margin: "1em"}}>
                  <Card.Body>
                    <Card.Title>TAREA: {ev.nombre}</Card.Title>
                    <Card.Text>DNI: {ev.dni}</Card.Text>
                    <Button
                      className="btn btn-info mx-2  btn-block"
                      onClick={() => editar(ev)}
                    >
                      Editar
                    </Button>
                    <Button
                      className="btn btn-danger mx-2 btn-block"
                      onClick={() => eliminarTarea(ev.id)}
                    >
                      Eliminar
                    </Button>
                  </Card.Body>
                </Card>
              ))
            )}
          </div>
        </div>
        {modoEditor ? (
          <div className="col-5">
            <h3 className="text-center">Editar Tarea</h3>
            <form onSubmit={editarTarea}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="escriba su tarea"
                  name="nombre"
                  onChange={cargarDatos}
                  value={nombre}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="escriba su dni"
                  name="dni"
                  onChange={cargarDatos}
                  value={dni}
                />
              </div>
              <button type="submit" className="btn btn-info btn-block">
                Editar
              </button>
            </form>
          </div>
        ) : (
          <div className="col-5">
            <h3 className="text-center">Formulario</h3>
            <form onSubmit={enviarTarea}>
              <div className="form-group">
                {error ? <Alert variant="danger" > {error} </Alert> : null}
                <input
                  type="text"
                  className="form-control"
                  placeholder="escriba su tarea"
                  name="nombre"
                  onChange={cargarDatos}
                  value={nombre}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="escriba su dni"
                  name="dni"
                  onChange={cargarDatos}
                  value={dni}
                />
              </div>
              <button type="submit" className="btn btn-dark btn-block">
                Enviar
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default CrudHooks;
