package com.caroca.Caroca_Mesi.VoitureResource;

import com.caroca.Caroca_Mesi.Services.VoitureService;
import com.caroca.Caroca_Mesi.Model.VoitureInfo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/voiture")
public class VoitureResource {
    private final VoitureService voitureService;

    public VoitureResource(VoitureService voitureService) {
        this.voitureService = voitureService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<VoitureInfo>> getAllVoitureInfo (){
        List<VoitureInfo> voitureInfos = voitureService.FindAllVoiture();
        return new ResponseEntity<>(voitureInfos, HttpStatus.OK);
    }

    @GetMapping("/find/{Id}")
    public ResponseEntity<VoitureInfo> getVoitureById (@PathVariable("Id") Long Id){
        VoitureInfo voitureInfos = voitureService.findVoitureById(Id);
        return new ResponseEntity<>(voitureInfos, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<VoitureInfo> addVoiture (@RequestBody VoitureInfo voitureInfo){
        VoitureInfo newVoiture = voitureService.addVoiture(voitureInfo);
        return new ResponseEntity<>(newVoiture , HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<VoitureInfo> updateVoiture(@RequestBody VoitureInfo voitureInfo){
        VoitureInfo updateVoiture = voitureService.updateVoiture(voitureInfo);
        return new ResponseEntity<>(updateVoiture, HttpStatus.OK);
    }
    @GetMapping("/delete/{id}")
    public ResponseEntity<?> deleteVoiture (@PathVariable("id") Long id){
        voitureService.deleteVoiture(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

