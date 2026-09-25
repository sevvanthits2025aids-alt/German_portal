import sqlite3


connection = sqlite3.connect("german.db")

cursor = connection.cursor()


vocabulary = [
    ("Hallo", "Hello", "வணக்கம்", None, "Hallo! Wie geht es dir?", "A1", "Greetings", "HA-lo"),
    ("Guten Morgen", "Good morning", "காலை வணக்கம்", None, "Guten Morgen!", "A1", "Greetings", "GOO-ten MOR-gen"),
    ("Danke", "Thank you", "நன்றி", None, "Danke schön!", "A1", "Greetings", "DAN-ke"),
    ("Bitte", "Please / You're welcome", "தயவு செய்து / பரவாயில்லை", None, "Bitte schön!", "A1", "Greetings", "BIT-te"),
    ("Haus", "House", "வீடு", "das", "Das Haus ist groß.", "A1", "Home", "hous"),
    ("Buch", "Book", "புத்தகம்", "das", "Das Buch ist interessant.", "A1", "Objects", "bookh"),
    ("Wasser", "Water", "தண்ணீர்", "das", "Ich trinke Wasser.", "A1", "Food & Drink", "VAS-ser"),
    ("Apfel", "Apple", "ஆப்பிள்", "der", "Der Apfel ist rot.", "A1", "Food", "AP-fel"),
    ("Schule", "School", "பள்ளி", "die", "Ich gehe zur Schule.", "A1", "Education", "SHOO-le"),
    ("Freund", "Friend", "நண்பர்", "der", "Er ist mein Freund.", "A1", "People", "froynt"),
]


cursor.executemany("""
INSERT INTO vocabulary (
    german_word,
    english_meaning,
    tamil_meaning,
    article,
    example_sentence,
    level,
    category,
    pronunciation
)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)
""", vocabulary)


connection.commit()

connection.close()


print("✅ Sample German vocabulary added successfully!")