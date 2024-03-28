function generateQuote() {
    const quotes = [
        {
            quote: 'Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.',
            author: 'Michael Scott, Season 5, "The Duel"'
        },
        {
            quote: 'I talk a lot, so I’ve learned to tune myself out.',
            author: 'Kelly Kapoor, Season 7, "Counseling"'
        },
        {
            quote: 'I’m not superstitious, but I am a little stitious.',
            author: 'Michael Scott, Season 4, "Fun Run"'
        },
        {
            quote: 'If I don’t have some cake soon, I might die.',
            author: 'Stanley Hudson, Season 4, "Survivor Man"'
        },
        {   quote: 'If I were buying my coffin, I would get one with thicker walls so you couldn’t hear the other dead people.',
            author: 'Dwight Schrute, Season 2, "Office Olympics"'
        },
        {
            quote:'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.',
            author:'Michael Scott, Season 2, “The Fight”'
        },
        {
            quote:'The worst thing about prison was the dementors.',
            author: 'Michael “Prison Mike” Scott, Season 3, “The Convict”'
        },
        {
            quote: 'No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?',
            author: 'Michael Scott, Season 5, “Stress Relief”'
        },
        {   quote: 'Identity theft is not a joke, Jim! Millions of families suffer every year.',
            author: 'Dwight Schrute, Season 3, “Product Recall”'
        },
        {
            quote: 'Today, smoking is going to save lives.',
            author: 'Dwight Schrute, Season 5, “Stress Relief”'
        },
        {
            quote: 'I am running away from my responsibilities. And it feels good.',
            author: 'Michael Scott, Season 4, “Money”'
        },
        {
            quote: 'I just want to lie on the beach and eat hot dogs. That’s all I’ve ever wanted.',
            author: 'Kevin Malone, Season 3, “Beach Games”'
        },
        {
            quote: 'Sometimes the clothes at Gap Kids are too flashy, so I’m forced to go to the American Girl store and order clothes for large colonial dolls.',
            author: 'Angela Martin, Season 3, “Women’s Appreciation”'
        },
        {
            quote: 'And I knew exactly what to do. But in a much more real sense, I had no idea what to do.',
            author: 'Michael Scott, Season 5, “Stress Relief”'
        },
        {
            quote: 'There’s a lot of beauty in ordinary things. Isn’t that kind of the point?',
            author: 'Pam Beesly, Season 9, “Finale”'
        }
    ];
    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quotation').innerHTML = '&quot;' + quotes[arrayIndex].quote + '&quot;';
    document.getElementById('author').innerHTML = quotes[arrayIndex].author;

}
window.onload = function () {
    generateQuote();
}
document.getElementById('generate').addEventListener('click', generateQuote);