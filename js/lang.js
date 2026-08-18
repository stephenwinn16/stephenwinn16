(() => {
	const meta = document.querySelector('meta[name="description"]');
	const switcher = document.querySelector(".lang-switch");
	const buttons = document.querySelectorAll(".lang-switch [data-lang]");
	const copy = {
		en: {
			description: "Personal website of Stephen D. Winn.",
			label: "Language",
		},
		fr: {
			description: "Site personnel de Stephen D. Winn.",
			label: "Langue",
		},
	};

	const setLang = (lang) => {
		if (!copy[lang]) {
			return;
		}

		document.documentElement.lang = lang;
		meta?.setAttribute("content", copy[lang].description);
		switcher?.setAttribute("aria-label", copy[lang].label);
		buttons.forEach((button) => {
			button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
		});

		try {
			localStorage.setItem("lang", lang);
		} catch {
			/* ignore */
		}
	};

	buttons.forEach((button) => {
		button.addEventListener("click", () => setLang(button.dataset.lang));
	});

	setLang(document.documentElement.lang === "fr" ? "fr" : "en");
})();
