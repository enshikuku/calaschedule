## Database Seed Data

### Departments
```sql
INSERT INTO departments (dpt_code, dpt_name)
VALUES
    (1, 'Faculty of Social Sciences'),
    (2, 'Department of Biochemistry'),
    (3, 'Faculty of Computer Science and Informatics');
```

### Courses
```sql
INSERT INTO courses (course_id, course_code, name, lecturer_id, dpt_code) 
VALUES 
(1, 'COMP 421', 'Cloud Computing Technologies', 124, 3),
(2, 'COMP 422', 'Engineering and Software Law', 782, 3),
(3, 'COMP 423', 'Simulations and Modelling', 739, 3),
(4, 'COMP 424', 'Expert System', 349, 3),
(5, 'COMP 425', 'Network Security and Cryptography', 329, 3),
(6, 'COMP 426', 'Mobile Application Development', 498, 3),
(7, 'COMP 427', 'Neural Networks', 505, 3),
(8, 'COMP 428', 'Advanced Computer Architecture', 932, 3),
(9, 'COMP 429', 'Advanced Programming', 345, 3),
(10, 'COMP 499', 'Industrial Attachment', 630, 3),
(11, 'EGEO 423', 'Political Geography', 124, 1),
(12, 'EMPS 421', 'Economics of Education', 782, 1),
(13, 'PSYC 421', 'Guidance and Counselling', 739, 1),
(14, 'EREL 421', 'New Religious Movements', 349, 1),
(15, 'EREL 422', 'Religious Dialogue, Communication and National Integration', 329, 1),
(16, 'EREL 423', 'Traditional African Healing and Science', 498, 1),
(17, 'EGEO 421', 'Population Geography', 505, 1),
(18, 'EGEO 422', 'Agricultural Geography', 932, 1),
(19, 'BIOC 421', 'Biochemical Pharmacology', 345, 2),
(20, 'BIOC 422', 'Current Topics in Biochemistry', 630, 2),
(21, 'BIOC 423', 'Applied Biochemistry', 124, 2),
(22, 'BIOC 424', 'Integrated Metabolic Regulation', 782, 2),
(23, 'BIOC 425', 'Forensic Biochemistry', 739, 2),
(24, 'BIOC 426', 'Bioinformatics and Genomics', 349, 2),
(25, 'BIOC 427', 'Introduction to Neurochemistry', 329, 2),
(26, 'BIOC 428', 'Biochemical Toxicology', 498, 2),
(27, 'BIOC 429', 'Pharmacognosy', 505, 2),
(28, 'BIOC 441', 'Advanced Medical Biochemistry', 932, 2);

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

  
  

### Additional Users
```sql

INSERT INTO user (user_id, name, email, password, profilepicture, role, dpt_code, timestamp)

SELECT

    2000 + seq.seq AS user_id,

    names.name AS name,

    CONCAT(REPLACE(names.name, ' ', '.'), '@calaschedule.co.ke') AS email,

    '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu' AS password,

    'user.png' AS profilepicture,

    0 AS role,

    FLOOR(RAND() * 3) + 1 AS dpt_code,

    DATE_ADD('2024-08-15 00:00:00', INTERVAL FLOOR(RAND() * 15) DAY) AS timestamp

