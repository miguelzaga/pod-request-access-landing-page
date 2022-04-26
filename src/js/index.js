const script = function () {
  const form = document.querySelector(".content__form");
  const email = document.querySelector(".form__input");
  const errMsg = document.querySelector(".form__err-msg");

  const isEmailValid = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(email);
  };

  const showError = function () {
    errMsg.classList.remove("hidden");
  };

  const hideError = function () {
    errMsg.classList.add("hidden");
  };

  const handler = function (e) {
    e.preventDefault();
    if (isEmailValid(email.value)) {
      hideError();
      window.open("https://www.frontendmentor.io/profile/miguelzaga", "_blank");
    } else {
      showError();
    }
  };

  form.addEventListener("submit", handler);
};

export { script };
