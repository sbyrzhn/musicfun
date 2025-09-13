import tracks from './data.js';

const rootEl = document.getElementById('root');

const headerEl = document.createElement('h1');
headerEl.append('Musicfun Player');
rootEl.append(headerEl);

const tracksEl = document.createElement('ul');

function createTrackElement(track) {
	const trackEl = document.createElement('li');

	const titleEl = document.createElement('div');
	titleEl.append(track.title);

	const audioEl = document.createElement('audio');
	audioEl.controls = true;
	audioEl.src = track.url;

	trackEl.append(titleEl, audioEl);

	return trackEl;
}

tracks.forEach((track) => tracksEl.append(createTrackElement(track)));

rootEl.append(tracksEl);
