const data = [
	{
		name: 'Mario Kart 8 Deluxe',
		released: '2017-04-27',
		metacritic: 92,
		background_image: 'images/mario-kart-8-deluxe.jpg'
	},
	{
		name: 'God of War Ragnarok',
		released: '2022-11-09',
		metacritic: 94,
		background_image: 'images/god-of-war-ragnarok.jpg',
	},
	{
		name: 'The Last of Us Part 2',
		released: '2020-06-19',
		metacritic: 94,
		background_image: 'images/the-last-of-us-part-2.jpg'
	},
];
function renderGameThumbnail({name, background_image, released, metacritic}){
	const releasedDate = new Date(released);
	return `<a href="${background_image}">
			<img src="${background_image}" />
			<footer>
				<h3>${name}</h3>
				<div class="infos">
					<time datetime="${released}">${releasedDate.toLocaleDateString()}</time>
					<span class="metacritic">${metacritic}</span>
				</div>
			</footer>
		</a>`;
}
let html = '';
data.forEach( game  => html += renderGameThumbnail(game) );
/* avec la méthode reduce on aurait pu éviter de faire un `let` et gagner 1 ligne : */
// const html = data.reduce((str, game)  => str + renderGameThumbnail(game), '');
document.querySelector('.gameList .results').innerHTML = html;

/* Solution des exercices précédents du TP1 : */

/* TP1 / C. Les devtools */
//
// console.log('Welcome to ', {title:'JSteam', emoji: '🎮'});
//
// console.warn('Oh oh attention');
// console.error('fatal error lol');
// console.clear();
// console.table([['Walter','White'],['Skyler','White'],['Saul','Goodman']]);
//
// const what = 'door';
// debugger;
// console.log('Hold', 'the', what );

/* TP1 / D.3. Les chaînes : Manipulations simples */
//
// const name = 'Mario Kart 8 Deluxe';
// const url = `images/${name.toLowerCase().replaceAll(' ', '-')}.jpg`;
// console.log(url);
// const html = `<a href="${url}">${url}</a>`;
// console.log(html);

/* TP1 / D.4. Les chaînes : Injection dans la page HTML */
//
// const html = `<a href="${url}">
// 	<img src="${url}" />
// 	<footer>${name}</footer>
// </a>`;
// document.querySelector('.gameList .results').innerHTML = html;

/* TP1 / D.5. Les chaînes : Affichage dynamique */
//
// const value = window.prompt('Que voulez vous afficher dans la console ?');
// console.log(`Voici ce que vous avez saisi : ${value}`);
//
// function renderGameThumbnail(name){
// 	const url = `images/${name.toLowerCase().replaceAll(' ', '-')}.jpg`;
//
// 	return `<a href="${url}">
// 		<img src="${url}" />
// 		<footer>${name}</footer>
// 	</a>`;
// }
// // const name = window.prompt('Quel jeu voulez vous ?');
// const name = 'Mario Kart 8 Deluxe';
// const html = renderGameThumbnail(name);
// document.querySelector('.gameList .results').innerHTML = html;

/* TP1 / E.2 Manipulation des tableaux */
//
// function renderGameThumbnail(name){
// 	const url = `images/${name.toLowerCase().replaceAll(' ', '-')}.jpg`;
//
// 	return `<a href="${url}">
// 	<img src="${url}" />
// 	<footer>${name}</footer>
// 	</a>`;
// }
// const data = ['Mario Kart 8 Deluxe', 'God of War Ragnarok', 'The Last of Us Part 2'];
// // let html = '';
// // data.forEach(name  => html += renderGameThumbnail(name));
// // const html = data.map( name  => renderGameThumbnail(name)).join('');
// const html = data.reduce((str, name)  => str + renderGameThumbnail(name), '');
// document.querySelector('.gameList .results').innerHTML = html;

/* TP1 / E.3. Les objets littéraux */
// const data = [
// 	{
// 		name: 'Mario Kart 8 Deluxe',
// 		released: '2017-04-27',
// 		metacritic: 92,
// 		background_image: 'images/mario-kart-8-deluxe.jpg'
// 	},
// 	{
// 		name: 'God of War Ragnarok',
// 		released: '2022-11-09',
// 		metacritic: 94,
// 		background_image: 'images/god-of-war-ragnarok.jpg',
// 	},
// 	{
// 		name: 'The Last of Us Part 2',
// 		released: '2020-06-19',
// 		metacritic: 94,
// 		background_image: 'images/the-last-of-us-part-2.jpg'
// 	},
// ];
// function renderGameThumbnail(game){
// 	return `<a href="${game.background_image}">
// 			<img src="${game.background_image}" />
// 			<footer>
// 				<h3>${game.name}</h3>
// 				<div class="infos">
// 					<time datetime="${game.released}">${game.released}</time>
// 					<span class="metacritic">${game.metacritic}</span>
// 				</div>
// 			</footer>
// 		</a>`;
// }

/* TP1 / G.1. Destructuring */
// function renderGameThumbnail({name, background_image, released, metacritic}){
// 		return `<a href="${background_image}">
// 				<img src="${background_image}" />
// 				<footer>
// 					<h3>${name}</h3>
// 					<div class="infos">
// 						<time datetime="${released}">${released}</time>
// 						<span class="metacritic">${metacritic}</span>
// 					</div>
// 				</footer>
// 			</a>`;
// }

/* TP1 / G.2. Tri de tableau */
/* Tri alphabétique */
// data.sort((a, b) => {
// 	// if (a.name > b.name) {
// 	// 	return 1;
// 	// }
// 	// if (a.name < b.name) {
// 	// 	return -1;
// 	// }
// 	// return 0;
// 	return a.name.localeCompare(b.name);
// });

/* Tri par date de sortie */
/* NB : comme les dates sont stockées sous forme de chaînes au format ISO
on peut les comparer par ordre alphabétique avec localeCompare */
// data.sort((a, b) => {
// 	// if (a.released > b.released) {
// 	// 	return -1;
// 	// }
// 	// if (a.released < b.released) {
// 	// 	return 1;
// 	// }
// 	// return 0;
// 	return b.released.localeCompare(a.released);
// });

/* Tri par note + date */
// data.sort((a, b) => {
// 	const diff = parseInt(b.metacritic) - parseInt(a.metacritic);
// 	if (diff === 0) {
// 		return a.released.localeCompare(b.released);
// 	}
// 	return diff;
// });
//
// const html = data.reduce((str, game)  => str + renderGameThumbnail(game), '');
// document.querySelector('.gameList .results').innerHTML = html;

/* TP1 / G.3. Système de filtres */
// const filteredData = data.filter(game => game.metacritic > 93);
// const filteredData = data.filter(game => game.released.startsWith('2022'));
// const filteredData = data.filter(game => game.name.split('a').length === 3);
// const html = filteredData.reduce((str, game)  => str + renderGameThumbnail(game), '');
// document.querySelector('.gameList .results').innerHTML = html;

