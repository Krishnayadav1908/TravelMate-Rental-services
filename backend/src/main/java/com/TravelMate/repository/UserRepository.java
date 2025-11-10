package com.TravelMate.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.TravelMate.entities.UserDetails;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserDetails, Long> {
  Optional<UserDetails> findByEmail(String email);
}
