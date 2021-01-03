const NotaFinal = ({notas}) => {

    console.log(notas)
    // TODO: Por alguna razon que desconozco, el array notas viene con cada nota duplicada
    let notas_filtradas = notas.filter(function(element, index, array) {
		return (index % 2 !== 0);
		});
    let result = (notas_filtradas.reduce((a, b) => a + b, 0)/notas_filtradas.length);
    return <td>{result.toFixed(2)}</td>;
};

export default NotaFinal;