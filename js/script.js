document.addEventListener("DOMContentLoaded", function () {
	document.querySelector(".content").classList.add("loaded");

	const navbar = document.getElementById("navbar");

	let lastScroll = 0;

	window.addEventListener("scroll", () => {
		const currentScroll = window.scrollY;

		if (currentScroll > lastScroll && currentScroll > 100) {
			navbar.classList.add("hide-navbar");
		} else {
			navbar.classList.remove("hide-navbar");
		}

		lastScroll = currentScroll;
	});

	window.openModal = function (src) {
		const modal = document.getElementById("imageModal");
		const modalImg = document.getElementById("modalImg");
		modalImg.src = src;
		modal.style.display = "flex";
	};

	window.closeModal = function () {
		document.getElementById("imageModal").style.display = "none";
	};

	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape") {
			closeModal();
		}
	});
});
