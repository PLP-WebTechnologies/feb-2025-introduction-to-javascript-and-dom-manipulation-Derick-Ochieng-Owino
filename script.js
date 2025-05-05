document.getElementById("textBtn").addEventListener("click", () => {
    document.getElementById("main-title").textContent = "JavaScript is Awesome!";
  });
  
  document.getElementById("styleBtn").addEventListener("click", () => {
    const info = document.getElementById("info-text");
    info.style.color = "blue";
    info.style.fontSize = "18px";
    info.style.backgroundColor = "#f0f0f0";
  });
  
  document.getElementById("addBtn").addEventListener("click", () => {
    const newPara = document.createElement("p");
    newPara.id = "new-element";
    newPara.textContent = "🎉 A new element has been added!";
    document.getElementById("dynamic-area").appendChild(newPara);
  });
  
  document.getElementById("removeBtn").addEventListener("click", () => {
    const elem = document.getElementById("new-element");
    if (elem) {
      elem.remove();
    }
  });  