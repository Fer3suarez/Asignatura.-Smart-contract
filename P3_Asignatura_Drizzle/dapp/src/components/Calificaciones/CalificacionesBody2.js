import {newContextComponents} from "@drizzle/react-components";
import CalificacionRow2 from "./CalificacionRow2";

const {ContractData} = newContextComponents;

const CalificacionesBody2 = (props) => {
    const {drizzle, drizzleState, matriculasLength, evaluacion} = props;
    let rows = [];
    for (let i = 0; i < matriculasLength; i++) {
        rows.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"matriculas"}
                methodArgs={[i]}
                render={addr => <CalificacionRow2
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    alumnoIndex={i}
                    alumnoAddr={addr}
                    evaluacion={evaluacion}/>}
            />);
    }
    return <tbody>{rows}</tbody>;
};

export default CalificacionesBody2;
