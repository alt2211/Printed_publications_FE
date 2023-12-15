// const parseTextByRegex = (text: string) => {
// 	console.log(text)
// 	let array = text
// 		.replace(/[\n\r]+/g, ' ')
// 		.substring(30, text.length - 1)
// 		.split(' ')
// 	const regExp = {
// 		descriptionRegex: /([\s\S]+?)\(73\)/,
// 		typeRegex: /Художест\s+(\S+)/,
// 		cityRegex: /Москва\s+:/,
// 		titleRegex: /Приманка для моего Убийцы\. \/ (.+?) ;/,
// 		isbnRegex: /ISBN (\d{3}-\d-\d{6}-\d)/,
// 		bbkRegex: /ББК/,
// 		udkRegex: /УДК (\d+.\d+-\d+)/,
// 		yearRegex: /© \s+(\d+)/,
// 	}
// 	let result = new Map()
// 	console.log(array)
// 	for (let i = 0; i < array.length; i++) {
// 		switch (regExp) {
// 			case regExp[0]:
// 				result.set('Описание', array[i + 1])
// 				continue
// 			case regExp[1]:
// 				result.set('Тип издания', 'Тип')
// 				continue
// 			case regExp[2]:
// 				result.set('Город издания', array[i + 1])
// 				continue
// 			case regExp[4]:
// 				result.set('ISBN', array[i + 1])
// 				continue
// 			case regExp[5]:
// 				result.set('ББК', array[i + 1])
// 				continue
// 			case regExp[6]:
// 				result.set('УДК', array[i + 1])
// 				continue
// 			case regExp[7]:
// 				result.set('Год публикации', array[i])
// 				continue
// 		}
// 		result.set('Название книги', ' ')
// 		result.set('Город издания', ' ')
// 		result.set('Описание', ' ')
// 	}
// 	console.log(result)
// 	return result
// }

// const parseText = text => {
// 	const descriptionRegex = /([\s\S]+?)\(73\)/
// 	const typeRegex = /Художест\s+(\S+)/
// 	const cityRegex = /Москва\s+:/
// 	const titleRegex = /Приманка для моего Убийцы\. \/ (.+?) ;/
// 	const isbnRegex = /ISBN (\d{3}-\d-\d{6}-\d)/
// 	const bbkRegex = /ББК (\d+.\d+)/
// 	const udkRegex = /УДК (\d+.\d+-\d+)/
// 	const yearRegex = /© \s+(\d+)/

// 	const descriptionMatch = text.match(descriptionRegex)
// 	const typeMatch = text.match(typeRegex)
// 	const cityMatch = text.match(cityRegex)
// 	const titleMatch = text.match(titleRegex)
// 	const isbnMatch = text.match(isbnRegex)
// 	const bbkMatch = text.match(bbkRegex)
// 	const udkMatch = text.match(udkRegex)
// 	const yearMatch = text.match(yearRegex)

// 	const description = descriptionMatch ? descriptionMatch[1].trim() : ''
// 	const type = typeMatch ? typeMatch[1] : ''
// 	const city = cityMatch ? cityMatch[0].replace('Москва :', '').trim() : ''
// 	const title = titleMatch ? titleMatch[1] : ''
// 	const isbn = isbnMatch ? isbnMatch[1] : ''
// 	const bbk = bbkMatch ? bbkMatch[1] : ''
// 	const udk = udkMatch ? udkMatch[1] : ''
// 	const year = yearMatch ? yearMatch[1] : ''
// 	const result = parseText(text)
// 	console.log(result)
// 	return {
// 		Описание: description,
// 		'Тип издания': type,
// 		'Город издания': city,
// 		'Название книги': title,
// 		ISBN: isbn,
// 		ББК: bbk,
// 		УДК: udk,
// 		'Год публикации': year,
// 	}
// }

// const text = `°— УДК 821.111-31¢73
// a ° ADARKLURg |
// Copyright © 2015 Loreth Anne wi ‚
// This edition is made possible under а license агтапветень
// originating with Amazon pyp, eee
// Www.apub.com, in collaboration with $ oi ama
// YNopsis Literary Арену = г:
// Пере Ся
// ревод с английского И. Крупичевой Ч
// ta
// Художест 9
// Уложественное оформление С, Власова 4 |
// У13 Уайт, Лорет Энн,
// : Приманка для моего Убийцы. / Лорет 3;
// Уайт ; [пер. с англ. И. Крупичевой]. — Москва :
// Эксмо, 2022. — 512 с.
// ISBN 978-5-04-100521-4
// : Это история Сары Бейкер — единственной выжив-
// шей из жертв безжалостного убийцы с Уолт-Лейк.
// Сара провела в плену у Себастьяна не один месяц,
// прежде чем ей удалось сбежать. Однако ни новое ums,
// ни переезд Ha отдаленное ранчо He помогли ей скрыться
// от преследователя. Спустя несколько лет она получает от
// него недвусмысленное, весьма кровавое предупреждение.
// Себастьян одержим Сарой, и он совсем близко.
// Постояльцев ранчо — по пальцам пересчитать. Кто-
// то из них в сговоре с убийцей? Этого не может быть. Но
// Сара никак не может избавиться от мысли, что, по офи-
// циальным данным, Себастьян погиб в тюрьме. Hoya
// кто-то другой объявил охоту на его любимую жертву?
// УДК 821.111-31(73)
// ББК 84(7Coe)-44
// : © Крупичева И., перевод Ha русский язык,
// 2019
// © Издание на русском языке, bo TE
// ISBN 978-5-04-100521-4 ~~ ООО «Издательство «Эксмо»`

// const result = parseText(text)
// console.log(result)

const parseTextByRegex = text => {
	console.log(text)
	let array = text
		.replace(/[\n\r]+/g, ' ')
		.replace('|', ' ')
		.substring(10, text.length - 1)
		.split(' ')

	const regExp = {
		bbkRegex: /ББК/,
		udkRegex: /УДК/,
		author: /[1-2][0,9][0-9][0-9]/,
		titleRegex: /\//,
		yearRegex: /Copyright/,
		isbnRegex: /ISBN/,
		cityRegex: /[М,С,Т,Н,И]/,
	}

	let result = new Map()
	console.log(array)

	for (let i = 0; i < array.length; i++) {
		if (regExp.yearRegex.test(array[i])) {
			result.set('Год публикации', array[i + 2])
		} else if (regExp.cityRegex.test(array[i]) && array[i + 1] == ':') {
			result.set('Город издания', array[i])
		} else if (regExp.isbnRegex.test(array[i])) {
			result.set('ISBN', array[i + 1])
		} else if (regExp.bbkRegex.test(array[i])) {
			result.set('ББК', array[i + 1])
		} else if (regExp.udkRegex.test(array[i])) {
			result.set('УДК', array[i + 1])
		} else if (array[i] === result.get('Год публикации')) {
			result.set('Автор', `${array[i + 1]} ${array[i + 2]} ${array[i + 3]}`)
		} else if (regExp.titleRegex.test(array[i])) {
			result.set(
				'Название книги',
				`${array[i - 4]} ${array[i - 3]} ${array[i - 2]} ${array[i - 1]}`
			)
		}
		result.set('Тип издания', 'Художественное')
	}

	console.log(result)
	return result
}

export default parseTextByRegex
