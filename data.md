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

insert into `user` (`email`, `name`, `password`, `profilepicture`, `role`, `user_id`) values ('enshikuku@gmail.com', 'Shikuku Emmanuel Nabwana', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '249'), ('victor.kimeli@calaschedule.ac.ke', 'Dr. Victor Kimeli', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '9.png', 'lecturer', '345'), ('samuel.lutta@calaschedule.ac.ke', 'Prof. Samuel Lutta', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '8.png', 'lecturer', '932'), ('donald.otieno@calaschedule.ac.ke', 'Prof. Donald Otieno', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '7.png', 'lecturer', '505'), ('caroline.ayuma@calaschedule.ac.ke', 'Dr. Caroline Ayuma', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '6.png', 'lecturer', '498'), ('paul.k.tarus@calaschedule.ac.ke', 'Prof. Paul K. Tarus', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '5.png', 'lecturer', '329'), ('phillip.raburu@calaschedule.ac.ke', 'Prof. Phillip Raburu', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '4.png', 'lecturer', '349'), ('beatrice.were@calaschedule.ac.ke', 'Prof. Beatrice Were', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '3.png', 'lecturer', '739'), ('thomas.cheruiyot@calaschedule.ac.ke', 'Prof. Thomas Cheruiyot', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '2.png', 'lecturer', '782'), ('lelei.k.kiboiy@calaschedule.ac.ke', 'Dr. Lelei K. Kiboiy', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '10.png', 'lecturer', '630'), ('judith.mbula.bahemuka@calaschedule.ac.ke', 'Amb. Prof. Judith Mbula Bahemuka', '$2b$10$wtZ8IVP3b1hV3uLHUi2tXe2MEQttmfRKzD7hlTWLYlm4jtZoMMVJu', '1.png', 'lecturer', '124')


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



    INSERT INTO user (user_id, name, email, password, profilepicture, role) VALUES
