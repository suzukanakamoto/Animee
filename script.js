// Database Anime Simulasi
const animeData = [
    { 
        id: 1, 
        title: "Fluorite Protocol", 
        eps: 12, 
        rate: "9.8", 
        img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=600",
        desc: "In a world governed by silicon and neon, one protocol remains to save the last human connection."
    },
    { 
        id: 2, 
        title: "Endfield Echoes", 
        eps: 24, 
        rate: "9.2", 
        img: "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=600",
        desc: "Exploration into the unknown territories of a dying star system."
    },
    { 
        id: 3, 
        title: "Void Hunter", 
        eps: 13, 
        rate: "8.9", 
        img: "https://images.unsplash.com/photo-1578632738981-433069302170?q=80&w=600",
        desc: "The hunt for the entities that exist within the gaps of reality."
    },
    { 
        id: 4, 
        title: "Neon Genesis 2.0", 
        eps: 10, 
        rate: "9.5", 
        img: "https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=600",
        desc: "Redefining the mechanical soul in the year 2099."
    }
];

// Inisialisasi Plyr
const player = new Plyr('#player');
const videoModal = document.getElementById('videoModal');
const animeGrid = document.getElementById('animeGrid');
const searchInput = document.getElementById('searchInput');

// RENDER DAFTAR ANIME (HOME)
function renderAnimes(data) {
    animeGrid.innerHTML = data.map(anime => `
        <div class="anime-card" onclick="showDetail(${anime.id})">
            <div class="poster-wrapper">
                <img src="${anime.img}" alt="${anime.title}">
            </div>
            <h3>${anime.title}</h3>
            <p style="font-size: 0.8rem; color: #666;">⭐ ${anime.rate} | ${anime.eps} EPISODES</p>
        </div>
    `).join('');
}

// PENCARIAN
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = animeData.filter(a => a.title.toLowerCase().includes(query));
    renderAnimes(filtered);
});

