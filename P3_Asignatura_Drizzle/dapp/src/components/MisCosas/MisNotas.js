import {newContextComponents} from "@drizzle/react-components";
const {ContractData} = newContextComponents;

const MisNotas = (props) => (
    <section className="AppMisNotas">
        <h3>Mis Notas</h3>

        <ContractData drizzle={props.drizzle} drizzleState={props.drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr === props.drizzleState.accounts[0]) {
                          return <p>El profesor no tiene notas</p>
                      }
                      return <ContractData
                            drizzle={props.drizzle}
                            drizzleState={props.drizzleState}
                            contract={"Asignatura"}
                            method={"evaluacionesLength"}
                            render={el => <table>
                                <MisNotasHead evaluacionesLength={el}/>
                                <MisNotasBody drizzle={props.drizzle}
                                              drizzleState={props.drizzleState}
                                              evaluacionesLength={el}/>
                            </table>}
                        />
                  }}
        />        
    </section>
);


const MisNotasHead = () => {
    return <thead>
    <tr>
        <th>Evaluación</th>
        <th>Nota</th>
    </tr>
    </thead>;
};


const MisNotasBody = (props) => {
    const {drizzle, drizzleState, evaluacionesLength} = props;
    let rows = [];
    let notas= [];
    let puntos = [];
    for (let ei = 0; ei < evaluacionesLength; ei++) {
        rows.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"miNota"}
                methodArgs={[ei]}
                render={nota =><tr>
                    <td><ContractData key={"EVA-" + ei}
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract={"Asignatura"}
                        method={"evaluaciones"}
                        methodArgs={[ei]}
                        render={ev => ev.nombre}
                    /></td>
                    <td key={"miNotaIndex-" + ei}>
                        {nota && nota.tipo === "0" ? "N.P." : ""}
                        {nota && nota.tipo === "1" ? (nota.calificacion / 10).toFixed(1) : ""}
                        {nota && nota.tipo === "2" ? (nota.calificacion / 10).toFixed(1) + "(M.H.)" : ""}
                    </td>
                </tr>}
            />);
        notas.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"miNota"}
                methodArgs={[ei]}
                render={nota => 
                    <tr>
                        {nota && nota.tipo === "0" ? "0" : ""}
                        {nota.tipo === "1" || nota.tipo === "0" ? (nota.calificacion) : ""}
                    </tr>}
            />);
        puntos.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"miNota"}
                methodArgs={[ei]}
                render={nota =><tr>
                    <td><ContractData key={"EVA-" + ei}
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract={"Asignatura"}
                        method={"evaluaciones"}
                        methodArgs={[ei]}
                        render={ev => {(ev.puntos / 10).toFixed(1)}}
                    /></td>
                </tr>}
            />);
    }
    rows.push(
        <tr>
            <td><strong>Nota final</strong></td>
            <td>
                <strong>
                    {notaFinal(notas, puntos)}
                </strong>
            </td>
        </tr>
    );

    function notaFinal(notas, puntos) {
        let final;
        for(let i = 0; i<notas.length;i++){
            for(let j = 0; j<puntos.length;j++){
                final += ((notas[i]*puntos[i])/notas.length);
            }
        }
        console.log("Notas: " + notas);
        console.log("Puntos: " + puntos);
        console.log("Final: " + final);
        return (final / 10).toFixed(1);
    }

    return <tbody>{rows}</tbody>;
};

export default MisNotas;

