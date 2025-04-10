//et Circle
document.querySelector("#etCircle").addEventListener("mouseover", etHighlight);
document.querySelector("#etCircle").addEventListener("mouseout", etUnHighlight);
document.querySelector("#etCircle").addEventListener("click", etInfo);

function etHighlight(){
    console.log("etHighlight");
    document.querySelector("#etCircle").style.fill = "#fff";
}

function etUnHighlight(){
    console.log("etUnHighlight");
    document.querySelector("#etCircle").style.fill = "#f00";
}

function etInfo(){
    console.log("etInfo");
    document.querySelector(".info-text > h2").textContent = "Indsæt overskift her";
    document.querySelector(".info-text > article > p").textContent = "Indsæt beskrivende tekst";

}


//to Circle
document.querySelector("#toCircle").addEventListener("mouseover", toHighlight);
document.querySelector("#toCircle").addEventListener("mouseout", toUnHighlight);
document.querySelector("#toCircle").addEventListener("click", toInfo);

function toHighlight(){
    console.log("toHighlight");
    document.querySelector("#toCircle").style.fill = "#fff";
}

function toUnHighlight(){
    console.log("toUnHighlight");
    document.querySelector("#toCircle").style.fill = "#f00";
}

function toInfo(){
    console.log("toInfo");
    document.querySelector(".info-text > h2").textContent = "Indsæt overskift her";
    document.querySelector(".info-text > article > p").textContent = "Indsæt beskrivende tekst";

}


//tre Circle
document.querySelector("#treCircle").addEventListener("mouseover", treHighlight);
document.querySelector("#treCircle").addEventListener("mouseout", treUnHighlight);
document.querySelector("#treCircle").addEventListener("click", treInfo);

function treHighlight(){
    console.log("treHighlight");
    document.querySelector("#treCircle").style.fill = "#fff";
}

function treUnHighlight(){
    console.log("treUnHighlight");
    document.querySelector("#treCircle").style.fill = "#f00";
}

function treInfo(){
    console.log("treInfo");
    document.querySelector(".info-text > h2").textContent = "Blop";
    document.querySelector(".info-text > article > p").textContent = "Indsæt beskrivende tekst";

}