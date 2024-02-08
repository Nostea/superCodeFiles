let languages = ["JavaScript", "Python", "Java", "Ruby", "PHP", "C++", "CSS", "C#", "Go", "C", "TypeScript", "Swift"];

//const sortLanguages = languages.sort((a, b) => a.length - b.length);
//console.table(sortLanguages)

const sortierung2 = () => {
    languages.sort();
    console.table(languages);
    languages.sort().reverse();
    console.table(languages);
};
sortierung2();
