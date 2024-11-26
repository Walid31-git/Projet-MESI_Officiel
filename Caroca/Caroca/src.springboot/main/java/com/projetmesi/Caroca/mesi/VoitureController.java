package com.projetmesi.Caroca.mesi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class VoitureController {

    @Autowired
    private VoitureRepository voitureRepository;
    
// @GetMapping("/")
    // public String index() {
    //     return "index";
    // }

    // @GetMapping("/page-vente")
    // public String pageVente() {
    //     return "page-vente";
    // }

    @PostMapping("/submit")
    public String voitureAjout(@ModelAttribute Voiture voiture) {
        System.out.println("Voiture reçue: " + voiture);
        // voitureRepository.save(voiture);
        return "redirect:/page-vente";
    }
}
