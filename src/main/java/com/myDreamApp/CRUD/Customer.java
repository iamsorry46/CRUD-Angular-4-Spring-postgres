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
 * @author sorry
 */
@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @NotNull
    @NotEmpty
    @Size(min = 3, max = 100)
    @Column(name = "nama_customer", length = 255, unique = true)
    private String namaCustomer;
    @NotNull
    @NotEmpty
    @Size(min = 3, max = 100)
    @Column(name = "alamat_customer", length = 255, unique = true)
    private String alamatCustomer;
    @NotNull
    @NotEmpty
    @Size(min = 3, max = 100)
    @Column(name = "kelamin_customer", length = 255, unique = true)
    private String kelaminCustomer;
    @NotEmpty
    @Size(min = 3, max = 100)
    @Column(name = "telp_customer", length = 255, unique = true)
    private String telpCustomer;
    //getters and setters

    public Customer() {

    }

    public Customer(String namaCustomer, String alamatCustomer, String kelaminCustomer, String telpCustomer) {
        this.namaCustomer = namaCustomer;
        this.alamatCustomer = alamatCustomer;
        this.kelaminCustomer = kelaminCustomer;
        this.telpCustomer = telpCustomer;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNamaCustomer() {
        return namaCustomer;
    }

    public void setNamaCustomer(String namaCustomer) {
        this.namaCustomer = namaCustomer;
    }

    public String getAlamatCustomer() {
        return alamatCustomer;
    }

    public void setAlamatCustomer(String alamatCustomer) {
        this.alamatCustomer = alamatCustomer;
    }

    public String getKelaminCustomer() {
        return kelaminCustomer;
    }

    public void setKelaminCustomer(String kelaminCustomer) {
        this.kelaminCustomer = kelaminCustomer;
    }

    public String getTelpCustomer() {
        return telpCustomer;
    }

    public void setTelpCustomer(String telpCustomer) {
        this.telpCustomer = telpCustomer;
    }
    


}
