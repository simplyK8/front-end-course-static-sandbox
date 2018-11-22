const clickBtn = document.getElementById('click-btn')
const clickValue = document.getElementById('click-value')
const clickReset = document.getElementById('click-reset')

let clicks = 0
let step = 1
const maxValue = 100

clickBtn.onclick = function() {
  if (clicks < maxValue) {
    clicks = clicks + step
  } else {
    clicks = 'max value reached'
  }

  clickValue.innerHTML = clicks
}

clickReset.onclick = function() {
  clicks = 0
  clickValue.innerHTML = clicks
}
