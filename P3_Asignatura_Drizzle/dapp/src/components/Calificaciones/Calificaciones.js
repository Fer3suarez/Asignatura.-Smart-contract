import {newContextComponents} from "@drizzle/react-components";

import CalificacionesHead from "./CalificacionesHead";
import CalificacionesBody from "./CalificacionesBody";
import Calificar from "./Calificar";


const {ContractData, ContractForm} = newContextComponents;

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

        <h3>Prueba</h3>

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
        
</article>

export default Calificaciones;



