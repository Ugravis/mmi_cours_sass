document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector(".navtoggle")
  const menu = document.querySelector(".navmenu")
  const links = document.querySelectorAll("[data-scroll]")

  if (toggle && menu) {
    toggle.addEventListener("click", () => {

      menu.classList.toggle("navmenu--open")
    })
  }

  links.forEach((link) => {
    link.addEventListener("click", (e) => {

      const targetId = link.getAttribute("href")

      if (targetId && targetId.startsWith("#")) {

        e.preventDefault()
        const el = document.querySelector(targetId)
        
        if (el) {
          const offset = 70
          const top = el.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: "smooth" })
        }

        menu.classList.remove("navmenu--open")
      }
    })
  })
})