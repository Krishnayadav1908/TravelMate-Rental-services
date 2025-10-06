package com.TravelMate.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class pageController {

      @RequestMapping("/home")
      public String home(){

        System.err.println("hello from page controller");
        return "home";

      }

}
