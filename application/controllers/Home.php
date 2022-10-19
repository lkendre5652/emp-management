<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {


	public function index()
	{
		$username = $this->input->post('username');		
		$data  = array();		
		if(empty($username) ){
			$data['user_err'] =  "This field should not be blank!!";
		}else{
			$data['user_success'] =  "Perfetch match!!";
		}
		$this->load->helper('url');
		$this->load->view("common/header");
		$this->load->view("home",$data);
		$this->load->view("common/footer");
	}

	public function login(){
		

	}
    // public function hello($num1,$num2){
    //     echo "Hi".$num1;
    //     echo "Hi".$num2;
    // }
    // public function banner(){
    //         echo "banner";
    //     }
}
