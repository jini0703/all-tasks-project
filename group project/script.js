// ==========================================================
// 1. DUMMY DATABASE (30 Detailed Profiles)
// ==========================================================
const dummyUsers = [
    { id: 1, name: "Aarav Sharma", age: 20, gender: "Male", avatar: "👻", hobbies: "Gym Freak / Fitness", sports: "Badminton", sleep: "Early Bird", clean: "High", studyType: "Quiet", social: "Introvert", instagram: "@aarav.dev", email: "aarav@gmail.com" },
    { id: 2, name: "Priya Patel", age: 21, gender: "Female", avatar: "🌸", hobbies: "Music Lover / Concerts", sports: "Yoga", sleep: "Night Owl", clean: "Medium", studyType: "Group", social: "Extrovert", instagram: "@priya.travels", email: "priya@gmail.com" },
    { id: 3, name: "Rohan Mehta", age: 25, gender: "Male", avatar: "👽", hobbies: "Adventurous / Trekking", sports: "Basketball", sleep: "Early Bird", clean: "High", studyType: "Quiet", social: "Introvert", instagram: "@rohan.lifts", email: "rohan@gmail.com" },
    { id: 4, name: "Sneha Iyer", age: 22, gender: "Female", avatar: "🦊", hobbies: "Gaming / E-Sports", sports: "Rock Climbing", sleep: "Night Owl", clean: "Low", studyType: "Group", social: "Extrovert", instagram: "@sneha.treks", email: "sneha@gmail.com" },
    { id: 5, name: "Kabir Singh", age: 24, gender: "Male", avatar: "😎", hobbies: "Art / Fashion / Photography", sports: "Football", sleep: "Night Owl", clean: "Medium", studyType: "Quiet", social: "Ambivert", instagram: "@kabir.art", email: "kabir@gmail.com" },
    { id: 6, name: "Ananya Rao", age: 21, gender: "Female", avatar: "🐼", hobbies: "Bookworm / Cozy", sports: "Tennis", sleep: "Early Bird", clean: "High", studyType: "Quiet", social: "Introvert", instagram: "@ananya.reads", email: "ananya@gmail.com" },
    { id: 7, name: "Vikram Joshi", age: 23, gender: "Male", avatar: "🦁", hobbies: "Gym Freak / Fitness", sports: "Cricket", sleep: "Night Owl", clean: "Low", studyType: "Group", social: "Extrovert", instagram: "@vikram.fit", email: "vikram@gmail.com" },
    { id: 8, name: "Meera Nair", age: 20, gender: "Female", avatar: "🎨", hobbies: "Art / Fashion / Photography", sports: "Swimming", sleep: "Early Bird", clean: "Medium", studyType: "Group", social: "Extrovert", instagram: "@meera.paints", email: "meera@gmail.com" },
    { id: 9, name: "Arjun Das", age: 22, gender: "Male", avatar: "🏀", hobbies: "Gaming / E-Sports", sports: "Basketball", sleep: "Early Bird", clean: "High", studyType: "Quiet", social: "Introvert", instagram: "@arjun.games", email: "arjun@gmail.com" },
    { id: 10, name: "Ishika Gupta", age: 21, gender: "Female", avatar: "✈️", hobbies: "Adventurous / Trekking", sports: "Volleyball", sleep: "Night Owl", clean: "Medium", studyType: "Group", social: "Extrovert", instagram: "@ishika.world", email: "ishika@gmail.com" },
    { id: 11, name: "Rahul Verma", age: 19, gender: "Male", avatar: "🎸", hobbies: "Music Lover / Concerts", sports: "Badminton", sleep: "Early Bird", clean: "Medium", studyType: "Quiet", social: "Introvert", instagram: "@rahul.jams", email: "rahul@gmail.com" },
    { id: 12, name: "Aditi Bose", age: 23, gender: "Female", avatar: "🍪", hobbies: "Art / Fashion / Photography", sports: "Yoga", sleep: "Night Owl", clean: "High", studyType: "Group", social: "Extrovert", instagram: "@aditi.styles", email: "aditi@gmail.com" },
    { id: 13, name: "Yash Pradhan", age: 22, gender: "Male", avatar: "💻", hobbies: "Gaming / E-Sports", sports: "Football", sleep: "Night Owl", clean: "Low", studyType: "Quiet", social: "Extrovert", instagram: "@yash.codes", email: "yash@gmail.com" },
    { id: 14, name: "Anjini Pandey", age: 20, gender: "Female", avatar: "📸", hobbies: "Adventurous / Trekking", sports: "Tennis", sleep: "Early Bird", clean: "High", studyType: "Quiet", social: "Introvert", instagram: "@anjini.pics", email: "anjini@gmail.com" },
    { id: 15, name: "Karan Malhotra", age: 26, gender: "Male", avatar: "🦾", hobbies: "Gym Freak / Fitness", sports: "Powerlifting", sleep: "Early Bird", clean: "Medium", studyType: "Group", social: "Introvert", instagram: "@karan.lift", email: "karan@gmail.com" },
    { id: 16, name: "Tanya Kapoor", age: 21, gender: "Female", avatar: "🎧", hobbies: "Music Lover / Concerts", sports: "Dance", sleep: "Night Owl", clean: "Medium", studyType: "Quiet", social: "Introvert", instagram: "@tanya.beats", email: "tanya@gmail.com" },
    { id: 17, name: "Devansh Goel", age: 23, gender: "Male", avatar: "👔", hobbies: "Art / Fashion / Photography", sports: "Golf", sleep: "Early Bird", clean: "High", studyType: "Group", social: "Extrovert", instagram: "@dev.suits", email: "devansh@gmail.com" },
    { id: 18, name: "Sanya Mirza", age: 20, gender: "Female", avatar: "🏸", hobbies: "Gym Freak / Fitness", sports: "Badminton", sleep: "Night Owl", clean: "Low", studyType: "Group", social: "Extrovert", instagram: "@sanya.play", email: "sanya@gmail.com" },
    { id: 19, name: "Manish Reddy", age: 22, gender: "Male", avatar: "🥘", hobbies: "Adventurous / Trekking", sports: "Hockey", sleep: "Early Bird", clean: "High", studyType: "Quiet", social: "Introvert", instagram: "@manish.cooks", email: "manish@gmail.com" },
    { id: 20, name: "Riya Saxena", age: 21, gender: "Female", avatar: "💄", hobbies: "Art / Fashion / Photography", sports: "Yoga", sleep: "Night Owl", clean: "Medium", studyType: "Quiet", social: "Extrovert", instagram: "@riya.glam", email: "riya@gmail.com" },
    { id: 21, name: "Siddharth Jain", age: 24, gender: "Male", avatar: "🧗", hobbies: "Adventurous / Trekking", sports: "Football", sleep: "Early Bird", clean: "Medium", studyType: "Quiet", social: "Introvert", instagram: "@sid.explores", email: "sid@gmail.com" },
    { id: 22, name: "Aisha Khan", age: 21, gender: "Female", avatar: "👗", hobbies: "Art / Fashion / Photography", sports: "Tennis", sleep: "Night Owl", clean: "High", studyType: "Quiet", social: "Introvert", instagram: "@aisha.styles", email: "aisha@gmail.com" },
    { id: 23, name: "Omar Farooq", age: 23, gender: "Male", avatar: "🏋️", hobbies: "Gym Freak / Fitness", sports: "Powerlifting", sleep: "Early Bird", clean: "High", studyType: "Quiet", social: "Introvert", instagram: "@omar.lifts", email: "omar@gmail.com" },
    { id: 24, name: "Neha Sharma", age: 22, gender: "Female", avatar: "🎸", hobbies: "Music Lover / Concerts", sports: "Yoga", sleep: "Night Owl", clean: "Low", studyType: "Group", social: "Extrovert", instagram: "@neha.vibes", email: "neha.s@gmail.com" },
    { id: 25, name: "Rohan Desai", age: 20, gender: "Male", avatar: "🎮", hobbies: "Gaming / E-Sports", sports: "Cricket", sleep: "Early Bird", clean: "Medium", studyType: "Group", social: "Extrovert", instagram: "@rohan.d", email: "rohan.d@gmail.com" },
    { id: 26, name: "Kavya Singh", age: 20, gender: "Female", avatar: "📚", hobbies: "Bookworm / Cozy", sports: "Badminton", sleep: "Early Bird", clean: "High", studyType: "Quiet", social: "Introvert", instagram: "@kavya.reads", email: "kavya.s@gmail.com" },
    { id: 27, name: "Aditya Verma", age: 21, gender: "Male", avatar: "🕹️", hobbies: "Gaming / E-Sports", sports: "Table Tennis", sleep: "Night Owl", clean: "Low", studyType: "Group", social: "Extrovert", instagram: "@adi.games", email: "aditya.v@gmail.com" },
    { id: 28, name: "Simran Kaur", age: 23, gender: "Female", avatar: "💃", hobbies: "Art / Fashion / Photography", sports: "Swimming", sleep: "Night Owl", clean: "Medium", studyType: "Group", social: "Extrovert", instagram: "@simran.styles", email: "simran.k@gmail.com" },
    { id: 29, name: "Varun Gupta", age: 22, gender: "Male", avatar: "🎧", hobbies: "Music Lover / Concerts", sports: "Basketball", sleep: "Night Owl", clean: "Medium", studyType: "Quiet", social: "Introvert", instagram: "@varun.beats", email: "varun.g@gmail.com" },
    { id: 30, name: "Pooja Agarwal", age: 21, gender: "Female", avatar: "🧘‍♀️", hobbies: "Gym Freak / Fitness", sports: "Yoga", sleep: "Early Bird", clean: "High", studyType: "Group", social: "Extrovert", instagram: "@pooja.fit", email: "pooja.a@gmail.com" }
];

