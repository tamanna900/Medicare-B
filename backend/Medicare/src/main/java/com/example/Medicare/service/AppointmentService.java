package com.example.Medicare.service;

import com.example.Medicare.Appointment;
import com.example.Medicare.repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {
    private final AppointmentRepository repo;

    public AppointmentService(AppointmentRepository repo) {
        this.repo = repo;
    }

    public List<Appointment> getAll() {
        return repo.findAll();
    }

    public Appointment save(Appointment appointment) {
        return repo.save(appointment);
    }
}

