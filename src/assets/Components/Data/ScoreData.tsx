interface Score {
    acknowledgments: [string, string, string];
    valutation: string;
    scoreDetails: string;
    backButton: string;
}

const ScoreData: Score[] = [
    {
        acknowledgments: ["COMPLIMENTI!", "DEVI MIGLIORARE!", "NON VA BENE!"],
        valutation: "Punteggio Finale:",
        scoreDetails: "Ogni risposta corretta aumenta di 1 il punteggio totale, mentre risposte errate non influenzano il punteggio.",
        backButton: "TORNA ALLA HOME"
    },
    {
        acknowledgments: ["COMPLIMENTS!", "YOU HAVE TO IMPROVE!", "THAT'S NO GOOD!"],
        valutation: "Final Score:",
        scoreDetails: "Each correct answer increases the total score by 1, while incorrect answers do not affect the score.",
        backButton: "BACK TO HOME"
    }
];

export default ScoreData;