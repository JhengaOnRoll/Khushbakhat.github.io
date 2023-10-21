function showAlert() {
    alert("Hello, world!");
}document.getElementById("biggerButton").onclick = function() {
    document.getElementById("textInput").style.fontSize = "24pt";
};

function applyStyles() {
    var textInput = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancyRadio");

    if (fancyRadio.checked) {
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else {
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black";
        textInput.style.textDecoration = "none";
    }
}

document.getElementById("fancyRadio").onchange = function() {
    applyStyles();
};

document.getElementById("boringRadio").onchange = function() {
    applyStyles();
};

document.getElementById("mooButton").onclick = function() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value;
    var words = text.split(" ");

    for (var i = 0; i < words.length; i++) {
        if (words[i].endsWith(".")) {
            words[i] = words[i].slice(0, -1) + "-Moo.";
        } else {
            words[i] = words[i].toUpperCase();
        }
    }

    textInput.value = words.join(" ");
};