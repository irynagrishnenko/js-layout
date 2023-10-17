export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/back.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/svg/avatar.svg',
  },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.insertAdjacentElement('beforeend', img)

    header.insertAdjacentElement('beforeend', button)
  })

  return header
}

export const createTab = () => {
  const tab = createElement('div', 'tab')

  const tab__title = createElement(
    'span',
    'tab__title',
    'База знань',
  )
  tab.append(tab__title)

  const tab__title__active = createElement(
    'span',
    'tab__title active',
    'Інформація',
  )
  tab.append(tab__title__active)

  return tab
}
