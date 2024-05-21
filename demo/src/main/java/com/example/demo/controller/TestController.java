package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

  @GetMapping("/user_list")
  public Map<String, String> getMethodName() {
    Map<String, String> response = new HashMap<>();
    response.put("Aung Myo Myat", "09973940196");
    response.put("Min Thant Mg", "09973940196");
    response.put("Myat Kaung Khant", "09973940196");
    return response;
  }
}
