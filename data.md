## Database Seed Data

### Courses

```sql
insert into `courses` (`course_code`, `course_id`, `lecturer_id`, `name`) values 
('COMP 421', 1, '124', 'Cloud Computing Technologies'), 
('COMP 422', 2, '782', 'Engineering and Software Law'), 
('COMP 423', 3, '739', 'Simulations and Modelling'), 
('COMP 424', 4, '349', 'Expert System'), 
('COMP 425', 5, '329', 'Network Security and Cryptography'), 
('COMP 426', 6, '498', 'Mobile Application Development'), 
('COMP 427', 7, '505', 'Neural Networks'), 
('COMP 428', 8, '932', 'Advanced Computer Architecture'), 
('COMP 429', 9, '345', 'Advanced Programming'), 
('COMP 499', 10, '630', 'Industrial Attachment');
```

### Users

```sql
INSERT INTO user (user_id, name, email, password, profilepicture, role, dpt_code, timestamp)
VALUES
(345, 'Dr. Victor Kimeli', 'victor.kimeli@calaschedule.ac.ke', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '9.png', 1, 1, '2024-08-03 10:48:04'),
(782, 'Prof. Thomas Cheruiyot', 'thomas.cheruiyot@calaschedule.ac.ke', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '2.png', 1, 2, '2024-08-05 10:48:04'),
(932, 'Prof. Samuel Lutta', 'samuel.lutta@calaschedule.ac.ke', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '8.png', 1, 1, '2024-08-08 10:48:04'),
(349, 'Prof. Phillip Raburu', 'phillip.raburu@calaschedule.ac.ke', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '4.png', 1, 2, '2024-08-10 10:48:04'),
(329, 'Prof. Paul K. Tarus', 'paul.k.tarus@calaschedule.ac.ke', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '5.png', 1, 3, '2024-08-12 10:48:04'),
(630, 'Dr. Lelei K. Kiboiy', 'lelei.k.kiboiy@calaschedule.ac.ke', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '10.png', 1, 2, '2024-08-15 10:48:04'),
(124, 'Amb. Prof. Judith Mbula Bahemuka', 'judith.mbula.bahemuka@calaschedule.ac.ke', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '1.png', 1, 3, '2024-08-18 10:48:04'),
(249, 'Shikuku Emmanuel', 'enshikuku@gmail.com', '$2b$10$rzhXI3oGfP5VJj7xZYb0i.d1nRgAhzRq.Z0mgOaMn17vrMYa57pJu', 'profile-1716875534099-516328140.webp', 0, 1, '2024-08-20 10:48:04'),
(505, 'Prof. Donald Otieno', 'donald.otieno@calaschedule.ac.ke', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '7.png', 1, 3, '2024-08-22 10:48:04'),
(498, 'Dr. Caroline Ayuma', 'caroline.ayuma@calaschedule.ac.ke', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '6.png', 1, 2, '2024-08-25 10:48:04'),
(739, 'Prof. Beatrice Were', 'beatrice.were@calaschedule.ac.ke', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '3.png', 1, 2, '2024-08-28 10:48:04');
```

### Days

```sql
insert into `days` (`name`) values 
('Sunday'), 
('Monday'), 
('Tuesday'), 
('Wednesday'), 
('Thursday'), 
('Friday'), 
('Saturday');
```

### Rooms

```sql
insert into `rooms` (`capacity`, `name`) values 
(100, 'NS1'), 
(90, 'NS2'), 
(80, 'NS3'), 
(70, 'NS4'), 
(60, 'NS5'), 
(50, 'NS6'), 
(40, 'NS7'), 
(30, 'NS8');
```

### Schedules

