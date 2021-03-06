<?php

namespace infrajs\controller;
use infrajs\session\Session;
//autosave, autosaveclient, autosavename

//Из-за этого нельзя кэшировать снимок всей страницы
class autosave
{
	public function get(&$layer, $name = '', $def = null)
	{
		if (@is_null($layer['autosavename'])) {
			return $def;
		}
		$val = Session::get($layer['autosavename'].'.'.$name);
		if (@is_null($val)) {
			return $def;
		}

		return $val;
	}
}
