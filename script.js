function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = "foto_manha.png";
    document.body.style.background = "#fea62a";
  } else if (hora >= 12 && hora <= 18) {
    // BOA TARDE
    img.src = "foto_tarde.png";
    document.body.style.background ="#724f55"
  } else {
    // BOA NOITE
    img.src = "foto_noite.png";
    document.body.style.background = "#001a2f"

  }
}
