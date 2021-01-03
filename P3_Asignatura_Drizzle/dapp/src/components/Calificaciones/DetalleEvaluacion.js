import React from 'react';
import {newContextComponents} from "@drizzle/react-components";
import CalificacionesHead2 from "./CalificacionesHead2";
import CalificacionesBody2 from "./CalificacionesBody2";
import EvaluacionHeader from "./EvaluacionHeader";

const {ContractData} = newContextComponents;


class DetalleEvaluacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { evaluacion: null };
  }
  
  mySubmitHandler = (event) => {
    event.preventDefault();
    let ev = this.state.evaluacion;
    if (!Number(ev)) {
      alert("El indice de evaluacion tiene que ser válido");
    }
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "evaluacion") {
      if (!event.target.validity.valid) {
        alert("El indice de evaluacion tiene que ser válido");
      }else if(val >= this.props.evaluacionesLength){
        alert("No existe una evaluacion con ese id");
      }else{
        this.setState({evaluacion: val});
      }
    }
    
  }
  render() {
    let table = '';
    if(this.state.evaluacion){
      
      
      table = <>

      <EvaluacionHeader evaluacionIndex = {this.state.evaluacion}
                                                drizzle={this.props.drizzle}
                                                drizzleState={this.props.drizzleState} />
      <table>
            <CalificacionesHead2 evaluacion={this.state.evaluacion}/>
            <CalificacionesBody2 drizzle={this.props.drizzle}
                                drizzleState={this.props.drizzleState}
                                matriculasLength={this.props.matriculasLength}
                                evaluacion={this.state.evaluacion}/>
      </table> 
      </>
    } else {
      table = '';
    }
    return (
      
      <>
      <form onSubmit={this.mySubmitHandler}>
        <h3>Calificaciones de una evaluacion</h3>
        <p>Indice de evaluacion:  <input
          type='text'
          name='evaluacion'
          pattern="[0-9]*"
          onChange={this.myChangeHandler}
        /></p>
      </form>
      {table}
      </>
    );
  }
}

export default DetalleEvaluacion;