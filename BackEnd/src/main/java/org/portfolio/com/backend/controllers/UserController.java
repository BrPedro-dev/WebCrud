package org.portfolio.com.backend.controllers;

import org.modelmapper.ModelMapper;
import org.portfolio.com.backend.dto.UserDto;
import org.portfolio.com.backend.model.User;
import org.portfolio.com.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    private UserRepository userRepository;
    private ModelMapper modelMapper;

    @Autowired
    public void setModelMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private UserDto convert(User user) {
        return modelMapper.map(user, UserDto.class);
    }

    @GetMapping(value = "listAll")
    public ResponseEntity<List<UserDto>> listUsers(){

       List <UserDto> dtoList =  userRepository.findAll()
                .stream()
                .map(this::convert)
                .collect(Collectors.toList());

       return new ResponseEntity<>(dtoList, HttpStatus.OK);
    }

}
