(async () => {
	let CDN = (await import('/vendor/akiyatkin/load/CDN.js')).default
	await CDN.load('jquery')

	Event.handler('Layer.onshow', async (layer) => {
		//autosave
		Controller.autosaveHand(layer);
	}, 'autosave:dom');
	Event.one('Controller.oninit',async () => {
		Controller.externalAdd('autosave', function(now, ext, layer, external) {
			if (external.inheritance) {
				now=ext;//Если есть метка о наследовании, то просто сохраняем указатель
			} else {//Иначе копируем и при изменении одного другой изменяться не будет 
				if (!now) now={};
				for (var v in ext) {//Объект autosave не наследуется а копируется
					now[v] = ext[v];
				}
			}
			return now;
		});
	});
})();