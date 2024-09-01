document.addEventListener("DOMContentLoaded", function () {
	document.querySelector(".content").classList.add("loaded");

	const work_open = document.getElementById("click_work");
	const brand = document.getElementById("brand");
	const back = document.getElementById("back");
	const workElement = document.getElementById("work");
	const envoy = document.getElementById("envoy");

	work_open.addEventListener("click", () => {
		workElement.classList.add("show_work");
	});

	function hideWork() {
		workElement.classList.remove("show_work");
	}

	brand.addEventListener("click", hideWork);
	back.addEventListener("click", hideWork);

	envoy.addEventListener("click", () => {
		alert("Loyiha to'liq yakunlanmagan");
	});
});
