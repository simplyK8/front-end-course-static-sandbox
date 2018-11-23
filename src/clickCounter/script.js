const clickBtn = document.getElementById('click-btn')
const clickValue = document.getElementById('click-value')
const clickReset = document.getElementById('click-reset')
const increaseStep = document.getElementById('increase-step')
const stepValue = document.getElementById('step-value')
const increaseValue = document.getElementById('increase-value')
const valueIncreased = document.getElementById('value-increased')
const clicksLeft = document.getElementById('clicks-left')

const MAX_VALUE = 20
const CLICKS_VALUE = 0
const STEP = 1
const VALUE_INCREASE = 10

let clicks = CLICKS_VALUE
let step = STEP
let maxValue = MAX_VALUE

clickBtn.onclick = function() {
	if (clicks + step <= maxValue) {
		clicks = clicks + step

		clicksLeft.innerHTML = maxValue - clicks
		clickValue.innerHTML = clicks
	} else {
		clickValue.innerHTML = 'max value reached'
		clickBtn.disabled = true
		clicksLeft.innerHTML = CLICKS_VALUE
	}
}

clickReset.onclick = function() {
	clicks = CLICKS_VALUE
	maxValue = MAX_VALUE
	step = STEP

	clickValue.innerHTML = clicks
	stepValue.innerHTML = step
	valueIncreased.innerHTML = maxValue
	clicksLeft.innerHTML = maxValue
	clickBtn.disabled = false
}
increaseStep.onclick = function() {
	step = step + STEP

	clicksLeft.innerHTML = maxValue - clicks
	stepValue.innerHTML = step
}

increaseValue.onclick = function() {
	maxValue = maxValue + VALUE_INCREASE
	valueIncreased.innerHTML = maxValue
	clicksLeft.innerHTML = maxValue - clicks
	clickValue.innerHTML = clicks
	clickBtn.disabled = false
}
