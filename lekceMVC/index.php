<?php
if(!session_id()) {
	session_start();
}

require 'config.inc';

$model = new Model();
$controller = new Controller($model);
$view = new View($controller, $model);

if (isset($_GET['step'])) {
	$controller->move_step($_GET['step']);
}

echo $view->output_title();
echo $view->output_body();
