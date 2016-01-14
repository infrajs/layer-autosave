
Event.handler('layer.onshow', function (layer){
	//autosave
	infrajs.autosaveHand(layer);
}, 'autosave:dom');
Event.one('Infrajs.oninit',function(){
	infrajs.externalAdd('autosave',function(now,ext,layer,external){
		if(external.inheritance){
			now=ext;//Если есть метка о наследовании, то просто сохраняем указатель
		}else{//Иначе копируем и при изменении одного другой изменяться не будет 
			if(!now)now={};
			for(var v in ext){//Объект autosave не наследуется а копируется
				now[v]=ext[v];
			}
		}
		return now;
	});
	/*controller
git commit -m "js"
git push

cd ../.parsedAdd(function(layer){
		//Работы в itlife выбранная работа сохраняется но дальше слой не должен перепарсиваться... всё обрабатывается на кликах
		if(!layer.autosavename)return '';
		if(!window.JSON)return '';
		return JSON.stringify(layer.autosave);
		//сохранённое значение формы, а на сервере стоит из-за этого запрет на кэширование, так как обращение к сессии
	});*/

});