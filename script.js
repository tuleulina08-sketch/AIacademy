document.querySelector('.btn-primary').addEventListener('click', function() {
    alert('Құттықтаймыз! Сіз AI әлеміне алғашқы қадам жасадыңыз.');
});

const runBtn = document.getElementById('runBtn');
const output = document.getElementById('output');
const codeArea = document.getElementById('pythonCode');

if (runBtn) {
    runBtn.addEventListener('click', async () => {
        const userCode = codeArea.value;
        output.textContent = "Сервер есептеп жатыр...";
        output.style.color = "yellow";

        try {
            const response = await fetch('http://127.0.0.1:8000/run-python', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: userCode }),
            });

            const data = await response.json();
            output.textContent = "> " + data.output;
            output.style.color = "#0f0";
        } catch (error) {
            output.textContent = "> Сервермен байланыс үзілді.";
            output.style.color = "red";
        }
    });
}

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Форманың қайта жүктелуін тоқтатады
    // Пайдаланушыны логин бетіне жіберу
    window.location.href = 'login.html'; 
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Инпуттан есімді алу
    const nameInput = document.querySelector('input[type="text"]').value;
    
    // Браузер жадына сақтау
    localStorage.setItem('userName', nameInput);
    
    alert('Тіркелу сәтті өтті!');
    window.location.href = 'profile.html'; // Профильге бағыттау
});

// Тест сәтті аяқталғанда істейтін функция
function completeCourse() {
    localStorage.setItem('coursePassed', 'true');
    alert('Құттықтаймыз! Сертификат профиліңізде пайда болды.');
    window.location.href = 'profile.html';
}

// courses.html бетіндегі скриптке қосуға болады:
function checkProgress() {
    const courses = ['neural', 'ds', 'nlp'];
    courses.forEach(id => {
        if(localStorage.getItem(`passed_${id}`)) {
            const card = document.querySelector(`[data-id="${id}"]`);
            if(card) card.classList.add('completed'); 
            // CSS-те .completed класына жасыл жиек қосып қой
        }
    });
}