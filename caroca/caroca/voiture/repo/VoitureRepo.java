package com.caroca.caroca.voiture.repo;

import com.caroca.caroca.voiture.model.VoitureInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VoitureRepo extends JpaRepository<VoitureInfo, Long> {
    void deleteById(Long id);
    Optional<VoitureInfo> findVoitureById(Long id);
}
