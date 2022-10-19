<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {


	public function index()
	{
		$this->load->helper('url');
		$this->load->view("common/header");
		$this->load->view("home");
		$this->load->view("common/footer");
	}

	public function login(){
		$this->load->helper('url');		
		$username = $this->input->post('username');
		$password = $this->input->post('password');		
		$data  = array();		
		if(empty($username) ){
			$data['user_err'] =  "This field should not be blank!!";
		}else{
			$data['user_success'] =  "Perfetch match!!";
		}
		if(empty($password) ){
			$data['pass_err'] =  "This field should not be blank!!";
		}else{
			$data['pass_success'] =  "Perfetch match!!";
		}	
		
		if( ( empty($username) ) && ( empty($password) ) ){
			$data['comm_err'] = "Have you entered all the information correctly? Please check and try again.";
		}
		$this->load->view("common/header");
		$this->load->view("home",$data);
		$this->load->view("common/footer");
	}

	 public function singup(){
		$this->load->helper('url');
		$this->load->view('common/header'); 
		$this->load->view('signup'); 
		$this->load->view('common/footer'); 
     }
 
}
