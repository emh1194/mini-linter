let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(" ");

let betterWords = storyWords.filter((word) => {
    return !unnecessaryWords.includes(word);
});

console.log(betterWords);

let numberOfOverusedWords = betterWords.reduce((acc, word) => {
    if (overusedWords.includes(word)) {
        acc.push(word);
    };

    return acc;

}, []);

console.log(`There are ${numberOfOverusedWords.length} overused words in this passage.`);

let numberOfSentences = betterWords.reduce((acc, word) => {
    if (word.includes('.') || word.includes ('!')) {
        acc.push(word);
    }

    return acc;

}, []);

console.log(`There are ${numberOfSentences.length} sentences in this passage.`);


console.log(`There are ${betterWords.length} words in this passage.`);
console.log(betterWords.join(" "));

const wordCounts = {};

let mostUsedWord = (paragraphString) => {

    for (let i = 0; i< paragraphString.length; i++) {
        const word = paragraphString[i];
        if (wordCounts[word] === undefined) {
            wordCounts[word] = 1;
        } else {
            wordCounts[word]++;
        }
    }

    let maxCount = 0;
    let mostUsedWord = '';
    for (const word in wordCounts) {
        if (wordCounts[word] > maxCount) {
            maxCount = wordCounts[word];
            mostUsedWord = word;
        }
    }

    return mostUsedWord;
}

console.log(`The most used word in the paragraph is "${mostUsedWord(betterWords)}"! It is used ${wordCounts[mostUsedWord(betterWords)]} times!`)

