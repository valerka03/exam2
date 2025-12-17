// Практика 1 - 2 группа

// Задание 1. Условия + логика
// Время: ~15 минут
// Дан объект пользователя:
// const user = {
//   name: "Aibek",
//   age: 19,
//   isStudent: true,
//   hasSubscription: false
// };
// Нужно написать код, который определяет доступ к платформе по правилам:
// если возраст меньше 18 → "Доступ запрещён"
// если возраст 18 и больше:
// если есть подписка → "Полный доступ"
// если нет подписки, но пользователь студент → "Пробный доступ"
// если нет подписки и не студент → "Доступ запрещён"
// Результат вывести в консоль.
// ❗ Использовать if / else if / else
// ❗ Тернарный оператор использовать нельзя

const user = {
	name: 'Aibek',
	age: 18,
	isStudent: true,
	hasSubscription: false,
}
if (user.age < 18) {
	console.log('Доступ запрещён')
} else if (user.hasSubscription) {
	console.log('Полный доступ')
} else if (user.isStudent) {
	console.log('Пробный доступ')
} else {
	console.log('Доступ запрещён')
}

// Задание 2. Циклы + массивы
// Время: ~15 минут
// Дан массив чисел:
// const numbers = [4, -2, 7, 0, -9, 3, 12, -5];
// Используя один цикл for, нужно:
// Посчитать количество положительных, отрицательных и нулевых чисел
// Найти сумму только положительных чисел
// Найти минимальное число в массиве
// Вывести в консоль:
// количество положительных
// количество отрицательных
// количество нулей
// сумму положительных
// минимальное число
// ❗ Использовать Math.min нельзя
//  ❗ Использовать методы массивов нельзя

const numbers = [4, -2, 7, 0, -9, 3, 12, -5]
let countPositive = 0
let countNegative = 0
let countZero = 0
let summOfPositive = 0
let minNumber = numbers[0]
for (let i = 0; i < numbers.length; i++) {
	if (minNumber > numbers[i]) {
		minNumber = numbers[i]
	}
	if (numbers[i] > 0) {
		countPositive++
		summOfPositive += numbers[i]
	} else if (numbers[i] < 0) {
		countNegative++
	} else if (numbers[i] === 0) {
		countZero++
	}
}
console.log(countNegative, countPositive, countZero, summOfPositive, minNumber)

// Новое задание 3. Работа с данными
// Время: ~15 минут
// Дан массив задач:
// const tasks = [
//   { id: 1, title: "Learn JS", completed: true },
//   { id: 2, title: "Learn CSS", completed: false },
//   { id: 3, title: "Learn HTML", completed: true },
//   { id: 4, title: "Learn React", completed: false },
// ];
// Нужно написать код, который:
// Получает массив выполненных задач (completed === true)
// Из полученного массива создаёт массив названий задач
// Выводит результат в консоль
// ❗ Использовать filter и map
//  ❗ Циклы использовать нельзя

const tasks = [
	{ id: 1, title: 'Learn JS', completed: true },
	{ id: 2, title: 'Learn CSS', completed: false },
	{ id: 3, title: 'Learn HTML', completed: true },
	{ id: 4, title: 'Learn React', completed: false },
]
let completedTasks = tasks
	.filter(el => {
		return el.completed
	})
	.map(el => {
		return el.title
	})

console.log(completedTasks)
