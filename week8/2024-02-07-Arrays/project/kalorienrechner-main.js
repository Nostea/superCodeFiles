const calcCalories = (event) => {
    event.preventDefault();

    const height = document.querySelector("#heightInput").value;
    const age = document.querySelector("#ageInput").value;
    const weight = document.querySelector("#weightInput").value;
    const gender = document.querySelector("input[name='gender']:checked").value;

    const palFactor = Number(document.querySelector("#activityPAL").value);
    console.log({ palFactor });

    // outputs
    const grundumsatzkcalOutput = document.querySelector("#kcalGrundumsatzOutput");
    const grundumsatzkJOutput = document.querySelector("#kJGrundumsatzOutput");
    const gesamtumsatzkcalOutput = document.querySelector("#kcalGesamtumsatzOutput");
    const gesamtumsatzkJOutput = document.querySelector("#kJGesamtumsatzOutput");

    //Grundumsatz mit Harris-Benedict-Formel
    if (gender == "male") {
        let grundumsatzM = 66.47 + 13.7 * weight + 5 * height - 6.8 * age;
        let gesamtumsatzM = grundumsatzM * palFactor;
        const kJvalueGrund = grundumsatzM * 4.186;
        const kJvalueGesamt = gesamtumsatzM * 4.186;

        console.log({ gesamtumsatzM }, { grundumsatzM });
        //reihe1
        grundumsatzkcalOutput.innerHTML = grundumsatzM.toFixed(2);
        grundumsatzkJOutput.innerHTML = kJvalueGrund.toFixed(2);
        //reihe2
        gesamtumsatzkcalOutput.innerHTML = gesamtumsatzM.toFixed(2);
        gesamtumsatzkJOutput.innerHTML = kJvalueGesamt.toFixed(2);
    } else {
        let grundumsatzF = 655.1 + 9.6 * weight + 1.8 * height - 4.7 * age;
        let gesamtumsatzF = grundumsatzF * palFactor;
        const kJvalueGrund = grundumsatzF * 4.186;
        const kJvalueGesamt = gesamtumsatzF * 4.186;
        console.log({ gesamtumsatzF }, { grundumsatzF });
        // Grundumsatz ist schon in der einheit kcal
        //reihe 1
        grundumsatzkcalOutput.innerHTML = grundumsatzF.toFixed(2);
        grundumsatzkJOutput.innerHTML = kJvalueGrund.toFixed(2);
        //reihe2
        gesamtumsatzkcalOutput.innerHTML = gesamtumsatzF.toFixed(2);
        gesamtumsatzkJOutput.innerHTML = kJvalueGesamt.toFixed(2);
    }
};
