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
@RequestMapping(value = "/customers")
public class CustomerController {

    private CustomerRepository CustomerRepository;

    @Autowired
    public CustomerController(CustomerRepository CustomerRepository) {
        this.CustomerRepository = CustomerRepository;
    }

    private List<Customer> customers = new ArrayList();

    @RequestMapping(method = RequestMethod.GET)
    public List<Customer> getCustomers() {
        return CustomerRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public List<Customer> getCustomer(@ApiPathParam(name = "id") @PathVariable Long id) {
        return CustomerRepository.findById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public List<Customer> saveCustomer(@RequestBody Customer customer) {
        CustomerRepository.save(new Customer(customer.getNamaCustomer(), customer.getAlamatCustomer(), customer.getKelaminCustomer(), customer.getTelpCustomer()));
        return CustomerRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.PUT)
    public List<Customer> updateCustomer(@RequestBody Customer customer) {
        this.customers.stream().filter(u -> u.getId() == customer.getId()).findFirst().orElse(null);
        
        CustomerRepository.save(customer);
        return CustomerRepository.findAll();
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public List<Customer> deleteCustomer(@PathVariable Long id) {
        CustomerRepository.delete(id);
        return CustomerRepository.findAll();

    }

}
