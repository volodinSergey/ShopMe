import { createObservable } from "../../../reactiveLibrary/core.js";

const THEME_MODE = {
    dark: 'dark',
    light: 'light'
}

const toggleThemeObserver = state => {
    const themeLink = document.head.querySelector('[title=theme]')

    if (state) {
        themeLink.href = `./styles/shared/themes/theme.${THEME_MODE.light}.css`

        return
    }

    themeLink.href = `./styles/shared/themes/theme.${THEME_MODE.dark}.css`
}

const themeObservable = createObservable('isLightTheme')

themeObservable.subscribe(toggleThemeObserver)

export default themeObservable