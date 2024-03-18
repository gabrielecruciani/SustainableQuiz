
interface Questions {
    question: string;
    options: [string, string, string, string];
    correctOption: string;
}

const ItaData: Questions[] = [
    {
        question: "Quali gas sono considerati principali responsabili dell'effetto serra?",
        options: ["Azoto e ossigeno", "Ossigeno e metano", "Biossido di carbonio e metano", "Ossigeno e idrogeno"],
        correctOption: "Biossido di carbonio e metano"
    },
    {
        question: "Cosa significa l'acronimo CO2?",
        options: ["Combustione ossidativa", "Carbonio organico", "Biossido di carbonio", "Composto organico"],
        correctOption: "Biossido di carbonio"
    },
    {
        question: "Qual è l'attività umana principale che contribuisce all'aumento del biossido di carbonio nell'atmosfera?",
        options: ["Utilizzo di fertilizzanti", "Produzione di energia da fonti fossili", "Utilizzo di veicoli elettrici", "Utilizzo di prodotti riciclati"],
        correctOption: "Produzione di energia da fonti fossili"
    },
    {
        question: "Quale delle seguenti azioni contribuisce maggiormente all'inquinamento marino?",
        options: ["Utilizzo di prodotti biodegradabili", "Scarico di sostanze chimiche industriali", "Seguire una dieta sostenibile", "Ridurre le emissioni di Co2"],
        correctOption: "Scarico di sostanze chimiche industriali"
    },
    {
        question: "Qual è il principale effetto dell'inquinamento dell'aria sulle persone?",
        options: ["Malattie respiratorie", "Aumento della forza fisica", "Miglioramento delle prestazioni cognitive", "Nessun effetto diretto sulla salute"],
        correctOption: "Malattie respiratorie"
    },
    {
        question: "Quale tipo di rifiuto è considerato il più dannoso per l'ambiente?",
        options: ["Plastica", "Vetro", "Tessuto", "Carta"],
        correctOption: "Plastica"
    },
    {
        question: "Qual è il principale contributo dell'industria al cambiamento climatico?",
        options: ["Deforestazione", "Emissioni di gas serra", "Riduzione di rifiuti industriali", "Aumento dell'uso di energia rinnovabile"],
        correctOption: "Emissioni di gas serra"
    },
    {
        question: "Cosa è l'effetto serra?",
        options: ["Processo di assorbimento di gas da parte della vegetazione", "Processo di riscaldamento della Terra dovuto alla trattenuta di gas nell'atmosfera",
            "Processo di raffreddamento della Terra dovuto alla riflessione della luce solare", "Processo di congelamento dell'acqua nei ghiacciai"],
        correctOption: "Processo di riscaldamento della Terra dovuto alla trattenuta di gas nell'atmosfera"
    },
    {
        question: "Qual è il principale impatto dell'inquinamento dell'acqua sulla vita marina?",
        options: ["Aumento della biodiversità", "Riduzione degli habitat naturali", "Inquinamento del cibo", "Avvelenamento degli organismi marini"],
        correctOption: "Avvelenamento degli organismi marini"
    },
    {
        question: "Qual è l'effetto dell'inquinamento luminoso sull'ambiente?",
        options: ["Promuove la biodiversità notturna", "Riduce l'effetto serra", "Altera i ritmi biologici degli animali e delle piante", "Migliora la visibilità notturna"],
        correctOption: "Altera i ritmi biologici degli animali e delle piante"
    }
];

export default ItaData;