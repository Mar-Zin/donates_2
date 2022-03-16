

export class DONContainer {
    constructor() {
        this.container = document.createElement('div')
        this.container.className = 'donates-container'
    }

    render() {
        const title = document.createElement('h2')
        title.className = 'donates-container__title'
        title.textContent = 'Список донатов'

        const donatList = document.createElement('div')
        donatList.className = 'donates-container__donates'

        this.container.append(title, donatList)
        return this.container
    }
}