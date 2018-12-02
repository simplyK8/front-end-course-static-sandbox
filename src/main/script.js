const HUMAN = 'human'
const ROBOT = 'robot'
const EVAPILOT = 'eva pilot'
const NERVWORKER = 'nerv worker'
const EVA = 'eva'
const TALENT = 'can handle eva'

const cards = [
	{
		name: 'Eva 01',
		avatar: 'https://i.pinimg.com/originals/25/9b/fd/259bfddcb90ee8a265392bfbcdfca2c1.png',
		species: ROBOT,
		age: 5,
		occupation: EVA,
		badge: 'https://ih0.redbubble.net/image.43104463.5427/flat,1000x1000,075,f.jpg',
		talent: TALENT,
	},

	{
		name: 'Eva 02',
		avatar: 'https://ru.myanimeshelf.com/upload/dynamic/2011-08/31/eva-022.JPG',
		species: ROBOT,
		age: 5,
		occupation: EVA,
		badge: 'https://ih0.redbubble.net/image.43104463.5427/flat,1000x1000,075,f.jpg',
		talent: TALENT,
	},

	{
		name: 'Eva 00',
		avatar: 'http://images2.fanpop.com/image/photos/9200000/EVA-00-evangelion-9207743-640-480.jpg',
		species: ROBOT,
		age: 5,
		occupation: EVA,
		badge: 'https://ih0.redbubble.net/image.43104463.5427/flat,1000x1000,075,f.jpg',
		talent: TALENT,
	},
	{
		name: 'Shinji Ikari',
		avatar: 'https://pm1.narvii.com/6057/9dae51eb11235139050eae65fdc63205f8264fdb_hq.jpg',
		species: HUMAN,
		age: '16',
		occupation: EVAPILOT,
		badge: 'https://ih0.redbubble.net/image.43104463.5427/flat,1000x1000,075,f.jpg',
		talent: TALENT,
	},

	{
		name: 'Asuka Soryu',
		avatar: 'https://moe.shikimori.org/system/user_images/original/31022/187747.jpg',
		species: HUMAN,
		age: '16',
		occupation: EVAPILOT,
		badge: 'https://ih0.redbubble.net/image.43104463.5427/flat,1000x1000,075,f.jpg',
		talent: TALENT,
	},

	{
		name: 'Rei Ayanami',
		avatar: 'https://pm1.narvii.com/6204/566a1ee2bab152142f2f28418117df005aa6cf94_hq.jpg',
		species: HUMAN,
		age: '16',
		occupation: EVAPILOT,
		badge: 'https://ih0.redbubble.net/image.43104463.5427/flat,1000x1000,075,f.jpg',
		talent: TALENT,
	},

	{
		name: 'Misato Katsuragi',
		avatar: 'https://myanimelist.cdn-dena.com/images/characters/3/317294.jpg',
		species: HUMAN,
		age: '30',
		occupation: NERVWORKER,
		badge: 'https://ih0.redbubble.net/image.43104463.5427/flat,1000x1000,075,f.jpg',
		talent: TALENT,
	},

	{
		name: 'Gendo Ikari',
		avatar: 'https://i.kym-cdn.com/photos/images/newsfeed/000/015/575/Gendo_Ikari_by_Darthval.jpg',
		species: HUMAN,
		age: '45',
		occupation: NERVWORKER,
		badge: 'https://ih0.redbubble.net/image.43104463.5427/flat,1000x1000,075,f.jpg',
		talent: TALENT,
	},

	{
		name: 'Ritsuko Akagi',
		avatar: 'http://animeperson.com/images/character/c11d65125b.jpg',
		species: HUMAN,
		age: '32',
		occupation: NERVWORKER,
		badge: 'https://ih0.redbubble.net/image.43104463.5427/flat,1000x1000,075,f.jpg',
		talent: TALENT,
	},
]
const container = document.getElementById('container')

function canHandleEva(item) {
	return item.species === HUMAN && item.age < 20
}

function createField(text) {
	const field = document.createElement('h3')
	field.innerHTML = text
	field.classList.add('text-center', 'card-text')

	return field
}

cards.forEach(function(item) {
	const card = document.createElement('div')
	card.classList.add('card', 'drop-shadow', 'standard-border', 'text-center', 'm-b', 'card-hover')

	const avatar = document.createElement('img')
	avatar.src = item.avatar
	avatar.classList.add('avatar')

	const badge = document.createElement('img')
	badge.src = item.badge
	badge.classList.add('badge')
	badge.style.visibility = 'hidden'

	const name = document.createElement('h2')
	name.innerHTML = item.name
	name.classList.add('text-center', 'text-title')

	const age = createField(item.age)
	const species = createField(item.species)
	const occupation = createField(item.occupation)

	const talent = document.createElement('h3')
	talent.innerHTML = item.talent
	talent.classList.add('text-center', 'card-text')
	talent.style.visibility = 'hidden'

	if (canHandleEva(item)) {
		talent.style.visibility = 'visible'
	}

	if (item.occupation === EVAPILOT) {
		name.classList.add('text-accent')
		badge.style.visibility = 'visible'
	}

	if (item.occupation === EVA) {
		name.classList.add('text-eva')
	}

	card.append(avatar)
	card.append(badge)
	card.append(name)
	card.append(species)
	card.append(age)
	card.append(occupation)
	card.append(talent)
	container.append(card)
})
