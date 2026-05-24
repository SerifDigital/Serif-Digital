const themeToggle = document.getElementById("themeToggle");
const siteLogo = document.getElementById("siteLogo");

function applyTheme() {
	if (localStorage.getItem("theme") === "light") {
		document.body.classList.add("light-mode");

		if (siteLogo) {
			siteLogo.src = "assets/logo/SVG/logo-main-black.svg";
		}
	} else {
		document.body.classList.remove("light-mode");

		if (siteLogo) {
			siteLogo.src = "assets/logo/PNG/logo-main-white.png";
		}
	}
}

applyTheme();

if (themeToggle) {
	themeToggle.addEventListener("click", function () {
		if (document.body.classList.contains("light-mode")) {
			localStorage.setItem("theme", "dark");
		} else {
			localStorage.setItem("theme", "light");
		}

		applyTheme();
	});
}
