import {
  createElement,
  createHeader,
  createTab,
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

const tab = createTab()
page.append(tab)

// ===

const BUTTON_COMMUNITY = [
  {
    width: 352,
    height: 160,
    src: '/svg/community.svg',
  },
]

BUTTON_COMMUNITY.forEach((params) => {
  const img = createElement('img')

  Object.entries(params).forEach(([key, value]) => {
    img[key] = value
  })

  page.append(img)
})

// ===

const main = createElement('main', 'main')
page.append(main)

// ===

const title__small = createElement(
  'h2',
  'title--small',
  'Що таке база знань?',
)
main.append(title__small)

// ===

const text = createElement(
  'span',
  'text',
  `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и
знаниях
в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся
результатом решения предыдущих задач.`,
)
main.append(text)

// ===

const button = createElement(
  'button',
  'button button__telegram',
  `Перейти до ком'юніті у Телеграм`,
)
page.append(button)
