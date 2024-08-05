export default function dropDownMenu() {
  const dropdownButton = document.querySelector('[data-action="dropdown"]')
  const dropDownMenu = document.querySelector('.switch__box')
  const dropDownLinks = document.querySelectorAll('.switch__link')
  const closeButtonMenu = document.querySelector('[data-action="close"]')

  if (dropdownButton) {
    dropdownButton.addEventListener("click", function (event) {
      event.stopPropagation()
      if (dropDownMenu.getAttribute("data-open") === "true") {
        dropDownMenu.setAttribute("data-open", "false")
        dropdownButton.setAttribute("aria-expanded", "true")
        dropDownMenu.classList.add("switch__box--open")
      } else {
        dropDownMenu.setAttribute("data-open", "true")
        dropdownButton.setAttribute("aria-expanded", "false")
        dropDownMenu.classList.remove("switch__box--open")
      }
    })
    closeButtonMenu.addEventListener('click', () => {
      dropDownMenu.classList.remove("switch__box--open")
    })
    dropdownButton.addEventListener("keydown", function (event) {
      if (event.code === "Enter") {
        event.preventDefault()
        if (dropDownMenu.getAttribute("data-open") === "true") {
          dropDownMenu.setAttribute("data-open", "false")
          dropdownButton.setAttribute("aria-expanded", "true")
          dropDownMenu.classList.add("switch__box--open")
        } else {
          dropDownMenu.setAttribute("data-open", "true")
          dropdownButton.setAttribute("aria-expanded", "false")
          dropDownMenu.classList.remove("switch__box--open")
        }
      }
    })
  }

  dropDownLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      const imgSrc = this.querySelector('img').getAttribute('src')
      const imgAlt = this.querySelector('img').getAttribute('alt')
      const buttonImg = dropdownButton.querySelector('img')

      buttonImg.setAttribute('src', imgSrc)
      buttonImg.setAttribute('alt', imgAlt)

      dropDownMenu.setAttribute("data-open", "true")
      dropdownButton.setAttribute("aria-expanded", "false")
      dropDownMenu.classList.remove("switch__box--open")
    })

    link.addEventListener("keydown", function (event) {
      if (event.code === "Enter") {
        event.preventDefault()
        const imgSrc = this.querySelector('img').getAttribute('src')
        const imgAlt = this.querySelector('img').getAttribute('alt')
        const buttonImg = dropdownButton.querySelector('img')

        buttonImg.setAttribute('src', imgSrc)
        buttonImg.setAttribute('alt', imgAlt)

        dropDownMenu.setAttribute("data-open", "true")
        dropdownButton.setAttribute("aria-expanded", "false")
        dropDownMenu.classList.remove("switch__box--open")
      }
    })
  })

  document.addEventListener('click', (event) => {
    const target = event.target
    if (!dropDownMenu.contains(target) && !dropdownButton.contains(target)) {
      dropDownMenu.classList.remove('switch__box--open')
      dropDownMenu.setAttribute('data-open', 'true')
      dropdownButton.setAttribute('aria-expanded', 'false')
    }
  })
}
