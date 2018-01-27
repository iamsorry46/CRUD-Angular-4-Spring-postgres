/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.myDreamApp.CRUD;

/**
 *
 * @author Cholizs aLghozali
 */
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import org.jsondoc.core.annotation.ApiPathParam;
import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/sopirs")
public class SopirController {

    private SopirRepository SopirRepository;

    @Autowired
    public SopirController(SopirRepository SopirRepository) {
        this.SopirRepository = SopirRepository;
    }

    private List<Sopir> sopirs = new ArrayList();

    @RequestMapping(method = RequestMethod.GET)
    public List<Sopir> getSopirs() {
        return SopirRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public List<Sopir> getSopir(@ApiPathParam(name = "id") @PathVariable Long id) {
        return SopirRepository.findById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public List<Sopir> saveSopir(@RequestBody Sopir sopir) {
        SopirRepository.save(new Sopir(sopir.getNamaSopir(), sopir.getAlamatSopir(), sopir.getKelaminSopir(), sopir.getLahirSopir(), sopir.getTelpSopir()));
        return SopirRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.PUT)
    public List<Sopir> updateSopir(@RequestBody Sopir sopir) {
        this.sopirs.stream().filter(u -> u.getId() == sopir.getId()).findFirst().orElse(null);
        
        SopirRepository.save(sopir);
        return SopirRepository.findAll();
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public List<Sopir> deleteSopir(@PathVariable Long id) {
        SopirRepository.delete(id);
        return SopirRepository.findAll();

    }

}