// ==========================================================
// 2. PAGE ROUTER & INITIALIZATION (The Fixed Version)
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('nestquest_loggedIn');
    
    // Check elements on the page instead of the URL for Live Server compatibility
    const isLoginPage = document.getElementById('loginForm') !== null;
    const isProfilePage = document.getElementById('profileForm') !== null;
    const isMatchPage = document.getElementById('singleCardContainer') !== null;
    const isDashboardPage = document.getElementById('dashboardGrid') !== null;

    // Kick to login if they aren't authenticated
    if (!isLoggedIn && !isLoginPage) {
        window.location.href = 'login.html';
        return;
    }

    loadNavAvatar(); 
    initThemeToggle();

    // Run the specific scripts for whichever page is currently loaded
    if (isLoginPage)     setupLogin();
    if (isProfilePage)   setupProfile();
    if (isMatchPage)     setupMatches();
    if (isDashboardPage) setupDashboard();
});

// Custom Alerts
function showCustomAlert(message) {
    document.getElementById('customAlertMsg').innerText = message;
    document.getElementById('customAlertModal').style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('customAlertModal').style.display = 'none';
}

// Theme Logic
function initThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    
    if (localStorage.getItem('nestquest_theme') === 'light') {
        document.body.classList.add('light-theme');
    }

    btn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        if (document.body.classList.contains('light-theme')) {
            localStorage.setItem('nestquest_theme', 'light');
        } else {
            localStorage.setItem('nestquest_theme', 'dark');
        }
    });
}

