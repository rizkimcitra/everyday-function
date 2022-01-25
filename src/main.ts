import './styles/tailwind.css'
import createElement from './libs/createElement'
import formatCurrencies from './formatter/formatCurrencies'
import GhButton from './component/GhButton'
import RandoButton from './component/RandoButton'
import Header from './component/Header'

const app = document.querySelector<HTMLDivElement>('#app') as HTMLDivElement

const paragraph = createElement(
  'p',
  'text-center',
  'A collections of function that solve your daily problem such as formatting date and a currencies, example:'
)
const buttonGroup = createElement('div', 'flex items-center space-x-2 md:space-x-3 justify-center')

const demoCurr = formatCurrencies(Math.round(Math.random() * 10000000))
const currency = createElement(
  'div',
  'text-center text-xl md:text-2xl font-semibold my-8 md:my-12 currenciy',
  '💵Balance: ' + demoCurr
)

const handleClick = () => {
  const random = Math.round(Math.random() * 10000000)
  currency.innerHTML = '💵Balance: ' + formatCurrencies(random)
}

buttonGroup.append(RandoButton, GhButton)
app.classList.add('min-h-screen', 'flex', 'flex-col', 'items-center', 'justify-center')
app.append(Header, paragraph, currency, buttonGroup)

RandoButton.addEventListener('click', handleClick)
