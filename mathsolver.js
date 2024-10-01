document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.input-wrapper input[type="text"]');
    const sendButton = document.querySelector('.input-wrapper button');
    const boxContents = document.querySelector('.boxqui .box-contents');
    const placeholder = document.querySelector('.faiqui');



    // Aggiungiamo le costanti a math.js
    Object.entries(constants).forEach(([key, value]) => {
        math.evaluate(`${key} = ${value}`);
    });

    // Funzioni fisiche e chimiche personalizzate
    const customFunctions = {
        energia_cinetica: (massa, velocita) => 0.5 * massa * Math.pow(velocita, 2),
        energia_potenziale: (massa, altezza, g = constants.g) => massa * g * altezza,
        forza: (massa, accelerazione) => massa * accelerazione,
        pressione: (forza, area) => forza / area,
        densita: (massa, volume) => massa / volume,
        molarita: (moli, volume_litri) => moli / volume_litri,
        pH: (concentrazione_H) => -Math.log10(concentrazione_H),
    };

    // Aggiungiamo le funzioni personalizzate a math.js
    Object.entries(customFunctions).forEach(([name, func]) => {
        math.import({ [name]: func }, { override: true });
    });

    function solveProblem(problem) {
        try {
            // Utilizziamo l'oggetto math globale fornito da math.js
            const result = math.evaluate(problem);
            return result.toString();
        } catch (error) {
            console.error("Errore durante la risoluzione:", error);
            return "Errore: Input non valido o funzione non riconosciuta";
        }
    }

    function displayResult(problem, result) {
        boxContents.innerHTML = `
            <div style="padding: 20px; font-size: 18px;">
                <p><strong>Problema:</strong> ${problem}</p>
                <p><strong>Risultato:</strong> ${result}</p>
            </div>
        `;
        placeholder.style.display = 'none';
    }

    function handleInput() {
        const problem = input.value.trim();
        if (problem) {
            placeholder.style.display = 'block';
            const result = solveProblem(problem);
            displayResult(problem, result);
        }
    }

    sendButton.addEventListener('click', handleInput);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleInput();
        }
    });

    console.log("Script caricato e in esecuzione");
});