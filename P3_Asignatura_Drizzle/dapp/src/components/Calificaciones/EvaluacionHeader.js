import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const EvaluacionHeader = (props) => {
    const {drizzle, drizzleState, evaluacionIndex} = props;
    return <ContractData
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract={"Asignatura"}
        method={"evaluaciones"}
        methodArgs={[evaluacionIndex]}
        render={ev =>
            <h2> E<sub>{evaluacionIndex}</sub> - {ev.nombre} </h2>
        }
    />;
};

export default EvaluacionHeader;