import {newContextComponents} from "@drizzle/react-components";
const {ContractData, ContractForm} = newContextComponents;

const Calificar = ({drizzle, drizzleState}) => <CalificarV3  drizzle={drizzle} drizzleState={drizzleState} />

const CalificarV3 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Calificar</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr !== drizzleState.accounts[0]) {
                          return <p>No soy el profesor</p>
                      }
                      return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="califica"
                                           labels={["Dirección Alumno", "Índice Evaluación",
                                               "0=NP 1=Nota 2=MH", "Nota (x10)"]}
                      />
                  }}
    />
</article>

export default Calificar;
