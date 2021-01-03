import {newContextComponents} from "@drizzle/react-components";
import NotaFinal from "./NotaFinal"

const {ContractData} = newContextComponents;

const CalificacionRow = (props) => {
    const {drizzle, drizzleState, alumnoIndex, alumnoAddr, evaluacionesLength} = props;

    let cells = [];
    let notas = [];
    let puntos = [];

    for (let ei = 0; ei < evaluacionesLength; ei++) {
        cells.push(
            <ContractData key={"EVA-" + ei}
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract={"Asignatura"}
                        method={"evaluaciones"}
                        methodArgs={[ei]}
                        render={ev => {
                          return <ContractData
                                drizzle={drizzle}
                                drizzleState={drizzleState}
                                contract={"Asignatura"}
                                method={"calificaciones"}
                                methodArgs={[alumnoAddr, ei]}
                                render={nota => {
                                    notas.push((nota.calificacion/10));
                                    puntos.push((ev.puntos / 10));
                                    console.log("Los puntos son: "+ puntos);
                                    return <td key={"p2-" + alumnoIndex + "-" + ei}>
                                        {nota.tipo === "0" ? "N.P." : ""}
                                        {nota.tipo === "1" ? (nota.calificacion / 10).toFixed(1) : ""}
                                        {nota.tipo === "2" ? (nota.calificacion / 10).toFixed(1) + "(M.H.)" : ""}
                                    </td>
                                }}
                            />
                        }}    
          />)
    }
    console.log("ESTOY FUERA DEL FOR--------Los puntos son: "+ puntos);

    cells.push(
      <NotaFinal notas={notas} puntos={puntos}/>
    )

    return (
        <tr key={"d" + alumnoIndex}>
            <th>A<sub>{alumnoIndex}</sub></th>

            <td><ContractData drizzle={drizzle}
                              drizzleState={drizzleState}
                              contract={"Asignatura"}
                              method={"datosAlumno"}
                              methodArgs={[alumnoAddr]}
                              render={datos => <>
                                  {datos.nombre}
                              </>}
            /></td>
            {cells}
        </tr>
    );

};

export default CalificacionRow;


