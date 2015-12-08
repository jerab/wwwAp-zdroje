<?php
class Model
{
	public $string;
	private static $stringDef = "Vítejte na stránce";

	public function __construct(){
		$this->string = self::$stringDef;
		if(!isset($_SESSION['step'])) {
			$_SESSION['step'] = 0;
		}
	}

	public function get_nextstep() {
		if($_SESSION['step'] >= 3) {
			return 0;
		}
		return $_SESSION['step'] + 1;
	}

	public function update_step($step) {
		$_SESSION['step'] = (int)$step;

		switch ($_SESSION['step']) {
			case 0 :
				$this->string = self::$stringDef;
				break;
			case 1 :
				$this->string = "Krok 1";
				break;
			case 2 :
				$this->string = "Krok 2";
				break;
			case 3 :
				$this->string = "Krok 3";
				break;
			default:
				$this->string = self::$stringDef;
				break;
		}
	}

}
