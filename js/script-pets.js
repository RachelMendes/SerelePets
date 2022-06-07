	//Função que confirma recebimento de mensagem
	function msgRecebida(){
		window.alert("Recebemos a sua mensagem, \nobrigado pelo contato.");
	}


$( document ).ready(function() {
	
	//Voltar ao topo
	
	var mybutton = document.getElementById("myBtn");
	mybutton.onclick = topFunction;

	//Mostra o botão
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		mybutton.style.display = "block";
	  } else {
		mybutton.style.display = "none";
	  }
	}

	//Volta para o início ao clicar no botão
	function topFunction() {
	  document.body.scrollTop = 0; // For Safari
	  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
});