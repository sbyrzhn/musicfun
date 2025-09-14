function App() {
	const tracks = [
		{
			id: 1,
			title: 'Musicfun soundtrack',
			url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3',
		},
		{
			id: 2,
			title: 'Musicfun soundtrack instrumental',
			url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3',
		},
	];

	return (
		<>
			<h1>Musicfun Player</h1>
			<ul>
				{tracks.map((track) => {
					return (
						<li key={track.id}>
							<div>{track.title}</div>
							<audio src={track.url} controls></audio>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default App;