// DETAIL VIEW
function showDetail(id) {
    const anime = animeData.find(a => a.id === id);
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('detailView').classList.remove('hidden');

    let epHtml = '';
    for(let i=1; i<=anime.eps; i++) {
        epHtml += `<div class="episode-item" onclick="playVideo(${i}, '${anime.title}')">${i}</div>`;
    }

    document.getElementById('animeDetailContent').innerHTML = `
        <div class="detail-img-container">
            <img src="${anime.img}" style="width: 100%; border: 1px solid var(--accent); box-shadow: 0 0 30px rgba(168,85,247,0.2);">
        </div>
        <div class="detail-info">
            <h1 style="font-size: 3.5rem; font-weight: 900; font-style: italic; line-height: 1;">${anime.title}</h1>
            <div style="margin: 1.5rem 0; display: flex; gap: 1rem;">
                <span style="background: var(--accent); color: black; padding: 2px 10px; font-weight: 900; font-size: 0.7rem;">RATING: ${anime.rate}</span>
                <span style="border: 1px solid #444; padding: 2px 10px; font-size: 0.7rem;">STATUS: AIRING</span>
            </div>
            <p style="color: #aaa; max-width: 600px;">${anime.desc}</p>
            
            <h3 style="margin-top: 3rem; font-size: 0.8rem; letter-spacing: 3px; color: var(--accent);">SELECT_EPISODE</h3>
            <div class="episode-grid">
                ${epHtml}
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

// VIDEO PLAYER LOGIC
function playVideo(ep, title) {
    const demoVideo = "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4";
    document.getElementById('nowPlaying').innerText = `NOW_STREAMING: ${title.toUpperCase()} _ EPISODE_${ep}`;
    
    videoModal.classList.remove('hidden');
    player.source = {
        type: 'video',
        sources: [{ src: demoVideo, type: 'video/mp4' }]
    };
    player.play();
}

function closePlayer() {
    player.pause();
    videoModal.classList.add('hidden');
}

function showHome() {
    closePlayer();
    document.getElementById('homeView').classList.remove('hidden');
    document.getElementById('detailView').classList.add('hidden');
}

// Load Awal
renderAnimes(animeData);// Database Anime Simulasi
const animeData = [
    { 
        id: 1, 
        title: "Fluorite Protocol", 
        eps: 12, 
        rate: "9.8", 
        img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=600",
        desc: "In a world governed by silicon and neon, one protocol remains to save the last human connection."
    },
    { 
        id: 2, 
        title: "Endfield Echoes", 
        eps: 24, 
        rate: "9.2", 
        img: "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=600",
        desc: "Exploration into the unknown territories of a dying star system."
    },
    { 
        id: 3, 
        title: "Void Hunter", 
        eps: 13, 
        rate: "8.9", 
        img: "https://images.unsplash.com/photo-1578632738981-433069302170?q=80&w=600",
        desc: "The hunt for the entities that exist within the gaps of reality."
    },
    { 
        id: 4, 
        title: "Neon Genesis 2.0", 
        eps: 10, 
        rate: "9.5", 
        img: "https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=600",
        desc: "Redefining the mechanical soul in the year 2099."
    }
];

// Inisialisasi Plyr
const player = new Plyr('#player');
const videoModal = document.getElementById('videoModal');
const animeGrid = document.getElementById('animeGrid');
const searchInput = document.getElementById('searchInput');

// RENDER DAFTAR ANIME (HOME)
function renderAnimes(data) {
    animeGrid.innerHTML = data.map(anime => `
        <div class="anime-card" onclick="showDetail(${anime.id})">
            <div class="poster-wrapper">
                <img src="${anime.img}" alt="${anime.title}">
            </div>
            <h3>${anime.title}</h3>
            <p style="font-size: 0.8rem; color: #666;">⭐ ${anime.rate} | ${anime.eps} EPISODES</p>
        </div>
    `).join('');
}

// PENCARIAN
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = animeData.filter(a => a.title.toLowerCase().includes(query));
    renderAnimes(filtered);
});

// DETAIL VIEW
function showDetail(id) {
    const anime = animeData.find(a => a.id === id);
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('detailView').classList.remove('hidden');

    let epHtml = '';
    for(let i=1; i<=anime.eps; i++) {
        epHtml += `<div class="episode-item" onclick="playVideo(${i}, '${anime.title}')">${i}</div>`;
    }

    document.getElementById('animeDetailContent').innerHTML = `
        <div class="detail-img-container">
            <img src="${anime.img}" style="width: 100%; border: 1px solid var(--accent); box-shadow: 0 0 30px rgba(168,85,247,0.2);">
        </div>
        <div class="detail-info">
            <h1 style="font-size: 3.5rem; font-weight: 900; font-style: italic; line-height: 1;">${anime.title}</h1>
            <div style="margin: 1.5rem 0; display: flex; gap: 1rem;">
                <span style="background: var(--accent); color: black; padding: 2px 10px; font-weight: 900; font-size: 0.7rem;">RATING: ${anime.rate}</span>
                <span style="border: 1px solid #444; padding: 2px 10px; font-size: 0.7rem;">STATUS: AIRING</span>
            </div>
            <p style="color: #aaa; max-width: 600px;">${anime.desc}</p>
            
            <h3 style="margin-top: 3rem; font-size: 0.8rem; letter-spacing: 3px; color: var(--accent);">SELECT_EPISODE</h3>
            <div class="episode-grid">
                ${epHtml}
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

// VIDEO PLAYER LOGIC
function playVideo(ep, title) {
    const demoVideo = "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4";
    document.getElementById('nowPlaying').innerText = `NOW_STREAMING: ${title.toUpperCase()} _ EPISODE_${ep}`;
    
    videoModal.classList.remove('hidden');
    player.source = {
        type: 'video',
        sources: [{ src: demoVideo, type: 'video/mp4' }]
    };
    player.play();
}

function closePlayer() {
    player.pause();
    videoModal.classList.add('hidden');
}

function showHome() {
    closePlayer();
    document.getElementById('homeView').classList.remove('hidden');
    document.getElementById('detailView').classList.add('hidden');
}

// Load Awal
renderAnimes(animeData);
