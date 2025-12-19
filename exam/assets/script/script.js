// Практика 1 - 2 группа
// Задание 1. Переменные + типы данных
// Время: ~10 минут
// Дан массив значений:
// const values = [10, "20", null, undefined, true, "JS", 0, false];
// Нужно:
// Посчитать количество значений каждого типа данных
// Результат вывести в виде объекта
// Формат результата:
// {
//   number: 2,
//   string: 2,
//   boolean: 2,
//   undefined: 1,
//   object: 1
// }
// ❗ Использовать typeof
//  ❗ Использовать цикл

const values = [10, '20', null, undefined, true, 'JS', 0, false]
const type = {
	number: 0,
	string: 0,
	boolean: 0,
	undefined: 0,
	object: 0,
}
for (let i = 0; i < values.length; i++) {
	if (typeof values[i] === 'number') {
		type.number++
	} else if (typeof values[i] === 'string') {
		type.string++
	} else if (typeof values[i] === 'boolean') {
		type.boolean++
	} else if (typeof values[i] === 'undefined') {
		type.undefined++
	} else if (typeof values[i] === 'object') {
		type.object++
	}
}
console.log(type)

// Задание 2. Методы массивов (map, filter, find)
// Время: ~15 минут
// Дан массив пользователей:
// const users = [
//   { id: 1, name: "Aibek", age: 17 },
//   { id: 2, name: "Dana", age: 22 },
//   { id: 3, name: "Timur", age: 19 },
//   { id: 4, name: "Alina", age: 16 },
// ];
// Нужно:
// Получить массив пользователей старше 18 лет
// Создать массив имён этих пользователей
// Найти первого пользователя, чей возраст больше 20
// Результаты вывести в консоль.

const users = [
	{ id: 1, name: 'Aibek', age: 17 },
	{ id: 2, name: 'Dana', age: 22 },
	{ id: 3, name: 'Timur', age: 19 },
	{ id: 4, name: 'Alina', age: 16 },
]
const result = users
	.filter(el => {
		return el.age > 18
	})
	.map(el => {
		return el.name
	})

const under20 = users.find(el => el.age > 20)

// Задание 5. HTTP-запросы (FakeStore API)
// Время: ~15 минут
// Используя FakeStore API:
// https://fakestoreapi.com/products
// Нужно написать код, который:
// Отправляет GET-запрос к API с помощью fetch
// Получает список товаров
// Оставляет только товары:
// с ценой больше 100
// Создаёт массив объектов формата:
// {
//   title: "Product title",
//   price: 120
// }
// Выводит результат в консол
fetch('https://fakestoreapi.com/products')
	.then(res => res.json())
	.then(data => {
		const filteredProducts = data.filter(product => product.price > 100)
		const result = filteredProducts.map(product => ({
			title: product.title,
			price: product.price,
		}))
		console.log(result)
	})
