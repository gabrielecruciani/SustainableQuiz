
interface Questions {
    question: string;
    options: [string, string, string, string];
    correctOption: string;
}

const EngData: Questions[] = [
    {
        question: "Which gases are considered mainly responsible for the greenhouse effect?",
        options: ["Nitrogen and oxygen", "Oxygen and methane", "Carbon dioxide and methane", "Oxygen and hydrogen"],
        correctOption: "Carbon dioxide and methane"
    },
    {
        question: "What does the acronym CO2 mean?",
        options: ["Oxidative combustion", "Organic carbon", "Carbon dioxide", "Organic compound"],
        correctOption: "Carbon dioxide"
    },
    {
        question: "What is the main human activity contributing to the increase in carbon dioxide in the atmosphere?",
        options: ["Use of fertilizers", "Energy production from fossil sources", "Use of electric vehicles", "Use of recycled products"],
        correctOption: "Energy production from fossil sources"
    },
    {
        question: "Which of the following contributes most to marine pollution?",
        options: ["Use of biodegradable products", "Discharge of industrial chemicals", "Follow a sustainable diet", "Reduce Co2 emissions"],
        correctOption: "Discharge of industrial chemicals"
    },
    {
        question: "What is the main effect of air pollution on people?",
        options: ["Respiratory diseases", "Increased physical strength", "Improved cognitive performance", "No direct health effects"],
        correctOption: "Respiratory diseases"
    },
    {
        question: "Which type of waste is considered the most harmful to the environment?",
        options: ["Plastic", "Glass", "Tissue", "Paper"],
        correctOption: "Plastic"
    },
    {
        question: "What is the industry's main contribution to climate change?",
        options: ["Deforestation", "Greenhouse gas emissions", "Reduction of industrial waste", "Increased use of renewable energy"],
        correctOption: "Greenhouse gas emissions"
    },
    {
        question: "What is the greenhouse effect?",
        options: ["Process of gas absorption by vegetation", "Process of warming of the Earth due to the retention of gases in the atmosphere",
            "Cooling process of the Earth due to the reflection of sunlight", "Process of freezing of water in glaciers"],
        correctOption: "Process of warming of the Earth due to the retention of gases in the atmosphere"
    },
    {
        question: "What is the main impact of water pollution on marine life?",
        options: ["increase in biodiversity", "Reduction of natural habitats", "Food pollution", "Poisoning of marine organisms"],
        correctOption: "Poisoning of marine organisms"
    },
    {
        question: "What is the effect of light pollution on the environment?",
        options: ["Promotes nocturnal biodiversity", "Reduces the greenhouse effect", "It alters the biological rhythms of animals and plants", "Improves night visibility"],
        correctOption: "It alters the biological rhythms of animals and plants"
    }
];

export default EngData;