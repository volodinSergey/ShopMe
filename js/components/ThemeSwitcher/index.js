import themeStore from './store.js'

const ThemeSwitcher = async () => {
    await themeStore.getActiveTheme()

    const themeSwitcher = document.querySelector('.toggle__input')

    themeSwitcher.addEventListener('click', (e) => themeStore.toggleTheme())
}

export default ThemeSwitcher