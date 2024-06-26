# Database Schema

## OTP Table

```sql
CREATE TABLE otp (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    otpcode VARCHAR(10),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    used VARCHAR(10) DEFAULT 'false',
    email VARCHAR(255)
);
```

## Departments Table

```sql
CREATE TABLE departments (
    dpt_code INT(11) AUTO_INCREMENT PRIMARY KEY,
    dpt_name VARCHAR(255),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## User Table

```sql
CREATE TABLE user (
    user_id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255),
    profilepicture VARCHAR(100) DEFAULT 'user.png',
    role TINYINT DEFAULT 0 CHECK (role IN (0, 1, 2)),
    dpt_code INT(11),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (dpt_code) REFERENCES departments(dpt_code)
);
```

## Courses Table

```sql
CREATE TABLE courses (
    course_id INT(11) AUTO_INCREMENT PRIMARY KEY,
    course_code VARCHAR(10),
    name VARCHAR(100),
    lecturer_id VARCHAR(10) REFERENCES user(user_id),
    dpt_code INT(11) REFERENCES departments(dpt_code),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Enrollments Table

```sql
CREATE TABLE enrollments (
    enrollment_id INT(11) AUTO_INCREMENT PRIMARY KEY,
    course_id INT(11),
    student_id VARCHAR(10),
    isactive BOOL DEFAULT 1,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    FOREIGN KEY (student_id) REFERENCES user(user_id)
);
```

## Testimonials Table

```sql
CREATE TABLE testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(100),
    message TEXT NOT NULL,
    image_url VARCHAR(255),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Days Table

```sql
CREATE TABLE days (
    day_id SERIAL PRIMARY KEY,
    name VARCHAR(20)
);
```

## Rooms Table

```sql
CREATE TABLE rooms (
    room_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    capacity INT
);
```

## Schedules Table

```sql
CREATE TABLE schedules (
    schedule_id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(course_id),
    day_id INT REFERENCES days(day_id),
    start_time TIME,
    end_time TIME,
    room_id INT REFERENCES rooms(room_id),
    lecturer_id VARCHAR(10) REFERENCES user(user_id),
    dpt_code INT(11) REFERENCES departments(dpt_code),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```