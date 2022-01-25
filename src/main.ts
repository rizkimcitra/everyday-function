import createElement from './libs/createElement'
import './styles/tailwind.css'

const app = document.querySelector<HTMLDivElement>('#app') as HTMLDivElement

const header = createElement('header', 'flex items-center justify-center mt-4 md:mt-8 space-x-2 md:space-x-4')
const heading = createElement(
  'h1',
  'text-transparent bg-gradient-to-r from-violet-500 to-rose-500 bg-clip-text',
  'Everyday Function'
)
const logo = createElement('span', 'text-xl md:text-2xl font-bold', '⚒')
header.append(logo, heading)
app.append(header)
