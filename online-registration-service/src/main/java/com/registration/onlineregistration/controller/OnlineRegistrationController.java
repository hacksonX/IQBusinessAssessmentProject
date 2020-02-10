package com.registration.onlineregistration.controller;

import com.registration.onlineregistration.domain.User;
import com.registration.onlineregistration.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/api/user")
public class OnlineRegistrationController {

    private UserService userService;

    @Autowired
    public OnlineRegistrationController(UserService userService) {
        this.userService = userService;
    }
    
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/register")
    public boolean registerUser(@RequestBody User userDetail) {
        try{
            TimeUnit.SECONDS.sleep(5);
        }
        catch(Exception ex) {}
        return userService.validateAndRegister(userDetail);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/retrieve")
    public List<User> getAllRegisteredUsers() {
        return userService.retrieveAllRegisteredUsers();
    }


}