// ==========================================================
// 3. LOGIN & SIGNUP LOGIC
// ==========================================================
function setupLogin() {
    const emailInput = document.getElementById('emailInput');
    const pwdInput   = document.getElementById('pwdInput');
    const pwdMeter   = document.getElementById('pwdMeter');
    const pwdText    = document.getElementById('pwdText');

    if (pwdInput) {
        pwdInput.addEventListener('keyup', () => {
            const val = pwdInput.value;
            const hasNum = /\d/.test(val);
            const hasUpper = /[A-Z]/.test(val);
            const hasSpec = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(val);

            if (val.length === 0) {
                pwdMeter.className = 'pwd-meter';
                pwdText.innerText = '';
            } else if (val.length < 8) {
                pwdMeter.className = 'pwd-meter pwd-weak';
                pwdText.innerText = "Weak (Min 8 characters)";
            } else if (!hasNum || !hasUpper || !hasSpec) {
                pwdMeter.className = 'pwd-meter pwd-medium';
                pwdText.innerText = "Medium (Add Numbers/Symbols)";
            } else {
                pwdMeter.className = 'pwd-meter pwd-strong';
                pwdText.innerText = "Strong Password!";
            }
        });
    }

    document.getElementById('loginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!emailInput.value.endsWith('@gmail.com')) {
            showCustomAlert("Error: Only @gmail.com addresses are allowed!");
            return;
        }
        
        const val = pwdInput.value;
        const hasNum = /\d/.test(val);
        const hasUpper = /[A-Z]/.test(val);
        const hasSpec = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(val);
        
        if (val.length < 8 || !hasNum || !hasUpper || !hasSpec) {
            showCustomAlert("Error: Password must be at least 8 characters, contain an uppercase letter, a number, and a special symbol.");
            return;
        }
        
        localStorage.setItem('nestquest_loggedIn', 'true');
        window.location.href = 'index.html';
    });

    // ✨ Google Login Bug Fixed Here ✨
    document.getElementById('googleLogin')?.addEventListener('click', (e) => {
        e.preventDefault();
        const btn = document.getElementById('googleLogin');
        btn.innerHTML = "🔄 Authenticating...";
        
        setTimeout(() => { 
            localStorage.setItem('nestquest_loggedIn', 'true');
            window.location.href = 'index.html';
        }, 1000);
    });
}

