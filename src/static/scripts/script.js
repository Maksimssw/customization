window.addEventListener('DOMContentLoaded', () => {
  {
    // Changing the theme
    const button = document.querySelector('[data-customize]')
    const classBody = localStorage.getItem('theme')
    const body = document.querySelector('body')

    body.classList.add(classBody ? classBody : 'light')

    const toggleTheme = (add, close) => {
      localStorage.setItem('theme', add)
      body.classList.remove(close)
      body.classList.add(add)
    }

    button.addEventListener('click', () => {
      body.classList.contains('light')
        ? toggleTheme('dark', 'light')
        : toggleTheme('light', 'dark')
    })
  }
})