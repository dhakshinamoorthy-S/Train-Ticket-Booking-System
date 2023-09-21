package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Login;

public interface Log_repo extends JpaRepository<Login,String>{
@Query(value="select * from logindetails where mailid=:str",nativeQuery = true)
public Login getbymail(@Param("str")String mail);

}
