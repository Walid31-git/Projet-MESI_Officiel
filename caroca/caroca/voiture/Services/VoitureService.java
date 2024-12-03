package com.caroca.caroca.voiture.Services;
import com.caroca.caroca.voiture.Exception.UserNotFoundException;
import com.caroca.caroca.voiture.model.VoitureInfo;
import com.caroca.caroca.voiture.repo.VoitureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoitureService {
    private final VoitureRepo voitureRepo;
    @Autowired
    public VoitureService(VoitureRepo voitureRepo) {
        this.voitureRepo = voitureRepo;
    }
    public VoitureInfo addVoiture(VoitureInfo voitureInfo){
        return voitureRepo.save(voitureInfo);
    }
    public List<VoitureInfo> FindAllVoiture(){
        return voitureRepo.findAll();
    }
    public VoitureInfo updateVoiture(VoitureInfo voitureInfo){
        return voitureRepo.save(voitureInfo);
    }
    public VoitureInfo findVoitureById(Long id){
        return voitureRepo.findVoitureById(id).orElseThrow(()-> new UserNotFoundException("Aucune Voiture Trouver"));
    }

    public void deleteVoiture(Long id){
        voitureRepo.deleteById(id);
    }
}
