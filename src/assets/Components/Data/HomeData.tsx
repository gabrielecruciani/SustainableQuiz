interface Home {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
}

const HomeData: Home[] = [
    {
        title: 'QUIZ SOSTENIBILE',
        paragraph1: "Benvenuti al nostro quiz sull'inquinamento ambientale.",
        paragraph2: 'Metti alla prova le tue conoscenze e scopri come puoi contribuire a un ambiente più sano!',
        paragraph3: 'Il quiz è composto da dieci domande a scelta multipla.',
        paragraph4: 'Scegli la risposta corretta per ogni domanda e premi "Avanti" per ottenere il punteggio finale.'
    },
    {
        title: 'SUSTAINABLE QUIZ',
        paragraph1: 'Welcome to our environmental pollution quiz.',
        paragraph2: 'Test your knowledge and find out how you can contribute to a healthier environment!',
        paragraph3: 'The quiz consists of ten multiple choice questions.',
        paragraph4: 'Choose the correct answer for each question and press "Next" to get your final score.'
    }
];

export default HomeData;