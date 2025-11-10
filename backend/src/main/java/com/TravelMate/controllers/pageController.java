package com.TravelMate.controllers;

import com.TravelMate.entities.UserDetails;
import com.TravelMate.repository.UserRepository;
import com.TravelMate.security.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/users")
public class pageController {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private JwtUtil jwtUtil;

  private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

  @PostMapping("/register")
  public ResponseEntity<?> registerUser(@RequestBody UserDetails user) {
    if (user.getEmail() == null || user.getPassword() == null) {
      return ResponseEntity.badRequest().body("Email and password are required");
    }
    if (userRepository.findByEmail(user.getEmail()).isPresent()) {
      return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already registered");
    }
    user.setPassword(encoder.encode(user.getPassword()));
    UserDetails saved = userRepository.save(user);
    return ResponseEntity.status(HttpStatus.CREATED).body(saved);
  }

  @PostMapping("/login")
  public ResponseEntity<?> loginUser(@RequestBody UserDetails user) {
    Optional<UserDetails> existingUser = userRepository.findByEmail(user.getEmail());
    if (existingUser.isPresent() && encoder.matches(user.getPassword(), existingUser.get().getPassword())) {
      String token = jwtUtil.generateToken(user.getEmail());
      return ResponseEntity.ok().body("{\"token\": \"" + token + "\"}");
    }
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
  }
}

// // package com.TravelMate.controllers;

// // ...existing code...
// package com.TravelMate.controllers;

// import com.TravelMate.entities.UserDetails;
// import com.TravelMate.repository.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

// import java.util.Optional;

// @RestController
// @CrossOrigin(origins = "http://localhost:5173")
// @RequestMapping("/api/users")
// public class pageController {

// @Autowired
// private UserRepository userRepository;

// private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

// @PostMapping("/register")
// public ResponseEntity<?> registerUser(@RequestBody UserDetails user) {
// if (user.getEmail() == null || user.getPassword() == null) {
// return ResponseEntity.badRequest().body("Email and password are required");
// }
// if (userRepository.findByEmail(user.getEmail()).isPresent()) {
// return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already
// registered");
// }
// user.setPassword(encoder.encode(user.getPassword()));
// UserDetails saved = userRepository.save(user);
// return ResponseEntity.status(HttpStatus.CREATED).body(saved);
// }

// @PostMapping("/login")
// public ResponseEntity<?> loginUser(@RequestBody UserDetails user) {
// Optional<UserDetails> existingUser =
// userRepository.findByEmail(user.getEmail());
// if (existingUser.isPresent() && encoder.matches(user.getPassword(),
// existingUser.get().getPassword())) {
// return ResponseEntity.ok("Login successful");
// }
// return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid
// credentials");
// }
// }
// // ...existing code...

// // import org.springframework.stereotype.Controller;
// // import org.springframework.web.bind.annotation.RequestMapping;
// // import org.springframework.web.bind.annotation.RequestMethod;
// // import org.springframework.web.bind.annotation.RequestParam;

// // @Controller
// // public class pageController {

// // // @RequestMapping("/home")
// // // public String home() {

// // // System.err.println("hello from page controller");
// // // return "home";

// // // }

// // // @RequestMapping(value="/do-register", method=RequestMethod.POST)
// // // public String precessRegister() {
// // // System.out.println("precessing register");

// // // //fetch the data
// // // // userform class
// // // //validate form
// // // // save to database
// // // // message registration succesful
// // // // redirect to login page

// // // return "redirect:/register";
// // // }

// // // // procession register

// // }
