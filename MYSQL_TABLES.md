-- Users table: stores user information
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    role VARCHAR(50) -- 'student', 'teacher', 'admin'
);

-- Classes table: stores class information
CREATE TABLE classes (
    class_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT
);

-- Days table: stores days of the week
CREATE TABLE days (
    day_id SERIAL PRIMARY KEY,
    name VARCHAR(20) -- 'Monday', 'Tuesday', etc.
);

-- Rooms table: stores room information
CREATE TABLE rooms (
    room_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    capacity INT
);

-- Schedules table: stores scheduling information
CREATE TABLE schedules (
    schedule_id SERIAL PRIMARY KEY,
    class_id INT REFERENCES Classes(class_id),
    day_id INT REFERENCES Days(day_id),
    start_time TIME,
    end_time TIME,
    room_id INT REFERENCES Rooms(room_id),
    teacher_id INT REFERENCES Users(user_id)
);

-- Enrollments table: stores information about student enrollments
CREATE TABLE enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    class_id INT REFERENCES Classes(class_id),
    student_id INT REFERENCES Users(user_id)
);