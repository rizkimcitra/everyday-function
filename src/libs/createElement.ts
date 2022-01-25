export type CreateElement = (
  as: keyof HTMLElementTagNameMap,
  className?: string,
  children?: string | Node
) => HTMLElement

const createElement: CreateElement = (as, className, children) => {
  const element = document.createElement(as)
  if (typeof className !== 'undefined') {
    element.className = className
  }
  if (typeof children !== 'undefined') {
    element.append(children)
  }

  return element
}

export default createElement
