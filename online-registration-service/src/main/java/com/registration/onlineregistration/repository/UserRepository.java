package com.registration.onlineregistration.repository;

import com.registration.onlineregistration.domain.User;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    
    User save(User user);
    
    List<User> findAll();
    
}