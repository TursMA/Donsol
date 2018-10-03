'use strict'

function Progress (radius = 15) {
  this.wrapper = null
  this.progress_bar = null

  this.install = function () {
    this.wrapper = document.createElement('div')
    this.wrapper.setAttribute('class', 'progress')

    this.progress_bar = document.createElement('div')
    this.progress_bar.setAttribute('class', 'bar')

    this.wrapper.appendChild(this.progress_bar)

    return this.wrapper
  }

  this.update = function (value, limit = 0) {
    if (limit === 0) { value = 0; limit = 1 }
    let min = 0
    let max = 130
    let pixels = Math.floor(((value / limit) * max) + min)
    let ratio = (value / limit)
    let perc = ratio * 100

    this.progress_bar.style.width = `${perc}%`
  }
}
