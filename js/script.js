// Створення масиву за допомогою функції
// function arrFill(value, count) {
// 	let arr = []
// 	for(let i = 1; i <= count; i++) {
// 		arr.push(value)
// 	}
// 	console.log(arr)
// }

// arrFill('x', 5)
// ================================================

// Перебір масиву і запис у новий
// let arr = [2, 33, 11, 5, 7, 26]

// let newArr = []

// function isNumberRange() {
// 	arr.filter(item => {
// 		if(item > 0 && item < 10) {
// 			newArr.push(item)
// 		}
// 	})	 
// 	console.log(newArr)
// }

// isNumberRange()
// ================================================

// Сума цифр цілого числа
// function getDigitsSum(num) {
// 	let sum = 0;
// 	let str = String(num)

// 	for(let i = 0; i < str.length; i++) {
// 		sum += Number(str[i])
// 	}
// 	return sum
// }

// console.log(getDigitsSum(23))
// ================================================

// Пошук років сума цифр яких становить 13
// function getDigitsSum(num) { // Фун. суми цифр
// 	let sum = 0;
// 	let str = String(num)

// 	for(let i = 0; i < str.length; i++) {
// 		sum += Number(str[i])
// 	}
// 	return sum
// }

// let arrYears = []

// // Функція суми років
// function sumDigitYears() {
// 	for(let j = 1; j <= 2022; j++) {
// 		if(getDigitsSum(j) === 13) {
// 			arrYears.push(j)
// 		}
// 	}
// 	return arrYears
// }
// console.log(sumDigitYears())
// ================================================

// Функція яка перевіряє парне-непарне число
// function isEven(n) {
// 	if(n % 2 == 0) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// console.log(isEven(17))
// ================================================

// Створює новий масив з парними числами
// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let newArr = []

// function isEven() {
// 	numbers.filter(item => {
// 		if(item % 2 == 0) {
// 			newArr.push(item)
// 		}
// 	})
// 	return newArr
// }

// console.log(isEven(17))
// ================================================

// Функція що виводить строку з великої літери
// const uclFirst = (text) => text[0].toUpperCase() + text.slice(1)
// console.log(uclFirst('function'))
// ================================================

// Функція яка шукає елемент в масиві
// function inArray(value, arr) {
// 	return arr.includes(value)
// }

// const person = ['Vova', 'Dima', 'Vlad', 'Artem']

// console.log(inArray('Dima', person))
// ================================================

// Занесення в масив чисел від 1 до 10
// let arr = []
// for(let i = 1; i <= 10; i++) {
// 	arr.push(Math.round(Math.random() * 10))
// }

// console.log(arr)
// ================================================

// Виведення согоднішнього місяця
// const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
// 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']

// const actualMonth = new Date().getMonth()

// console.log(months[actualMonth])
// ================================================

// Виведення актуального часу
// let data = new Date()

// function showDate(num) {
// 	if(num > 0 && num < 10) {
// 		return '0' + num
// 	} else {
// 		return num
// 	}
// }

// console.log(showDate(data.getHours()) + ':' + showDate(data.getMinutes()) + ':' + showDate(data.getSeconds()) + ' ' + showDate(data.getDate()) + '.' + showDate(data.getMonth()) + '.' + data.getFullYear())
// ================================================

// Таймер
// const res = document.querySelector('.span')
// const startTimer = document.querySelector('.start')
// const stopTimer = document.querySelector('.end')

// function infinityTimer() {
// 	let start
// 	startTimer.addEventListener('click', () => {
// 		let counter = 0
// 		start = setInterval(() => {
// 			res.innerHTML = counter += 1
// 		}, 500)
// 	})
	
// 	stopTimer.addEventListener('click', () => {
// 		clearInterval(start)
// 	})
// }

// infinityTimer()
// ================================================

// Функція що показує скільки часу до опівночі
// const hours = document.querySelector('.hours')
// const minutes = document.querySelector('.minutes')
// const second = document.querySelector('.second')

// function showTimeMidnight() {
// 	hours.innerHTML = 24 - new Date().getHours()

// 	setInterval(() => minutes.innerHTML = 60 - new Date().getMinutes())

// 	setInterval(() => second.innerHTML = new Date().getSeconds(), 1000)
// }

// showTimeMidnight()
// ================================================

// Збільшення штрини і висоти елемента в 2 рази
// const el = document.querySelector('#elem')
// const button = document.querySelector('#but')

// button.addEventListener('click', () => {
// 	const startWidth = el.offsetWidth
// 	const startHeight = el.offsetHeight

// 	el.style.width = startWidth * 2 + 'px'
// 	el.style.height = startHeight * 2 + 'px'
// })
// ================================================

// Показує координати по осі x і y
// const block = document.querySelector('.block')

// block.addEventListener('mousemove', event => {

// 	block.innerHTML = `X: ${event.clientX} <br> Y: ${event.clientY}`
// })
// ================================================

// Квадратик появляється там де клікнеш мишкою
// const container = document.querySelector('.container')
// const block = document.createElement('div')

// container.addEventListener('click', event => {
// 	block.style.cssText = `
// 		width: 100px;
// 		height: 100px;
// 		border: 1px solid red;
// 		position: absolute;
// 		left: ${event.clientX - 57}px;
// 		top: ${event.clientY - 57}px;
// 	`
// 	container.append(block)
// })
// ================================================

// Виділяємо текст і він появляється в інпуті
// const res = document.querySelector('.res')
// const p = document.querySelector('p')

// p.addEventListener('mouseup', () => {
// 	const content = window.getSelection()
// 	res.value = content
// })
// ================================================

// Генератор рандомної строки
// const res = document.querySelector('.res');
// const symbols = document.querySelector('.symbol');
// const length = document.querySelector('.max-length');
// const button = document.querySelector('.button')

// let str = ''

// button.addEventListener('click', () => {
// 	for(let i = 1; i <= length.value; i++) {
// 		str += symbols.value.charAt(Math.floor(Math.random() * symbols.value.length))
// 	}
// 	res.value = str
// 	str = ''
// })
// ================================================

// Абзац міняє колори через секунду
// const p = document.querySelector('p')

// const color = ['red', 'green', 'blue']

// let i = -1
// setInterval(() => {
// 	i++
// 	p.style.background = `${color[i]}`
// 	if (i >= color.length) {
// 		i = -1
//  	}
// }, 1000)
// ================================================



