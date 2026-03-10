package com.example.lab08_sba.controller;

import com.example.lab08_sba.service.IStudentService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HomeController {

    @Autowired
    private IStudentService studentService;

    @GetMapping("/home")
    public String home(Model model, HttpSession session){

        if(session.getAttribute("user")==null){
            return "redirect:/login";
        }

        var list = studentService.findAll();

        System.out.println("Students size: " + list.size());
        System.out.println(list);

        model.addAttribute("students", list);
        // keep a blank student for the add form
        model.addAttribute("newStudent", new com.example.lab08_sba.pojo.Student());

        return "home";
    }

    /**
     * Accepts form submissions from the home page to create a new student.  After
     * saving we redirect back to /home so the list will be refreshed.
     */
    @PostMapping("/students")
    public String addStudent(com.example.lab08_sba.pojo.Student student, HttpSession session) {
        if(session.getAttribute("user")==null){
            return "redirect:/login";
        }
        studentService.save(student);
        return "redirect:/home";
    }

    /**
     * Simple JSON endpoint you can hit (e.g. /api/students) to verify that the
     * service layer is actually retrieving documents from MongoDB.  Useful for
     * debugging the database connection independent of the JSP view.
     */
    @GetMapping("/api/students")
    @org.springframework.web.bind.annotation.ResponseBody
    public java.util.List<com.example.lab08_sba.pojo.Student> allStudents() {
        var list = studentService.findAll();
        System.out.println("[debug] /api/students returned " + list.size() + " items");
        return list;
    }
}
