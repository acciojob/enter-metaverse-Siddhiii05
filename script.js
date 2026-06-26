//your JS code here. If required.

const button = document.getElementById("enterBtn");

button.addEventListener("click", function() {
	const p = document.getElementById("status");
	const h1 = document.createElement("h1");
	h1.id = "status";
	h1.textContext = "Entered Metaverse";
	p.replaceWith(h1);
})