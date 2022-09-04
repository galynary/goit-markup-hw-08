;(() => {
    const menuBtnRef = document.guerySelector('[data-menu-button]')
    const mobileMenuRef = document.guerySelector('[dta-menu]')
    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute('aria-expended') === 'true' || false
        menuBtnRef.classList.toggle('is-open')
        menuBtnRef.setAttribute('aria-expended', !expanded)
        mobileMenuRef.classList.toggle('is-open')
    })
})()
