/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.myDreamApp.CRUD;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.myDreamApp.CRUD.Mobil;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Cholizs aLghozali
 */
public interface MobilRepository extends JpaRepository<Mobil, Long> {

    List<Mobil> findByNamaMobil (String namaMobil);
    List<Mobil> findById(Long id);

}
