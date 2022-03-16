
import { DONContainer } from './don-container'
import { FORM } from './form'
import { getTodayDateFormat } from '../core/utils/date'


export default class App {
    constructor() {
        this.donContainer = new DONContainer()
        this.form = new FORM()
    }

    run() {
        const DONContainerHTML = this.donContainer.render()
        const formHTML = this.form.render()
        document.body.append(formHTML, DONContainerHTML)



        const totalAmount = document.querySelector('#total-amount')
        const form = document.querySelector('.donate-form')
        let totalValue = 0

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            const { target } = event
            const inputValue = target.amount.value
            
            const newDonate = document.createElement('div')
            newDonate.className = 'donate-item'
            newDonate.innerHTML = `${getTodayDateFormat()} - <b>${inputValue}$</b>`
            

            const donatesBlock = document.querySelector('.donates-container__donates')
            donatesBlock.append(newDonate)

            totalValue += Number(inputValue)
            totalAmount.innerHTML = `${totalValue}$`
            target.amount.value = ''

            const donatesArr = document.querySelectorAll('.donate-item')
            if (donatesArr.length == 5) {
                donatesArr[0].remove()
                donatesBlock.append(newDonate)
            }
        })
    }
}