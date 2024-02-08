const listAll = () => {
    const woerter = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];

    const wordList = woerter.filter((selectWordLength) => {
        return selectWordLength.length <= 6;
    });

    console.log({ woerter });
    console.table(wordList);
};

listAll();
