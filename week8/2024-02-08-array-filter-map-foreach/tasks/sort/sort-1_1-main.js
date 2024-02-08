let languages = ["JavaScript", "Python", "Java", "Ruby", "PHP", "C++", "CSS", "C#", "Go", "C", "TypeScript", "Swift"];
console.table(languages);

//const sortLanguages = languages.sort((a, b) => a.length - b.length);
//console.table(sortLanguages);

languages.sort();
console.table(languages);

// sort() funktioniet direkt mit strings, nur für zahlen braucht man callback functions
