function irCatalogo(){ window.location.href = "catalogo.html"; }
function comprar(osito){ alert("Agregaste " + osito + " 🧸"); }
function elegir(estilo){ alert("Elegiste estilo " + estilo + " ✨"); window.location.href = "catalogo.html"; }
function enviarIdea(){
  let idea = document.getElementById("idea").value;
  if(!idea) return alert("Escribe tu idea primero");
  window.open(`https://wa.me/591XXXXXXXX?text=Hola quiero un diseño: ${idea}`, "_blank");
}