function logout() { 
    localStorage.clear(); 
    window.location.href = 'login.html'; 
}

// ==========================================================
// 4. PROFILE SETUP LOGIC
// ==========================================================
function setupProfile() {
    let selectedAvatar = "👦🏽";

    const saved = JSON.parse(localStorage.getItem('nestquest_profile'));
    if (saved) {
        document.getElementById('myName').value = saved.name;
        document.getElementById('myAge').value = saved.age;
        document.getElementById('myInsta').value = saved.instagram;
        document.getElementById('myEmail').value = saved.email;
        document.getElementById('myGender').value = saved.gender;
        document.getElementById('myHobbies').value = saved.hobbies;
        document.getElementById('mySports').value = saved.sports;
        document.getElementById('prefSleep').value = saved.prefSleep || "";
        document.getElementById('prefClean').value = saved.prefClean || "";
        document.getElementById('prefStudyType').value = saved.prefStudyType || "";
        document.getElementById('prefSocial').value = saved.prefSocial || "";
        selectedAvatar = saved.avatar;
    }

    document.querySelectorAll('.avatar-option').forEach(opt => {
        if (opt.dataset.avatar === selectedAvatar) opt.classList.add('active');
        opt.addEventListener('click', () => {
            document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            selectedAvatar = opt.dataset.avatar;
        });
    });

    document.getElementById('btnNext')?.addEventListener('click', () => {
        const name = document.getElementById('myName').value;
        const age = document.getElementById('myAge').value;
        const email = document.getElementById('myEmail').value;

        if (!name || !age || !email) { 
            showCustomAlert("All personal fields are mandatory!"); 
            return; 
        }
        if (!email.endsWith('@gmail.com')) { 
            showCustomAlert("Email must be @gmail.com!"); 
            return; 
        }
        if (age < 16 || age > 50) { 
            showCustomAlert("Age must be between 16-50."); 
            return; 
        }

        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
    });

    document.getElementById('btnBack')?.addEventListener('click', () => {
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step1').style.display = 'block';
    });

    document.getElementById('profileForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const sSleep = document.getElementById('prefSleep').value;
        const sClean = document.getElementById('prefClean').value;
        const sStudy = document.getElementById('prefStudyType').value;
        const sSocial = document.getElementById('prefSocial').value;

        if (!sSleep || !sClean || !sStudy || !sSocial) {
            showCustomAlert("Please select your preferences for all fields!"); 
            return;
        }
        
        const profile = {
            avatar: selectedAvatar,
            name: document.getElementById('myName').value,
            age: document.getElementById('myAge').value,
            instagram: document.getElementById('myInsta').value,
            email: document.getElementById('myEmail').value,
            gender: document.getElementById('myGender').value,
            hobbies: document.getElementById('myHobbies').value,
            sports: document.getElementById('mySports').value,
            prefSleep: sSleep,
            prefClean: sClean,
            prefStudyType: sStudy,
            prefSocial: sSocial
        };
        localStorage.setItem('nestquest_profile', JSON.stringify(profile));
        
        if (!localStorage.getItem('match_queue')) {
            localStorage.setItem('match_queue', JSON.stringify(dummyUsers.map(u => u.id)));
        }
        window.location.href = 'match.html';
    });
}

