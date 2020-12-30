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

        <h3> Nota final </h3>
        <ContractData drizzle={props.drizzle} drizzleState={props.drizzleState}
                      contract={"Asignatura"} method={"profesor"}
                      render={addr => {
                            if (addr === props.drizzleState.accounts[0]) {
                                return <p>El profesor no tiene notas</p>
                            }
                            return <ContractData drizzle={props.drizzle}
                                                drizzleState={props.drizzleState}
                                                contract={"Asignatura"}
                                                method={"evaluacionesLength"}
                                                render={el => <NotaFinal drizzle={props.drizzle}
                                                                       drizzleState={props.drizzleState}
                                                                       evaluacionesLength={el}/>}
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

const NotaFinal = (props) => {
    const {drizzle, drizzleState, evaluacionesLength} = props;
    let notas= [];
    let puntos = [];

    for (let ei = 0; ei < evaluacionesLength; ei++) {
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
                        {nota.tipo === "1" || nota.tipo === "2" ? (nota.calificacion) : ""}
                    </tr>}
            />);
        puntos.push(
            <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract={"Asignatura"}
                    method={"evaluaciones"}
                    methodArgs={[ei]}
                    render={ev => 
                        <tr>
                            {(ev.puntos / 10).toFixed(1)}
                        </tr>}
            />);
    }

    let final;
    final = notaFinal(notas, puntos);

    return <p>La nota final es: <strong>{final}</strong></p>
};

function notaFinal(notas, puntos) {
    let final;
    let num_puntos;
    for(let i = 0; i<notas.length;i++){
        final += ((notas[i]*puntos[i]));
        num_puntos += puntos[i];
    }
    return ((final / 10).toFixed(1))/num_puntos;
}


const MisNotasBody = (props) => {
    const {drizzle, drizzleState, evaluacionesLength} = props;
    let rows = [];
    
    for (let ei = 0; ei < evaluacionesLength; ei++) {
        rows.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"miNota"}
                methodArgs={[ei]}
                render={nota =><tr>
                    <td><ContractData
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract={"Asignatura"}
                        method={"evaluaciones"}
                        methodArgs={[ei]}
                        render={ev => ev.nombre}
                    /></td>
                    <td>
                        {nota && nota.tipo === "0" ? "N.P." : ""}
                        {nota && nota.tipo === "1" ? (nota.calificacion / 10).toFixed(1) : ""}
                        {nota && nota.tipo === "2" ? (nota.calificacion / 10).toFixed(1) + "(M.H.)" : ""}
                    </td>
                </tr>}
            />);
    }
    return <tbody>{rows}</tbody>;
};

export default MisNotas;

