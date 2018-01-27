/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.myDreamApp.CRUD;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.hibernate.validator.constraints.NotEmpty;

/**
 *
 * @author Cholizs aLghozali
 */
@Entity
@Table(name = "mobils")
public class Mobil {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @NotNull
    @NotEmpty
    @Size(min = 3, max = 100)
    @Column(name = "merk_mobil", length = 255, unique = true)
    private String merkMobil;
    @NotNull
    @NotEmpty
    @Size(min = 3, max = 100)
    @Column(name = "nama_mobil", length = 255, unique = true)
    private String namaMobil;
    @NotNull
    @NotEmpty
    @Size(min = 3, max = 100)
    @Column(name = "jenis_mobil", length = 255, unique = true)
    private String jenisMobil;
    @NotNull
    @NotEmpty
    @Size(min = 3, max = 100)
    @Column(name = "plat_mobil", length = 255, unique = true)
    private String platMobil;
    //getters and setters
    
    public Mobil() {
        
    }

    public Mobil(String merkMobil, String namaMobil, String jenisMobil, String platMobil) {
        this.merkMobil = merkMobil;
        this.namaMobil = namaMobil;
        this.jenisMobil = jenisMobil;
        this.platMobil = platMobil;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMerkMobil() {
        return merkMobil;
    }

    public void setMerkMobil(String merkMobil) {
        this.merkMobil = merkMobil;
    }

    public String getNamaMobil() {
        return namaMobil;
    }

    public void setNamaMobil(String namaMobil) {
        this.namaMobil = namaMobil;
    }

    public String getJenisMobil() {
        return jenisMobil;
    }

    public void setJenisMobil(String jenisMobil) {
        this.jenisMobil = jenisMobil;
    }

    public String getPlatMobil() {
        return platMobil;
    }

    public void setPlatMobil(String platMobil) {
        this.platMobil = platMobil;
    }

    
    
}