// ==========================================================
// 5. MATCHING & DRAGGABLE SWIPES
// ==========================================================
function evaluateMatch(prefs, dummyUser) {
    let score = 0; 
    let reasons = [];
    
    if (dummyUser.sleep === prefs.prefSleep || prefs.prefSleep === "Any") { score += 25; reasons.push(`Matches sleep schedule`); }
    if (dummyUser.clean === prefs.prefClean || prefs.prefClean === "Any") { score += 25; reasons.push(`Agrees on cleanliness`); }
    if (dummyUser.studyType === prefs.prefStudyType || prefs.prefStudyType === "Any") { score += 25; reasons.push(`Compatible study habits`); }
    if (dummyUser.social === prefs.prefSocial || prefs.prefSocial === "Any") { score += 25; reasons.push(`Social energy matches`); }
    
    if (reasons.length === 0) reasons.push("Opposites attract! No exact matches.");
    
    let color = score >= 75 ? "var(--green)" : score >= 50 ? "#ffbe0b" : "var(--red)";
    return { score, reasons, color };
}

function setupMatches() { 
    renderNextCard(); 
}

function renderNextCard() {
    const container = document.getElementById('singleCardContainer');
    if (!container) return;
    
    let queue = JSON.parse(localStorage.getItem('match_queue')) || [];
    const profileData = JSON.parse(localStorage.getItem('nestquest_profile'));

    if (queue.length === 0) {
        container.innerHTML = `
            <div class="glass-card fade-in-anim" style="text-align:center; width: 100%;">
                <h2 style="color:var(--neon-pink)">No More Profiles!</h2>
                <button class="btn-primary" style="margin-top:1rem" onclick="window.location.href='dashboard.html'">Go to Dashboard</button>
            </div>`;
        return;
    }

    const user = dummyUsers.find(u => u.id === queue[0]);
    if (!user) return; 
    
    const matchData = evaluateMatch(profileData, user);
    let reasonsList = matchData.reasons.map(r => `<div style="margin-top: 4px;">✨ ${r}</div>`).join('');

    container.innerHTML = `
        <div class="glass-card single-card fade-in-anim draggable-card" id="swipeCard" style="text-align:center" data-userid="${user.id}">
            <div style="font-size:5rem; margin-bottom:1rem; filter:drop-shadow(0 4px 10px rgba(0,0,0,0.4));">${user.avatar}</div>
            <h2 style="color:var(--neon-pink)">${user.name}, ${user.age}</h2>
            <p style="color:var(--text-main); opacity:0.8; margin-bottom:15px">${user.gender}</p>
            
            <p><strong>Primary Interest:</strong> <br> ${user.hobbies}</p>
            <p style="margin-top: 10px;"><strong>Sports:</strong> <br> ${user.sports}</p>
            
            <div style="font-size:2.5rem; font-weight:bold; color:${matchData.color}; margin:1rem 0; text-shadow:0 0 15px ${matchData.color}">${matchData.score}% Match</div>
            
            <div style="background:rgba(0,0,0,0.3); border:1px dashed var(--neon-purple); padding:1rem; border-radius:10px; text-align:center;">
                <strong style="color:var(--neon-purple); font-size:1.1rem;">Why you match:</strong>
                <div style="margin-top:8px; line-height:1.6; font-size:0.95rem;">
                    ${reasonsList}
                </div>
            </div>
            
            <div class="swipe-actions">
                <button class="btn-arrow btn-left" onclick="swipeAction('reject')">❌</button>
                <button class="btn-arrow btn-right" onclick="swipeAction('accept')">✅</button>
            </div>
        </div>
    `;
    
    initDrag(document.getElementById('swipeCard'));
}

function initDrag(card) {
    let startX = 0, currentX = 0, dragging = false;
    
    card.onmousedown = (e) => { dragging = true; startX = e.clientX; };
    
    document.onmousemove = (e) => {
        if (!dragging) return;
        currentX = e.clientX - startX;
        card.style.transform = `translateX(${currentX}px) rotate(${currentX * 0.05}deg)`;
    };
    
    document.onmouseup = () => {
        if (!dragging) return;
        dragging = false;
        if (currentX > 150) swipeAction('accept');
        else if (currentX < -150) swipeAction('reject');
        else card.style.transform = "translateX(0) rotate(0)";
    };
}

