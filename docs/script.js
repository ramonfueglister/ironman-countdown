document.addEventListener('DOMContentLoaded', function () {
    const endDate = new Date('June 2, 2024 00:00:00').getTime();
    const quotes = [
    ['Der einzige Weg, großartige Arbeit zu leisten, ist, zu lieben, was man tut.', 'Steve Jobs'],
    ['Es ist nie zu spät, das zu werden, was man hätte sein können.', 'George Eliot'],
    ['Das Geheimnis des Erfolgs ist, den Standpunkt des anderen zu verstehen.', 'Henry Ford'],
    ['Zwei Dinge sind unendlich, das Universum und die menschliche Dummheit, aber beim Universum bin ich mir noch nicht ganz sicher.', 'Albert Einstein'],
    ['Sei du selbst die Veränderung, die du dir wünschst für diese Welt.', 'Mahatma Gandhi'],
    ['Nichts ist so beständig wie der Wandel.', 'Heraklit'],
    ['Der beste Zeitpunkt, einen Baum zu pflanzen, war vor zwanzig Jahren. Der nächstbeste Zeitpunkt ist jetzt.', 'Chinesisches Sprichwort'],
    ['Erfolg hat nur, wer etwas tut, während er auf den Erfolg wartet.', 'Thomas Alva Edison'],
    ['Um ein tadelloses Mitglied einer Schafherde sein zu können, muss man vor allem ein Schaf sein.', 'Albert Einstein'],
    ['Das Leben ist wie Fahrradfahren. Um die Balance zu halten, musst du in Bewegung bleiben.', 'Albert Einstein'],
    ['Die Zukunft gehört denen, die an die Schönheit ihrer Träume glauben.', 'Eleanor Roosevelt'],
    ['Das einzige, was im Weg steht zwischen dir und deinem Ziel, ist die erfundene Geschichte, die du dir weiterhin erzählst, warum du es nicht erreichen kannst.', 'Jordan Belfort'],
    ['Der schwierigste Schritt im Leben ist der erste.', 'Voltaire'],
    ['Erfolg ist kein Zufall. Es ist harte Arbeit, Ausdauer, Lernen, Studieren, Opfer und vor allem, Liebe zu dem, was du tust oder lernst zu tun.', 'Pele'],
    ['Wer kämpft, kann verlieren. Wer nicht kämpft, hat schon verloren.', 'Bertolt Brecht'],
    ['Die beste Zeit für einen Neuanfang ist jetzt.', 'Unbekannt'],
    ['Folge deiner Leidenschaft, und der Erfolg wird dir folgen.', 'Oprah Winfrey'],
    ['Der Schlüssel zum Erfolg ist, den Fokus auf Ziele, nicht auf Hindernisse zu richten.', 'Unbekannt'],
    ['Das Leben ist 10% was passiert und 90% wie du darauf reagierst.', 'Charles R. Swindoll'],
    ['Träume nicht dein Leben, sondern lebe deinen Traum.', 'Tommaso Campanella'],
    ['Mut steht am Anfang des Handelns, Glück am Ende.', 'Demokrit'],
    ['Die Kunst ist, einmal mehr aufzustehen, als man umgeworfen wird.', 'Winston Churchill'],
    ['Ein Ziel ohne Plan ist nur ein Wunsch.', 'Antoine de Saint-Exupéry'],
    ['Erfolg ist die Fähigkeit, von einem Fehlschlag zum nächsten zu gehen, ohne die Begeisterung zu verlieren.', 'Winston Churchill'],
    ['Nicht weil es schwer ist, wagen wir es nicht, sondern weil wir es nicht wagen, ist es schwer.', 'Seneca'],
    // Fortsetzung der Liste bis zum Erreichen von 82 Zitaten insgesamt...
    ['Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.', 'Ludwig Wittgenstein'],
    ['Wissen ist Macht.', 'Francis Bacon'],
    ['Ein kluger Mann macht nicht alle Fehler selbst. Er gibt auch anderen eine Chance.', 'Winston Churchill'],
    ['Der Weg zur Hölle ist mit guten Vorsätzen gepflastert.', 'Samuel Johnson'],
    ['Die Wahrheit ist dem Menschen zumutbar.', 'Ingeborg Bachmann'],
    ['Glück ist Liebe, nichts anderes. Wer lieben kann, ist glücklich.', 'Hermann Hesse'],
    ['In der Beschränkung zeigt sich erst der Meister.', 'Johann Wolfgang von Goethe'],
    ['Gib jedem Tag die Chance, der schönste deines Lebens zu werden.', 'Mark Twain'],
    ['Es gibt nur eine Zeit, in der es wesentlich ist aufzuwachen. Diese Zeit ist jetzt.', 'Buddha'],
    ['Wer immer tut, was er schon kann, bleibt immer das, was er schon ist.', 'Henry Ford'],
    ['Der Mensch ist das Maß aller Dinge.', 'Protagoras'],
    ['Zu leben, ohne zu lieben, ist kein richtiges Leben. Nimm dem Leben die Liebe, und du nimmst ihm sein Vergnügen.', 'Molière'],
    ['Alles, was wir sind, ist das Ergebnis dessen, was wir gedacht haben.', 'Buddha'],
    ['Der größte Ruhm liegt nicht darin, nie zu fallen, sondern jedes Mal wieder aufzustehen.', 'Nelson Mandela'],
    ['Die beste und sicherste Taktik ist, den Gegner durch Nachahmung zu irreführen.', 'Sun Tzu'],
    ['Leben, als würde man morgen sterben. Lernen, als würde man ewig leben.', 'Mahatma Gandhi'],
    ['Die Hoffnung ist der Regenbogen über dem herabstürzenden Bach des Lebens.', 'Friedrich Nietzsche'],
    ['Der einzige Mensch, der sich vernünftig benimmt, ist mein Schneider. Er nimmt jedes Mal neu Maß, wenn er mich sieht.', 'George Bernard Shaw'],
    ['Die größte Offenbarung ist die Stille.', 'Laozi'],
    ['Das Schönste, was wir entdecken können, ist das Geheimnisvolle.', 'Albert Einstein'],
    ];

    const songs = [
    { title: "Eye of the Tiger", artist: "Survivor" },
    { title: "We Will Rock You", artist: "Queen" },
    { title: "Don't Stop Believin'", artist: "Journey" },
    { title: "Stronger", artist: "Kanye West" },
    { title: "Lose Yourself", artist: "Eminem" },
    { title: "Firework", artist: "Katy Perry" },
    { title: "Can't Stop the Feeling!", artist: "Justin Timberlake" },
    { title: "Happy", artist: "Pharrell Williams" },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars" },
    { title: "Shake It Off", artist: "Taylor Swift" },
    { title: "Roar", artist: "Katy Perry" },
    { title: "Survivor", artist: "Destiny's Child" },
    { title: "It's My Life", artist: "Bon Jovi" },
    { title: "Beautiful Day", artist: "U2" },
    { title: "Fight Song", artist: "Rachel Platten" },
    { title: "Walking on Sunshine", artist: "Katrina and the Waves" },
    { title: "Can't Hold Us", artist: "Macklemore & Ryan Lewis" },
    { title: "I Will Survive", artist: "Gloria Gaynor" },
    { title: "Born to Run", artist: "Bruce Springsteen" },
    { title: "Good as Hell", artist: "Lizzo" },
    { title: "I Gotta Feeling", artist: "The Black Eyed Peas" },
    { title: "Don't Stop Me Now", artist: "Queen" },
    { title: "On Top of the World", artist: "Imagine Dragons" },
    { title: "Stronger (What Doesn't Kill You)", artist: "Kelly Clarkson" },
    { title: "Best Day of My Life", artist: "American Authors" },
    { title: "The Climb", artist: "Miley Cyrus" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell" },
    { title: "Brave", artist: "Sara Bareilles" },
    { title: "Heroes", artist: "David Bowie" },
    { title: "Let It Be", artist: "The Beatles" },
    { title: "Eye of the Needle", artist: "Sia" },
    { title: "Run the World (Girls)", artist: "Beyoncé" },
    { title: "The Fighter", artist: "Gym Class Heroes ft. Ryan Tedder" },
    { title: "Hall of Fame", artist: "The Script ft. will.i.am" },
    { title: "You're the Best", artist: "Joe Esposito" },
    { title: "Livin' on a Prayer", artist: "Bon Jovi" },
    { title: "Titanium", artist: "David Guetta ft. Sia" },
    { title: "Thunder", artist: "Imagine Dragons" },
    { title: "Rise Up", artist: "Andra Day" },
    { title: "Unstoppable", artist: "Sia" },
    { title: "Harder, Better, Faster, Stronger", artist: "Daft Punk" },
    { title: "Something Just Like This", artist: "The Chainsmokers & Coldplay" },
    { title: "Shut Up and Dance", artist: "WALK THE MOON" },
    { title: "Lean On", artist: "Major Lazer & DJ Snake ft. MØ" },
    { title: "The Greatest", artist: "Sia ft. Kendrick Lamar" },
    { title: "This Is Me", artist: "Keala Settle & The Greatest Showman Ensemble" },
    { title: "Work", artist: "Rihanna ft. Drake" },
    { title: "Pump It", artist: "The Black Eyed Peas" },
    { title: "Get Up Stand Up", artist: "Bob Marley" },
    { title: "Girl on Fire", artist: "Alicia Keys" },
    { title: "No Limit", artist: "2 Unlimited" },
    { title: "Radioactive", artist: "Imagine Dragons" },
    { title: "Viva La Vida", artist: "Coldplay" },
    { title: "Let's Get It Started", artist: "The Black Eyed Peas" },
    { title: "Dare (La La La)", artist: "Shakira" },
    { title: "Break My Stride", artist: "Matthew Wilder" },
    { title: "Jump", artist: "Van Halen" },
    { title: "Wake Me Up", artist: "Avicii" },
    { title: "Feel Invincible", artist: "Skillet" },
    { title: "Welcome to the Jungle", artist: "Guns N' Roses" },
    { title: "Rolling in the Deep", artist: "Adele" },
    { title: "We Are the Champions", artist: "Queen" },
    { title: "Never Give Up", artist: "Sia" },
    { title: "Higher Ground", artist: "Stevie Wonder" },
    { title: "Don't Worry Be Happy", artist: "Bobby McFerrin" },
    { title: "You Gotta Be", artist: "Des'ree" },
    { title: "I'm Still Standing", artist: "Elton John" },
    { title: "Not Afraid", artist: "Eminem" },
    { title: "Scream & Shout", artist: "will.i.am ft. Britney Spears" },
    { title: "Power", artist: "Kanye West" },
    { title: "Alive", artist: "Sia" },
    { title: "All of Me", artist: "John Legend" },
    { title: "Adventure of a Lifetime", artist: "Coldplay" },
    { title: "Counting Stars", artist: "OneRepublic" },
    { title: "The Edge of Glory", artist: "Lady Gaga" },
    { title: "The Power of Love", artist: "Huey Lewis and the News" },
    { title: "Born This Way", artist: "Lady Gaga" },
    { title: "Waka Waka (This Time for Africa)", artist: "Shakira" },
    { title: "Try Everything", artist: "Shakira" },
    { title: "Can't Stop", artist: "Red Hot Chili Peppers" },
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
        const songSearchQuery = encodeURIComponent(`${songOfTheDay.title} ${songOfTheDay.artist}`);
        const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${songSearchQuery}`;
        document.getElementById('song-of-the-day').innerHTML = `Motivationslied des Tages: <a href="${youtubeSearchUrl}" target="_blank">${songOfTheDay.title} von ${songOfTheDay.artist}</a>`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
