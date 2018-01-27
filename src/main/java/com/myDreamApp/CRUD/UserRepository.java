/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.myDreamApp.CRUD;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.myDreamApp.CRUD.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author sorry
 */
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByFirstName(String firstName);

    List<User> findById(Long id);

}