```sql
insert into `schedules` (`course_id`, `day_id`, `lecturer_id`, `room_id`, `start_time`) values 
(1, 2, '124', 1, '08:00:00'), 
(2, 3, '782', 2, '10:00:00'), 
(3, 4, '739', 3, '14:00:00'), 
(4, 5, '349', 4, '08:00:00'), 
(5, 6, '329', 5, '10:00:00'), 
(6, 2, '498', 6, '10:00:00'), 
(7, 3, '505', 7, '12:00:00'), 
(8, 4, '932', 8, '10:00:00'), 
(9, 5, '345', 1, '10:00:00'), 
(10, 6, '630', 2, '08:00:00');
```

### Testimonials

```sql
insert into `testimonials` (`message`, `name`, `profilepicture`, `role`) values 
('As the CEO of CALASCHEDULE, I\'m proud our platform empowers students and Lecturers, making a positive impact in education.', 'Shikuku Emmanuel', 'shikuku.jpg', 'CEO & Founder'), 
('As a Lecturer, CALASCHEDULE has simplified scheduling. I easily manage appointments and communicate changes seamlessly.', 'Ruth Mwihaki', 'ruth.jpg', 'Lecturer'), 
('CALASCHEDULE makes coordinating group study sessions easy, helping our study group stay organized and focused on goals.', 'Romans Kiplagat', 'romans.jpg', 'Student'), 
('CALASCHEDULE stands out for its user-friendly interface and robust features. It\'s a game-changer for students and Lecturers.', 'Johua Okayo', 'okayo.jpg', 'Student'), 
('As a busy Lecturer, CALASCHEDULE is a lifesaver. Managing classes and appointments is easier, freeing up time for teaching.', 'Tom Olando', 'tom.jpg', 'Lecturer');
```

### Additional Users

```sql
INSERT INTO user (`user_id`, `name`, `email`, `password`, `profilepicture`, `role`) VALUES
(1, 'Wanjiku Mwangi', 'wanjikumwangi@gmail.com', '$2b$10$1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(2, 'Otieno Oduor', 'otienooduor@yahoo.com', '$2b$10$2a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(3, 'Akinyi Achieng', 'akinyi.achieng@hotmail.com', '$2b$10$3a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(4, 'Mutiso Nzioka', 'mutisonzioka@gmail.com', '$2b$10$4a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(5, 'Chebet Kiprono', 'chebetkiprono@gmail.com', '$2b$10$5a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(6, 'Njeri Wambui', 'njeriwambui@gmail.com', '$2b$10$6a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(7, 'Kamau Gitau', 'kamaugitau@gmail.com', '$2b$10$7a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(8, 'Atieno Adhiambo', 'atienoadhiambo@yahoo.com', '$2b$10$8a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(9, 'Ochieng Odhiambo', 'odiengodhiambo@hotmail.com', '$2b$10$9a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(10, 'Wangari Muthoni', 'wangarimuthoni@gmail.com', '$2b$10$0a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(11, 'Nyambura Njeri', 'nyamburanjeri@gmail.com', '$2b$10$na2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(12, 'Muthoni Wangari', 'muthoniwangari@gmail.com', '$2b$10$ma2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(13, 'Juma Ali', 'jumaali@gmail.com', '$2b$10$ja2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(14, 'Makena Nyambura', 'makenanyambura@gmail.com', '$2b$10$ka2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(15, 'Obiero Ochieng', 'obieroochieng@gmail.com', '$2b$10$oa2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(16, 'Atieno Akinyi', 'atienoakinyi@yahoo.com', '$2b$10$pa2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(17, 'Mwangi Wanjiku', 'mwangiwanjiku@hotmail.com', '$2b$10$qa2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z', '', ''),
(18, 'Omondi Nyambura', 'omondinyambura@gmail.com', '$2b$10$a1b2c3d4e5f6g7h8i9j0k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z', '', ''),
(19, 'Ochieng Otieno', 'ochiengotieno@gmail.com', '$2b$10$b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z', '', ''),
(20, 'Wambui Njeri', 'wambuinjeri@yahoo.com', '$2b$10$c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z', '', '');
```
