//Create the element

let i = 0

function getEl() {
    i += 1
    const textareaVal = document.getElementById("txtarea").value
    const oldEl = document.getElementById("ol")
    const newEl = document.createElement("p")
    const exEl = document.createElement("button") 
    const riskEl = document.createElement("button")
    const div = document.createElement("div")

    //new El
    newEl.innerHTML = `&middot${textareaVal}`;
    oldEl.appendChild(newEl);
    newEl.setAttribute("class", "newEls");
    newEl.setAttribute("id", i)

    //div EL
    newEl.appendChild(div);
    div.setAttribute("class", "container-div")
    
    //Ex El
    exEl.innerHTML = "Delete"
    div.appendChild(exEl)
    exEl.setAttribute("onclick", `exEl(${i})`)
    exEl.setAttribute("class", "btnEx")

    //risk El
    riskEl.innerHTML = "Risk"
    div.appendChild(riskEl)
    riskEl.setAttribute("onclick", `riskEl(${i})`)
    riskEl.setAttribute("class", "btnRisk")

    console.log(newEl)
}

function exEl(n) {
    let el = document.getElementById(n)
    el.outerHTML = ""
}

function riskEl(n) {
    let el = document.getElementById(n)
    el.classList.toggle("riskANDunrisk")
}