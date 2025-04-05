const songs = [
    // Unique Songs (1% chance)
    {
        name: "family ties",
        artist: "Baby Keem, Kendrick Lamar",
        cover: "familyties.jpg",
        rarity: "unique"
    },
    
    // Legendary Songs (5% chance)
    {
        name: "The Blacker The Berry",
        artist: "Kendrick Lamar",
        cover: "TPAB.jpg",
        rarity: "legendary"
    },
    {
        name: "Sing About Me, I'm Dying of Thirst",
        artist: "Kendrick Lamar",
        cover: "GKMC.jpg",
        rarity: "legendary"
    },
    {
        name: "Nights",
        artist: "Frank Ocean",
        cover: "Blonde.jpg",
        rarity: "legendary"
    },
    // Rare Songs (15% chance)
    {
        name: "BLOOD.",
        artist: "Kendrick Lamar",
        cover: "DAMN..jpg",
        rarity: "rare"
    },
    {
        name: "DNA.",
        artist: "Kendrick Lamar",
        cover: "DAMN..jpg",
        rarity: "rare"
    },
    {
        name: "m.A.A.d city",
        artist: "Kendrick Lamar",
        cover: "GKMC.jpg",
        rarity: "rare"
    },
    {
        name: "Money Trees",
        artist: "Kendrick Lamar",
        cover: "GKMC.jpg",
        rarity: "rare"
    },
    // Rare Songs
    {
        name: "Nikes",
        artist: "Frank Ocean",
        cover: "Blonde.jpg",
        rarity: "rare"
    },
    {
        name: "Wesley's Theory",
        artist: "Kendrick Lamar",
        cover: "TPAB.jpg",
        rarity: "rare"
    },
    {
        name: "u",
        artist: "Kendrick Lamar",
        cover: "TPAB.jpg",
        rarity: "rare"
    },
    {
        name: "Self Control",
        artist: "Frank Ocean",
        cover: "Blonde.jpg",
        rarity: "rare"
    },
    // Uncommon Songs (35% chance)
    {
        name: "ELEMENT.",
        artist: "Kendrick Lamar",
        cover: "DAMN..jpg",
        rarity: "uncommon"
    },
    {
        name: "FEEL.",
        artist: "Kendrick Lamar",
        cover: "DAMN..jpg",
        rarity: "uncommon"
    },
    {
        name: "LOYALTY.",
        artist: "Kendrick Lamar",
        cover: "DAMN..jpg",
        rarity: "uncommon"
    },
    {
        name: "Swimming Pools (Drank)",
        artist: "Kendrick Lamar",
        cover: "GKMC.jpg",
        rarity: "uncommon"
    },
    {
        name: "Poetic Justice",
        artist: "Kendrick Lamar",
        cover: "GKMC.jpg",
        rarity: "uncommon"
    },
    {
        name: "good kid",
        artist: "Kendrick Lamar",
        cover: "GKMC.jpg",
        rarity: "uncommon"
    },
    {
        name: "Starboy",
        artist: "The Weeknd",
        cover: "https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a",
        rarity: "uncommon"
    },

    // Common Songs (50% chance)
    {
        name: "PRIDE.",
        artist: "Kendrick Lamar",
        cover: "DAMN..jpg",
        rarity: "common"
    },
    {
        name: "HUMBLE.",
        artist: "Kendrick Lamar",
        cover: "DAMN..jpg",
        rarity: "common"
    },
    {
        name: "LUST.",
        artist: "Kendrick Lamar",
        cover: "DAMN..jpg",
        rarity: "common"
    },
    {
        name: "LOVE.",
        artist: "Kendrick Lamar",
        cover: "DAMN..jpg",
        rarity: "common"
    },
    {
        name: "XXX.",
        artist: "Kendrick Lamar",
        cover: "DAMN..jpg",
        rarity: "common"
    },
    {
        name: "FEAR.",
        artist: "Kendrick Lamar",
        cover: "DAMN..jpg",
        rarity: "common"
    },
    {
        name: "GOD.",
        artist: "Kendrick Lamar",
        cover: "DAMN..jpg",
        rarity: "common"
    },
    {
        name: "DUCKWORTH.",
        artist: "Kendrick Lamar",
        cover: "DAMN..jpg",
        rarity: "common"
    },
    {
        name: "Sherane a.k.a Master Splinter's Daughter",
        artist: "Kendrick Lamar",
        cover: "GKMC.jpg",
        rarity: "common"
    },
    {
        name: "Bitch, Don't Kill My Vibe",
        artist: "Kendrick Lamar",
        cover: "GKMC.jpg",
        rarity: "common"
    },
    {
        name: "Backseat Freestyle",
        artist: "Kendrick Lamar",
        cover: "GKMC.jpg",
        rarity: "common"
    },
    {
        name: "The Art of Peer Pressure",
        artist: "Kendrick Lamar",
        cover: "GKMC.jpg",
        rarity: "common"
    },
    {
        name: "Real",
        artist: "Kendrick Lamar",
        cover: "GKMC.jpg",
        rarity: "common"
    },
    {
        name: "Compton",
        artist: "Kendrick Lamar",
        cover: "GKMC.jpg",
        rarity: "common"
    },
    
];

