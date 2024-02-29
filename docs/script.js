document.addEventListener('DOMContentLoaded', function () {
    const endDate = new Date('June 2, 2024 00:00:00').getTime();
    const quotes = [
        ['Der einzige Weg, großartige Arbeit zu leisten, ist, zu lieben, was man tut.', 'Steve Jobs'],
        ['Es ist nie zu spät, das zu werden, was man hätte sein können.', 'George Eliot'],
        // Fügen Sie hier zusätzliche Zitate hinzu
    ];
    const songs = [
        { title: "Eye of the Tiger", artist: "Survivor", link: "https://open.spotify.com/track/BeispielLink1" },
        { title: "We Will Rock You", artist: "Queen", link: "https://open.spotify.com/track/BeispielLink2" },
        // Fügen Sie hier zusätzliche Lieder hinzu
    ];

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        const today = new Date().getDate();
        const quoteOfTheDay = quotes[today % quotes.length];
        document.getElementById('quote').innerHTML = `"${quoteOfTheDay[0]}" - ${quoteOfTheDay[1]}`;

        const songOfTheDay = songs[today % songs.length];
        document.getElementById('song-of-the-day').innerHTML = `Lied des Tages: <a href="${songOfTheDay.link}" target="_blank">${songOfTheDay.title} von ${songOfTheDay.artist}</a>`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
``
