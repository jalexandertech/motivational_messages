// This program will generate motivational messages to the user.

const quoteName = "Quote of the day: ";
const motivateName = "Dose of motivation: ";
const affirmName = "Say this to yourself: ";


let mixedMessages = {

    quote() {
        const quoteArr = ["\"Nothing is impossible. The word itself says 'I'm possible!'\" - Audrey Hepburn",
            "\"Life has got all those twists and turns. You've got to hold on tight and off you go.\" - Nicole Kidman",
            "\"Keep your face always toward the sunshine, and shadows will fall behind you.\" - Walt Whitman"
        ]
        let randMessage = Math.floor(Math.random() * quoteArr.length);

        for (let i = 0; i < quoteArr.length; i++) {
            return quoteName + quoteArr[randMessage];
        }
    },
    motivation() {
        const motivateArr = ["Embrace every challenge.",
            "Believe in yourself.",
            "Never give up!",
            "Make today matter.",
            "You can and you will.",
            "Learning has NO limits."
        ]
        let randMessage = Math.floor(Math.random() * motivateArr.length);

        for (let i = 0; i < motivateArr.length; i++) {
            return motivateName + motivateArr[randMessage];
        }
    },
    affirmation() {
        const affirmArr = ["I am worthy because I say so. My worth is in my hands.",
            "I love myself to the fullest.",
            "I am feeling happy with myself as a person.",
            "My confidence is what drives me the most.",
            "I give myself space to grow and learn."
        ]
        let randMessage = Math.floor(Math.random() * affirmArr.length);


        for (let i = 0; i < affirmArr.length; i++) {
            return affirmName + affirmArr[randMessage];
        }
    }
}

console.log(mixedMessages.quote());
console.log(mixedMessages.motivation());
console.log(mixedMessages.affirmation());