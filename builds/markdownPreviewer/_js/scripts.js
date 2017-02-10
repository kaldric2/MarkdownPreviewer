function processMarkdown(ed) {
    var output = document.getElementById("output");
    output.innerHTML = marked(ed.value);
}

document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        var editor = document.getElementById("editor");
        editor.addEventListener("keyup", ()=>{ processMarkdown(editor); });
    }
};
