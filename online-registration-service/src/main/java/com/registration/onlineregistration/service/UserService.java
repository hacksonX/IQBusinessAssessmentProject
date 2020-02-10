package com.registration.onlineregistration.service;

import java.util.List;

import com.registration.onlineregistration.domain.User;
import com.registration.onlineregistration.repository.UserRepository;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserService {

    private final UserRepository userRepository;
    private final int SA_ID_NUMBER_LENGTH = 13;

    @Autowired
    public UserService(final UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean validateAndRegister(final User userDetail) {
        if (StringUtils.isEmpty(userDetail.getFirstName())) {
            return false;
        }
        if (StringUtils.isEmpty(userDetail.getLastName())) {
            return false;
        }
        if (!validateIDNumber(userDetail.getIdNumber())) {
            return false;
        }
        User saveUserResponse =  userRepository.save(userDetail);
        return saveUserResponse.getId() != null;
    }

    public List<User> retrieveAllRegisteredUsers() {
        return userRepository.findAll();
    }

    private boolean validateIDNumber(final String idNumber) {
        try {
            Long.valueOf(idNumber);
        }
        catch (NumberFormatException exception) {
            return false;
        }
        return idNumber.length() == SA_ID_NUMBER_LENGTH;
    }


}