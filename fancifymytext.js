function makeTextBigger() {
    alert("Hello, world!");
    const textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}

function applyFancyTextStyle() {
    const textArea = document.getElementById("textArea");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
}

function removeFancyTextStyle() {
    const textArea = document.getElementById("textArea");
    if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function makeLargeTextMoo() {
    const textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase();
    const sentences = text.split(".");
    text = sentences
        .map(sentence => sentence.trim())
        .filter(sentence => sentence.length > 0)
        .map(sentence => sentence + "-Moo")
        .join(". ");
    textArea.value = text + ".";
}