window.swipeAction = function(action) {
    const card = document.getElementById('swipeCard');
    const currentUserId = parseInt(card.getAttribute('data-userid'));
    
    let queue = JSON.parse(localStorage.getItem('match_queue')) || [];
    queue = queue.filter(id => id !== currentUserId);
    localStorage.setItem('match_queue', JSON.stringify(queue));

    if (action === 'accept') {
        card.classList.add('swipe-right-anim');
        let accepted = JSON.parse(localStorage.getItem('accepted_users')) || [];
        accepted.push(currentUserId); 
        localStorage.setItem('accepted_users', JSON.stringify(accepted));
    } else {
        card.classList.add('swipe-left-anim');
        let rejected = JSON.parse(localStorage.getItem('rejected_users')) || [];
        rejected.push(currentUserId); 
        localStorage.setItem('rejected_users', JSON.stringify(rejected));
    }

    setTimeout(() => { renderNextCard(); }, 500); 
};

// ==========================================================
// 6. DASHBOARD LOGIC (Tabs, Search, Sort & Match Reasons)
// ==========================================================
function setupDashboard() {
    const searchInp = document.getElementById('dashSearch');
    const sortSel = document.getElementById('dashSort');
    const filterSel = document.getElementById('dashFilter');
    const tabs = document.querySelectorAll('.dash-tab');
    
    let currentTab = 'all';

    function renderDashboardGrid() {
        const grid = document.getElementById('dashboardGrid');
        if (!grid) return;

        const profileData = JSON.parse(localStorage.getItem('nestquest_profile'));
        if (!profileData) {
            grid.innerHTML = "<p style='text-align:center; grid-column:1/-1;'>Please create a profile first.</p>";
            return;
        }

        const acceptedIDs = JSON.parse(localStorage.getItem('accepted_users')) || [];
        const rejectedIDs = JSON.parse(localStorage.getItem('rejected_users')) || [];

        let usersToDisplay = [];
        if (currentTab === 'all') {
            usersToDisplay = [...dummyUsers];
        } else if (currentTab === 'accepted') {
            usersToDisplay = dummyUsers.filter(u => acceptedIDs.includes(u.id));
        } else if (currentTab === 'rejected') {
            usersToDisplay = dummyUsers.filter(u => rejectedIDs.includes(u.id));
        } else if (currentTab === 'suggested') {
            usersToDisplay = dummyUsers.filter(u => !acceptedIDs.includes(u.id) && !rejectedIDs.includes(u.id));
        }

        usersToDisplay = usersToDisplay.map(u => ({ 
            ...u, 
            matchData: evaluateMatch(profileData, u) 
        }));

        const searchQ = searchInp?.value.toLowerCase() || "";
        if (searchQ) {
            usersToDisplay = usersToDisplay.filter(u => 
                u.name.toLowerCase().includes(searchQ) || 
                u.hobbies.toLowerCase().includes(searchQ) ||
                u.sports.toLowerCase().includes(searchQ)
            );
        }

        const filterVal = filterSel?.value || "all";
        if (filterVal === "male")   usersToDisplay = usersToDisplay.filter(u => u.gender === "Male");
        if (filterVal === "female") usersToDisplay = usersToDisplay.filter(u => u.gender === "Female");

        const sortVal = sortSel?.value || "default";
        if (sortVal === "name-asc")   usersToDisplay.sort((a,b) => a.name.localeCompare(b.name));
        if (sortVal === "name-desc")  usersToDisplay.sort((a,b) => b.name.localeCompare(a.name));
        if (sortVal === "age-asc")    usersToDisplay.sort((a,b) => a.age - b.age);
        if (sortVal === "age-desc")   usersToDisplay.sort((a,b) => b.age - a.age);
        if (sortVal === "match-desc") usersToDisplay.sort((a,b) => b.matchData.score - a.matchData.score);
        if (sortVal === "match-asc")  usersToDisplay.sort((a,b) => a.matchData.score - b.matchData.score);

        grid.innerHTML = '';
        if (usersToDisplay.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">No profiles match your search criteria.</p>';
            return;
        }

        usersToDisplay.forEach(u => {
            const m = u.matchData;
            const reasonsList = m.reasons.map(r => `<div style="margin-top: 4px;">✨ ${r}</div>`).join('');
            
            let statusBadge = '';
            let opacity = '1';
            let actionHtml = '';

            if (acceptedIDs.includes(u.id)) {
                statusBadge = '<span style="background:var(--green); color:#000; padding:4px 10px; border-radius:8px; font-size:0.8rem; font-weight:bold;">🤝 Connected</span>';
                actionHtml = `
                    <div class="contact-box" style="margin-top: 1rem;">
                        <button class="btn-primary" style="padding: 10px; width: 100%; margin-bottom: 10px;" onclick="openMailModal('${u.name}', '${u.email}')">✉️ Compose Email</button>
                        <p style="margin:0; text-align:center; font-size: 0.9rem;">📸 Insta: <a href="https://instagram.com/${u.instagram.replace('@','')}" target="_blank">${u.instagram}</a></p>
                    </div>`;
            } else if (rejectedIDs.includes(u.id)) {
                statusBadge = '<span style="background:var(--red); color:#fff; padding:4px 10px; border-radius:8px; font-size:0.8rem; font-weight:bold;">❌ Passed</span>';
                opacity = '0.5'; 
            } else {
                statusBadge = '<span style="background:var(--neon-purple); color:#fff; padding:4px 10px; border-radius:8px; font-size:0.8rem; font-weight:bold;">✨ Suggested</span>';
            }

            grid.innerHTML += `
            <div class="glass-card" style="opacity: ${opacity}; position: relative; display: flex; flex-direction: column;">
                <div style="position: absolute; top: 15px; right: 15px;">${statusBadge}</div>
                <div style="display: flex; gap: 1rem; align-items: center; margin-top: 10px;">
                    <div style="font-size: 3rem;">${u.avatar}</div>
                    <div>
                        <h3 style="margin:0; color:var(--neon-pink);">${u.name}, ${u.age}</h3>
                        <p style="margin-top:5px; margin-bottom:5px; color:var(--text-main); opacity:0.8; font-size:0.9rem;">${u.hobbies}</p>
                        <div style="color: ${m.color}; font-weight: bold; font-size: 0.9rem;">${m.score}% Match</div>
                    </div>
                </div>
                <div style="background: rgba(0,0,0,0.3); border: 1px dashed var(--neon-purple); padding: 1rem; border-radius: 12px; margin-top: 1rem; flex-grow: 1; text-align: center;">
                    <strong style="color: var(--neon-purple); font-size: 0.9rem;">Why you match:</strong>
                    <div style="margin-top: 5px; margin-bottom: 0; line-height: 1.4; font-size: 0.85rem;">${reasonsList}</div>
                </div>
                ${actionHtml}
            </div>`;
        });
    }

    if (searchInp) searchInp.addEventListener('input', renderDashboardGrid);
    if (sortSel) sortSel.addEventListener('change', renderDashboardGrid);
    if (filterSel) filterSel.addEventListener('change', renderDashboardGrid);

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active'); 
            currentTab = e.target.getAttribute('data-tab'); 
            renderDashboardGrid(); 
        });
    });

    renderDashboardGrid();
}

