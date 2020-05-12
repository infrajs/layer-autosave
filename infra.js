import { Event } from '/vendor/infrajs/event/Event.js'
import { Controller } from '/vendor/infrajs/controller/src/Controller.js'
import { External } from '/vendor/infrajs/controller/src/External.js'

// Event.handler('Layer.onshow', async (layer) => {
// 	if (layer.autosavenametpl) layer.autosavename = Template.parse([layer.autosavenametpl], layer);
// 	if (!layer.autosavename) return;
// 	Autosave.hand(layer.autosavename, layer.div);
// }, 'autosave:dom');


External.add('autosave', function(now, ext, layer, external) {
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
