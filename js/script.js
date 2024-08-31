document.addEventListener("DOMContentLoaded", function () {
	document.querySelector(".content").classList.add("loaded");

	const work_open = document.getElementById("click_work");
	const brand = document.getElementById("brand");
	const workElement = document.getElementById("work");

	work_open.addEventListener("click", () => {
		workElement.classList.add("show_work");
	});

	function hideWork() {
		workElement.classList.remove("show_work");
	}

	brand.addEventListener("click", hideWork);
});
