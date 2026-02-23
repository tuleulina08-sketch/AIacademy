const allQuestions = {
    'neural': [
        { q: "Жасанды интеллектің негізі болып табылатын математикалық модель қалай аталады?", a: ["Нейрон", "Алгоритм", "Чип", "Деректер қоры"], correct: 0 },
        { q: "Нейронға келетін деректің маңыздылығын не анықтайды?", a: ["Салмақтар (Weights)", "Түс", "Жылдамдық", "Код көлемі"], correct: 0 },
        { q: "Сигналдың келесі қабатқа өтуін не шешеді?", a: ["Активтендіру функциясы", "Операциялық жүйе", "Экран", "BIOS"], correct: 0 },
        { q: "Ең қарапайым бір қабатты нейрондық желі қалай аталады?", a: ["Перцептрон", "Трансформер", "Сервер", "Микросхема"], correct: 0 },
        { q: "Модельдің икемділігін реттейтін тұрақты сан қалай аталады?", a: ["Bias (Ауытқу)", "Loop", "Array", "Error"], correct: 0 },
        { q: "Ықтималдықты есептеу үшін жиі қолданылатын функция түрі:", a: ["Sigmoid", "HTML", "Boolean", "Random"], correct: 0 },
        { q: "Терең оқытуда есептеуді жылдамдату үшін қолданылатын функция:", a: ["ReLU", "Plus-Minus", "Binary", "Text"], correct: 0 },
        { q: "Көп класты жіктеуде соңғы қабатта қолданылатын функция:", a: ["Softmax", "Hardmax", "Min-Max", "Medium"], correct: 0 },
        { q: "Модельдің қаншалықты қателескенін өлшейтін функция:", a: ["Loss Function", "Win Function", "Start Function", "Stop Function"], correct: 0 },
        { q: "Нақты жауап пен модель жауабының айырмашылығын шаршылап есептейтін әдіс:", a: ["MSE", "ABC", "SQL", "CPU"], correct: 0 },
        { q: "Салмақтарды жаңартудың негізгі әдісі қалай аталады?", a: ["Backpropagation", "Forwarding", "Deleting", "Printing"], correct: 0 },
        { q: "Backpropagation кезінде қандай математикалық амал қолданылады?", a: ["Туынды (Derivative)", "Интеграл", "Логарифм", "Пропорция"], correct: 0 },
        { q: "Loss функциясын азайту үшін қолданылатын негізгі алгоритм:", a: ["Gradient Descent", "Random Select", "Quick Sort", "Easy Mode"], correct: 0 },
        { q: "Оқу жылдамдығын реттейтін параметр қалай аталады?", a: ["Learning Rate", "Speed Limit", "Time Counter", "Step Back"], correct: 0 },
        { q: "Модельдің жаттығу деректерін жаттап алып, жаңа деректе нашар жұмыс істеуі:", a: ["Overfitting", "Underfitting", "Normal Fit", "Perfect Fit"], correct: 0 },
        { q: "Overfitting-ті болдырмау үшін нейрондарды кездейсоқ өшіру әдісі:", a: ["Dropout", "Delete", "Shutdown", "Off-Mode"], correct: 0 },
        { q: "Кескіндерді (суреттерді) тануға арналған нейрондық желі түрі:", a: ["CNN", "RNN", "MLP", "HTTP"], correct: 0 },
        { q: "Суреттегі жиектер мен фигураларды танитын қабат қалай аталады?", a: ["Convolution", "Pooling", "Full Connected", "Input"], correct: 0 },
        { q: "Тізбекті деректермен (мәтін, дыбыс) жұмыс істейтін желі түрі:", a: ["RNN", "CNN", "ANN", "VPN"], correct: 0 },
        { q: "Қолмен жазылған цифрлар базасы AI әлемінде қалай аталады?", a: ["MNIST", "KAGGLE", "GITHUB", "COLAB"], correct: 0 }
    ],
    'ds': [
    { q: "Деректерден құндылық алумен айналысатын ғылым саласы қалай аталады?", a: ["Data Science", "Web Design", "Marketing", "Cybersecurity"], correct: 0 },
    { q: "SQL деректер қорындағы кестелерден тұратын деректер түрі:", a: ["Structured (Құрылымдалған)", "Unstructured", "Random", "Chaos"], correct: 0 },
    { q: "Суреттер, мәтіндер және аудио файлдар деректердің қай түріне жатады?", a: ["Unstructured (Құрылымдалмаған)", "Structured", "Excel", "Boolean"], correct: 0 },
    { q: "Деректердің орташа арифметикалық мәні қалай аталады?", a: ["Mean", "Median", "Mode", "Standard Deviation"], correct: 0 },
    { q: "Деректер тізбегінің дәл ортасында орналасқан мән:", a: ["Median", "Mean", "Average", "Bias"], correct: 0 },
    { q: "Деректер жиынтығында ең жиі кездесетін мән:", a: ["Mode", "Median", "Mean", "Outlier"], correct: 0 },
    { q: "Деректердің шашыраңқылығын көрсететін статистикалық көрсеткіш:", a: ["Standard Deviation (Стандартты ауытқу)", "Min-Max", "Sum", "Count"], correct: 0 },
    { q: "EDA (Exploratory Data Analysis) кезеңінің мақсаты не?", a: ["Деректерді зерттеу және заңдылықтарды табу", "Модельді сату", "Кодты серверге жүктеу", "Дизайн жасау"], correct: 0 },
    { q: "Жалпы деректерден тым алшақ жатқан 'шулы' мәндер қалай аталады?", a: ["Outliers", "Inliers", "Normal", "Trends"], correct: 0 },
    { q: "Екі айнымалының арасындағы байланысты көрсететін көрсеткіш:", a: ["Correlation (Корреляция)", "Isolation", "Integration", "Summation"], correct: 0 },
    { q: "Бар деректерден жаңа пайдалы айнымалылар жасау процесі:", a: ["Feature Engineering", "Data Cleaning", "Web Scraping", "Bug Fixing"], correct: 0 },
    { q: "Барлық сандарды бір диапазонға (мысалы 0-ден 1-ге дейін) келтіру:", a: ["Scaling (Масштабтау)", "Deleting", "Printing", "Copying"], correct: 0 },
    { q: "Деректердегі бос орындарды орташа мәнмен толтыру әдісі:", a: ["Imputation", "Dropping", "Formatting", "Archiving"], correct: 0 },
    { q: "Екі нұсқаның (A және B) қайсысы тиімді екенін тексеру әдісі:", a: ["A/B Testing", "C-Test", "Beta Test", "Stress Test"], correct: 0 },
    { q: "Гипотезаның дұрыстығын өлшейтін статистикалық көрсеткіш:", a: ["P-value", "Q-value", "R-score", "X-factor"], correct: 0 },
    { q: "Деректер қорынан ақпаратты алу үшін қолданылатын тіл:", a: ["SQL", "HTML", "CSS", "JSON"], correct: 0 },
    { q: "SQL-де деректерді таңдап алу командасы:", a: ["SELECT", "UPDATE", "DELETE", "CREATE"], correct: 0 },
    { q: "SQL-де екі кестені біріктіру үшін қолданылатын оператор:", a: ["JOIN", "LINK", "CONNECT", "ATTACH"], correct: 0 },
    { q: "Модельді жаттықтыруға арналған деректер жиынтығы қалай аталады?", a: ["Train set", "Test set", "Final set", "Hidden set"], correct: 0 },
    { q: "Пайдаланушы деректерінің құпиялылығын сақтау принципі:", a: ["Data Privacy", "Data Openness", "Data Copying", "Data Selling"], correct: 0 }
],
    'nlp': [
    { q: "NLP (Табиғи тілді өңдеу) саласының басты мақсаты не?", a: ["Адам тілі мен компьютер арасындағы байланыс", "Бейнеойындар жасау", "Компьютерді жөндеу", "Интернет жылдамдығын арттыру"], correct: 0 },
    { q: "Мәтінді жеке сөздерге немесе бөлшектерге бөлу процесі қалай аталады?", a: ["Токенизация", "Компиляция", "Интеграция", "Дефрагментация"], correct: 0 },
    { q: "Жиі кездесетін, бірақ маңызды мағынасы жоқ сөздер (және, мен, да, де) қалай аталады?", a: ["Стоп-сөздер", "Кілт сөздер", "Мета-деректер", "Сөздіктер"], correct: 0 },
    { q: "Сөздің негізін табу үшін оның жалғауларын қиып тастау әдісі:", a: ["Стемминг", "Лемматизация", "Векторлау", "Парсинг"], correct: 0 },
    { q: "Сөзді өзінің сөздік (бастапқы) формасына келтіру процесі:", a: ["Лемматизация", "Стемминг", "Шифрлау", "Трансляция"], correct: 0 },
    { q: "Компьютерге мәтінді түсіну неге қиын?", a: ["Ол тек сандарды түсінеді", "Жады аз", "Әліпбиді білмейді", "Сөздер тым ұзын"], correct: 0 },
    { q: "Сөздерді векторларға (сандарға) айналдыру әдісі:", a: ["Векторлау", "Сканерлеу", "Форматтау", "Индексация"], correct: 0 },
    { q: "Сөздің мәтіндегі маңыздылығын оның жиілігіне қарай есептейтін әдіс:", a: ["TF-IDF", "HTTP", "RGB", "JSON"], correct: 0 },
    { q: "Сөздердің мағыналық жақындығын табатын алгоритм (мысалы, 'патша' мен 'ханша'):", a: ["Word2Vec", "File2Vec", "Text2Map", "Code2Doc"], correct: 0 },
    { q: "Сөздердің векторлық кеңістіктегі бейнесі қалай аталады?", a: ["Embedding (Эмбеддинг)", "Outline", "Backup", "Grid"], correct: 0 },
    { q: "Мәтіндегі 'n' сөзден тұратын тізбек қалай аталады?", a: ["N-gram", "X-code", "Alpha-bit", "Beta-word"], correct: 0 },
    { q: "Сөйлемдегі келесі сөзді болжайтын ықтималдық моделі:", a: ["Тілдік модель", "Графикалық модель", "Физикалық модель", "Желілік модель"], correct: 0 },
    { q: "Модельге мәтіннің ең маңызды бөліктеріне назар аударуға мүмкіндік беретін механизм:", a: ["Attention (Зейін)", "Memory", "Speed", "Storage"], correct: 0 },
    { q: "GPT және BERT модельдері негізделген заманауи архитектура:", a: ["Transformer (Трансформер)", "Processor", "Converter", "Amplifier"], correct: 0 },
    { q: "Трансформерлердің RNN-нен басты артықшылығы неде?", a: ["Деректерді параллель өңдеу", "Тоқты аз тұтыну", "Арзан болуы", "Деректерді қажет етпеуі"], correct: 0 },
    { q: "BERT моделінің толық атауы:", a: ["Bidirectional Encoder Representations from Transformers", "Basic Electronic Robotic Tool", "Binary Efficient Reading Tech", "Best Engine for Real Text"], correct: 0 },
    { q: "BERT моделіндегі 'екі бағыттылық' нені білдіреді?", a: ["Контексті солдан оңға және оңнан солға түсіну", "Екі тілде жұмыс істеу", "Мәтінді соңынан бастап оқу", "Екі процессоры болуы"], correct: 0 },
    { q: "Орасан зор деректерде оқытылған үлкен тілдік модельдер:", a: ["LLM", "SSD", "RAM", "CPU"], correct: 0 },
    { q: "Нейрожелінің сенімді түрде өтірік ақпарат айтуы қалай аталады?", a: ["Галлюцинация", "Оңтайландыру", "Инициализация", "Корреляция"], correct: 0 },
    { q: "ChatGPT-ге негіз болған модель қайсы?", a: ["GPT", "BERT", "RNN", "CNN"], correct: 0 }
]
};

