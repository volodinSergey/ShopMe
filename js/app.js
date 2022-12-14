import ProductsList from './components/ProductsList/index.js'
import Categories from './components/Categories/index.js'
import Cart from './components/Cart/index.js'
import ThemeSwitcher from './components/ThemeSwitcher/index.js'

const App = async () => {
    ThemeSwitcher()

    await ProductsList()
    await Categories()
    await Cart()
}

App()
