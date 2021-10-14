function show() {
    let app = document.getElementById("app");
    app.innerHTML = "";

    let displayDiv = document.createElement("div");
    displayDiv.setAttribute("class", "display");
    let header = document.createElement("h1");
    header.innerHTML = "Kalkulator";
    header.innerHTML += ` <i class="fas fa-calculator"></i>`;
    displayDiv.innerHTML = display;
    displayDiv.innerHTML += "&nbsp";
    app.appendChild(header);
    const btnDiv = document.createElement("div");
    btnDiv.setAttribute("class", "buttons");
    app.appendChild(displayDiv);
    app.appendChild(btnDiv);

    for (let i = 0; i < buttonArray.length; i++) {
        const btn = document.createElement("button");
        
        btn.innerHTML = buttonArray[i];
        btn.onclick = function() {
            addToDisplay(btn.innerHTML);
        }
        btnDiv.appendChild(btn);

    }
}