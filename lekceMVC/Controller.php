<?php
class Controller
{
    /**
     *
     * @var Model
     */
	private $model;

    public function __construct($model) {
        $this->model = $model;
    }

    public function move_step($step) {
		$this->model->update_step($step);
    }
}
