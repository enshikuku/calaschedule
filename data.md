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
INSERT INTO user (user_id, name, email, password, profilepicture, role, dpt_code, timestamp)
VALUES
(1001, 'Njeri Wanjiku', 'njeriwanjiku@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-08-17 10:00:02'),
(1002, 'Otieno Kevin', 'otienokevin@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-08-18 10:00:03'),
(1003, 'Achieng Mary', 'achiengmary@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-08-19 10:00:04'),
(1004, 'Mutiso John', 'mutisojohn@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-08-20 10:00:05'),
(1005, 'Wambui Grace', 'wambuigrace@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-08-21 10:00:06'),
(1006, 'Ouma Brian', 'oumabrian@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-08-22 10:00:07'),
(1007, 'Wairimu Ann', 'wairimuann@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-08-23 10:00:08'),
(1008, 'Kamau James', 'kamaujames@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-08-24 10:00:09'),
(1009, 'Mwangi Sarah', 'mwangisarah@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-08-25 10:00:10'),
(1010, 'Omollo Jane', 'omollojane@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-08-26 10:00:11'),
(1011, 'Kariuki Peter', 'kariukipeter@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-08-27 10:00:12'),
(1012, 'Wanjiru Mercy', 'wanjirumercy@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-08-28 10:00:13'),
(1013, 'Kiprono Robert', 'kipronorobert@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-08-29 10:00:14'),
(1014, 'Ndungu Michael', 'ndungumichael@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-08-30 10:00:15'),
(1015, 'Nderitu Paul', 'nderitupaul@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-08-31 10:00:16'),
(1016, 'Wakaba Alice', 'wakabaalice@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-01 10:00:17'),
(1017, 'Omondi George', 'omondigeorge@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-02 10:00:18'),
(1018, 'Chege Susan', 'chegesusan@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-03 10:00:19'),
(1019, 'Nyongesa Daniel', 'nyongesadaniel@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-04 10:00:20'),
(1020, 'Kosgey Irene', 'kosgeyirene@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-05 10:00:21'),
(1021, 'Mwende Janet', 'mwendejanet@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-06 10:00:22'),
(1022, 'Wekesa Francis', 'wekesafrancis@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-07 10:00:23'),
(1023, 'Wamalwa Henry', 'wamalwahenry@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-08 10:00:24'),
(1024, 'Makori Philip', 'makoriphilip@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-09 10:00:25'),
(1025, 'Kamotho Brian', 'kamothobrian@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-10 10:00:26'),
(1026, 'Kipkirui Alice', 'kipkiruialice@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-11 10:00:27'),
(1027, 'Ndunge Faith', 'ndungefaith@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-12 10:00:28'),
(1028, 'Macharia Esther', 'machariaesther@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-13 10:00:29'),
(1029, 'Mburu Samuel', 'mburusamuel@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-14 10:00:30'),
(1030, 'Muiruri Diana', 'muiruridiana@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-15 10:00:31'),
(1031, 'Osewe Timothy', 'osewetimothy@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-16 10:00:32'),
(1032, 'Ngatia Beatrice', 'ngatiabeatrice@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-17 10:00:33'),
(1033, 'Sifuna Thomas', 'sifunathomas@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-18 10:00:34'),
(1034, 'Nduta Mary', 'ndutamary@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-19 10:00:35'),
(1035, 'Ojiambo Alice', 'ojiamboalice@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-20 10:00:36'),
(1036, 'Waweru Peter', 'wawerupeter@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-21 10:00:37'),
(1037, 'Kilonzo Sharon', 'kilonzosharon@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-22 10:00:38'),
(1038, 'Wainaina Francis', 'wainainafrancis@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-23 10:00:39'),
(1039, 'Njiru Jennifer', 'njirujennifer@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-24 10:00:40'),
(1040, 'Sang Kiprotich', 'sangkiprotich@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-25 10:00:41'),
(1041, 'Muli Elizabeth', 'mulielizabeth@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-26 10:00:42'),
(1042, 'Mutua Brian', 'mutuabrian@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-27 10:00:43'),
(1043, 'Mwangi John', 'mwangijohn@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-28 10:00:44'),
(1044, 'Odhiambo Victor', 'odhiambovictor@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-29 10:00:45'),
(1045, 'Nduati Sarah', 'nduatisarah@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-09-30 10:00:46'),
(1046, 'Odera Benjamin', 'oderabenjamin@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-01 10:00:47'),
(1047, 'Nyagah Alice', 'nyagahalice@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-02 10:00:48'),
(1048, 'Mutisya Paul', 'mutisyapaul@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-03 10:00:49'),
(1049, 'Mbuthia Anne', 'mbuthiaanne@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-04 10:00:50'),
(1050, 'Ochieng Edward', 'ochiengedward@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-05 10:00:51'),
(1051, 'Wamuyu Charles', 'wamuyucharles@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-06 10:00:52'),
(1052, 'Munyoki Dennis', 'munyokidennis@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-07 10:00:53'),
(1053, 'Muthee Jane', 'mutheejane@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-08 10:00:54'),
(1054, 'Maina Stephen', 'mainastephen@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-09 10:00:55'),
(1055, 'Kariuki Irene', 'kariukirene@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-10 10:00:56'),
(1056, 'Wafula Charles', 'wafulacharles@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-11 10:00:57'),
(1057, 'Mwaniki Rebecca', 'mwanikirebecca@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-12 10:00:58'),
(1058, 'Munyao Patrick', 'munyaopatrick@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-13 10:00:59'),
(1059, 'Makau Grace', 'makaugrace@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-14 10:01:00'),
(1060, 'Mutua Janet', 'mutuajanet@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-15 10:01:01'),
(1061, 'Mwangangi John', 'mwangangijohn@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-16 10:01:02'),
(1062, 'Nyambura Mary', 'nyamburamary@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-17 10:01:03'),
(1063, 'Muriuki Paul', 'muriukipaul@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-18 10:01:04'),
(1064, 'Njenga Simon', 'njengasimon@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-19 10:01:05'),
(1065, 'Muthoni Alice', 'muthonialice@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-20 10:01:06'),
(1066, 'Kibuchi Frank', 'kibuchifrank@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-21 10:01:07'),
(1067, 'Kagwe Sharon', 'kagwesharon@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-22 10:01:08'),
(1068, 'Mbugua David', 'mbuguadavid@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-23 10:01:09'),
(1069, 'Muriithi Ann', 'muriithiann@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-24 10:01:10'),
(1070, 'Kinyanjui Timothy', 'kinyanjuitimothy@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-25 10:01:11'),
(1071, 'Mwikali Judy', 'mwikalijudy@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-26 10:01:12'),
(1072, 'Nabwire Alice', 'nabwirealice@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-27 10:01:13'),
(1073, 'Ndirangu Peter', 'ndirangupeter@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-28 10:01:14'),
(1074, 'Mwangi Jane', 'mwangijane@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-29 10:01:15'),
(1075, 'Muriuki Anthony', 'muriukianthony@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-30 10:01:16'),
(1076, 'Ochieng Dennis', 'ochiengdennis@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-10-31 10:01:17'),
(1077, 'Waithera Lydia', 'waitheralydia@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-01 10:01:18'),
(1078, 'Njoroge Patrick', 'njorogepatrick@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-02 10:01:19'),
(1079, 'Chepkemoi Ann', 'chepkemoiann@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-03 10:01:20'),
(1080, 'Otieno Janet', 'otienojanet@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-04 10:01:21'),
(1081, 'Mumbi David', 'mumbidavid@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-05 10:01:22'),
(1082, 'Mutua Alice', 'mutuaalice@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-06 10:01:23'),
(1083, 'Muthama Brian', 'muthamabrian@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-07 10:01:24'),
(1084, 'Kariuki Simon', 'kariukisimon@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-08 10:01:25'),
(1085, 'Ndegwa Samuel', 'ndegwasamuel@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-09 10:01:26'),
(1086, 'Owino Mary', 'owinomary@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-10 10:01:27'),
(1087, 'Gatwiri Irene', 'gatwiriirene@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-11 10:01:28'),
(1088, 'Wairimu George', 'wairimugeorge@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-12 10:01:29'),
(1089, 'Mwiti Pauline', 'mwitipauline@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-13 10:01:30'),
(1090, 'Wambua Kevin', 'wambuakevin@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-14 10:01:31'),
(1091, 'Mwenda Mercy', 'mwendamercy@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-15 10:01:32'),
(1092, 'Mbugua Francis', 'mbuguafrancis@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-16 10:01:33'),
(1093, 'Nyagah Rose', 'nyagahrose@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-17 10:01:34'),
(1094, 'Kiptoo David', 'kiptoodavid@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-18 10:01:35'),
(1095, 'Kilonzo Ann', 'kilonzoann@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-19 10:01:36'),
(1096, 'Mwongela Steve', 'mwongelasteve@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-20 10:01:37'),
(1097, 'Muthiani Jane', 'muthianijane@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-21 10:01:38'),
(1098, 'Njoroge John', 'njorogejohn@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-22 10:01:39'),
(1099, 'Nyaguthii Ann', 'nyaguthiiann@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-23 10:01:40'),
(1100, 'Mutua Simon', 'mutuasimon@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-24 10:01:41'),
(1101, 'Mwamburi David', 'mwamburidavid@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-25 10:01:42'),
(1102, 'Kamau Alice', 'kamaualice@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-26 10:01:43'),
(1103, 'Mbogori Mary', 'mbogorimary@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-27 10:01:44'),
(1104, 'Mutie Joshua', 'mutiejoshua@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-28 10:01:45'),
(1105, 'Ndambuki Michael', 'ndambukimichael@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-29 10:01:46'),
(1106, 'Njenga Peter', 'njengapeter@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-11-30 10:01:47'),
(1107, 'Wangari Susan', 'wangarisusan@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-12-01 10:01:48'),
(1108, 'Nyamweya Victor', 'nyamweyavictor@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-12-02 10:01:49'),
(1109, 'Muthoni Beatrice', 'muthonibeatrice@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-12-03 10:01:50'),
(1110, 'Kihara James', 'kiharajames@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-12-04 10:01:51'),
(1111, 'Ndegwa George', 'ndegwageorge@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-12-05 10:01:52'),
(1112, 'Mwema Ann', 'mwemaann@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-12-06 10:01:53'),
(1113, 'Mutisya Alice', 'mutisyaalice@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-12-07 10:01:54'),
(1114, 'Ndungu Grace', 'ndungugrace@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-12-08 10:01:55'),
(1115, 'Mwangi Jane', 'mwangijane@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-12-09 10:01:56'),
(1116, 'Ngetich David', 'ngetichdavid@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-12-10 10:01:57'),
(1117, 'Kimani Rose', 'kimanirose@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-12-11 10:01:58'),
(1118, 'Kiplagat Janet', 'kiplagatjanet@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-12-12 10:01:59'),
(1119, 'Mutua Joseph', 'mutuajoseph@calaschedule.co.ke', '', 'user.png', 0, FLOOR(1 + (RAND() * 3)), '2024-12-13 10:02:00');
```