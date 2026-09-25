from flask import Flask
from flask_cors import CORS
from database import get_db_connection

app = Flask(__name__)

CORS(app)


# =========================
# HOME API
# =========================

@app.route("/")
def home():
    return {
        "message": "DeutschLernen Backend is running! 🇩🇪"
    }


# =========================
# TEST API
# =========================

@app.route("/api/test")
def test():
    return {
        "status": "success",
        "message": "German Learning Portal API is working! 🚀"
    }


# =========================
# DATABASE TEST API
# =========================

@app.route("/api/db-test")
def database_test():

    connection = get_db_connection()

    cursor = connection.cursor()

    cursor.execute("""
        SELECT name
        FROM sqlite_master
        WHERE type='table'
    """)

    tables = cursor.fetchall()

    connection.close()

    return {
        "status": "success",
        "tables": [table["name"] for table in tables]
    }


# =========================
# VOCABULARY API
# =========================

@app.route("/api/vocabulary")
def get_vocabulary():

    connection = get_db_connection()

    cursor = connection.cursor()

    cursor.execute("""
        SELECT *
        FROM vocabulary
    """)

    words = cursor.fetchall()

    connection.close()

    return {
        "status": "success",
        "count": len(words),
        "vocabulary": [dict(word) for word in words]
    }


# =========================
# RUN FLASK SERVER
# =========================

if __name__ == "__main__":
    app.run(debug=True)