// ==========================================================
// 8. EMAIL COMPOSER LOGIC
// ==========================================================
window.openMailModal = function(name, email) {
    document.getElementById('mailToName').value = `${name} (${email})`;
    document.getElementById('mailToEmail').value = email; 
    
    const myProfile = JSON.parse(localStorage.getItem('nestquest_profile'));
    const myName = myProfile ? myProfile.name : "your future roommate";
    
    document.getElementById('mailBody').value = `Hi ${name},\n\nWe matched on NestQuest! Let me know if you want to chat!\n\nBest,\n${myName}`;
    document.getElementById('mailModal').style.display = 'flex';
};

window.closeMailModal = function() {
    document.getElementById('mailModal').style.display = 'none';
};

window.sendMail = function(event) {
    event.preventDefault(); 
    const emailTo = document.getElementById('mailToEmail').value;
    const subject = encodeURIComponent(document.getElementById('mailSubject').value);
    const body    = encodeURIComponent(document.getElementById('mailBody').value);
    
    closeMailModal();
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
};

// ==========================================================
// 9. LOAD AVATAR INTO NAVIGATION BAR
// ==========================================================
function loadNavAvatar() {
    const savedProfile = JSON.parse(localStorage.getItem('nestquest_profile'));
    const navAvatar = document.getElementById('navAvatar');
    if (savedProfile && navAvatar) {
        navAvatar.innerText = savedProfile.avatar;
    }
}