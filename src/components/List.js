import React from "react";
import { Link } from "react-router-dom";
/*Crear componente */
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded_data: false, regs: [] };
  }
  loadData() {
    fetch("http://localhost/apicrud/")
      .then((response) => response.json())
      .then((data_response) => {
        console.log(data_response);
        this.setState({ loaded_data: true, regs: data_response });
      })
      .catch(console.log);
  }
  componentDidMount() {
    this.loadData();
  }
  render() {
    const { loaded_data, regs } = this.state;
    if (!loaded_data) {
      return <div>Cargando...</div>;
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {regs.map((reg) => (
            <tr key={reg.id}>
              <td>{reg.id}</td>
              <td>{reg.name}</td>
              <td>{reg.email}</td>
              <td>
                <div className="btn-group" role="group" aria-label="">
                  <Link type="button" className="btn btn-warning" to={"/edit"}>
                    Editar
                  </Link>
                  &nbsp;
                  <button type="button" className="btn btn-danger">
                    Borrar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default List;
