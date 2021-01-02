import {newContextComponents} from "@drizzle/react-components";

import CalificacionesHead from "./CalificacionesHead";
import CalificacionesHead2 from "./CalificacionesHead2";
import CalificacionesBody from "./CalificacionesBody";
import CalificacionesBody2 from "./CalificacionesBody2";
import Calificar from "./Calificar";


const {ContractData} = newContextComponents;

const Calificaciones = ({drizzle, drizzleState}) => <CalificacionesV1  drizzle={drizzle} drizzleState={drizzleState} />

const CalificacionesV1 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h2>Calificaciones</h2>

    <ContractData drizzle={drizzle}
                  drizzleState={drizzleState}
                  contract={"Asignatura"}
                  method={"matriculasLength"}
                  render={ml => <ContractData
                      drizzle={drizzle}
                      drizzleState={drizzleState}
                      contract={"Asignatura"}
                      method={"evaluacionesLength"}
                      render={el => <table>
                          <CalificacionesHead evaluacionesLength={el}/>
                          <CalificacionesBody drizzle={drizzle}
                                              drizzleState={drizzleState}
                                              matriculasLength={ml}
                                              evaluacionesLength={el}/>
                      </table>}
                  />}
    />

    <Calificar drizzle={drizzle}
               drizzleState={drizzleState} />    


    <h3>Notas de una evaluacion</h3>

    <ContractData drizzle={drizzle}
                  drizzleState={drizzleState}
                  contract={"Asignatura"}
                  method={"matriculasLength"}
                  render={ml => <ContractData
                      drizzle={drizzle}
                      drizzleState={drizzleState}
                      contract={"Asignatura"}
                      method={"evaluacionesLength"}
                      render={el => <table>
                          <CalificacionesHead2 evaluacionesLength={el}/>
                          <CalificacionesBody2 drizzle={drizzle}
                                              drizzleState={drizzleState}
                                              matriculasLength={ml}
                                              evaluacionesLength={el}/>
                      </table>}
                  />}
    />
        
</article>

export default Calificaciones;



