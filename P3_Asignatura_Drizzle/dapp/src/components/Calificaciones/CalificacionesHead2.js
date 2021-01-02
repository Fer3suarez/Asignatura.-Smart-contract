const CalificacionesHead2 = ({evaluacionesLength}) => {

    let thead = [];

    thead.push(<th key={"chae"}>A-E</th>);

    thead.push(<th key={"chn"}>Nombre</th>);

    thead.push(<th>Nota</th>);

    return <thead>{thead}</thead>;
};

export default CalificacionesHead2;
