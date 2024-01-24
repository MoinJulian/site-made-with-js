function addMain() {
  const html = document.querySelector("html");
  html.style.padding = "0px 0px";
  html.style.margin = "0px 0px";
  html.style.boxSizing = "border-box";

  const body = document.querySelector("body");
  body.style.padding = "0px 0px";
  body.style.margin = "0px 0px";
  body.style.boxSizing = "border-box";

  const main = document.createElement("main");
  main.style.color = "black";
  main.style.backgroundColor = "white";
  main.style.width = "100vw";
  main.style.height = "100vh";

  const p = document.createElement("p");
  p.innerHTML = "Hi there, this whole website is written in JavaScript!";

  document.body.appendChild(main);
  main.appendChild(p);
}

window.addEventListener("DOMContentLoaded", addMain);
