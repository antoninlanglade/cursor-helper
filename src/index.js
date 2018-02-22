import forEach from 'lodash/forEach'
import sortBy from 'lodash/sortBy'
import findIndex from 'lodash/findIndex'
import removeArray from 'lodash/remove'

import CURSORS from './cursors'

let db = []

function appendInlineStyle () {
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')
  style.type = 'text/css'
  let css = ''
  forEach(CURSORS, (cursor) => {
    css += `body.${cursor} { cursor: ${cursor}; cursor: -webkit-${cursor}; } `
  })
  style.innerHTML = css
  head.appendChild(style)
}

appendInlineStyle()

function add (key, index) {
  if (findIndex(db, { index }) > -1 || findIndex(db, { key }) > -1) {
    console.warn(`Existing index ${index} or key ${key}`)
    return false
  }
  db.push({
    index,
    key,
    state: 'default'
  })
  sortBy(db, ['index'])
}

function remove (key) {
  removeArray(db, (o) => {
    return o.key === key
  })
  sortBy(db, ['index'])
  setCursor()
}

function setCursor (key, state) {
  if (key && state) {
    let current = findIndex(db, { key })
    if (db[current]['state'] === state) return
    db[current]['state'] = state
  }

  forEach(CURSORS, (cssClass) => document.body.classList.remove(cssClass))
  forEach(db, (item) => {
    if (item.state === 'default') {
      return true
    } else {
      document.body.classList.add(item.state)
      console.log(document.body.style.cursor)
      return false
    }
  })
}

export default {
  add,
  remove,
  setCursor
}
