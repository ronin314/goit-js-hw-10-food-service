const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const themeSwitchToggleRef = document.querySelector("#theme-switch-toggle");

if (localStorage.getItem("page-theme") === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  themeSwitchToggleRef.checked = true;
} else {
  document.body.classList.add(Theme.LIGHT);
  themeSwitchToggleRef.checked = false;
}

const handlePageThemeToggle = (e) => {
  if (themeSwitchToggleRef.checked === true) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem("page-theme", Theme.DARK);
  } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem("page-theme", Theme.LIGHT);
  }
};

themeSwitchToggleRef.addEventListener("change", handlePageThemeToggle);
