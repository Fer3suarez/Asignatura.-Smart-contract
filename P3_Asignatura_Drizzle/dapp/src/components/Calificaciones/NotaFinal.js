const NotaFinal = ({notas, puntos}) => {

    console.log("Notas: " + notas)
    console.log("Puntos: " + puntos);
    // TODO: Por alguna razon que desconozco, el array notas viene con cada nota duplicada
    let notas_filtradas = notas.filter(function(element, index, array) {
		return (index % 2 !== 0);
	});
    let puntos_filtrados = puntos.filter(function(element, index, array) {
		return (index % 2 !== 0);
	});
	let result = 0;
	for(let i = 0; i < notas_filtradas.length; i++){
		result += notas_filtradas[i]*puntos_filtrados[i];
	}
    result = result/(puntos_filtrados.reduce((a, b) => a + b, 0));
    return <td>{result.toFixed(2)}</td>;
};

export default NotaFinal;