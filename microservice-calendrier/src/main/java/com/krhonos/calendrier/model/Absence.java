package com.krhonos.calendrier.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name="absence")
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name="ABS_TYPE", discriminatorType = DiscriminatorType.STRING, length = 3)
public class Absence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="absence_id")
    private long id;

    @Column(name="absence_debut", nullable = false)
    private LocalDateTime dateDebut;

    @Column(name="absence_fin", nullable = false)
    private LocalDateTime dateFin;

    @Lob
    @Column(name="absence_desciption", nullable = false)
    private String description;

    @Column(name="absence_valeur", precision = 4, scale = 1, nullable = false)
    private float valeur;

    public Absence() {
    }

    public Absence(LocalDateTime dateDebut, LocalDateTime dateFin, String description, float valeur) {
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.description = description;
        this.valeur = valeur;
    }

    public Absence(long id, LocalDateTime dateDebut, LocalDateTime dateFin, String description, float valeur) {
        this.id = id;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.description = description;
        this.valeur = valeur;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDateTime getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(LocalDateTime dateDebut) {
        this.dateDebut = dateDebut;
    }

    public LocalDateTime getDateFin() {
        return dateFin;
    }

    public void setDateFin(LocalDateTime dateFin) {
        this.dateFin = dateFin;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getValeur() {
        return valeur;
    }

    public void setValeur(float valeur) {
        this.valeur = valeur;
    }

    @Override
    public String toString() {
        return "Absence{" +
                "id=" + id +
                ", dateDebut=" + dateDebut +
                ", dateFin=" + dateFin +
                ", description='" + description + '\'' +
                ", valeur=" + valeur +
                '}';
    }
}
