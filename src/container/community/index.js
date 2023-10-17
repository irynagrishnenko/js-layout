import {
  createElement,
  createHeader,
} from '../../script/layout'

// ===

const page = document.querySelector('.page')

// ===

const header = createHeader()
page.append(header)

// ===

const title = createElement('h1', 'title', 'Коммьюніті')
page.append(title)

// ===
