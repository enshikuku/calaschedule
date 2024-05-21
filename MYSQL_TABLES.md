CREATE TABLE otp (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    otpcode VARCHAR(10),
    timestamp TIMESTAMP,
    used VARCHAR(10) DEFAULT 'false',
    email VARCHAR(255)
);


CREATE TABLE user (
    user_id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    profilepicture VARCHAR(100) DEFAULT 'user.png',
    role VARCHAR(50) DEFAULT 'student'
);

CREATE TABLE courses (
    course_id INT(11) AUTO_INCREMENT PRIMARY KEY,
    course_code VARCHAR(10),
    name VARCHAR(100),
    lecturer_id VARCHAR(10) REFERENCES user(user_id)
);

CREATE TABLE enrollments (
    enrollment_id INT(11) AUTO_INCREMENT PRIMARY KEY,
    course_id INT(11),
    student_id VARCHAR(10),
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    FOREIGN KEY (student_id) REFERENCES user(user_id)
);

CREATE TABLE days (
    day_id SERIAL PRIMARY KEY,
    name VARCHAR(20) -- 'Monday', 'Tuesday', etc.
);

CREATE TABLE rooms (
    room_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    capacity INT
);

CREATE TABLE schedules (
    schedule_id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(course_id),
    day_id INT REFERENCES days(day_id),
    start_time TIME,
    end_time TIME,
    room_id INT REFERENCES rooms(room_id),
    lecturer_id VARCHAR(10) REFERENCES user(user_id)
);