FROM

    (SELECT seq, kenyan_names.name FROM seq_1_to_150 AS seq CROSS JOIN (SELECT 'Brian Kipkoech', 'Faith Wanjiru', 'Kevin Kamau', 'Mercy Chebet', 'Peter Omondi', 'Rose Achieng', 'David Njoroge', 'Grace Mwangi', 'John Kimani', 'Lilian Nyambura', 'Stephen Kiptoo', 'Susan Akinyi', 'Michael Otieno', 'Catherine Wangari', 'Josephat Njoroge', 'Jane Auma', 'Paul Waweru', 'Ruth Nduta', 'James Maina', 'Mary Atieno', 'Andrew Ochieng', 'Margaret Wambui', 'Patrick Kiprono', 'Joyce Njeri', 'Francis Musyoka', 'Caroline Chepkorir', 'Daniel Kariuki', 'Hellen Nekesa', 'Samuel Mutua', 'Esther Muthoni', 'Beatrice Kemunto', 'Victor Kiprop', 'Grace Njeri', 'Isaac Nyakundi', 'Lucy Muthoni', 'Dennis Kiptoo', 'Juliet Achieng', 'Kennedy Kimani', 'Sylvia Wangui', 'Felix Omondi', 'Eunice Wambui', 'Collins Ochieng', 'Nancy Chepkemoi', 'Vincent Rotich', 'Janet Chebet', 'Benson Kipchirchir', 'Ann Muthoni', 'Simon Kiptoo', 'Tabitha Chepkorir', 'Peter Kamau', 'Naomi Cherono', 'Richard Kiplagat', 'Priscilla Wanjiku', 'Moses Onyango', 'Emily Moraa', 'Joshua Njoroge', 'Agnes Wangari', 'Patrick Kibet', 'Gladys Achieng', 'Philip Kiprotich', 'Pamela Akinyi', 'Eric Ouma', 'Janet Chepchumba', 'Moses Kimutai', 'Tabitha Wangari', 'Joseph Mwangi', 'Carol Njeri', 'Kelvin Omondi', 'Diana Kemunto', 'Collins Kipkoech', 'Sheila Njeri', 'Kennedy Ochieng', 'Dorcas Chepkoech', 'Robert Kipruto', 'Miriam Auma', 'Fredrick Mutua', 'Sylvia Chebet', 'Derrick Kipkorir', 'Lucy Wambui', 'Timothy Kiptoo', 'Esther Chepkemoi', 'Patrick Kiptoo', 'Rosemary Nyambura', 'Benson Kipruto', 'Irene Njeri', 'Pauline Chepkurui', 'Johnson Nyaga', 'Faith Jebet', 'Anthony Karanja', 'Beatrice Njoki', 'Humphrey Ochieng', 'Janet Chepngeno', 'Edwin Kipchoge', 'Mercy Jepchirchir', 'Solomon Kimani', 'Agnes Nyambura', 'Victor Kiprono', 'Gladys Chepkoech', 'Hillary Rotich', 'Caroline Muthoni', 'Mark Kipkemoi', 'Lydia Chebet', 'Bernard Kiptoo', 'Faith Wairimu', 'Brian Kiprop', 'Mercy Chemutai', 'Dominic Kipkorir', 'Naomi Wangari', 'Timothy Kipchirchir', 'Brenda Chepkemoi', 'Andrew Kimutai', 'Dorcas Cheptoo', 'Collins Cheruiyot', 'Jane Chepkoech', 'Kennedy Omondi', 'Lilian Chebet', 'Peter Koech', 'Miriam Wanjiru', 'Francis Kibet', 'Sylvia Chepkoech', 'Elijah Kipruto', 'Rose Wangui', 'Kevin Kiplagat', 'Susan Chepkoech', 'Moses Kiprotich', 'Grace Chepkorir', 'Benson Kirui', 'Judith Chepngeno', 'James Kipkemoi', 'Beatrice Jepchirchir', 'Samuel Kipchumba', 'Diana Wangari', 'Bernard Kiptoo', 'Florence Chebet', 'Vincent Kipchirchir', 'Janet Chepkorir', 'Isaac Kipkoech', 'Agnes Chepkoech', 'Josephat Kiprono', 'Lucy Jepchumba', 'Daniel Kipchirchir', 'Faith Chepkorir', 'Robert Kipkirui', 'Mercy Chepkoech', 'Simon Kipkoech', 'Gladys Jepchirchir', 'Joshua Kipkorir', 'Priscilla Chebet', 'Moses Kiptoo', 'Caroline Chepkoech') AS kenyan_names(name)) AS names;

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