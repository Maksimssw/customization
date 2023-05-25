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

  {
    // Modal window
    const openModal = document.querySelector('[data-modal-open]')
    const closeModal = document.querySelector('[data-modal-close]')
    const modal = document.querySelector('[data-modal]')

    const toggleModal = () => {
      modal.classList.remove('modal_hidden')
      modal.classList.toggle('modal_close')
    }

    openModal.addEventListener('click', toggleModal)
    closeModal.addEventListener('click', toggleModal)

    modal.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal')) toggleModal()
    })

    window.addEventListener('keydown', (event) => {
      if (!modal.classList.contains('modal_close')) {
        event.code === 'Escape' ? toggleModal() : ''
      }
    })
  }
})