// 1. URL-ден курс ID-ін анықтау (Мис: quiz.html?course=neural)
const urlParams = new URLSearchParams(window.location.search);
const courseID = urlParams.get('course') || 'neural';
const questions = allQuestions[courseID];

// 2. Айнымалылар
let currentIdx = 0;
let score = 0;
let selectedOption = null;
let timeLeft = 900; // 15 минут (секундпен)

// 3. HTML элементтерін алу
const qText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const currentQDisplay = document.getElementById('current-q');
const progressBar = document.getElementById('bar');
const timeDisplay = document.getElementById('time');

// 4. Таймер функциясы
const timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timeDisplay.innerText = `${minutes}:${seconds}`;
    
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        showResults();
    }
    timeLeft--;
}, 1000);

// 5. Сұрақты жүктеу
function loadQuestion() {
    const currentQ = questions[currentIdx];
    
    // Сұрақ мәтіні мен нөмірі
    qText.innerText = currentQ.q;
    currentQDisplay.innerText = currentIdx + 1;
    
    // Прогресс барды жаңарту
    const progressPercent = ((currentIdx + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Жауаптарды тазалау және қайта толтыру
    optionsContainer.innerHTML = '';
    selectedOption = null;
    nextBtn.disabled = true;

    currentQ.a.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = opt;
        btn.onclick = () => selectOption(index, btn);
        optionsContainer.appendChild(btn);
    });
}

