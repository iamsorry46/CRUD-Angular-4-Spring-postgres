/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.myDreamApp.CRUD;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.myDreamApp.CRUD.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author sorry
 */
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    List<Customer> findByNamaCustomer (String namaCustomer);
    List<Customer> findById(Long id);

}
