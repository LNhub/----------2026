// 1. بيانات الأسئلة - 15 موقفاً بـ 4 خيارات
const quizData = [
    { q: "قابلت جاركم في الشارع وقال لك 'من العايدين'؟", a: "من الفايزين والسالمين", w: ["عائدون بقوة", "أهلاً.. منورنا", "وأنت من الأحياء"], f_c: "كفو! راعي واجب.", f_w: "يا ساتر! قلبتها فيلم رعب." },
    { q: "خالتك شافت كشختك وقالت 'ما شاء الله، وش هالزين؟'", a: "بعض ما عندك، ما نطلع من بعدك", w: ["أدري، غالي الفستان", "من ذوقك.. عقبالك", "نسيت والله من وين شريته"], f_c: "تواضع وذوق، أحسنتِ!", f_w: "يا مغرور! هههههه." },
    { q: "قاعد تبخر المجلس وقال لك واحد 'طيب الله فالك'؟", a: "ومن قال يتبارك", w: ["أمين، الله يرزقنا", "البخور أصلي لا تشيل هم", "تبي زيادة؟"], f_c: "عاش راعي الطيب!", f_w: "هذا رد لواحد في محل عطور!" },
    { q: "واحد سألك 'ليش ما جيت فطورنا العام؟' (بمزح)", a: "البركة في هالسنة، الله يجمعنا دائماً", w: ["كنت نايم وشبعان", "محد عزمني والله", "ليش أنتم سويتوا فطور؟"], f_c: "دبلوماسية خرافية!", f_w: "صادق بزيادة! خربت الجو." },
    { q: "طفل ناشب في حلقك يبي 'عيدية'؟", a: "شف عمك فلان يوزع ميات!", w: ["روح لأبوك أغنى مني", "العيد فرحة مو فلوس", "أعطيك إياها في الحلم"], f_c: "تصريفة احترافية!", f_w: "بينشب لك وما بيخليك تعيد!" },
    { q: "جارك قال 'تقبل الله طاعتكم' بعد الصلاة؟", a: "منا ومنك صالح الأعمال", w: ["أجمعين يا غالي", "وعليكم السلام", "السنة الجاية إن شاء الله"], f_c: "رد روحاني جميل.", f_w: "يا مفهي! جارك بيحسبك لسا نايم." },
    { q: "قدموا لك قهوة وأنت خلاص 'قفل معك الكيف'؟", a: "أهز الفنجال بصمت وهيبة", w: ["أقلب الفنجال", "أقول له 'بس خلاص'", "أغطي الفنجال بيدي"], f_c: "هذي لغة الإشارة السعودية!", f_w: "إهانة دولية في بروتوكول القهوة!" },
    { q: "وحدة قالت لك 'ما شاء الله صايرة قمر هالعيد'؟", a: "يحلي أيامك، هذا من ذوقك", w: ["أدري، الميك اب تعبني", "القمر في السماء مو هنا", "تسلمين، عقبالك"], f_c: "ذوق وأدب.. برافو.", f_w: "يا نفسية! البنت تمدحك!" },
    { q: "أحد الكبار دعا لك 'الله يوفقك ويرزقك'؟", a: "أمين وياك، الله يطول بعمرك", w: ["شكراً جزيلاً", "الله يرزقنا جميعاً", "من بؤك لباب السماء"], f_c: "كذا يحبونك الشيبان!", f_w: "رد جاف.. كأنك تطلب سلفة!" },
    { q: "دخلت مجلس كبير والكل قام يسلم؟", a: "أأبداً السلام من اليمين (أو الأكبر)", w: ["أسلم على اللي قدامي", "أرفع يدي وأقول 'هااااي'", "أجلس وأقول 'سلموا أنتم'"], f_c: "أصول المجالس في دمك!", f_w: "بيقولون وش ذا الجيل الضايع!" },
    { q: "قدمت الحلا وقالوا 'تسلم يدينك'؟", a: "يسلم غاليكم، ما يغلى عليكم", w: ["تراه جاهز مو أنا", "بالعافية، لا يكثر", "تعبت فيه لا يضيع"], f_c: "سنع وذوق!", f_w: "ليش الصدق الزايد؟ خلك برستيج!" },
    { q: "واحد قال لك 'عساك من السعيدين'؟", a: "وإياك يا وجه السعد", w: ["أنا سعيد جداً", "السعادة في قلوبنا", "الله لا يجيب الحزن"], f_c: "رد يفتح النفس!", f_w: "رد غبي.. كأنك في حصة تعبير!" },
    { q: "واحد غثيث قال 'صاير دبدوب/نحفان هالعيد'؟", a: "هذا وزن العيد، يروح مع الغيبوبة", w: ["طالع في نفسك", "أنا مودل بس ما تدرون", "من خيرك والله"], f_c: "رد ينهي النقاش بذكاء.", f_w: "بتقلبها هوشة في نص المجلس!" },
    { q: "أول ما صحيت الصباح وشفت أهلك؟", a: "حب الرأس/اليد وعيدكم مبارك", w: ["وين الفطور؟", "متى نخلص وننام؟", "أبغى عيديتي الحين"], f_c: "هذا البرّ والسنع.", f_w: "يا مادي! أهل الوداد لا أهل العتاد." },
    { q: "بغيت تمشي من بيت ناس بعد المعايدة؟", a: "الله يعيده علينا وعليكم بالخير", w: ["يالله باي", "أشوفكم العيد الجاي", "خلصت حلوياتكم؟"], f_c: "ختامها مسك!", f_w: "باي؟ شكلك متأثر بالأجانب!" }
];

