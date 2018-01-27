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
@Table(name = "sopirs")
public class Sopir {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @NotNull
    @NotEmpty
    @Size(min = 3, max = 100)
    @Column(name = "nama_sopir", length = 255, unique = true)
    private String namaSopir;
    @NotNull
    @NotEmpty
    @Size(min = 3, max = 100)
    @Column(name = "alamat_sopir", length = 255, unique = true)
    private String alamatSopir;
    @NotNull
    @NotEmpty
    @Size(min = 3, max = 100)
    @Column(name = "kelamin_sopir", length = 255, unique = true)
    private String kelaminSopir;
    @NotNull
    @NotEmpty
    @Size(min = 3, max = 100)
    @Column(name = "lahir_sopir", length = 255, unique = true)
    private String lahirSopir;
    @NotEmpty
    @Size(min = 3, max = 100)
    @Column(name = "telp_sopir", length = 255, unique = true)
    private String telpSopir;
    //getters and setters
    
    public Sopir() {
        
    }

    public Sopir(String namaSopir, String alamatSopir, String kelaminSopir, String lahirSopir, String telpSopir) {
        this.namaSopir = namaSopir;
        this.alamatSopir = alamatSopir;
        this.kelaminSopir = kelaminSopir;
        this.lahirSopir = lahirSopir;
        this.telpSopir = telpSopir;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNamaSopir() {
        return namaSopir;
    }

    public void setNamaSopir(String namaSopir) {
        this.namaSopir = namaSopir;
    }

    public String getAlamatSopir() {
        return alamatSopir;
    }

    public void setAlamatSopir(String alamatSopir) {
        this.alamatSopir = alamatSopir;
    }

    public String getKelaminSopir() {
        return kelaminSopir;
    }

    public void setKelaminSopir(String kelaminSopir) {
        this.kelaminSopir = kelaminSopir;
    }

    public String getLahirSopir() {
        return lahirSopir;
    }

    public void setLahirSopir(String lahirSopir) {
        this.lahirSopir = lahirSopir;
    }

    public String getTelpSopir() {
        return telpSopir;
    }

    public void setTelpSopir(String telpSopir) {
        this.telpSopir = telpSopir;
    }
    
    

    
}
