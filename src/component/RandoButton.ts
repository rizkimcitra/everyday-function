import createElement from '../libs/createElement'

const RandoButton = () =>
  createElement(
    'button',
    'inline-flex items-center justify-center py-2 px-4 md:py-2.5 md:px-6 rounded bg-violet-500 text-white',
    'randomize'
  )

export default RandoButton()
