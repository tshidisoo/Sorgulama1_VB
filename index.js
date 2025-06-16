// Quiz verileri
const questions = [
    {
        question: "SQL'de tablodan tüm alanları sorgulamak için hangi sembol kullanılır?",
        options: ["*", "%", "_", "#"],
        correct: 0
    },
    {
        question: "Tekrarlı satırları önlemek için hangi anahtar kelime kullanılır?",
        options: ["UNIQUE", "DISTINCT", "DIFFERENT", "SINGLE"],
        correct: 1
    },
    {
        question: "MSSQL'de belirli sayıda kayıt getirmek için hangi anahtar kelime kullanılır?",
        options: ["LIMIT", "TOP", "FIRST", "HEAD"],
        correct: 1
    },
    {
        question: "MySQL'de belirli sayıda kayıt getirmek için hangi anahtar kelime kullanılır?",
        options: ["TOP", "LIMIT", "FIRST", "COUNT"],
        correct: 1
    },
    {
        question: "Alanlara takma isim vermek için hangi anahtar kelime kullanılır?",
        options: ["AS", "ALIAS", "NAME", "CALL"],
        correct: 0
    },
    {
        question: "Küçükten büyüğe sıralama yapmak için ORDER BY ile hangi anahtar kelime kullanılır?",
        options: ["ASC", "DESC", "UP", "DOWN"],
        correct: 0
    },
    {
        question: "Büyükten küçüğe sıralama yapmak için ORDER BY ile hangi anahtar kelime kullanılır?",
        options: ["ASC", "DESC", "DOWN", "LOW"],
        correct: 1
    },
    {
        question: "Eşit değil koşulu için hangi operatörler kullanılabilir?",
        options: ["!= veya <>", "!= veya ><", "<> veya =!", "Sadece !="],
        correct: 0
    },
    {
        question: "Belirtilen aralıktaki değerleri getirmek için hangi operatör kullanılır?",
        options: ["IN", "BETWEEN", "RANGE", "FROM"],
        correct: 1
    },
    {
        question: "NULL değerleri sorgulamak için hangi ifade kullanılır?",
        options: ["= NULL", "IS NULL", "== NULL", "NULL ="],
        correct: 1
    },
    {
        question: "Belirtilen kümede olan değerleri sorgulamak için hangi operatör kullanılır?",
        options: ["IN", "BETWEEN", "LIKE", "EXISTS"],
        correct: 0
    },
    {
        question: "Belirli bir kalıba uygun değerleri sorgulamak için hangi operatör kullanılır?",
        options: ["MATCH", "PATTERN", "LIKE", "SIMILAR"],
        correct: 2
    },
    {
        question: "LIKE operatörü ile % karakteri neyi ifade eder?",
        options: ["Tek karakter", "Herhangi bir yazı", "Sayı", "Boşluk"],
        correct: 1
    },
    {
        question: "LIKE operatörü ile _ (alt tire) karakteri neyi ifade eder?",
        options: ["Herhangi bir yazı", "Tek karakter", "Boşluk", "Sayı"],
        correct: 1
    },
    {
        question: "Kayıt sayısını bulmak için hangi fonksiyon kullanılır?",
        options: ["SUM", "COUNT", "TOTAL", "NUMBER"],
        correct: 1
    },
    {
        question: "Toplam hesaplamak için hangi fonksiyon kullanılır?",
        options: ["TOTAL", "SUM", "ADD", "PLUS"],
        correct: 1
    },
    {
        question: "Ortalama hesaplamak için hangi fonksiyon kullanılır?",
        options: ["MEAN", "AVG", "AVERAGE", "MID"],
        correct: 1
    },
    {
        question: "En büyük değeri bulmak için hangi fonksiyon kullanılır?",
        options: ["BIGGEST", "MAX", "TOP", "HIGH"],
        correct: 1
    },
    {
        question: "En küçük değeri bulmak için hangi fonksiyon kullanılır?",
        options: ["SMALLEST", "LOW", "MIN", "BOTTOM"],
        correct: 2
    },
    {
        question: "Gruplama yapmak için hangi anahtar kelime kullanılır?",
        options: ["GROUP BY", "GROUP", "BY GROUP", "GROUPING"],
        correct: 0
    },
    {
        question: "GROUP BY ile beraber koşul belirtmek için hangi anahtar kelime kullanılır?",
        options: ["WHERE", "HAVING", "CONDITION", "IF"],
        correct: 1
    },
    {
        question: "WHERE ve HAVING arasındaki fark nedir?",
        options: ["Aynı işlevi görürler", "WHERE gruplamadan önce, HAVING gruplamadan sonra çalışır", "HAVING daha hızlıdır", "WHERE sadece sayısal değerlerle çalışır"],
        correct: 1
    },
    {
        question: "Alt sorgu (subquery) hangi durumda kullanılır?",
        options: ["Sadece SELECT ile", "Bir sorgunun sonucu başka bir sorguda koşul olarak kullanıldığında", "Sadece WHERE ile", "Sadece COUNT ile"],
        correct: 1
    },
    {
        question: "Alt sorgulamalarda ANY operatörü ne işe yarar?",
        options: ["Tüm değerlerle eşleşir", "Değerlerden herhangi biri ile eşleşir", "Hiçbir değerle eşleşmez", "Sadece ilk değerle eşleşir"],
        correct: 1
    },
    {
        question: "Alt sorgulamalarda ALL operatörü ne işe yarar?",
        options: ["Değerlerden herhangi biri ile eşleşir", "Tüm değerlerle eşleşmelidir", "Hiçbir değerle eşleşmez", "Sadece son değerle eşleşir"],
        correct: 1
    },
    {
        question: "Hangi SQL komutu veri sorgulama (DQL) kategorisinde yer alır?",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        correct: 2
    },
    {
        question: "FROM anahtar kelimesi neyi belirtir?",
        options: ["Sütun adlarını", "Hangi tablodan sorgu yapılacağını", "Koşulları", "Sıralama düzenini"],
        correct: 1
    },
    {
        question: "'SELECT TOP 20 PERCENT' komutu ne yapar?",
        options: ["İlk 20 kaydı getirir", "Kayıtların %20'sini getirir", "20. kaydı getirir", "Son 20 kaydı getirir"],
        correct: 1
    },
    {
        question: "Tarih karşılaştırmalarında hangi format kullanılır?",
        options: ["GG-AA-YYYY", "AA-GG-YYYY", "YYYY-AA-GG", "YYYY-GG-AA"],
        correct: 2
    },
    {
        question: "LIKE operatörü ile '[a-f]' ifadesi ne anlama gelir? (MSSQL)",
        options: ["a'dan f'ye kadar olan harfler", "Sadece a ve f harfleri", "a ve f harfleri hariç", "Herhangi bir harf"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let answeredQuestions = new Set(); // Track which questions have been answered

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index, optionElement);
        optionsContainer.appendChild(optionElement);
    });
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').disabled = !answeredQuestions.has(currentQuestionIndex);
    selectedAnswer = null;
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function selectOption(index, element) {
    // Önceki seçimi temizle
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Yeni seçimi işaretle
    element.classList.add('selected');
    selectedAnswer = index;
    document.getElementById('nextBtn').disabled = false;
    answeredQuestions.add(currentQuestionIndex);
}

function nextQuestion() {
    if (selectedAnswer === null) return;
    
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    // Doğru ve yanlış cevapları göster
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && index !== question.correct) {
            option.classList.add('incorrect');
        }
        option.onclick = null; // Tıklamayı devre dışı bırak
    });
    
    // Puan hesapla
    if (selectedAnswer === question.correct) {
        score++;
        document.getElementById('score').textContent = score;
    }
    
    // Sonraki soruya geç veya quizi bitir
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

function showResult() {
    document.querySelector('.question-container').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('finalScore').textContent = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    answeredQuestions.clear();
    
    document.getElementById('score').textContent = '0';
    document.querySelector('.question-container').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    
    loadQuestion();
}

function showCodingQuestions() {
    document.getElementById('multipleChoice').style.display = 'none';
    document.getElementById('codingQuestions').style.display = 'block';
}

function showMultipleChoice() {
    document.getElementById('codingQuestions').style.display = 'none';
    document.getElementById('multipleChoice').style.display = 'block';
}

// Sayfa yüklendiğinde ilk soruyu yükle
window.onload = function() {
    loadQuestion();
};