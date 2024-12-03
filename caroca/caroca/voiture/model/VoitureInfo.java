package com.caroca.caroca.voiture.model;
import jakarta.persistence.*;
import lombok.ToString;


import java.io.Serializable;
import java.time.Year;

@Entity
@ToString
public class VoitureInfo implements Serializable {
    @Id
    @GeneratedValue( strategy = GenerationType.AUTO)
    @Column(nullable = false , updatable = false)
    private long Id;
    private String marque;
    private String modele;
    private int annee ;
    private double prix;
    private String couleur;
    private long kilometrage;
    private String typeCarbu;
    private String trans;
    private String description;
    private String imgExt;
    private String imgInt;

    public VoitureInfo() {}
    public VoitureInfo(String marque, String modele, int annee, double prix, String couleur,
                       long kilometrage, String typeCarbu, String trans, String description,
                       String imgExt, String imgInt) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.prix = prix;
        this.couleur = couleur;
        this.kilometrage = kilometrage;
        this.typeCarbu = typeCarbu;
        this.trans = trans;
        this.description = description;
        this.imgExt = imgExt;
        this.imgInt = imgInt;
    }

    public long getId() {
        return Id;
    }

    public String getMarque() {
        return marque;
    }

    public String getModele() {
        return modele;
    }

    public int getAnnee() {
        return annee;
    }

    public double getPrix() {
        return prix;
    }

    public String getCouleur() {
        return couleur;
    }

    public long getKilometrage() {
        return kilometrage;
    }

    public String getTypeCarbu() {
        return typeCarbu;
    }

    public String getTrans() {
        return trans;
    }

    public String getDescription() {
        return description;
    }

    public String getImgExt() {
        return imgExt;
    }

    public String getImgInt() {
        return imgInt;
    }

    public void setId(long id) {
        Id = id;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public void setModele(String modele) {
        this.modele = modele;
    }

    public void setAnnee(int annee) {
        this.annee = annee;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }

    public void setCouleur(String couleur) {
        this.couleur = couleur;
    }

    public void setKilometrage(long kilometrage) {
        this.kilometrage = kilometrage;
    }

    public void setTypeCarbu(String typeCarbu) {
        this.typeCarbu = typeCarbu;
    }

    public void setTrans(String trans) {
        this.trans = trans;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImgExt(String imgExt) {
        this.imgExt = imgExt;
    }

    public void setImgInt(String imgInt) {
        this.imgInt = imgInt;
    }


}
