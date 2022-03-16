

export class FORM {
    constructor() {
        this.form = document.createElement('form')
        this.form.className = 'donate-form'
    }

    render() {
        const title = document.createElement('h1')
        title.id = 'total-amount'
        title.textContent = '0$'

        const label = document.createElement('label')
        label.className = 'donate-form__input-label'
        label.innerHTML = 'Введите сумму в $'

        const input = document.createElement('input')
        input.className = 'donate-form__donate-input'
        input.name = 'amount'
        input.type = 'number'
        input.max = '100'
        input.min = '1'
        input.required = ' '

        label.append(input)

        const button = document.createElement('button')
        button.className = 'donate-form__submit-button'
        button.type = 'submit'
        button.textContent = 'Задонатить'

        this.form.append(title, label, button)
        return this.form
    }
}