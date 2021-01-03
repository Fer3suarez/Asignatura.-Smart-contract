const CalificacionesHead2 = ({evaluacion}) => {

    let thead = [];

    thead.push(<th key={"chae"}>A-E</th>);

    thead.push(<th key={"chn"}>Nombre</th>);

    thead.push(<th key={"chev-" + evaluacion}>E<sub>{evaluacion}</sub></th>);

    return <thead>{thead}</thead>;
};

export default CalificacionesHead2;
