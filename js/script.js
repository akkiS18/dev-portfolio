document.addEventListener("DOMContentLoaded", function () {
	document.querySelector(".content").classList.add("loaded");

	const work_open = document.getElementById("click_work");
	const main = document.getElementById("main");
	const footer = document.getElementById("footer");
	const back = document.getElementById("back");
	const workElement = document.getElementById("work");
	const envoy = document.getElementById("envoy");

	work_open.addEventListener("click", () => {
		workElement.classList.add("show_work");
		main.classList.add("hide");
		footer.classList.add("hide");
	});

	back.addEventListener("click", () => {
		workElement.classList.remove("show_work");
		main.classList.remove("hide");
		footer.classList.remove("hide");
	});

	envoy.addEventListener("click", () => {
		alert("Loyiha to'liq yakunlanmagan");
	});
});
