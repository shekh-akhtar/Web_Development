(function () {
	let inputItem = document.querySelector("#list");
	inputItem.onkeyup = function (e) {
		if (e.keyCode === 13) {
			// add item
			if (inputItem.value) {
				addItem(inputItem);
			}
		}
	};

	function addItem(Item) {
		let ul = document.querySelector("#num");
		let li = document.createElement("li");
		let textNode = document.createTextNode(inputItem.value);
		li.appendChild(textNode);
		ul.appendChild(li);
		inputItem.value = "";
		li.onclick = function (e) {
			e.target.remove();
		};
	}
})();
