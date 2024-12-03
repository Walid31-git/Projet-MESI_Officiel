package com.projetmesi.Caroca.mesi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class VoitureController {

    @Autowired
    private VoitureRepository voitureRepository;

    @GetMapping("/")
    public String index() {
        return "index"; // Renvoie à la page index.html
    }

    @GetMapping("/page-vente")
    public String pageVente() {
        return "page-vente"; // Renvoie à la page page-vente.html
    }

    @PostMapping("/submit")
    public String voitureAjout(@ModelAttribute Voiture voiture) {
        System.out.println("Voiture reçue: " + voiture);
        voitureRepository.save(voiture); // Enregistre la voiture dans la base de données
        return "redirect:/page-vente";
    }
}