(1, 'Wanjiku Mwangi', 'wanjikumwangi@gmail.com', '$2b$10$1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(2, 'Otieno Oduor', 'otienooduor@yahoo.com', '$2b$10$2a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(3, 'Akinyi Achieng', 'akinyi.achieng@hotmail.com', '$2b$10$3a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(4, 'Mutiso Nzioka', 'mutisonzioka@gmail.com', '$2b$10$4a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(5, 'Chebet Kiprono', 'chebetkiprono@gmail.com', '$2b$10$5a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(6, 'Njeri Wambui', 'njeriwambui@gmail.com', '$2b$10$6a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(7, 'Kamau Gitau', 'kamaugitau@gmail.com', '$2b$10$7a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(8, 'Atieno Adhiambo', 'atienoadhiambo@yahoo.com', '$2b$10$8a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(9, 'Ochieng Odhiambo', 'odiengodhiambo@hotmail.com', '$2b$10$9a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(10, 'Wangari Muthoni', 'wangarimuthoni@gmail.com', '$2b$10$0a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(11, 'Nyambura Njeri', 'nyamburanjeri@gmail.com', '$2b$10$na2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(12, 'Muthoni Wangari', 'muthoniwangari@gmail.com', '$2b$10$ma2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(13, 'Juma Ali', 'jumaali@gmail.com', '$2b$10$ja2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(14, 'Makena Nyambura', 'makenanyambura@gmail.com', '$2b$10$ka2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(15, 'Obiero Ochieng', 'obieroochieng@gmail.com', '$2b$10$oa2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(16, 'Atieno Akinyi', 'atienoakinyi@yahoo.com', '$2b$10$pa2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(17, 'Mwangi Wanjiku', 'mwangiwanjiku@hotmail.com', '$2b$10$qa2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(18, 'Omondi Nyambura', 'omondinyambura@gmail.com', '$2b$10$a1b2c3d4e5f6g7h8i9j0k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z'),
(19, 'Ochieng Otieno', 'ochiengotieno@gmail.com', '$2b$10$b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z'),
(20, 'Wambui Njeri', 'wambuinjeri@yahoo.com', '$2b$10$c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z'),
(21, 'Kiprop Kimani', 'kipropkimani@hotmail.com', '$2b$10$d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z'),
(22, 'Atieno Wanjiru', 'atienowanjiru@gmail.com', '$2b$10$e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z'),
(23, 'Mugo Kamau', 'mugokamau@yahoo.com', '$2b$10$f1g2h3i4j5k6l7m8n9o0p1q2r3s4t5u6v7w8x9y0z'),
(24, 'Ondiek Otieno', 'ondiekotieno@gmail.com', '$2b$10$g1h2i3j4k5l6m7n8o9p0q1r2s3t4u5v6w7x8y9z'),
(25, 'Auma Wangari', 'aumawangari@hotmail.com', '$2b$10$h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z'),
(26, 'Gathoni Karanja', 'gathonikaranja@gmail.com', '$2b$10$i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z'),
(27, 'Omondi Achieng', 'omondiachieng@yahoo.com', '$2b$10$j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(28, 'Njoroge Gichuru', 'njorogegichuru@gmail.com', '$2b$10$k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z'),
(29, 'Kamau Ochieng', 'kamauochieng@hotmail.com', '$2b$10$l1m2n3o4p5q6r7s8t9u0v1w2x3y4z'),
(30, 'Wangari Wanjiru', 'wangariwanjiru@gmail.com', '$2b$10$m1n2o3p4q5r6s7t8u9v0w1x2y3z'),
(31, 'Ondiek Otieno', 'ondiekotieno@yahoo.com', '$2b$10$n1o2p3q4r5s6t7u8v9w0x1y2z'),
(32, 'Akoth Atieno', 'akothatieno@gmail.com', '$2b$10$o1p2q3r4s5t6u7v8w9x0y1z'),
(33, 'Kipruto Kimani', 'kiprutokimani@hotmail.com', '$2b$10$p1q2r3s4t5u6v7w8x9y0z'),
(34, 'Achieng Atieno', 'achiengatieno@gmail.com', '$2b$10$q1r2s3t4u5v6w7x8y9z'),
(35, 'Mwangi Kariuki', 'mwangikariuki@yahoo.com', '$2b$10$r1s2t3u4v5w6x7y8z'),
(36, 'Karanja Kamau', 'karanjakamau@gmail.com', '$2b$10$s1t2u3v4w5x6y7z'),
(37, 'Nyambura Wangari', 'nyamburawangari@hotmail.com', '$2b$10$t1u2v3w4x5y6z'),
(38, 'Ochieng Omondi', 'ochiengomondi@gmail.com', '$2b$10$u1v2w3x4y5z'),
(39, 'Wambui Njeri', 'wambuinjeri@gmail.com', '$2b$10$v2w3x4y5z'),
(40, 'Kiprono Kipruto', 'kipronokipruto@gmail.com', '$2b$10$w3x4y5z'),
(41, 'Wairimu Wambui', 'wairimuwambui@gmail.com', '$2b$10$x4y5z'),
(42, 'Achieng Akinyi', 'achiengakinyi@gmail.com', '$2b$10$y5z'),
(43, 'Omondi Otieno', 'omondiotieno@gmail.com', '$2b$10$z'),
(44, 'Karanja Kipruto', 'karanjakipruto@gmail.com', '$2b$10$'),
(45, 'Muthoni Wangari', 'muthoniwangari@gmail.com', '$2b$10$a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z'),
(46, 'Wanjiru Muthoni', 'wanjirumuthoni@yahoo.com', '$2b$10$b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z'),
(47, 'Kariuki Karanja', 'kariukikaranja@hotmail.com', '$2b$10$c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z'),
(48, 'Wangari Atieno', 'wangariatieno@gmail.com', '$2b$10$d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z'),
(49, 'Kamau Omondi', 'kamauomondi@yahoo.com', '$2b$10$e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z'),
(50, 'Akinyi Njeri', 'akinyinjeri@gmail.com', '$2b$10$f1g2h3i4j5k6l7m8n9o0p1q2r3s4t5u6v7w8x9y0z'),
(51, 'Muthoni Njeri', 'muthoninjeri@gmail.com', '$2b$10$g1h2i3j4k5l6m7n8o9p0q1r2s3t4u5v6w7x8y9z'),
(52, 'Nyambura Wanjiru', 'nyamburawanjiru@gmail.com', '$2b$10$h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z'),
(53, 'Kimani Muthoni', 'kimanimuthoni@hotmail.com', '$2b$10$i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z'),
(54, 'Ochieng Wanjiru', 'ochiengwanjiru@gmail.com', '$2b$10$j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(55, 'Karanja Njeri', 'karajanjnjeri@yahoo.com', '$2b$10$k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z'),
(56, 'Omondi Karanja', 'omondikaranja@gmail.com', '$2b$10$l1m2n3o4p5q6r7s8t9u0v1w2x3y4z'),
(57, 'Achieng Wangari', 'achiengwangari@gmail.com', '$2b$10$m1n2o3p4q5r6s7t8u9v0w1x2y3z'),
(58, 'Otieno Njeri', 'otienonjeri@gmail.com', '$2b$10$n1o2p3q4r5s6t7u8v9w0x1y2z'),
(59, 'Kiprono Kamau', 'kipronokamau@gmail.com', '$2b$10$o1p2q3r4s5t6u7v8w9x0y1z'),
(60, 'Muthoni Karanja', 'muthonikaranja@gmail.com', '$2b$10$p1q2r3s4t5u6v7w8x9y0z'),
(61, 'Wangari Nyambura', 'wangarinyambura@gmail.com', '$2b$10$q1r2s3t4u5v6w7x8y9z'),
(62, 'Wambui Atieno', 'wambuiatieno@gmail.com', '$2b$10$r1s2t3u4v5w6x7y8z'),
(63, 'Omondi Otieno', 'omondiotieno@gmail.com', '$2b$10$s1t2u3v4w5x6y7z'),
(64, 'Wangari Akinyi', 'wangariakinyi@gmail.com', '$2b$10$t1u2v3w4x5y6z'),
(65, 'Karanja Otieno', 'karajnaotieno@gmail.com', '$2b$10$u1v2w3x4y5z'),
(66, 'Njeri Wangari', 'njeriwangari@gmail.com', '$2b$10$v2w3x4y5z'),
(67, 'Omondi Karanja', 'omondikaranja@gmail.com', '$2b$10$w3x4y5z'),
(68, 'Wairimu Atieno', 'wairimuatieno@gmail.com', '$2b$10$x4y5z'),
(69, 'Odhiambo Otieno', 'odhiambootieno@gmail.com', '$2b$10$y5z'),
(70, 'Wanjiru Wambui', 'wanjiruwambui@gmail.com', '$2b$10$z'),
(71, 'Wairimu Njeri', 'wairimunjeri@gmail.com', '$2b$10$a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z'),
(72, 'Karanja Otieno', 'karajnaotieno@yahoo.com', '$2b$10$b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z'),
(73, 'Achieng Atieno', 'achiengatieno@hotmail.com', '$2b$10$c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z'),
(74, 'Wairimu Muthoni', 'wairimumuthoni@gmail.com', '$2b$10$d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z'),
(75, 'Njeri Wanjiru', 'njeriwanjiru@gmail.com', '$2b$10$e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z'),
(76, 'Omondi Karanja', 'omondikaranja@yahoo.com', '$2b$10$f1g2h3i4j5k6l7m8n9o0p1q2r3s4t5u6v7w8x9y0z'),
(77, 'Auma Wangari', 'aumawangari@gmail.com', '$2b$10$g1h2i3j4k5l6m7n8o9p0q1r2s3t4u5v6w7x8y9z'),
(78, 'Omondi Otieno', 'omondiotieno@gmail.com', '$2b$10$h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z'),
(79, 'Kamau Nyambura', 'kamaunyambura@gmail.com', '$2b$10$i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z'),
(80, 'Ochieng Otieno', 'ochiengotieno@hotmail.com', '$2b$10$j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(81, 'Karanja Omondi', 'karajnaomondi@gmail.com', '$2b$10$k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z'),
(82, 'Atieno Wangari', 'atienowangari@gmail.com', '$2b$10$l1m2n3o4p5q6r7s8t9u0v1w2x3y4z'),
(83, 'Kipruto Otieno', 'kiprutootieno@gmail.com', '$2b$10$m1n2o3p4q5r6s7t8u9v0w1x2y3z'),
(84, 'Nyambura Karanja', 'nyamburakaranja@gmail.com', '$2b$10$n1o2p3q4r5s6t7u8v9w0x1y2z'),
(85, 'Auma Achieng', 'aumaachieng@gmail.com', '$2b$10$o1p2q3r4s5t6u7v8w9x0y1z'),
(86, 'Wangari Nyambura', 'wangarinyambura@gmail.com', '$2b$10$p1q2r3s4t5u6v7w8x9y0z'),
(87, 'Njeri Atieno', 'njeriatieno@gmail.com', '$2b$10$q1r2s3t4u5v6w7x8y9z'),
(88, 'Karajna Karanja', 'karajnakaranja@gmail.com', '$2b$10$r1s2t3u4v5w6x7y8z'),
(89, 'Nyambura Wanjiru', 'nyamburawanjiru@gmail.com', '$2b$10$s1t2u3v4w5x6y7z'),
(90, 'Omondi Karanja', 'omondikaranja@gmail.com', '$2b$10$t1u2v3w4x5y6z'),
(91, 'Kiprop Otieno', 'kipropotieno@gmail.com', '$2b$10$u1v2w3x4y5z'),
(92, 'Auma Atieno', 'aumaatieno@gmail.com', '$2b$10$v2w3x4y5z'),
(93, 'Omondi Karanja', 'omondikaranja@gmail.com', '$2b$10$w3x4y5z'),
(94, 'Wambui Atieno', 'wambuiatieno@gmail.com', '$2b$10$x4y5z'),
(95, 'Karajna Karanja', 'karajnakaranja@gmail.com', '$2b$10$y5z'),
(96, 'Nyambura Achieng', 'nyamburaachieng@gmail.com', '$2b$10$z'),
(97, 'Omondi Otieno', 'omondiotieno@gmail.com', '$2b$10$a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z'),
(98, 'Wambui Wangari', 'wambuiwangari@gmail.com', '$2b$10$b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z'),
(99, 'Karanja Omondi', 'karajnaomondi@yahoo.com', '$2b$10$c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z'),
(100, 'Nyambura Atieno', 'nyamburaatieno@gmail.com', '$2b$10$d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z'),
(101, 'Omondi Otieno', 'omondiotieno@gmail.com', '$2b$10$a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z'),
(102, 'Wanjiru Muthoni', 'wanjirumuthoni@yahoo.com', '$2b$10$b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z'),
(103, 'Kariuki Karanja', 'kariukikaranja@hotmail.com', '$2b$10$c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z'),
(104, 'Wangari Atieno', 'wangariatieno@gmail.com', '$2b$10$d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z'),
(105, 'Kamau Omondi', 'kamauomondi@yahoo.com', '$2b$10$e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z'),
(106, 'Akinyi Njeri', 'akinyinjeri@gmail.com', '$2b$10$f1g2h3i4j5k6l7m8n9o0p1q2r3s4t5u6v7w8x9y0z'),
(107, 'Muthoni Njeri', 'muthoninjeri@gmail.com', '$2b$10$g1h2i3j4k5l6m7n8o9p0q1r2s3t4u5v6w7x8y9z'),
(108, 'Nyambura Wanjiru', 'nyamburawanjiru@gmail.com', '$2b$10$h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z'),
(109, 'Kimani Muthoni', 'kimanimuthoni@hotmail.com', '$2b$10$i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z'),
(110, 'Ochieng Wanjiru', 'ochiengwanjiru@gmail.com', '$2b$10$j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(111, 'Karanja Njeri', 'karajnanjeri@yahoo.com', '$2b$10$k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z'),
(112, 'Omondi Karanja', 'omondikaranja@gmail.com', '$2b$10$l1m2n3o4p5q6r7s8t9u0v1w2x3y4z'),
(113, 'Achieng Wangari', 'achiengwangari@gmail.com', '$2b$10$m1n2o3p4q5r6s7t8u9v0w1x2y3z'),
(114, 'Otieno Njeri', 'otienonjeri@gmail.com', '$2b$10$n1o2p3q4r5s6t7u8v9w0x1y2z'),
(115, 'Kiprono Kamau', 'kipronokamau@gmail.com', '$2b$10$o1p2q3r4s5t6u7v8w9x0y1z'),
(116, 'Muthoni Karanja', 'muthonikaranja@gmail.com', '$2b$10$p1q2r3s4t5u6v7w8x9y0z'),
(117, 'Wangari Nyambura', 'wangarinyambura@gmail.com', '$2b$10$q1r2s3t4u5v6w7x8y9z'),
(118, 'Wambui Atieno', 'wambuiatieno@gmail.com', '$2b$10$r1s2t3u4v5w6x7y8z'),
(119, 'Omondi Otieno', 'omondiotieno@gmail.com', '$2b$10$s1t2u3v4w5x6y7z'),
(120, 'Wangari Akinyi', 'wangariakinyi@gmail.com', '$2b$10$t1u2v3w4x5y6z'),
(121, 'Karanja Otieno', 'karajnaotieno@gmail.com','$2b$10$u1v2w3x4y5z'),
(122, 'Njeri Wangari', 'njeriwangari@gmail.com', '$2b$10$v2w3x4y5z'),
(123, 'Omondi Karanja', 'omondikaranja@gmail.com', '$2b$10$w3x4y5z'),
(144, 'Wairimu Atieno', 'wairimuatieno@gmail.com', '$2b$10$x4y5z'),
(125, 'Odhiambo Otieno', 'odhiambootieno@gmail.com', '$2b$10$y5z'),
(126, 'Wanjiru Wambui', 'wanjiruwambui@gmail.com', '$2b$10$z'),
(127, 'Wairimu Njeri', 'wairimunjeri@gmail.com', '$2b$10$a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z'),
(128, 'Karanja Otieno', 'karajnaotieno@yahoo.com', '$2b$10$b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z'),
(129, 'Achieng Atieno', 'achiengatieno@hotmail.com', '$2b$10$c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z'),
(130, 'Wairimu Muthoni', 'wairimumuthoni@gmail.com', '$2b$10$d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z'),
(131, 'Njeri Wanjiru', 'njeriwanjiru@gmail.com', '$2b$10$e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z'),
(132, 'Omondi Karanja', 'omondikaranja@yahoo.com', '$2b$10$f1g2h3i4j5k6l7m8n9o0p1q2r3s4t5u6v7w8x9y0z'),
(133, 'Auma Wangari', 'aumawangari@gmail.com', '$2b$10$g1h2i3j4k5l6m7n8o9p0q1r2s3t4u5v6w7x8y9z'),
(134, 'Omondi Otieno', 'omondiotieno@gmail.com', '$2b$10$h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z'),
(135, 'Kamau Nyambura', 'kamaunyambura@gmail.com', '$2b$10$i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z'),
(136, 'Ochieng Otieno', 'ochiengotieno@hotmail.com', '$2b$10$j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z'),
(137, 'Karanja Omondi', 'karajnaomondi@gmail.com', '$2b$10$k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z'),
(138, 'Atieno Wangari', 'atienowangari@gmail.com', '$2b$10$l1m2n3o4p5q6r7s8t9u0v1w2x3y4z'),
(139, 'Kipruto Otieno', 'kiprutootieno@gmail.com', '$2b$10$m1n2o3p4q5r6s7t8u9v0w1x2y3z'),
(140, 'Nyambura Karanja', 'nyamburakaranja@gmail.com', '$2b$10$n1o2p3q4r5s6t7u8v9w0x1y2z');