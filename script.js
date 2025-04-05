const songs = [
    {
        name: "BLOOD.",
        artist: "Kendrick Lamar",
        cover: "https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797"
    },
    {
        name: "DNA.",
        artist: "Kendrick Lamar",
        cover: "https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797"
    },
    {
        name: "HUMBLE.",
        artist: "Kendrick Lamar",
        cover: "https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797"
    },
    {
        name: "Blinding Lights",
        artist: "The Weeknd",
        cover: "https://i.scdn.co/image/ab67616d0000b273c6f7af698554d96416f83d10"
    },
    {
        name: "Starboy",
        artist: "The Weeknd",
        cover: "https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a"
    }
    // Add more songs as needed
];

const inventory = [];
const usedSongs = new Set();
const dice = document.getElementById('dice');
const currentSong = document.getElementById('current-song');
const inventoryList = document.getElementById('inventory-list');

dice.addEventListener('click', () => {
    if (usedSongs.size >= songs.length) {
        alert("You've collected all available songs!");
        return;
    }

    dice.classList.add('rolling');
    dice.style.pointerEvents = 'none';
    
    setTimeout(() => {
        let randomSong;
        do {
            randomSong = songs[Math.floor(Math.random() * songs.length)];
        } while (usedSongs.has(randomSong.name));
        
        usedSongs.add(randomSong.name);
        currentSong.querySelector('.album-cover').style.backgroundImage = `url(${randomSong.cover})`;
        currentSong.querySelector('.song-name').textContent = randomSong.name;
        currentSong.querySelector('.artist-name').textContent = randomSong.artist;
        
        inventory.push(randomSong);
        updateInventory();
        
        dice.classList.remove('rolling');
        dice.style.pointerEvents = 'auto';
    }, 1000);
});

function updateInventory() {
    inventoryList.innerHTML = '';
    inventory.forEach(song => {
        const item = document.createElement('div');
        item.className = 'inventory-item';
        item.innerHTML = `
            <img src="${song.cover}" alt="${song.name}">
            <div>
                <div>${song.name}</div>
                <div><small>${song.artist}</small></div>
            </div>
        `;
        inventoryList.appendChild(item);
    });
}

// Add at the beginning of your script.js
document.querySelector('.hamburger-button').addEventListener('click', () => {
    document.querySelector('.song-inventory').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
    document.querySelector('.hamburger-button').classList.toggle('active');
});

// Close menu when clicking overlay
document.querySelector('.overlay').addEventListener('click', () => {
    document.querySelector('.song-inventory').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
    document.querySelector('.hamburger-button').classList.remove('active');
});