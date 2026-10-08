import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");

  // =========================
  // AUTHENTICATION STATE
  // =========================

  const [authMode, setAuthMode] = useState("login");
  const [loginEmail, setLoginEmail] = useState("test@example.com");
  const [loginPassword, setLoginPassword] = useState("123456");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState("");
  const [authMessageType, setAuthMessageType] = useState("");


  const [practiceQuestion, setPracticeQuestion] = useState(0);
  const [practiceAnswer, setPracticeAnswer] = useState(null);
  const [practiceScore, setPracticeScore] = useState(0);
  const [topicQuizIndex, setTopicQuizIndex] = useState(0);
  const [topicQuizAnswer, setTopicQuizAnswer] = useState(null);
  const [topicQuizScore, setTopicQuizScore] = useState(0);
  const [topicQuizCompleted, setTopicQuizCompleted] = useState(false);
  const [greetingView, setGreetingView] = useState("formal");
  const [greetingQuizIndex, setGreetingQuizIndex] = useState(0);
  const [greetingQuizAnswer, setGreetingQuizAnswer] = useState(null);
  const [greetingQuizScore, setGreetingQuizScore] = useState(0);
  const [greetingQuizCompleted, setGreetingQuizCompleted] = useState(false);

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

  const grammarPracticeQuestions = [
    {
      question: "What is the German pronoun for 'I'?",
      options: ["ich", "du", "er", "wir"],
      answer: "ich",
    },
    {
      question: "Which pronoun means 'you' in an informal conversation?",
      options: ["du", "sie", "wir", "ihr"],
      answer: "du",
    },
    {
      question: "What does 'er' mean?",
      options: ["he", "she", "you", "we"],
      answer: "he",
    },
    {
      question: "Which form is correct for 'we are'?",
      options: ["wir sind", "wir ist", "ihr seid", "sie sind"],
      answer: "wir sind",
    },
    {
      question: "Which sentence is correct?",
      options: ["Ich bin müde.", "Ich müde bin.", "Bin ich müde.", "Müde ich bin."],
      answer: "Ich bin müde.",
    },
    {
      question: "What does 'haben' mean in English?",
      options: ["to have", "to be", "to learn", "to go"],
      answer: "to have",
    },
    {
      question: "Choose the correct form: 'du ___'",
      options: ["bist", "bin", "sind", "seid"],
      answer: "bist",
    },
    {
      question: "What is the correct form for 'he has'?",
      options: ["er hat", "er habe", "er hast", "er haben"],
      answer: "er hat",
    },
    {
      question: "Which word means 'the' for a feminine noun?",
      options: ["die", "der", "das", "ein"],
      answer: "die",
    },
    {
      question: "Which article goes with 'Tisch'?",
      options: ["der", "die", "das", "kein"],
      answer: "der",
    },
    {
      question: "What is the correct article for 'Frau'?",
      options: ["die", "der", "das", "ein"],
      answer: "die",
    },
    {
      question: "What is the correct form of the accusative for 'der'?",
      options: ["den", "der", "dem", "die"],
      answer: "den",
    },
    {
      question: "What does 'Wo?' mean?",
      options: ["Where?", "Who?", "When?", "Why?"],
      answer: "Where?",
    },
    {
      question: "Which question word means 'why'?",
      options: ["Warum?", "Wann?", "Was?", "Wer?"],
      answer: "Warum?",
    },
    {
      question: "Which question is a yes/no question?",
      options: ["Bist du Student?", "Wo wohnst du?", "Warum bist du spät?", "Wie geht es dir?"],
      answer: "Bist du Student?",
    },
    {
      question: "Which sentence means 'Do you have time?'",
      options: ["Hast du Zeit?", "Du hast Zeit.", "Wo ist Zeit?", "Zeit hast du?"],
      answer: "Hast du Zeit?",
    },
    {
      question: "What is the correct negation for 'I am not tired'?",
      options: ["Ich bin nicht müde.", "Ich nicht bin müde.", "Ich bin kein müde.", "Nicht ich bin müde."],
      answer: "Ich bin nicht müde.",
    },
    {
      question: "Which form is correct for 'you (formal) are'?",
      options: ["Sie sind", "Sie bist", "Sie ist", "Sie seid"],
      answer: "Sie sind",
    },
    {
      question: "What does 'können' mean?",
      options: ["to be able to", "to want", "to have to", "to learn"],
      answer: "to be able to",
    },
    {
      question: "Which modal verb means 'must'?",
      options: ["müssen", "können", "wollen", "möchten"],
      answer: "müssen",
    },
    {
      question: "What is the plural of 'Buch'?",
      options: ["Bücher", "Bucher", "Büchen", "Buchi"],
      answer: "Bücher",
    },
    {
      question: "Which sentence is correct?",
      options: ["Ich lerne Deutsch.", "Deutsch lerne ich.", "Ich Deutsch lerne.", "Lerne ich Deutsch."],
      answer: "Ich lerne Deutsch.",
    },
    {
      question: "Where does the conjugated verb usually go in a basic German statement?",
      options: ["Second position", "First position", "At the end", "Anywhere"],
      answer: "Second position",
    },
    {
      question: "Which sentence means 'I drink water'?",
      options: ["Ich trinke Wasser.", "Wasser trinke ich.", "Trinke ich Wasser.", "Ich Wasser trinke."],
      answer: "Ich trinke Wasser.",
    },
    {
      question: "What is the correct answer to 'Wer?'",
      options: ["Who?", "What?", "Where?", "When?"],
      answer: "Who?",
    },
    {
      question: "Choose the correct form of 'haben' for 'we':",
      options: ["wir haben", "wir hat", "wir habt", "wir hast"],
      answer: "wir haben",
    },
    {
      question: "Which article is used for a masculine noun in the indefinite form?",
      options: ["ein", "eine", "der", "das"],
      answer: "ein",
    },
    {
      question: "What does 'nicht' usually do in a sentence?",
      options: ["It negates the word or idea it comes after.", "It changes the verb tense.", "It creates a question.", "It adds a plural."],
      answer: "It negates the word or idea it comes after.",
    },
    {
      question: "Which sentence is correct for 'I can speak German'?",
      options: ["Ich kann Deutsch sprechen.", "Ich deutsch sprechen kann.", "Ich spreche Deutsch kann.", "Kann ich Deutsch sprechen?"],
      answer: "Ich kann Deutsch sprechen.",
    },
    {
      question: "What does 'wohin' mean?",
      options: ["where to?", "where from?", "when?", "who?"],
      answer: "where to?",
    },
  ];

  const timePracticeQuestions = [
    {
      question: "How do you ask 'What time is it?' in German?",
      options: ["Wie spät ist es?", "Wo bist du?", "Wie alt bist du?", "Was ist das?"],
      answer: "Wie spät ist es?",
    },
    {
      question: "How do you say 'It is 3 o'clock' in German?",
      options: ["Es ist drei Uhr.", "Es ist Viertel nach drei.", "Es ist halb drei.", "Es ist acht Uhr."],
      answer: "Es ist drei Uhr.",
    },
    {
      question: "What does 'halb fünf' mean?",
      options: ["4:30", "5:00", "3:30", "4:15"],
      answer: "4:30",
    },
    {
      question: "Which phrase means 'at 8 o'clock'?",
      options: ["Um acht Uhr.", "Am Morgen.", "Heute Abend.", "Nachmittags."],
      answer: "Um acht Uhr.",
    },
    {
      question: "What does 'Viertel nach vier' mean?",
      options: ["4:15", "4:45", "4:30", "5:15"],
      answer: "4:15",
    },
    {
      question: "What is '4:45' in German?",
      options: ["Viertel vor fünf.", "Viertel nach fünf.", "Halb fünf.", "Zwanzig vor fünf."],
      answer: "Viertel vor fünf.",
    },
    {
      question: "Which time expression is used for midday?",
      options: ["mittags", "nachts", "morgens", "gestern"],
      answer: "mittags",
    },
    {
      question: "What does 'am Abend' mean?",
      options: ["in the evening", "in the morning", "at noon", "tomorrow"],
      answer: "in the evening",
    },
    {
      question: "Which phrase is correct for 'It is 8:20'?",
      options: ["Es ist zwanzig nach acht.", "Es ist halb acht.", "Es ist acht Uhr.", "Es ist Viertel vor acht."],
      answer: "Es ist zwanzig nach acht.",
    },
    {
      question: "What does 'morgen' mean?",
      options: ["tomorrow", "today", "yesterday", "night"],
      answer: "tomorrow",
    },
    {
      question: "Which phrase means 'It is 8:40'?",
      options: ["Es ist zwanzig vor neun.", "Es ist halb neun.", "Es ist neun Uhr.", "Es ist zehn vor neun."],
      answer: "Es ist zwanzig vor neun.",
    },
    {
      question: "Which sentence is correct for asking the time?",
      options: ["Wie viel Uhr ist es?", "Wie alt bist du?", "Wo ist die Schule?", "Was ist die Uhr?"],
      answer: "Wie viel Uhr ist es?",
    },
    {
      question: "What is the German word for 'in the morning'?",
      options: ["am Morgen", "am Abend", "mittags", "gestern"],
      answer: "am Morgen",
    },
    {
      question: "Which phrase means 'It is 4:15'?",
      options: ["Es ist Viertel nach vier.", "Es ist halb vier.", "Es ist fünf Uhr.", "Es ist fünf nach vier."],
      answer: "Es ist Viertel nach vier.",
    },
    {
      question: "Which sentence means 'It is 7:30'?",
      options: ["Es ist halb acht.", "Es ist acht Uhr.", "Es ist Viertel nach sieben.", "Es ist neun Uhr."],
      answer: "Es ist halb acht.",
    },
  ];

  const a1TopicLibrary = {
    greetings: {
      title: "Greetings",
      subtitle: "Learn common formal and informal greetings for everyday conversations.",
      icon: "👋",
      lessons: [
        { heading: "Formal greetings", items: ["Guten Tag! — Good day!", "Guten Morgen! — Good morning!", "Guten Abend! — Good evening!"] },
        { heading: "Informal greetings", items: ["Hallo! — Hello!", "Hi! — Hi!", "Servus! — Hi/Bye (regional)"] },
        { heading: "Introductions", items: ["Wie heißt du? — What is your name?", "Ich heiße Anna. — My name is Anna.", "Freut mich! — Nice to meet you!"] },
        { heading: "Everyday responses", items: ["Mir geht es gut. — I am doing well.", "Danke, gut. — Fine, thank you.", "Und dir? — And you?", "Bitte schön. — You're welcome."] }
      ],
      practice: [
        {
          question: "How do you say 'Good morning' in German?",
          options: ["Guten Morgen!", "Guten Abend!", "Gute Nacht!", "Hallo!"],
          answer: "Guten Morgen!"
        },
        {
          question: "How do you ask 'What is your name?' in German?",
          options: ["Wie heißt du?", "Wie geht es dir?", "Wo wohnst du?", "Was machst du?"],
          answer: "Wie heißt du?"
        },
        {
          question: "Which sentence means 'Nice to meet you!'?",
          options: ["Freut mich!", "Guten Tag!", "Bis später!", "Gute Nacht!"],
          answer: "Freut mich!"
        }
      ]
    },
    numbers: {
      title: "Numbers",
      subtitle: "Practice counting and using important numbers in daily German.",
      icon: "🔢",
      lessons: [
        { heading: "Basic numbers", items: ["eins — 1", "zwei — 2", "drei — 3", "vier — 4", "fünf — 5"] },
        { heading: "Teen numbers", items: ["zehn — 10", "elf — 11", "zwölf — 12", "dreizehn — 13", "vierzehn — 14"] },
        { heading: "Useful counting", items: ["zwanzig — 20", "fünfzig — 50", "hundert — 100", "tausend — 1000"] }
      ],
      practice: [
        {
          question: "What is 10 in German?",
          options: ["zehn", "zwanzig", "elf", "hundert"],
          answer: "zehn"
        },
        {
          question: "How do you say 20?",
          options: ["zehn", "zwanzig", "zwölf", "dreißig"],
          answer: "zwanzig"
        },
        {
          question: "What is the German word for 100?",
          options: ["hundert", "tausend", "fünfzig", "zwanzig"],
          answer: "hundert"
        }
      ]
    },
    time: {
      title: "Time",
      subtitle: "Learn how to ask the time, speak clearly and use common everyday German expressions.",
      icon: "⏰",
      lessons: [
        { heading: "Asking the time", items: [
          { text: "Wie spät ist es?", meaning: "What time is it?" },
          { text: "Wie viel Uhr ist es?", meaning: "What time is it?" },
          { text: "Es ist ... Uhr.", meaning: "It is ... o'clock." }
        ] },
        { heading: "Formal time", items: [
          { text: "Es ist drei Uhr.", meaning: "It is 3:00." },
          { text: "Es ist Viertel nach vier.", meaning: "It is 4:15." },
          { text: "Es ist halb fünf.", meaning: "It is 4:30." },
          { text: "Es ist Viertel vor fünf.", meaning: "It is 4:45." },
          { text: "Es ist zwanzig nach acht.", meaning: "It is 8:20." },
          { text: "Es ist zwanzig vor neun.", meaning: "It is 8:40." }
        ] },
        { heading: "Informal time", items: [
          { text: "4:15", meaning: "Viertel nach vier" },
          { text: "4:30", meaning: "halb fünf" },
          { text: "4:45", meaning: "Viertel vor fünf" },
          { text: "8:20", meaning: "zwanzig nach acht" },
          { text: "8:40", meaning: "zwanzig vor neun" }
        ] },
        { heading: "Time words", items: [
          { text: "morgens", meaning: "in the morning" },
          { text: "vormittags", meaning: "during the morning / before noon" },
          { text: "mittags", meaning: "at noon" },
          { text: "nachmittags", meaning: "in the afternoon" },
          { text: "abends", meaning: "in the evening" },
          { text: "nachts", meaning: "at night" },
          { text: "heute", meaning: "today" },
          { text: "morgen", meaning: "tomorrow / morning" },
          { text: "gestern", meaning: "yesterday" }
        ] },
        { heading: "Um / am", items: [
          { text: "um 8 Uhr", meaning: "at 8 o'clock" },
          { text: "am Morgen", meaning: "in the morning" },
          { text: "am Abend", meaning: "in the evening" }
        ] },
        { heading: "Useful time phrases", items: [
          { text: "Jetzt", meaning: "Now" },
          { text: "Spät", meaning: "Late" },
          { text: "Früh", meaning: "Early" },
          { text: "Heute Abend", meaning: "This evening" }
        ] }
      ],
      visualExamples: [
        { digital: "3:00", german: "Es ist drei Uhr.", meaning: "It is 3:00." },
        { digital: "4:15", german: "Es ist Viertel nach vier.", meaning: "It is 4:15." },
        { digital: "4:30", german: "Es ist halb fünf.", meaning: "It is 4:30." },
        { digital: "4:45", german: "Es ist Viertel vor fünf.", meaning: "It is 4:45." },
        { digital: "8:20", german: "Es ist zwanzig nach acht.", meaning: "It is 8:20." },
        { digital: "8:40", german: "Es ist zwanzig vor neun.", meaning: "It is 8:40." }
      ],
      practice: timePracticeQuestions
    },
    grammar: {
      title: "Basic German Grammar",
      subtitle: "Build confidence with A1 grammar essentials for everyday speaking and writing.",
      icon: "📘",
      lessons: [
        { heading: "1. Personal Pronouns", items: [
          { text: "ich", meaning: "I" },
          { text: "du", meaning: "you (informal)" },
          { text: "er", meaning: "he" },
          { text: "sie", meaning: "she / they / you (formal)" },
          { text: "es", meaning: "it" },
          { text: "wir", meaning: "we" },
          { text: "ihr", meaning: "you all" },
          { text: "Sie", meaning: "you (formal)" }
        ] },
        { heading: "2. Verb sein (to be)", items: [
          { text: "ich bin", meaning: "I am" },
          { text: "du bist", meaning: "you are" },
          { text: "er/sie/es ist", meaning: "he/she/it is" },
          { text: "wir sind", meaning: "we are" },
          { text: "ihr seid", meaning: "you all are" },
          { text: "sie/Sie sind", meaning: "they/you are" }
        ] },
        { heading: "3. Verb haben (to have)", items: [
          { text: "ich habe", meaning: "I have" },
          { text: "du hast", meaning: "you have" },
          { text: "er/sie/es hat", meaning: "he/she/it has" },
          { text: "wir haben", meaning: "we have" },
          { text: "ihr habt", meaning: "you all have" },
          { text: "sie/Sie haben", meaning: "they/you have" }
        ] },
        { heading: "4. Regular Verb Conjugation", items: [
          { text: "lernen — ich lerne, du lernst, er lernt", meaning: "to learn" },
          { text: "machen — ich mache, du machst, er macht", meaning: "to do / make" },
          { text: "wohnen — ich wohne, du wohnst, er wohnt", meaning: "to live / reside" },
          { text: "spielen — ich spiele, du spielst, er spielt", meaning: "to play" }
        ] },
        { heading: "5. German Sentence Structure", items: [
          { text: "Ich lerne Deutsch.", meaning: "I learn German." },
          { text: "Ich trinke Wasser.", meaning: "I drink water." },
          { text: "Du machst Hausaufgaben.", meaning: "You do homework." },
          { text: "Die Verbform steht oft an zweiter Stelle.", meaning: "The verb usually comes second." }
        ] },
        { heading: "6. Articles", items: [
          { text: "der Tisch", meaning: "the table (masculine)" },
          { text: "die Frau", meaning: "the woman (feminine)" },
          { text: "das Kind", meaning: "the child (neuter)" },
          { text: "ein Tisch", meaning: "a table" },
          { text: "eine Frau", meaning: "a woman" },
          { text: "kein Buch", meaning: "no book" },
          { text: "keine Katze", meaning: "no cat" }
        ] },
        { heading: "7. Accusative Basics", items: [
          { text: "der → den", meaning: "the (masculine) becomes den in the accusative" },
          { text: "ein → einen", meaning: "a becomes einen" },
          { text: "die → die", meaning: "the feminine stays die" },
          { text: "das → das", meaning: "the neuter stays das" },
          { text: "Ich sehe den Lehrer.", meaning: "I see the teacher." },
          { text: "Ich habe einen Freund.", meaning: "I have a friend." }
        ] },
        { heading: "8. W-Questions", items: [
          { text: "Wer?", meaning: "Who?" },
          { text: "Was?", meaning: "What?" },
          { text: "Wo?", meaning: "Where?" },
          { text: "Woher?", meaning: "Where from?" },
          { text: "Wohin?", meaning: "Where to?" },
          { text: "Wann?", meaning: "When?" },
          { text: "Wie?", meaning: "How?" },
          { text: "Warum?", meaning: "Why?" }
        ] },
        { heading: "9. Yes/No Questions", items: [
          { text: "Lernst du Deutsch?", meaning: "Do you learn German?" },
          { text: "Hast du Zeit?", meaning: "Do you have time?" },
          { text: "Bist du Student?", meaning: "Are you a student?" },
          { text: "Wohnst du hier?", meaning: "Do you live here?" }
        ] },
        { heading: "10. Negation", items: [
          { text: "nicht", meaning: "not" },
          { text: "kein", meaning: "no / not a" },
          { text: "keine", meaning: "no / not any (feminine/plural)" },
          { text: "Ich bin nicht müde.", meaning: "I am not tired." },
          { text: "Ich habe kein Auto.", meaning: "I do not have a car." },
          { text: "Sie hat keine Zeit.", meaning: "She has no time." }
        ] },
        { heading: "11. Modal Verbs", items: [
          { text: "können", meaning: "can / to be able to" },
          { text: "müssen", meaning: "must / have to" },
          { text: "wollen", meaning: "want to" },
          { text: "möchten", meaning: "would like" },
          { text: "Ich kann Deutsch sprechen.", meaning: "I can speak German." },
          { text: "Wir müssen lernen.", meaning: "We must learn." }
        ] },
        { heading: "12. Plural Basics", items: [
          { text: "die Bücher", meaning: "the books" },
          { text: "die Häuser", meaning: "the houses" },
          { text: "die Kinder", meaning: "the children" },
          { text: "die Freunde", meaning: "the friends" },
          { text: "Viele Nomen bekommen ein -e oder -er.", meaning: "Many nouns get an -e or -er ending." }
        ] },
        { heading: "13. Prepositions – A1 Basics", items: [
          { text: "in der Schule", meaning: "in school" },
          { text: "an der Tür", meaning: "at the door" },
          { text: "auf dem Tisch", meaning: "on the table" },
          { text: "mit Freunden", meaning: "with friends" },
          { text: "nach Hause", meaning: "home" },
          { text: "zu Hause", meaning: "at home" },
          { text: "von Freunden", meaning: "from friends" }
        ] },
        { heading: "14. Grammar Practice Overview", items: [
          { text: "Choose the correct answer.", meaning: "Each question is one step at a time." },
          { text: "Read the sentence carefully.", meaning: "Look for verb position, articles and question words." },
          { text: "Check your score at the end.", meaning: "Practice until the pattern feels natural." }
        ] }
      ],
      tables: [
        {
          title: "Personal pronouns",
          headers: ["German", "English", "Example"],
          rows: [
            ["ich", "I", "Ich bin müde."],
            ["du", "you (informal)", "Du bist freundlich."],
            ["er", "he", "Er lernt Deutsch."],
            ["sie", "she", "Sie ist nett."],
            ["es", "it", "Es ist groß."],
            ["wir", "we", "Wir sind hier."],
            ["ihr", "you all", "Ihr seid spät."],
            ["Sie", "you (formal)", "Sie sind Lehrer."],
          ]
        },
        {
          title: "Verb sein",
          headers: ["Subject", "German"],
          rows: [
            ["ich", "bin"],
            ["du", "bist"],
            ["er/sie/es", "ist"],
            ["wir", "sind"],
            ["ihr", "seid"],
            ["sie/Sie", "sind"]
          ]
        },
        {
          title: "Articles",
          headers: ["Type", "Masculine", "Feminine", "Neuter"],
          rows: [
            ["definite", "der", "die", "das"],
            ["indefinite", "ein", "eine", "ein"],
            ["negative", "kein", "keine", "kein"]
          ]
        }
      ],
      practice: grammarPracticeQuestions
    }
  };

  const resetTopicQuiz = () => {
    setTopicQuizIndex(0);
    setTopicQuizAnswer(null);
    setTopicQuizScore(0);
    setTopicQuizCompleted(false);
  };

  const greetingCollections = {
    formal: {
      title: "Formal Greetings",
      description: "Learn common formal greetings used in polite and professional situations.",
      items: (a1TopicLibrary.greetings.lessons[0]?.items || []).map((entry) => {
        const [german, english] =
          typeof entry === "string" ? entry.split(" — ") : [entry.text, entry.meaning];

        return { german, english, tamil: "" };
      }),
      practice: a1TopicLibrary.greetings.practice,
    },
    informal: {
      title: "Informal Greetings",
      description: "Learn everyday informal greetings for casual conversation.",
      items: (a1TopicLibrary.greetings.lessons[1]?.items || []).map((entry) => {
        const [german, english] =
          typeof entry === "string" ? entry.split(" — ") : [entry.text, entry.meaning];

        return { german, english, tamil: "" };
      }),
      practice: a1TopicLibrary.greetings.practice,
    },
    introductions: {
      title: "Introductions",
      description: "Useful phrases for introducing yourself and meeting new people.",
      items: (a1TopicLibrary.greetings.lessons[2]?.items || []).map((entry) => {
        const [german, english] =
          typeof entry === "string" ? entry.split(" — ") : [entry.text, entry.meaning];

        return { german, english, tamil: "" };
      }),
      practice: a1TopicLibrary.greetings.practice,
    },
    responses: {
      title: "Everyday Responses",
      description: "Useful replies for keeping simple German conversations going.",
      items: (a1TopicLibrary.greetings.lessons[3]?.items || []).map((entry) => {
        const [german, english] =
          typeof entry === "string" ? entry.split(" — ") : [entry.text, entry.meaning];

        return { german, english, tamil: "" };
      }),
      practice: a1TopicLibrary.greetings.practice,
    },
  };

  // =========================
  // A1 TOPIC PAGES
  // =========================

  const resetGreetingQuiz = () => {
    setGreetingQuizIndex(0);
    setGreetingQuizAnswer(null);
    setGreetingQuizScore(0);
    setGreetingQuizCompleted(false);
  };

  const handleGreetingSelect = (nextView) => {
    if (nextView === "practice") {
      setPage("greetings");
      window.requestAnimationFrame(() => {
        document.getElementById("greetings-practice")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      return;
    }

    setGreetingView(nextView);
    resetGreetingQuiz();
    setPage("greetings");
  };

  if (page === "greetings") {
    const activeGreeting = greetingCollections[greetingView] || greetingCollections.formal;
    const currentGreetingQuestion = activeGreeting.practice[greetingQuizIndex] || null;
    const greetingSidebarItems = [
      { key: "dashboard", label: "🏠 Dashboard", onClick: () => setPage("a1") },
      { key: "greetings", label: "👋 Greetings", onClick: () => handleGreetingSelect("formal") },
      { key: "vocabulary", label: "📚 Vocabulary", onClick: () => setPage("vocabulary") },
      { key: "numbers", label: "🔢 Numbers", onClick: () => setPage("numbers") },
      { key: "time", label: "⏰ Time", onClick: () => setPage("time") },
      { key: "grammar", label: "📖 Grammar", onClick: () => setPage("grammar") },
      { key: "practice", label: "🎯 Practice", onClick: () => handleGreetingSelect("practice") },
    ];
    const greetingCategories = [
      { key: "formal", label: "Formal Greetings" },
      { key: "informal", label: "Informal Greetings" },
      { key: "introductions", label: "Introductions" },
      { key: "responses", label: "Everyday Responses" },
    ];

    const handleGreetingAnswer = (option) => {
      if (!currentGreetingQuestion || greetingQuizAnswer !== null || greetingQuizCompleted) return;

      setGreetingQuizAnswer(option);

      if (option === currentGreetingQuestion.answer) {
        setGreetingQuizScore((score) => score + 1);
      }
    };

    const handleGreetingNext = () => {
      if (greetingQuizIndex < activeGreeting.practice.length - 1) {
        setGreetingQuizIndex((index) => index + 1);
        setGreetingQuizAnswer(null);
        return;
      }

      setGreetingQuizCompleted(true);
    };

    return (
      <div className="greetings-module">
        <aside className="greetings-sidebar">
          <div className="greetings-sidebar-header">
            <div className="greetings-sidebar-brand">🇩🇪 DeutschLernen</div>
            <div className="greetings-sidebar-label">A1 LEARNING</div>
          </div>

          <nav className="greetings-sidebar-nav">
            {greetingSidebarItems.map((item) => {
              const isActive = item.key === "greetings";

              return (
                <button
                  key={item.key}
                  type="button"
                  className={`greetings-nav-button ${isActive ? "active" : ""}`}
                  onClick={item.onClick}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="greetings-main">
          <div className="greetings-main-header">
            <div>
              <p className="greetings-kicker">GERMAN • A1</p>
              <h1>Greetings</h1>
            </div>
          </div>

          <p className="greetings-subtitle">{activeGreeting.description}</p>

          <nav className="greetings-category-nav" aria-label="Greeting categories">
            {greetingCategories.map((category) => (
              <button
                key={category.key}
                type="button"
                className={`greetings-category-button ${greetingView === category.key ? "active" : ""}`}
                aria-pressed={greetingView === category.key}
                onClick={() => handleGreetingSelect(category.key)}
              >
                {category.label}
              </button>
            ))}
          </nav>

          <div className="greeting-grid">
            {activeGreeting.items.map((item, index) => (
              <div className="greeting-card" key={`${activeGreeting.title}-${index}`}>
                <div className="greeting-card-top">
                  <span className="greeting-index">#{index + 1}</span>
                  <button
                    type="button"
                    className="listen-button small-listen"
                    onClick={() => speakGerman(item.german)}
                  >
                    🔊 Listen
                  </button>
                </div>

                <div className="greeting-german">🇩🇪 {item.german}</div>
                <div className="greeting-english">{item.english}</div>
                {item.tamil && <div className="greeting-tamil">{item.tamil}</div>}
              </div>
            ))}
          </div>

          <section className="greetings-practice-panel" id="greetings-practice">
            <div className="greetings-practice-header">
              <div>
                <span>INTERACTIVE PRACTICE</span>
                <h2>{activeGreeting.title} Check</h2>
              </div>
              <div className="greetings-score">Score: {greetingQuizScore} / {activeGreeting.practice.length}</div>
            </div>

            {greetingQuizCompleted ? (
              <div className="greetings-completion-card">
                <h3>Practice Complete</h3>
                <p>Your Score: {greetingQuizScore} / {activeGreeting.practice.length}</p>
                <button type="button" className="greetings-reset-button" onClick={resetGreetingQuiz}>
                  Try Again
                </button>
              </div>
            ) : currentGreetingQuestion ? (
              <>
                <p className="greeting-question-label">Question {greetingQuizIndex + 1} / {activeGreeting.practice.length}</p>
                <h3 className="greeting-question-text">{currentGreetingQuestion.question}</h3>

                <div className="greeting-practice-options">
                  {currentGreetingQuestion.options.map((option) => {
                    let optionClass = "";

                    if (greetingQuizAnswer !== null) {
                      if (option === currentGreetingQuestion.answer) {
                        optionClass = "correct-option";
                      } else if (option === greetingQuizAnswer) {
                        optionClass = "wrong-option";
                      }
                    }

                    return (
                      <button
                        key={option}
                        type="button"
                        className={`greeting-option ${optionClass}`.trim()}
                        onClick={() => handleGreetingAnswer(option)}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {greetingQuizAnswer !== null && (
                  <div className="greeting-feedback">
                    {greetingQuizAnswer === currentGreetingQuestion.answer ? (
                      <p className="correct-message">✅ Correct! Excellent work.</p>
                    ) : (
                      <p className="wrong-message">
                        ❌ Incorrect. The correct answer is <strong>{currentGreetingQuestion.answer}</strong>.
                      </p>
                    )}

                    <button type="button" className="greetings-next-button" onClick={handleGreetingNext}>
                      {greetingQuizIndex === activeGreeting.practice.length - 1 ? "Finish Practice" : "Next Question →"}
                    </button>
                  </div>
                )}
              </>
            ) : null}
          </section>
        </main>
      </div>
    );
  }

  if (["numbers", "time", "grammar"].includes(page)) {
    const topic = a1TopicLibrary[page];
    const topicPractice = topic.practice || [];
    const currentTopicQuestion = topicPractice[topicQuizIndex] || null;
    const topicQuizHeading = {
      greetings: "Greetings Check",
      numbers: "Numbers Check",
      time: "Time Check",
      grammar: "Grammar Check",
    }[page] || `${topic.title} Check`;
    const topicQuestionOptions = currentTopicQuestion?.options ?? [];

    const handleTopicAnswer = (option) => {
      if (!currentTopicQuestion || topicQuizAnswer !== null || topicQuizCompleted) return;

      setTopicQuizAnswer(option);

      if (option === currentTopicQuestion.answer) {
        setTopicQuizScore((score) => score + 1);
      }
    };

    const handleTopicNext = () => {
      if (topicQuizIndex < topicPractice.length - 1) {
        setTopicQuizIndex((index) => index + 1);
        setTopicQuizAnswer(null);
        return;
      }

      setTopicQuizCompleted(true);
    };

    return (
      <div className="alphabet-page module-page">
        <nav className="a1-navbar">
          <div className="a1-brand" onClick={() => setPage("a1")} style={{ cursor: "pointer" }}>
            🇩🇪 <span>DeutschLernen</span>
          </div>

          <button className="back-button" onClick={() => setPage("a1")}>
            ← Back to A1
          </button>
        </nav>

        <main className="module-container">
          <div className="alphabet-header">
            <p>GERMAN • A1</p>
            <h1>
              {topic.icon} {topic.title}
            </h1>
            <span>{topic.subtitle}</span>
          </div>

          <section className="module-grid">
            {topic.lessons.map((lesson) => (
              <div className="module-card" key={lesson.heading}>
                <h3>{lesson.heading}</h3>
                <ul className="module-list">
                  {lesson.items.map((item) => {
                    const phraseText = typeof item === "string" ? item.split(" — ")[0] : item.text;
                    const label = typeof item === "string" ? item : `${item.text} — ${item.meaning}`;

                    return (
                      <li key={label} className="lesson-list-item">
                        <span>{label}</span>
                        <button
                          className="listen-button inline-listen"
                          onClick={() => speakGerman(phraseText)}
                          type="button"
                        >
                          🔊 Listen
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </section>

          {page === "time" && topic.visualExamples && (
            <section className="time-example-panel">
              <div className="time-example-header">
                <span>VISUAL TIME EXAMPLES</span>
                <h2>Digital time to real German</h2>
              </div>

              <div className="time-example-grid">
                {topic.visualExamples.map((entry) => (
                  <div className="time-example-card" key={entry.german || entry.example}>
                    <div className="time-example-clock">{entry.digital || entry.example}</div>
                    <div className="time-example-sentence">{entry.german || entry.text}</div>
                    <div className="time-example-meaning">{entry.meaning || "English meaning"}</div>
                    <button
                      className="listen-button"
                      onClick={() => speakGerman(entry.german || entry.text)}
                      type="button"
                    >
                      🔊 Listen
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {page === "grammar" && topic.tables && (
            <section className="grammar-table-panel">
              <div className="time-example-header">
                <span>GRAMMAR TABLES</span>
                <h2>Quick A1 reference</h2>
              </div>

              <div className="grammar-table-grid">
                {topic.tables.map((table) => (
                  <div className="grammar-table-card" key={table.title}>
                    <h3>{table.title}</h3>
                    <div className="grammar-table-wrap">
                      <table className="grammar-table">
                        <thead>
                          <tr>
                            {table.headers.map((header) => (
                              <th key={header}>{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row, rowIndex) => (
                            <tr key={`${table.title}-${rowIndex}`}>
                              {row.map((cell, cellIndex) => (
                                <td key={`${table.title}-${rowIndex}-${cellIndex}`}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="topic-quiz-panel">
            <div className="quiz-header-row">
              <div>
                <span>INTERACTIVE PRACTICE</span>
                <h2>{topicQuizHeading}</h2>
              </div>

              <div className="score-badge">
                Score: {topicQuizScore} / {topicPractice.length}
              </div>
            </div>

            {topicQuizCompleted ? (
              <div className="completion-card">
                <h3>Practice Complete</h3>
                <p>Your Score: {topicQuizScore} / {topicPractice.length}</p>
                <button className="next-question-button" onClick={resetTopicQuiz} type="button">
                  Try Again
                </button>
              </div>
            ) : currentTopicQuestion ? (
              <>
                <p className="quiz-question-label">
                  Question {topicQuizIndex + 1} / {topicPractice.length}
                </p>

                <h3 className="quiz-question-text">{currentTopicQuestion.question}</h3>

                <div className="quiz-options">
                  {topicQuestionOptions.map((option) => {
                    let optionClass = "";

                    if (topicQuizAnswer !== null) {
                      if (option === currentTopicQuestion.answer) {
                        optionClass = "correct-option";
                      } else if (option === topicQuizAnswer) {
                        optionClass = "wrong-option";
                      }
                    }

                    return (
                      <button
                        key={option}
                        type="button"
                        className={`quiz-option ${optionClass}`.trim()}
                        onClick={() => handleTopicAnswer(option)}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {topicQuizAnswer !== null && (
                  <div className="quiz-feedback">
                    {topicQuizAnswer === currentTopicQuestion.answer ? (
                      <p className="correct-message">✅ Correct! Excellent work.</p>
                    ) : (
                      <p className="wrong-message">
                        ❌ Incorrect. The correct answer is <strong>{currentTopicQuestion.answer}</strong>.
                      </p>
                    )}

                    <button className="next-question-button" onClick={handleTopicNext} type="button">
                      {topicQuizIndex === topicPractice.length - 1 ? "Finish Practice" : "Next Question →"}
                    </button>
                  </div>
                )}
              </>
            ) : null}
          </section>
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
                  4 lessons
                </span>

                <button onClick={() => setPage("greetings")}>
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
                  3 lessons
                </span>

                <button onClick={() => setPage("numbers")}>
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
                  3 lessons
                </span>

                <button onClick={() => setPage("time")}>
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
                  3 lessons
                </span>

                <button onClick={() => setPage("grammar")}>
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

          </div>

          <p className="level-note">
            💡 Not sure about your level? You can take a placement test later.
          </p>

        </div>

      </div>
    );
  }

  // =========================
  // LOGIN / REGISTER PAGE
  // =========================

  const handleLogin = async (e) => {
    e.preventDefault();

    setAuthLoading(true);
    setAuthMessage("");
    setAuthMessageType("");

    try {
      const response = await fetch("http://127.0.0.1:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setAuthMessage(data.message || "Invalid email or password");
        setAuthMessageType("error");
        return;
      }

      localStorage.setItem("deutschLernenUser", JSON.stringify(data.user));
      setAuthMessage(data.message || "Login successful");
      setAuthMessageType("success");

      setTimeout(() => {
        setPage("levels");
      }, 400);
    } catch (error) {
      console.error("Login error:", error);
      setAuthMessage("Cannot connect to the Flask backend. Please start the backend.");
      setAuthMessageType("error");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setAuthLoading(true);
    setAuthMessage("");
    setAuthMessageType("");

    try {
      const response = await fetch("http://127.0.0.1:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: registerName,
          email: registerEmail,
          password: registerPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setAuthMessage(data.message || "Registration failed");
        setAuthMessageType("error");
        return;
      }

      setAuthMessage(data.message || "Registration successful");
      setAuthMessageType("success");

      setLoginEmail(registerEmail);
      setLoginPassword("");
      setRegisterName("");
      setRegisterEmail("");
      setRegisterPassword("");

      setTimeout(() => {
        setAuthMode("login");
        setAuthMessage("Registration successful. Please login.");
        setAuthMessageType("success");
      }, 700);
    } catch (error) {
      console.error("Registration error:", error);
      setAuthMessage("Cannot connect to the Flask backend. Please start the backend.");
      setAuthMessageType("error");
    } finally {
      setAuthLoading(false);
    }
  };

  const switchAuthMode = (mode) => {
    setAuthMode(mode);
    setAuthMessage("");
    setAuthMessageType("");
  };

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
            {authMode === "login" ? "Welcome back!" : "Create your account"}
          </h2>

          <p className="login-subtitle">
            {authMode === "login"
              ? "Continue your German learning journey."
              : "Start your German learning journey today."}
          </p>

          {authMode === "login" ? (
            <form onSubmit={handleLogin}>

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />

              <label>
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />

              <div className="login-options">

                <label className="remember">
                  <input type="checkbox" />
                  Remember me
                </label>

                <a href="#" onClick={(e) => e.preventDefault()}>
                  Forgot password?
                </a>

              </div>

              <button type="submit" disabled={authLoading}>
                {authLoading ? "Logging in..." : "Login →"}
              </button>

            </form>
          ) : (
            <form onSubmit={handleRegister}>

              <label>
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                required
              />

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />

              <label>
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                minLength={6}
                required
              />

              <button type="submit" disabled={authLoading}>
                {authLoading ? "Creating account..." : "Create Account →"}
              </button>

            </form>
          )}

          {authMessage && (
            <div
              style={{
                marginTop: "16px",
                padding: "12px 14px",
                borderRadius: "10px",
                background: authMessageType === "success" ? "#dcfce7" : "#fee2e2",
                color: authMessageType === "success" ? "#166534" : "#b91c1c",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {authMessage}
            </div>
          )}

          {authMode === "login" ? (
            <>
              <div className="divider">
                <span>or</span>
              </div>

              <button
                className="google-btn"
                type="button"
                onClick={() => {
                  setAuthMessage("Google login is not connected yet.");
                  setAuthMessageType("error");
                }}
              >
                🌐 Continue with Google
              </button>

              <p className="signup">
                Don't have an account?
                <a
                  href="#register"
                  onClick={(e) => {
                    e.preventDefault();
                    switchAuthMode("register");
                  }}
                >
                  {" "}Create account
                </a>
              </p>
            </>
          ) : (
            <p className="signup">
              Already have an account?
              <a
                href="#login"
                onClick={(e) => {
                  e.preventDefault();
                  switchAuthMode("login");
                }}
              >
                {" "}Login
              </a>
            </p>
          )}

        </div>

      </div>

    </div>
  );
}

export default App;