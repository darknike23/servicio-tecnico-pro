function sendMessage(){
  let input = document.getElementById("userInput").value;
  let chat = document.getElementById("chatbox");

  chat.innerHTML += "<p>👤 " + input + "</p>";

  let res = "";

  if(input.includes("pantalla negra")){
    res = "Puede ser RAM o GPU.";
  }
  else if(input.includes("lento")){
    res = "Tu PC necesita limpieza o SSD.";
  }
  else{
    res = "Escríbenos por WhatsApp para ayuda.";
  }

  chat.innerHTML += "<p>🤖 " + res + "</p>";
}
