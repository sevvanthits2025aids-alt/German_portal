import sqlite3


# =========================
# CONNECT TO DATABASE
# =========================

connection = sqlite3.connect("german.db")

cursor = connection.cursor()


# =========================
# USERS TABLE
# =========================

cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
""")


# =========================
# VOCABULARY TABLE
# =========================

cursor.execute("""
CREATE TABLE IF NOT EXISTS vocabulary (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    german_word TEXT NOT NULL,
    english_meaning TEXT NOT NULL,
    tamil_meaning TEXT,
    article TEXT,
    example_sentence TEXT,
    level TEXT NOT NULL,
    category TEXT,
    pronunciation TEXT
)
""")


# =========================
# PRACTICE QUESTIONS TABLE
# =========================

cursor.execute("""
CREATE TABLE IF NOT EXISTS practice_questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    word TEXT NOT NULL,
    question TEXT NOT NULL,
    option1 TEXT NOT NULL,
    option2 TEXT NOT NULL,
    option3 TEXT NOT NULL,
    option4 TEXT NOT NULL,
    correct_answer TEXT NOT NULL,
    level TEXT NOT NULL,
    topic TEXT NOT NULL
)
""")


# =========================
# PROGRESS TABLE
# =========================

cursor.execute("""
CREATE TABLE IF NOT EXISTS progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    level TEXT NOT NULL,
    topic TEXT NOT NULL,
    progress_percentage INTEGER DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id)
)
""")


# =========================
# SAVE CHANGES
# =========================

connection.commit()

connection.close()


print("German Learning Portal database created successfully!")