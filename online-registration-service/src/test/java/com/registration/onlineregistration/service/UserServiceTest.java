package com.registration.onlineregistration.service;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import com.registration.onlineregistration.domain.User;
import com.registration.onlineregistration.repository.UserRepository;

import org.junit.Assert;
import org.junit.Test;

public class UserServiceTest {

    private UserRepository userRepositoryMock;

    private UserService userService;

    private final String TEST_FIRST_NAME = "John";
    private final String TEST_MIDDLE_NAME = "James";
    private final String TEST_LAST_NAME = "Doe";
    private final String VALID_TEST_ID_NUMBER = "9001011234080";
    private final String INVALID_TEST_ID_NUMBER = "900101123408";
    private final String POST_2000_ID_NUMBER = "0001011234080";




    @Test
    public void itShouldSaveAUserIfAllRequiredFieldsAreSet() {
        when(userRepositoryMock.save(any(User.class))).thenReturn(validMockuser());
        User user = new User(TEST_FIRST_NAME, TEST_MIDDLE_NAME, TEST_LAST_NAME, VALID_TEST_ID_NUMBER);
        boolean response  = this.userService.validateAndRegister(user);
        Assert.assertEquals(response, true);
    }

    @Test
    public void itShouldSaveAUserIfAllRequiredFieldsAreSetEvenWithoutAMIddleName() {
        when(userRepositoryMock.save(any(User.class))).thenReturn(validMockuser());
        User user = new User(TEST_FIRST_NAME, null, TEST_LAST_NAME, VALID_TEST_ID_NUMBER);
        boolean response  = this.userService.validateAndRegister(user);
        Assert.assertEquals(response, true);
    }

    @Test
    public void itShoulReturnFalseForAShortIDNumber() {
        User user = new User(TEST_FIRST_NAME, TEST_MIDDLE_NAME, TEST_LAST_NAME, INVALID_TEST_ID_NUMBER);
        boolean response  = this.userService.validateAndRegister(user);
        Assert.assertEquals(response, false);
    }

    @Test
    public void itShoulSaveSuccessfulyForAPost200IDNumber() {
        when(userRepositoryMock.save(any(User.class))).thenReturn(validMockuser());
        User user = new User(TEST_FIRST_NAME, TEST_MIDDLE_NAME, TEST_LAST_NAME, POST_2000_ID_NUMBER);
        boolean response  = this.userService.validateAndRegister(user);
        Assert.assertEquals(response, true);
    }

    public UserServiceTest() {
        this.userRepositoryMock = mock(UserRepository.class);
        this.userService = new UserService(this.userRepositoryMock);
    }

    private User validMockuser() {
        User user = new User(TEST_FIRST_NAME, TEST_MIDDLE_NAME, TEST_LAST_NAME, VALID_TEST_ID_NUMBER);
        user.setId(1L);
        return user;
    }

}