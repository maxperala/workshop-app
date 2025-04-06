# Tepon Workshop Työkalu

Stack:
- Angular
- Tailwind CSS
- Docker

Sovellus löytyy livenä osoitteesta https://teppo-ws-system.fly.dev/

## Käyttö

`npm install` ja `npm start` tai fly.io linkin kautta :)

### Ajatusprosessi

Tehtävänannossa kuvataan ongelma, jossa jokin sattumanvarainen määrä osallistujia tulisi jakaa tasaisesti työpajoihin niin, että kukaan ei ole työpajassa saman ihmisen kanssa kuin kerran. Samoin yhdessä työpajassa voi käydä vain kerran ja työpajoja pidetään yhtä monta, kuin on kierroksia.

Aika nopeasti kävi selväksi, etten osaa tällaista laskea päässä enkä keksi mitään järkevää algoritmia sen ratkaisemiseksi.

Selvitin googlesta, että kyseessä on pitkälti ns. *Social Golfer Problem* sillä lisärajoituksella, että workshoppeja tulee olla yhtä monta kuin kierroksia. Sen ratkaiseminen on jollain syötteillä mahdotonta, eikä muutenkaan mitenkään yksinkertaista.

Päätin antaa koko ongelman itsessään olla ja keskittyä tekemään kuitenkin toimiva prototyyppi. Ohjelma ei siis laske yhtään mitään vaan lataa valmiit vastaukset JSON tiedostosta `schedules.json`.  Sinne voi myös modulaarisesti lisätä lisää ratkaisuja halutessaan. Päätin, että workshopin pitäjän täytyy valita joku sopiva *konfiguraatio* annetuista vaihtoehdoista, niin päästään varmasti lopputulokseen, joka toimii vaikka ei olekaan täydellinen.

Itse sovellus on aika yksinkertainen eikä oikeastaan tee muuta, kuin näyttää dataa tuosta JSON tiedostosta sopivassa muodossa. Lisäksi lisäsin sovellukseen värikoodauksen sen mukaan missä ryhmässä kukakin on ollut ensimmäisellä kierroksella. Näin ihmisten hyppimistä ryhmistä toiseen on helpompi seurata.

### Ajankäyttö

Venytin tässä kohtaa sääntöjä vähän. Sovelluksen peruslogiikka ja toiminnallisuudet tulivat kyllä valmiiksi alle neljässä tunnissa, mutta jos mukaan laskee esimerkiksi kaikki tyylit ja muun extran niin aikaa meni kyllä enemmän.

Itselläni kun ei ole Angular taustaa niin kaikkea yllättävää tuli matkalla vastaan myös sen saralta.

### Tekoälyn käyttö

Käytin ratkaisujen (`schedules.json`) "haalimiseen" Googlen OR-Tools solveria pythonin kautta. Kyseessä on minulle täysin uusi työkalu enkä olisi sitä ehtinyt opetella, joten päätin hyödyntää tekoälyä tässä kohtaa. Sain ratkaistua ongelmaan muutaman ratkaisun pitkälti tekoälyn kirjoittamaa python-scriptiä käyttäen (openAI o3-mini-high), pienillä omilla muokkauksilla.

Käytin tekoälyä apuna aika ajoin esimerkiksi, jos en löytänyt etsimääni Angular-dokumentaatiosta. Kaikki koodi on kuitenkin omaani :)
