package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Login;
import com.example.demo.service.Log_Service;

@RestController
@CrossOrigin
public class Log_controller {
	 @Autowired
	 Log_Service sser;
	 @PostMapping("/post1")
	 public Login savedetails(@RequestBody Login ss){
		 return sser.saveinfo(ss);
	 }
	 @GetMapping("/showdetails1")
	 public List<Login>showdetail(){
		 return sser.showinfo();
	 }
	 @GetMapping("getby/{mail}")
	 public Login getbym(@PathVariable String mail) {
		 return sser.getbyma(mail);
	 }
	 
	 
	 
}

