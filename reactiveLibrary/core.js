class Observable {
    constructor(observers = []) {
        this.observers = observers
    }

    subscribe(...subscribers) {
        const subscribersFns = [...subscribers]

        subscribersFns.forEach(subscriberFn => this.observers.push(subscriberFn))
    }

    notify(state) {
        this.observers.forEach(observer => observer(state))
    }
}

const createObservable = () => new Observable()


const notifier = value => { }

const reactive = (target, notifier) => {
    return new Proxy(target, {
        get: (target, property) => target[property],

        set: (target, property, value) => {
            if (target[property] === value) return true

            target[property] = value

            notifier(value)

            return true
        }
    })
}

const dataBind = (input, state) => {
    input.value = state

    input.addEventListener('input', function () {
        state = this.value
    })
}


const updateField = (selector, state) => {
    const element = document.querySelector(selector)

    element.textContent = state
}

const useTemplate = template => template

export {
    reactive,
    createObservable,
    updateField,
    useTemplate,
    dataBind
}

