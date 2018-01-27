/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.myDreamApp.CRUD;

/**
 *
 * @author sorry
 */
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import org.jsondoc.core.annotation.ApiPathParam;
import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/users")
public class UserController {

    private UserRepository repository;

    @Autowired
    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    private List<User> users = new ArrayList();

    @RequestMapping(method = RequestMethod.GET)
    public List<User> getUsers() {
        return repository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public List<User> getUser(@ApiPathParam(name = "id") @PathVariable Long id) {
        return repository.findById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public List<User> saveUser(@RequestBody User user) {
        repository.save(new User(user.getFirstName(), user.getLastName(), user.getEmail()));
        return repository.findAll();
    }

    @RequestMapping(method = RequestMethod.PUT)
    public List<User> updateUser(@RequestBody User user) {
        this.users.stream().filter(u -> u.getId() == user.getId()).findFirst().orElse(null);
        
        repository.save(user);
        return repository.findAll();
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public List<User> deleteUser(@PathVariable Long id) {
        repository.delete(id);
        return repository.findAll();

    }

}
