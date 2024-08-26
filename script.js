const container = document.querySelector("#container");

function createField (number = 16) {

    container.innerHTML = "";
    for (j = 0; j < number; j++) {
        let outerDiv = document.createElement("div");
        outerDiv.setAttribute("class", "row")
        container.appendChild(outerDiv);

        for (i = 0; i < number; i++) {
            let innerDiv = document.createElement("div");

            innerDiv.setAttribute("class", "column")
            outerDiv.appendChild(innerDiv);

            // innerDiv.addEventListener("mouseover", () => {
            //     innerDiv.classList.toggle("hover");
            // })
            // innerDiv.addEventListener("mouseout", () => {
            //     innerDiv.classList.toggle("hover");
            // })

        }
    }
}

container.addEventListener("mouseover", (e) => {
    if (e.target.style.backgroundColor) {
        let opaqueArrayArray = [];
        opaqueArray = e.target.style.backgroundColor.split(', ');
        let opaque;
        if (opaqueArray[3]) opaque = Number(opaqueArray[3].slice(0, -1));
        if (opaque < 1) opaque = (opaque + 0.1).toFixed(1);
        e.target.style.backgroundColor = `rgb(${randomColorParameters()} ${randomColorParameters()} ${randomColorParameters()} / ${opaque})`;
    } else {
        e.target.style.backgroundColor = `rgb(${randomColorParameters()} ${randomColorParameters()} ${randomColorParameters()} / ${0.1})`;
    }
})

function randomColorParameters() {
    return Math.floor(Math.random() * 255)
}

createField ();

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let desiredNumber = +prompt("Enter a desired number of squares in a line");
    desiredNumber < 100 ? createField (desiredNumber) :
    alert("Be more frugal and try again")
})