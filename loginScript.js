const errorsP = document.querySelector(".error");
console.log(
  "Розшифруй мене:\n kO+WwCIn6ym679B+gLHRYmst9ZxF0ffbDp96OIPiHoxnwh26M/ZLXAuyY7MXPKdhRCO4pDdiMIVDb/9wRHOPmW5Xm3zFhnssWG/60NwQUW+uqGbxzx4AyO16KP4XdB+LVUSNcDCZrT3KFA8UgvZpnsWpzgeoWIIt00gDi5iFv/TdsdX33yn0aQVnUhoJVhcevl9B46+YioyJ+Z4X1UEXMF8K0fXpvshVMoBAauh3pkgtecPvnZrUpTti7vixfmiGZsa8GMFQJjeRC1UhuJnR5oZtprY1szRavZgYWMfgxcdudBvdYgiEWMxwFafn1oZGOGyCmRt06LhWDGJOCFXMokwoO7qqDQgBh9sfpEVdQYkoD/0i5xCIJa9zZ4bwaD2qsAk1EE7dGbBhXNUxzFf7/fbXXk1x6GFA8zmANn8Q0IskQIncEn9gaW4y8XqGzAx57Nugm9VERJCdEuE4R8iEIok3RIXry6SRqXBe8lNSAvg4rLxnkqbpxI4Ilt0CMxU3ivlZCfM308Afgc12yc7PZ3J/NxQZU6MutS6PvSJx9RalHL9PI4W2vn7MSngkIOFr8/OKkl2q8dgYUGOPoGXgEqOAWqPhxoxLnwLiXWj5isPM9yH3SF7+mOoWzcSDOvTPMSVGEzEEqrofxEQcqxFI5zOc5XyCC66qbdGM8p+Okb8HXvCKCNcFwmNT1Ibsd7mXsSzyj8ddHt1BSBE6Ioh7soLEu07Tb39zHwwIDs4P33d6gZdCE8m2p352kzu8apVDBplHFZkLhnGPA/bS7EAAqYnSEAN6wjYmqu0OWMzCeuxk2VuzlaW4XU1UOO32PmJ5zylG90vVelLJ0dK3stlvEmeHw+OS1LPI36/rnlXLk54lQi4IXaNpPsZjBYtm4apD"
);
function checkValid(form) {
  let loginInput = form.login;
  let passwInput = form.password;

  if (loginInput.value === " " || passwInput.value === "") {
    errorsP.textContent = "Заповни усі поля зверху кохусь!";
    return false;
  }

  if (
    loginInput.value != "АлінусяНайбільшаНяшкаВСвіті" ||
    passwInput.value != "Loveforyou".toUpperCase().split("").reverse().join("")
  ) {
    errorsP.textContent = "Неправильно введені логін або пароль!";
    return false;
  }

  window.localStorage.setItem("token", "love");
  return true;
}

const loginHintBtn = document
  .querySelector("#login-hint")
  .addEventListener("click", () => {
    document.querySelector("body").innerHTML +=
      '<div id="login-hint-block">' +
      '<div class="main"> ' +
      "<h2>Підказка для знаходження логіну</h2>" +
      "<p>Оскільки ти вчишся на програміста кохусь, то цю підказку будеш шукати як <strong>веб-розробник</strong>.<br/> " +
      "Знаєш що перше відкривають веб-розробники як тільки зайдуть на сайт?" +
      "Правильно - <strong> ПАНЕЛЬ РОЗРОБНИКА </strong>" +
      "Тому кохусь відкрий панель розробника і в коді сайту шукай логін.</p>" +
      "<button onclick='handleCloseLoginHint()'>Закрити</button>" +
      "</div>" +
      "</div>";
  });

const passwordHintBtn = document
  .querySelector("#password-hint")
  .addEventListener("click", () => {
    document.querySelector("body").innerHTML +=
      '<div id="password-hint-block">' +
      '<div class="main"> ' +
      "<h2>Підказка для знаходження паролю</h2>" +
      "<p>Щоб знайти пароль тобі потрібно розшифрувати речення яке ти знайдеш на <strong>панелі розробника</strong> вкладка <strong>Console</strong><br/>" +
      "Цей нісенітний текст був зашифрований мною через сервіс <strong>https://magictool.ai/tool/encrypt-text/uk/</strong>" +
      "<br><i>Задача кохусика:</i> використати якийсь із сервісів в інтернеті, або цей що я використав, щоб розшифрувати текст. Удачі!</p>" +
      "<button onclick='handleClosePasswHint()'>Закрити</button>" +
      "</div>" +
      "</div>";
  });

function handleCloseLoginHint() {
  window.location.reload();
}

function handleClosePasswHint() {
  window.location.reload();
}
