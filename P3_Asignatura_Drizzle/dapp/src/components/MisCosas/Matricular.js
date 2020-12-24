import {newContextComponents} from "@drizzle/react-components";
const {ContractData, ContractForm} = newContextComponents;

const Matricular = ({drizzle, drizzleState}) => <MatricularV1  drizzle={drizzle} drizzleState={drizzleState} />

const MatricularV1 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Automatrícula</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr === drizzleState.accounts[0]) {
                        return <p>Soy el profesor</p>
                      }
                      return <ContractData drizzle={drizzle} drizzleState={drizzleState} 
                                    contract={"Asignatura"} method={"quienSoy"} methodArgs={[]}
                                    render={datos => {
                                        if (datos) {
                                          return <p>Ya estoy matriculado</p>
                                        }
                                        return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                                             contract="Asignatura" method="automatricula"
                                                             labels={["Nombre Alumno", "Email Alumno"]}
                                        />
                                    }}
                      />
                }}

    />
</article>

export default Matricular;
