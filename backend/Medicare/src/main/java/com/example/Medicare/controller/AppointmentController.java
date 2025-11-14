package com.example.Medicare.controller;

import com.example.Medicare.Appointment;
import com.example.Medicare.service.AppointmentService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/appointments")
public class AppointmentController {

    private final AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return service.getAll();
    }

    @PostMapping
    public Appointment addAppointment(@RequestBody Appointment appointment) {
        System.out.println("Received Appointment:");
        System.out.println("Name: " + appointment.getName());
        System.out.println("Email: " + appointment.getEmail());
        System.out.println("Phone: " + appointment.getPhone());
        System.out.println("Department: " + appointment.getDepartment());
        System.out.println("Doctor: " + appointment.getDoctor());
        System.out.println("Date: " + appointment.getDate());

        return service.save(appointment);
    }
}
