import { ReactiveSystem } from '../../../reactiveLibrary/core.js'
import themeObservable from './observers.js'

const reactiveSystem = new ReactiveSystem([themeObservable])

const themeStore = reactiveSystem.createReactive({
    isLightTheme: null,

    getActiveTheme: async function () {
        const response = JSON.parse(localStorage.getItem('isLightTheme'))

        if (response === null) {
            this.isLightTheme = true
            localStorage.setItem('isLightTheme', JSON.stringify(true))

            return
        }

        if (response === false) {
            this.isLightTheme = response

            localStorage.setItem('isLightTheme', JSON.stringify(false))
        }
    },

    toggleTheme: function () {
        this.isLightTheme = !this.isLightTheme

        localStorage.setItem('isLightTheme', JSON.stringify(this.isLightTheme))
    }
})

export default themeStore
