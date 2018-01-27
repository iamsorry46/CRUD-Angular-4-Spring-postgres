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
@RequestMapping(value = "/mobils")
public class MobilController {

    private MobilRepository MobilRepository;

    @Autowired
    public MobilController(MobilRepository MobilRepository) {
        this.MobilRepository = MobilRepository;
    }

    private List<Mobil> mobils = new ArrayList();

    @RequestMapping(method = RequestMethod.GET)
    public List<Mobil> getMobils() {
        return MobilRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public List<Mobil> getMobil(@ApiPathParam(name = "id") @PathVariable Long id) {
        return MobilRepository.findById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public List<Mobil> saveMobil(@RequestBody Mobil mobil) {
        MobilRepository.save(new Mobil(mobil.getMerkMobil(), mobil.getNamaMobil(), mobil.getJenisMobil(), mobil.getPlatMobil()));
        return MobilRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.PUT)
    public List<Mobil> updateMobil(@RequestBody Mobil mobil) {
        this.mobils.stream().filter(u -> u.getId() == mobil.getId()).findFirst().orElse(null);
        
        MobilRepository.save(mobil);
        return MobilRepository.findAll();
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public List<Mobil> deleteMobil(@PathVariable Long id) {
        MobilRepository.delete(id);
        return MobilRepository.findAll();

    }

}
