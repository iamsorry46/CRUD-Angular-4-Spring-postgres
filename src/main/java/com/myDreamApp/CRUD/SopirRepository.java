/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.myDreamApp.CRUD;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.myDreamApp.CRUD.Sopir;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Cholizs aLghozali
 */
public interface SopirRepository extends JpaRepository<Sopir, Long> {

    List<Sopir> findByNamaSopir (String namaSopir);
    List<Sopir> findById(Long id);

}
