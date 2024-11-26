package com.projetmesi.Caroca.mesi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class personneController {

    @GetMapping("/personnes")
    public String personne() {
        return "personne";
    }


}
