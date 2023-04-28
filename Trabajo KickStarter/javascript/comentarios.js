var submitBtn = document.getElementById('submitbutton')
var cajacomentarios = document.getElementById('cajacomentario')
var inputnombre = document.getElementById('inputnombre')
var inputcomentario = document.getElementById('inputcomentario')
console.log(inputcomentario);
submitBtn.addEventListener('click', ponerComentario)
function ponerComentario(){
	console.log("dsd")
	if(inputnombre.value != '' && inputcomentario.value != ''){
	var h1 = document.createElement('h1');
h1.innerHTML = `
<div>
 ${inputnombre.value}
 </div>
<comment>
 ${inputcomentario.value}
</comment>

`
	cajacomentarios.after(h1,cajacomentarios)
}
}