import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");

  const [practiceQuestion, setPracticeQuestion] = useState(0);
  const [practiceAnswer, setPracticeAnswer] = useState(null);
  const [practiceScore, setPracticeScore] = useState(0);

  // =========================
  // VOCABULARY STATE
  // =========================

  const [vocabulary, setVocabulary] = useState([]);
  const [vocabularyLoading, setVocabularyLoading] = useState(false);

  // =========================
  // FETCH VOCABULARY FROM BACKEND
  // =========================

  useEffect(() => {
    if (page === "vocabulary") {
      setVocabularyLoading(true);

      fetch("http://127.0.0.1:5000/api/vocabulary")
        .then((response) => response.json())
        .then((data) => {
          setVocabulary(data.vocabulary);
          setVocabularyLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching vocabulary:", error);
          setVocabularyLoading(false);
        });
    }
  }, [page]);

  // =========================
  // GERMAN TEXT TO SPEECH
  // =========================

  const speakGerman = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "de-DE";
    utterance.rate = 0.8;
    utterance.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  // =========================
  // ALPHABET PAGE
  // =========================

  if (page === "alphabet") {
    const letters = [
      ["A", "ahh"],
      ["B", "beh"],
      ["C", "tsah"],
      ["D", "dah"],
      ["E", "eah"],
      ["F", "eff"],
      ["G", "geh"],
      ["H", "hahh"],
      ["I", "eeh"],
      ["J", "yot"],
      ["K", "kah"],
      ["L", "ell"],
      ["M", "emm"],
      ["N", "enn"],
      ["O", "oh"],
      ["P", "peh"],
      ["Q", "koo"],
      ["R", "err"],
      ["S", "ess"],
      ["T", "teh"],
      ["U", "ooh"],
      ["V", "fau"],
      ["W", "veh"],
      ["X", "iks"],
      ["Y", "üpsilon"],
      ["Z", "tsett"],
    ];

    const specialLetters = [
      ["Ä", "äh"],
      ["Ö", "öh"],
      ["Ü", "üh"],
      ["ß", "Eszett"],
    ];

    return (
      <div className="alphabet-page">

        <nav className="a1-navbar">

          <div
            className="a1-brand"
            onClick={() => setPage("a1")}
            style={{ cursor: "pointer" }}
          >
            🇩🇪 <span>DeutschLernen</span>
          </div>

          <button
            className="back-button"
            onClick={() => setPage("a1")}
          >
            ← Back to A1
          </button>

        </nav>

        <main className="alphabet-container">

          <div className="alphabet-header">

            <p>GERMAN • A1</p>

            <h1>
              Alphabet & Pronunciation
            </h1>

            <span>
              Learn the German alphabet and how each letter is pronounced.
            </span>

          </div>

          {/* ALPHABET */}

          <section className="alphabet-section">

            <div className="section-heading">

              <h2>🔤 German Alphabet</h2>

              <p>Das deutsche Alphabet</p>

            </div>

            <div className="letter-grid">

              {letters.map(([letter, sound]) => (

                <div className="letter-card" key={letter}>

                  <div className="big-letter">
                    {letter}
                  </div>

                  <div className="letter-sound">
                    {sound}
                  </div>

                  <button
                    className="sound-button"
                    onClick={() => speakGerman(letter)}
                  >
                    🔊 Listen
                  </button>

                </div>

              ))}

            </div>

          </section>

          {/* SPECIAL CHARACTERS */}

          <section className="alphabet-section">

            <div className="section-heading">

              <h2>✨ Special German Characters</h2>

              <p>These are unique to German.</p>

            </div>

            <div className="special-grid">

              {specialLetters.map(([letter, sound]) => (

                <div
                  className="special-card"
                  key={letter}
                >

                  <div className="special-letter">
                    {letter}
                  </div>

                  <h3>{sound}</h3>

                  <button
                    className="sound-button"
                    onClick={() => speakGerman(letter)}
                  >
                    🔊 Listen
                  </button>

                </div>

              ))}

            </div>

          </section>

          {/* PRONUNCIATION RULES */}

          <section className="pronunciation-section">

            <div className="section-heading">

              <p>PRONUNCIATION BASICS</p>

              <h2>Important German Sounds</h2>

            </div>

            <div className="sound-rules">

              <div>
                <strong>CH</strong>
                <span>ich, machen</span>

                <button
                  className="sound-button"
                  onClick={() => speakGerman("ich machen")}
                >
                  🔊 Listen
                </button>
              </div>

              <div>
                <strong>SCH</strong>
                <span>Schule, schön</span>

                <button
                  className="sound-button"
                  onClick={() => speakGerman("Schule schön")}
                >
                  🔊 Listen
                </button>
              </div>

              <div>
                <strong>EI</strong>
                <span>mein, drei</span>

                <button
                  className="sound-button"
                  onClick={() => speakGerman("mein drei")}
                >
                  🔊 Listen
                </button>
              </div>

              <div>
                <strong>IE</strong>
                <span>Liebe, sieben</span>

                <button
                  className="sound-button"
                  onClick={() => speakGerman("Liebe sieben")}
                >
                  🔊 Listen
                </button>
              </div>

              <div>
                <strong>EU / ÄU</strong>
                <span>neu, Häuser</span>

                <button
                  className="sound-button"
                  onClick={() => speakGerman("neu Häuser")}
                >
                  🔊 Listen
                </button>
              </div>

              <div>
                <strong>SP / ST</strong>
                <span>Sport, Straße</span>

                <button
                  className="sound-button"
                  onClick={() => speakGerman("Sport Straße")}
                >
                  🔊 Listen
                </button>
              </div>

              <div>
                <strong>Z</strong>
                <span>Zeit, zehn</span>

                <button
                  className="sound-button"
                  onClick={() => speakGerman("Zeit zehn")}
                >
                  🔊 Listen
                </button>
              </div>

              <div>
                <strong>W</strong>
                <span>Wasser, wohnen</span>

                <button
                  className="sound-button"
                  onClick={() => speakGerman("Wasser wohnen")}
                >
                  🔊 Listen
                </button>
              </div>

              <div>
                <strong>J</strong>
                <span>ja, Jahr</span>

                <button
                  className="sound-button"
                  onClick={() => speakGerman("ja Jahr")}
                >
                  🔊 Listen
                </button>
              </div>

            </div>

          </section>

          {/* PRACTICE */}

          <section className="practice-box">

            <div>

              <span>READY TO PRACTICE?</span>

              <h2>
                Test your German pronunciation 🎯
              </h2>

              <p>
                Listen to the sounds and practice saying them aloud.
              </p>

            </div>

            <button
              onClick={() => {
                setPracticeQuestion(0);
                setPracticeAnswer(null);
                setPracticeScore(0);
                setPage("alphabet-practice");
              }}
            >
              Start Practice →
            </button>

          </section>

        </main>

      </div>
    );
  }

  // =========================
  // PRONUNCIATION QUESTIONS
  // =========================

  const pronunciationQuestions = [
    {
      word: "Schule",
      question: "Which sound does „Schule“ contain?",
      options: ["CH", "SCH", "EI", "IE"],
      answer: "SCH",
    },

    {
      word: "ich",
      question: "Which sound does „ich“ contain?",
      options: ["CH", "SCH", "EI", "IE"],
      answer: "CH",
    },

    {
      word: "mein",
      question: "Which sound does „mein“ contain?",
      options: ["CH", "SCH", "EI", "IE"],
      answer: "EI",
    },

    {
      word: "Liebe",
      question: "Which sound does „Liebe“ contain?",
      options: ["CH", "SCH", "EI", "IE"],
      answer: "IE",
    },

    {
      word: "neu",
      question: "Which sound does „neu“ contain?",
      options: ["EU / ÄU", "SCH", "EI", "IE"],
      answer: "EU / ÄU",
    },

    {
      word: "Haus",
      question: "Which sound does „Haus“ contain?",
      options: ["AU", "CH", "EI", "IE"],
      answer: "AU",
    },

    {
      word: "Zeit",
      question: "Which sound does „Zeit“ contain?",
      options: ["Z", "W", "J", "SCH"],
      answer: "Z",
    },

    {
      word: "Wasser",
      question: "Which sound does „Wasser“ begin with?",
      options: ["W", "Z", "J", "CH"],
      answer: "W",
    },

    {
      word: "Jahr",
      question: "Which sound does „Jahr“ begin with?",
      options: ["J", "W", "Z", "SCH"],
      answer: "J",
    },

    {
      word: "Straße",
      question: "Which sound does „Straße“ begin with?",
      options: ["SP / ST", "SCH", "CH", "EI"],
      answer: "SP / ST",
    },

    {
      word: "drei",
      question: "Which sound does „drei“ contain?",
      options: ["EI", "IE", "EU", "CH"],
      answer: "EI",
    },

    {
      word: "sieben",
      question: "Which sound does „sieben“ contain?",
      options: ["IE", "EI", "SCH", "CH"],
      answer: "IE",
    },
  ];

  // =========================
  // PRONUNCIATION PRACTICE
  // =========================

  if (page === "alphabet-practice") {

    const currentQuestion =
      pronunciationQuestions[practiceQuestion];

    const handleAnswer = (option) => {

      if (practiceAnswer !== null) return;

      setPracticeAnswer(option);

      if (option === currentQuestion.answer) {
        setPracticeScore(practiceScore + 1);
      }
    };

    const nextQuestion = () => {

      if (
        practiceQuestion <
        pronunciationQuestions.length - 1
      ) {

        setPracticeQuestion(practiceQuestion + 1);
        setPracticeAnswer(null);

      } else {

        alert(
          `🎉 Practice Complete!\n\nYour Score: ${
            practiceScore +
            (practiceAnswer === currentQuestion.answer ? 1 : 0)
          } / ${pronunciationQuestions.length}`
        );

        setPracticeQuestion(0);
        setPracticeAnswer(null);
        setPracticeScore(0);
        setPage("alphabet");
      }
    };

    return (
      <div className="alphabet-page">

        <nav className="a1-navbar">

          <div
            className="a1-brand"
            onClick={() => setPage("alphabet")}
            style={{ cursor: "pointer" }}
          >
            🇩🇪 <span>DeutschLernen</span>
          </div>

          <button
            className="back-button"
            onClick={() => setPage("alphabet")}
          >
            ← Back
          </button>

        </nav>

        <main className="alphabet-container">

          <div className="alphabet-header">

            <p>GERMAN • A1</p>

            <h1>
              Pronunciation Practice 🎯
            </h1>

            <span>
              Listen to the German word and choose the correct sound.
            </span>

          </div>

          <section className="practice-box">

            <div className="practice-question">

              <span>
                QUESTION {practiceQuestion + 1} /{" "}
                {pronunciationQuestions.length}
              </span>

              <h2>
                🔊 Listen carefully
              </h2>

              <button
                className="sound-button"
                onClick={() =>
                  speakGerman(currentQuestion.word)
                }
              >
                🔊 Listen to „{currentQuestion.word}“
              </button>

              <h3>
                {currentQuestion.question}
              </h3>

            </div>

            <div className="practice-options">

              {currentQuestion.options.map((option) => {

                let optionClass = "";

                if (practiceAnswer !== null) {

                  if (
                    option === currentQuestion.answer
                  ) {
                    optionClass = "correct-option";
                  }

                  else if (option === practiceAnswer) {
                    optionClass = "wrong-option";
                  }

                }

                return (
                  <button
                    key={option}
                    className={optionClass}
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                );

              })}

            </div>

            {practiceAnswer !== null && (

              <div className="practice-feedback">

                {practiceAnswer ===
                currentQuestion.answer ? (

                  <p className="correct-message">
                    ✅ Correct! Sehr gut! 🎉
                  </p>

                ) : (

                  <p className="wrong-message">
                    ❌ Wrong! The correct answer is{" "}
                    <strong>
                      {currentQuestion.answer}
                    </strong>.
                  </p>

                )}

                <button
                  className="next-question-button"
                  onClick={nextQuestion}
                >
                  {practiceQuestion ===
                  pronunciationQuestions.length - 1
                    ? "Finish Practice 🎉"
                    : "Next Question →"}
                </button>

              </div>

            )}

          </section>

        </main>

      </div>
    );
  }

  // =========================
  // VOCABULARY PAGE
  // =========================

  if (page === "vocabulary") {

    return (
      <div className="alphabet-page">

        {/* NAVBAR */}

        <nav className="a1-navbar">

          <div
            className="a1-brand"
            onClick={() => setPage("a1")}
            style={{ cursor: "pointer" }}
          >
            🇩🇪 <span>DeutschLernen</span>
          </div>

          <button
            className="back-button"
            onClick={() => setPage("a1")}
          >
            ← Back to A1
          </button>

        </nav>

        <main className="alphabet-container">

          {/* HEADER */}

          <div className="alphabet-header">

            <p>GERMAN • A1</p>

            <h1>
              📚 German Vocabulary
            </h1>

            <span>
              Learn useful German words with English and Tamil meanings.
            </span>

          </div>

          {/* LOADING */}

          {vocabularyLoading && (

            <section className="practice-box">

              <h2>
                ⏳ Loading vocabulary...
              </h2>

              <p>
                Fetching words from the German Learning database.
              </p>

            </section>

          )}

          {/* VOCABULARY */}

          {!vocabularyLoading && vocabulary.length > 0 && (

            <section className="alphabet-section">

              <div className="section-heading">

                <h2>
                  A1 Vocabulary
                </h2>

                <p>
                  {vocabulary.length} words loaded from database
                </p>

              </div>

              <div className="topic-grid">

                {vocabulary.map((word) => (

                  <div
                    className="topic-card"
                    key={word.id}
                  >

                    <div className="topic-icon purple">
                      📖
                    </div>

                    <h3>
                      {word.article
                        ? `${word.article} ${word.german_word}`
                        : word.german_word}
                    </h3>

                    <p>
                      🇬🇧 {word.english_meaning}
                    </p>

                    {word.tamil_meaning && (

                      <p>
                        🇮🇳 {word.tamil_meaning}
                      </p>

                    )}

                    {word.category && (

                      <p>
                        📂 {word.category}
                      </p>

                    )}

                    {word.example_sentence && (

                      <p>
                        💬 {word.example_sentence}
                      </p>

                    )}

                    <button
                      onClick={() =>
                        speakGerman(word.german_word)
                      }
                    >
                      🔊 Listen
                    </button>

                  </div>

                ))}

              </div>

            </section>

          )}

          {/* NO DATA */}

          {!vocabularyLoading &&
            vocabulary.length === 0 && (

              <section className="practice-box">

                <h2>
                  📚 No vocabulary found
                </h2>

                <p>
                  Please check whether the Flask backend is running.
                </p>

                <button
                  onClick={() => setPage("a1")}
                >
                  ← Back to A1
                </button>

              </section>

            )}

        </main>

      </div>
    );
  }

  // =========================
  // A1 DASHBOARD
  // =========================

  if (page === "a1") {

    return (
      <div className="a1-page">

        {/* NAVBAR */}

        <nav className="a1-navbar">

          <div className="a1-brand">
            🇩🇪 <span>DeutschLernen</span>
          </div>

          <div className="a1-nav-right">

            <span className="streak">
              🔥 0 day streak
            </span>

            <div className="profile">
              S
            </div>

          </div>

        </nav>

        {/* HERO */}

        <section className="a1-hero">

          <div className="hero-text">

            <p className="a1-label">
              GERMAN • A1 LEVEL
            </p>

            <h1>
              Willkommen! 👋
            </h1>

            <p>
              Start your German journey with the basics.
              Learn, practice and build your confidence step by step.
            </p>

            <div className="progress-section">

              <div className="progress-info">

                <span>
                  Your A1 Progress
                </span>

                <span>
                  0%
                </span>

              </div>

              <div className="progress-bar">

                <div className="progress-fill"></div>

              </div>

            </div>

          </div>

          <div className="hero-level">

            <div className="level-circle">

              <span>
                A1
              </span>

              <small>
                Beginner
              </small>

            </div>

          </div>

        </section>

        {/* LEARNING SECTIONS */}

        <section className="learning-section">

          <div className="section-title">

            <div>

              <p>
                YOUR A1 COURSE
              </p>

              <h2>
                Start Learning
              </h2>

            </div>

            <span>
              6 learning areas
            </span>

          </div>

          <div className="topic-grid">

            {/* Alphabet */}

            <div className="topic-card">

              <div className="topic-icon purple">
                🔤
              </div>

              <div className="topic-number">
                01
              </div>

              <h3>
                Alphabet & Pronunciation
              </h3>

              <p>
                Learn German letters, special characters and pronunciation.
              </p>

              <div className="topic-bottom">

                <span>
                  0 lessons
                </span>

                <button
                  onClick={() => setPage("alphabet")}
                >
                  Start →
                </button>

              </div>

            </div>

            {/* Greetings */}

            <div className="topic-card">

              <div className="topic-icon pink">
                👋
              </div>

              <div className="topic-number">
                02
              </div>

              <h3>
                Greetings
              </h3>

              <p>
                Learn how to greet people and introduce yourself in German.
              </p>

              <div className="topic-bottom">

                <span>
                  0 lessons
                </span>

                <button>
                  Start →
                </button>

              </div>

            </div>

            {/* Vocabulary */}

            <div className="topic-card featured-card">

              <div className="topic-icon blue">
                📚
              </div>

              <div className="topic-number">
                03
              </div>

              <h3>
                Vocabulary
              </h3>

              <p>
                Build your German vocabulary with useful words.
              </p>

              <div className="topic-bottom">

                <span>
                  {vocabulary.length > 0
                    ? `${vocabulary.length} words`
                    : "Database"}
                </span>

                <button
                  onClick={() => setPage("vocabulary")}
                >
                  Explore →
                </button>

              </div>

            </div>

            {/* Numbers */}

            <div className="topic-card">

              <div className="topic-icon green">
                🔢
              </div>

              <div className="topic-number">
                04
              </div>

              <h3>
                Numbers
              </h3>

              <p>
                Learn German numbers, prices, dates and counting.
              </p>

              <div className="topic-bottom">

                <span>
                  0 lessons
                </span>

                <button>
                  Start →
                </button>

              </div>

            </div>

            {/* Time */}

            <div className="topic-card">

              <div className="topic-icon orange">
                ⏰
              </div>

              <div className="topic-number">
                05
              </div>

              <h3>
                Time
              </h3>

              <p>
                Learn formal and informal ways of telling the time.
              </p>

              <div className="topic-bottom">

                <span>
                  0 lessons
                </span>

                <button>
                  Start →
                </button>

              </div>

            </div>

            {/* Grammar */}

            <div className="topic-card">

              <div className="topic-icon yellow">
                📘
              </div>

              <div className="topic-number">
                06
              </div>

              <h3>
                Grammar
              </h3>

              <p>
                Master the essential German A1 grammar step by step.
              </p>

              <div className="topic-bottom">

                <span>
                  0 lessons
                </span>

                <button>
                  Start →
                </button>

              </div>

            </div>

          </div>

        </section>

        {/* DAILY GOAL */}

        <section className="daily-goal">

          <div className="goal-icon">
            🎯
          </div>

          <div>

            <p className="goal-label">
              TODAY'S GOAL
            </p>

            <h3>
              Complete your first German lesson
            </h3>

            <p>
              Start with Alphabet & Pronunciation and learn the basics.
            </p>

          </div>

          <button
            className="goal-button"
            onClick={() => setPage("alphabet")}
          >
            Start Learning →
          </button>

        </section>

      </div>
    );
  }

  // =========================
  // LEVEL SELECTION
  // =========================

  if (page === "levels") {

    return (
      <div className="level-page">

        <div className="level-container">

          <div className="level-brand">
            🇩🇪 DeutschLernen
          </div>

          <div className="level-heading">

            <p>
              WILLKOMMEN!
            </p>

            <h1>
              Choose Your German Level
            </h1>

            <span>
              Where would you like to start your German learning journey?
            </span>

          </div>

          <div className="level-cards">

            <div className="level-card">

              <div className="level-icon">
                🌱
              </div>

              <h2>
                A1
              </h2>

              <h3>
                Beginner
              </h3>

              <p>
                Start with the basics and build your first German words.
              </p>

              <button
                onClick={() => setPage("a1")}
              >
                Start A1 →
              </button>

            </div>

            <div className="level-card">

              <div className="level-icon">
                🚀
              </div>

              <h2>
                A2
              </h2>

              <h3>
                Elementary
              </h3>

              <p>
                Improve your vocabulary and understand everyday German.
              </p>

              <button>
                Start A2 →
              </button>

            </div>

            <div className="level-card">

              <div className="level-icon">
                🎯
              </div>

              <h2>
                B1
              </h2>

              <h3>
                Intermediate
              </h3>

              <p>
                Communicate more confidently using practical German.
              </p>

              <button>
                Start B1 →
              </button>

            </div>

          </div>

          <p className="level-note">
            💡 Not sure about your level? You can take a placement test later.
          </p>

        </div>

      </div>
    );
  }

  // =========================
  // LOGIN PAGE
  // =========================

  return (
    <div className="login-page">

      <div className="login-left">

        <div className="brand">
          🇩🇪 <span>DeutschLernen</span>
        </div>

        <div className="welcome-content">

          <p className="small-title">
            WILLKOMMEN!
          </p>

          <h1>
            Learn German.
            <br />
            <span>
              Speak with confidence.
            </span>
          </h1>

          <p className="description">
            Learn German step by step with vocabulary,
            grammar, pronunciation and interactive practice.
          </p>

          <div className="features">

            <div>
              📚 Vocabulary
            </div>

            <div>
              🔊 Pronunciation
            </div>

            <div>
              🎯 Interactive Practice
            </div>

          </div>

        </div>

        <div className="quote">

          „Eine neue Sprache ist ein neues Leben.“

          <span>
            — A new language is a new life.
          </span>

        </div>

      </div>

      <div className="login-right">

        <div className="login-card">

          <div className="login-icon">
            🇩🇪
          </div>

          <h2>
            Welcome back!
          </h2>

          <p className="login-subtitle">
            Continue your German learning journey.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPage("levels");
            }}
          >

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>
              Password
            </label>

            <div className="password-box">

              <input
                type="password"
                placeholder="Enter your password"
                required
              />

              <span>
                👁️
              </span>

            </div>

            <div className="login-options">

              <label className="remember">

                <input type="checkbox" />

                Remember me

              </label>

              <a href="#">
                Forgot password?
              </a>

            </div>

            <button type="submit">
              Login →
            </button>

          </form>

          <div className="divider">
            <span>
              or
            </span>
          </div>

          <button className="google-btn">
            🌐 Continue with Google
          </button>

          <p className="signup">

            Don't have an account?

            <a href="#">
              {" "}Create account
            </a>

          </p>

        </div>

      </div>

    </div>
  );
}

export default App;