CREATE TABLE otp (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    otpcode VARCHAR(10),
    timestamp TIMESTAMP,
    used VARCHAR(10) DEFAULT 'false',
    email VARCHAR(255)
);

CREATE TABLE sessions (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    sessionid VARCHAR(10),
    timestamp TIMESTAMP
);
-- user table: stores user information
CREATE TABLE user (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    role VARCHAR(50) -- 'student', 'teacher', 'admin'
);

-- classes table: stores class information
CREATE TABLE classes (
    class_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT
);

-- days table: stores days of the week
CREATE TABLE days (
    day_id SERIAL PRIMARY KEY,
    name VARCHAR(20) -- 'Monday', 'Tuesday', etc.
);

-- rooms table: stores room information
CREATE TABLE rooms (
    room_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    capacity INT
);

-- schedules table: stores scheduling information
CREATE TABLE schedules (
    schedule_id SERIAL PRIMARY KEY,
    class_id INT REFERENCES classes(class_id),
    day_id INT REFERENCES days(day_id),
    start_time TIME,
    end_time TIME,
    room_id INT REFERENCES rooms(room_id),
    teacher_id INT REFERENCES user(user_id)
);

-- enrollments table: stores information about student enrollments
CREATE TABLE enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    class_id INT REFERENCES classes(class_id),
    student_id INT REFERENCES user(user_id)
);