package com.example.lab08_sba;

import com.example.lab08_sba.pojo.Student;
import com.example.lab08_sba.repository.IStudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Lab08SbaApplication {

    public static void main(String[] args) {
        SpringApplication.run(Lab08SbaApplication.class, args);
    }

    /**
     * Seed a few records into MongoDB on application startup so that the
     * home page has something to display without requiring manual data entry.
     */
    @Bean
    public CommandLineRunner seedDatabase(IStudentRepository repo) {
        return args -> {
            if (repo.count() == 0) {
                repo.save(new Student("alice@example.com", "pass123", "Alice", "Smith", 85.0));
                repo.save(new Student("bob@example.com", "pass456", "Bob", "Johnson", 92.5));
                repo.save(new Student("cara@example.com", "pass789", "Cara", "Lee", 78.3));
                System.out.println("*** Seeded students collection with sample data");
            } else {
                System.out.println("*** students collection already contains " + repo.count() + " records");
            }
        };
    }
}
