import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const CalificacionRow = (props) => {
    const {drizzle, drizzleState, evaluacionIndex, alumnoAddr} = props;

    let cells = [];

        cells.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"calificaciones"}
                methodArgs={[alumnoAddr, evaluacionIndex]}
                render={nota =>
                    <td key={"p2-" + evaluacionIndex + "-" + evaluacionIndex}>
                        {nota.tipo === "0" ? "N.P." : ""}
                        {nota.tipo === "1" ? (nota.calificacion / 10).toFixed(1) : ""}
                        {nota.tipo === "2" ? (nota.calificacion / 10).toFixed(1) + "(M.H.)" : ""}
                    </td>
                    
                }
            />)
    
    return (
        <tr key={"d" + evaluacionIndex}>
            <th>E<sub>{evaluacionIndex}</sub></th>

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