// 6. Жауапты таңдау
function selectOption(idx, btn) {
    selectedOption = idx;
    
    // Барлық батырмалардан 'selected' класын алып тастау
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.classList.remove('selected'));
    
    // Таңдалған батырмаға стиль қосу
    btn.classList.add('selected');
    nextBtn.disabled = false;
}

// 7. "Келесі" батырмасын басу
nextBtn.onclick = () => {
    // Ұпай есептеу
    if (selectedOption === questions[currentIdx].correct) {
        score++;
    }

    currentIdx++;

    if (currentIdx < questions.length) {
        loadQuestion();
    } else {
        clearInterval(timerInterval);
        showResults();
    }
};

// 8. Нәтижені көрсету
function showResults() {
    document.getElementById('quiz-card').style.display = 'none';
    const resultCard = document.getElementById('result-card');
    resultCard.style.display = 'block';

    const scoreText = document.getElementById('score-text');
    scoreText.innerText = `Сіздің нәтижеңіз: ${score} / ${questions.length}`;

    const certMsg = document.getElementById('cert-msg');
    
    // Өту шарты: 75% (20-дан 15 сұрақ)
    if (score >= 15) {
        certMsg.innerHTML = "🏆 Құттықтаймыз! Сіз сынақтан сәтті өттіңіз.";
        certMsg.style.color = "#00ff88";
        // Прогресті сақтау
        localStorage.setItem(`passed_${courseID}`, 'true');
    } else {
        certMsg.innerHTML = "❌ Өту ұпайы жиналмады. Қайта көріңіз.";
        certMsg.style.color = "#ff4444";
    }
}

// Тестті іске қосу
loadQuestion();