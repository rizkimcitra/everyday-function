import createElement from '../libs/createElement'

const Header = () => {
  const header = createElement('header', 'flex items-center justify-center space-x-2 md:space-x-4')
  const heading = createElement(
    'h1',
    'text-transparent bg-gradient-to-r from-violet-500 to-rose-500 bg-clip-text xl:text-5xl xl:py-2',
    'Everyday Function'
  )
  const logo = createElement('span', 'text-xl md:text-2xl font-bold', '🛠️')

  header.append(logo, heading)
  return header
}

export default Header()
