import {newContextComponents} from "@drizzle/react-components";
const {ContractData, ContractForm} = newContextComponents;

const Evaluar = ({drizzle, drizzleState}) => <EvaluarV1  drizzle={drizzle} drizzleState={drizzleState} />

const EvaluarV1 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Crear Evaluacion</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr !== drizzleState.accounts[0]) {
                          return <p>Solo el profesor puede crear evaluaciones</p>
                      }
                      return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="creaEvaluacion"
                                           labels={["Nombre Evaluación", "Fecha Evaluación",
                                               "Puntos"]}
                      />
                  }}
    />
</article>

export default Evaluar;
