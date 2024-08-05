const divRow = document.querySelectorAll(".row")

divRow.forEach((div) => {

    for (let i=1; i<=4; i++) {
        let btn = document.createElement("button");
        btn.classList.add("btn");
        div.appendChild(btn);
    }
    

})