let currentQuestionIndex = 0;
let userTotalScore = 0;
let userNameStr = "";

// بدء الاختبار
function startQuiz() {
    const nameInput = document.getElementById('player-name');
    userNameStr = nameInput.value.trim();
    
    if (userNameStr === "") { 
        alert("يا حياك الله، اكتب اسمك أولاً عشان نبدأ!"); 
        return; 
    }
    
    document.getElementById('name-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    renderQuestion();
}

// عرض السؤال - تم التعديل ليتناسب مع CSS Grid
function renderQuestion() {
    const qContainer = document.getElementById('question-container');
    const feedback = document.getElementById('feedback-message');
    const data = quizData[currentQuestionIndex];
    
    feedback.innerHTML = "";
    feedback.className = "feedback";

    let options = [ {t: data.a, correct: true}, ...data.w.map(text => ({t: text, correct: false})) ];
    options.sort(() => Math.random() - 0.5);

    // التأكد من استخدام كلاس options
    qContainer.innerHTML = `
        <p class="question-text">سؤال ${currentQuestionIndex + 1} من 15: <br> ${data.q}</p>
        <div class="options">
            ${options.map(opt => `<button onclick="processAnswer(${opt.correct})">${opt.t}</button>`).join('')}
        </div>
    `;
}

// معالجة الإجابة
function processAnswer(isCorrect) {
    const feedback = document.getElementById('feedback-message');
    const data = quizData[currentQuestionIndex];
    
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        userTotalScore++;
        feedback.className = "feedback success";
        feedback.innerHTML = "✅ " + data.f_c;
    } else {
        feedback.className = "feedback error";
        feedback.innerHTML = "❌ " + data.f_w;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            renderQuestion();
        } else {
            finalizeQuiz();
        }
    }, 1500);
}

// إنهاء الاختبار وعرض النتيجة
function finalizeQuiz() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('cert-name').innerText = userNameStr;
    document.getElementById('cert-score').innerText = `${userTotalScore} / 15`;
    
    let rank = "";
    if (userTotalScore === 15) rank = "👑 بروفيسور أصول (ختمت السنع)";
    else if (userTotalScore >= 10) rank = "✅ نشمي/ة وما ينخاف عليك";
    else rank = "🥉 راعي ملحق (يبي لك تدريب)";
    
    document.getElementById('cert-rank').innerText = rank;
}

// إعادة الاختبار
function restartQuiz() {
    currentQuestionIndex = 0; 
    userTotalScore = 0;
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('name-screen').style.display = 'block';
    document.getElementById('player-name').value = "";
}

// المشاركة
function shareResult() {
    const text = `أنا ${userNameStr} حصلت على ${userTotalScore}/15 في اختبار السنع السعودي! تقدر تتحداي؟ 😍🇸🇦`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
}