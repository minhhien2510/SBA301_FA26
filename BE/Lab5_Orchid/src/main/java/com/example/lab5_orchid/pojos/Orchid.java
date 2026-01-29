package com.example.lab5_orchid.pojos;

import jakarta.persistence.*;


@Entity
@Table(name = "orchids")
public class Orchid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orchidId;

    private String orchidName;

    private boolean isNatural;

    private String orchidDescription;

    private boolean isAttractive;

    private String orchidURL;

    // ⭐ MANY ORCHIDS → ONE CATEGORY
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    // getters & setters

    public Long getOrchidId() {
        return orchidId;
    }

    public void setOrchidId(Long orchidId) {
        this.orchidId = orchidId;
    }

    public String getOrchidName() {
        return orchidName;
    }

    public void setOrchidName(String orchidName) {
        this.orchidName = orchidName;
    }

    public boolean isNatural() {
        return isNatural;
    }

    public void setNatural(boolean natural) {
        isNatural = natural;
    }

    public String getOrchidDescription() {
        return orchidDescription;
    }

    public void setOrchidDescription(String orchidDescription) {
        this.orchidDescription = orchidDescription;
    }

    public boolean isAttractive() {
        return isAttractive;
    }

    public void setAttractive(boolean attractive) {
        isAttractive = attractive;
    }

    public String getOrchidURL() {
        return orchidURL;
    }

    public void setOrchidURL(String orchidURL) {
        this.orchidURL = orchidURL;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}

