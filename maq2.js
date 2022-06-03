onst titulo = document.querySelector('h1');
typeWriter(titulo);
typerWriter(document.querySelector('p'));

function typeWriter(elemento){
	const textoArray = elemento.innerHTML.split('h2');
	elemento.innerHTML = '';
	textoArray.forEach((letra, i) => {
		setTimeout(() => elemento.innerHTML += letra, 75 * i);
	});
}