<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function index()
	{
		$this->load->view("common/header");
		$this->load->view("home");
		$this->load->view("common/footer");
	}
    // public function hello($num1,$num2){
    //     echo "Hi".$num1;
    //     echo "Hi".$num2;
    // }
    // public function banner(){
    //         echo "banner";
    //     }
}
