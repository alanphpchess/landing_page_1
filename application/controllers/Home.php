<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{

	public function __construct()
	{

		parent::__construct();

		$this->load->library('email');
	}


	public function index()
	{

		$this->load->view('index');
	}


	public function contato()
	{






	}
}
