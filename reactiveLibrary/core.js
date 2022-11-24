class Observable {
    constructor(whatToObserve, observers = []) {
        this.whatToObserve = whatToObserve
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

const createObservable = whatToObserve => new Observable(whatToObserve)

class ReactiveSystem {
    constructor(observables = []) {
        this.observables = observables
    }

    notifier(state, newState) {
        this.observables.forEach(observable => {
            if (observable.whatToObserve === state) {
                observable.notify(newState)
            }
        })
    }

    createReactive(target) {
        return new Proxy(target, {
            get: (target, state) => target[state],

            set: (target, state, newState) => {
                if (target[state] === newState) return true

                target[state] = newState

                this.notifier(state, newState)

                return true
            }
        })
    }
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



export {
    createObservable,
    updateField,
    dataBind,
    ReactiveSystem,
}


