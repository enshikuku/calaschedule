ROOMS & CAPACITY
NS1- 100, NS2- 90, NS3- 80, NS4- 70, NS5- 60, NS6- 50, NS7- 40, NS8- 30

DAYS
Monday, Tuesday, Wednesday, Thursday, Friday


COURSES
COURSE CODE   CORSE NAME                             LECTURER
COMP 421	Cloud Computing Technologies            Prof. Thomas Cheruiyot
COMP 422	Engineering and Software Law            Dr. Hosea Kiplagat
COMP 423	Simulations and Modelling               Dr. Julius Kogo
COMP 424	Expert System                           Dr. Lelei K. Kiboiy
COMP 425	Network Security and Cryptography       Prof. Phillip Raburu
COMP 426	Mobile Application Development          Prof. Paul K. Tarus
COMP 427	Neural Networks	                        Dr. Frank Masese
COMP 428	Advanced Computer Architecture	        Prof. Beatrice Were
COMP 429	Advanced Programming	                Prof. Donald Otieno


INSERT INTO user (user_id, name, email, password, profilepicture, role) VALUES
(
    124,
    'Amb. Prof. Judith Mbula Bahemuka',
    'judith.mbula.bahemuka@calaschedule.ac.ke',
    '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu',
    '1.png',
    'lecturer'
),
(
    782,
    'Prof. Thomas Cheruiyot',
    'thomas.cheruiyot@calaschedule.ac.ke',
    '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu',
    '2.png',
    'lecturer'
),
(
    739,
    'Prof. Beatrice Were',
    'beatrice.were@calaschedule.ac.ke',
    '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu',
    '3.png',
    'lecturer'
),
(
    349,
    'Prof. Phillip Raburu',
    'phillip.raburu@calaschedule.ac.ke',
    '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu',
    '4.png',
    'lecturer'
),
(
    329,
    'Prof. Paul K. Tarus',
    'paul.k.tarus@calaschedule.ac.ke',
    '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu',
    '5.png',
    'lecturer'
),
(
    498,
    'Dr. Caroline Ayuma',
    'caroline.ayuma@calaschedule.ac.ke',
    '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu',
    '6.png',
    'lecturer'
),
(
    505,
    'Prof. Donald Otieno',
    'donald.otieno@calaschedule.ac.ke',
    '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu',
    '7.png',
    'lecturer'
),
(
    932,
    'Prof. Samuel Lutta',
    'samuel.lutta@calaschedule.ac.ke',
    '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu',
    '8.png',
    'lecturer'
),
(
    345,
    'Dr. Victor Kimeli',
    'victor.kimeli@calaschedule.ac.ke',
    '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu',
    '9.png',
    'lecturer'
),
(
    630,
    'Dr. Lelei K. Kiboiy',
    'lelei.k.kiboiy@calaschedule.ac.ke',
    '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu',
    '10.png',
    'lecturer'
);

| course_id | course_code | name                              |
| --------- | ----------- | --------------------------------- |
| 1         | COMP 421    | Cloud Computing Technologies      |
| 2         | COMP 422    | Engineering and Software Law      |
| 3         | COMP 423    | Simulations and Modelling         |
| 4         | COMP 424    | Expert System                     |
| 5         | COMP 425    | Network Security and Cryptography |
| 6         | COMP 426    | Mobile Application Development    |
| 7         | COMP 427    | Neural Networks                   |
| 8         | COMP 428    | Advanced Computer Architecture    |
| 9         | COMP 429    | Advanced Programming              |
| 10        | COMP 499    | Industrial Attachment             |

INSERT INTO enrollments (student_id, course_id) VALUES
(249, 1),
(249, 2),
(249, 3),
(249, 4),
(249, 5),
(249, 6),
(249, 7),
(249, 8),
(249, 9),
(249, 10)


insert into `courses` (`course_code`, `course_id`, `lecturer_id`, `name`) values ('COMP 421', '1', '124', 'Cloud Computing Technologies'), ('COMP 422', '2', '782', 'Engineering and Software Law'), ('COMP 423', '3', '739', 'Simulations and Modelling'), ('COMP 424', '4', '349', 'Expert System'), ('COMP 425', '5', '329', 'Network Security and Cryptography'), ('COMP 426', '6', '498', 'Mobile Application Development'), ('COMP 427', '7', '505', 'Neural Networks'), ('COMP 428', '8', '932', 'Advanced Computer Architecture'), ('COMP 429', '9', '345', 'Advanced Programming'), ('COMP 499', '10', '630', 'Industrial Attachment')

insert into `user` (`email`, `name`, `password`, `profilepicture`, `role`, `user_id`) values ('enshikuku@gmail.com', 'Shikuku Emmanuel Nabwana', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', 'user.png', 'student', '249'), ('victor.kimeli@calaschedule.ac.ke', 'Dr. Victor Kimeli', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '9.png', 'lecturer', '345'), ('samuel.lutta@calaschedule.ac.ke', 'Prof. Samuel Lutta', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '8.png', 'lecturer', '932'), ('donald.otieno@calaschedule.ac.ke', 'Prof. Donald Otieno', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '7.png', 'lecturer', '505'), ('caroline.ayuma@calaschedule.ac.ke', 'Dr. Caroline Ayuma', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '6.png', 'lecturer', '498'), ('paul.k.tarus@calaschedule.ac.ke', 'Prof. Paul K. Tarus', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '5.png', 'lecturer', '329'), ('phillip.raburu@calaschedule.ac.ke', 'Prof. Phillip Raburu', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '4.png', 'lecturer', '349'), ('beatrice.were@calaschedule.ac.ke', 'Prof. Beatrice Were', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '3.png', 'lecturer', '739'), ('thomas.cheruiyot@calaschedule.ac.ke', 'Prof. Thomas Cheruiyot', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '2.png', 'lecturer', '782'), ('lelei.k.kiboiy@calaschedule.ac.ke', 'Dr. Lelei K. Kiboiy', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '10.png', 'lecturer', '630'), ('judith.mbula.bahemuka@calaschedule.ac.ke', 'Amb. Prof. Judith Mbula Bahemuka', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '1.png', 'lecturer', '124')


INSERT INTO schedules (course_id, day_id, start_time, end_time, room_id, lecturer_id)
VALUES
    (1, 1, '08:00', 1, 124),  -- COMP 421 on Monday in room NS1 with lecturer 124
    (2, 2, '10:00', 2, 782),  -- COMP 422 on Tuesday in room NS2 with lecturer 782
    (3, 3, '14:00', 3, 739),  -- COMP 423 on Wednesday in room NS3 with lecturer 739
    (4, 4, '08:00', 4, 349),  -- COMP 424 on Thursday in room NS4 with lecturer 349
    (5, 5, '10:00', 5, 329),  -- COMP 425 on Friday in room NS5 with lecturer 329
    (6, 1, '08:00', 6, 498),  -- COMP 426 on Monday in room NS6 with lecturer 498
    (7, 2, '10:00', 7, 505),  -- COMP 427 on Tuesday in room NS7 with lecturer 505
    (8, 3, '14:00', 8, 932),  -- COMP 428 on Wednesday in room NS8 with lecturer 932
    (9, 4, '08:00', 1, 345),  -- COMP 429 on Thursday in room NS1 with lecturer 345
    (10, 5, '10:00', 2, 630); -- COMP 499 on Friday in room NS2 with lecturer 630