// Initialize variables at the top
const inventory = [];
const usedSongs = new Set();  // Add this line to fix the error
const dice = document.getElementById('dice');
const currentSong = document.getElementById('current-song');
const inventoryList = document.getElementById('inventory-list');

// Update the dice click handler
dice.addEventListener('click', () => {
    if (usedSongs.size >= songs.length) {
        alert("You've collected all available songs!");
        return;
    }

    dice.classList.add('rolling');
    dice.style.pointerEvents = 'none';
    
    // Update the dice click handler probabilities
    setTimeout(() => {
        let randomSong;
        let roll = Math.random() * 100;
        
        let availableSongs = songs.filter(song => !usedSongs.has(song.name));
        let possibleSongs;
        
        if (roll < 1) { // 1% chance for unique
            possibleSongs = availableSongs.filter(song => song.rarity === "unique");
            if (possibleSongs.length === 0) possibleSongs = availableSongs;
        } else if (roll < 6) { // 5% chance for legendary
            possibleSongs = availableSongs.filter(song => song.rarity === "legendary");
            if (possibleSongs.length === 0) possibleSongs = availableSongs;
        } else if (roll < 20) { // 14% chance for rare
            possibleSongs = availableSongs.filter(song => song.rarity === "rare");
            if (possibleSongs.length === 0) possibleSongs = availableSongs;
        } else if (roll < 50) { // 30% chance for uncommon
            possibleSongs = availableSongs.filter(song => song.rarity === "uncommon");
            if (possibleSongs.length === 0) possibleSongs = availableSongs;
        } else { // 50% chance for common
            possibleSongs = availableSongs.filter(song => song.rarity === "common");
            if (possibleSongs.length === 0) possibleSongs = availableSongs;
        }
        
        randomSong = possibleSongs[Math.floor(Math.random() * possibleSongs.length)];
        usedSongs.add(randomSong.name);
        
        currentSong.className = `song-display rarity-${randomSong.rarity}`;
        currentSong.querySelector('.album-cover').style.backgroundImage = `url(${getImagePath(randomSong.cover)})`;
        currentSong.querySelector('.song-name').textContent = randomSong.name;
        currentSong.querySelector('.artist-name').textContent = randomSong.artist;
        
        inventory.push(randomSong);
        updateInventory();
        
        dice.classList.remove('rolling');
        dice.style.pointerEvents = 'auto';
    }, 1000);
});

// Update the inventory display function
function updateInventory() {
    inventoryList.innerHTML = '';
    inventory.forEach(song => {
        const item = document.createElement('div');
        item.className = `inventory-item rarity-${song.rarity}`;
        item.innerHTML = `
            <img src="${getImagePath(song.cover)}" alt="${song.name}">
            <div>
                <div>${song.name}</div>
                <div><small>${song.artist}</small></div>
                <div class="rarity-tag">${song.rarity.toUpperCase()}</div>
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


// Add this function at the top of your file
function getImagePath(cover) {
    if (cover.startsWith('http')) {
        return cover;
    }
    return `./images/${cover}`;
}