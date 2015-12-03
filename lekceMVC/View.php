<?php
class View
{
    private $model;
    private $controller;

    public function __construct($controller,$model) {
        $this->controller = $controller;
        $this->model = $model;
    }

    public function output_title() {
    	return "<h1>" . $this->model->string . "</h1>";
    }

    public function output_body() {
    	$body = "<p> Stavba obsahu stránky</p>";
    	$body .= "<a href=\"index.php?step=" . $this->model->get_nextstep(). "\">Další krok</a>";

    	return $body;
    }
}
