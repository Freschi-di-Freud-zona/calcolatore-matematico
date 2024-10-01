// Attende che il DOM sia completamente caricato prima di eseguire il codice
document.addEventListener('DOMContentLoaded', () => {
    // Seleziona gli elementi del DOM necessari
    const input = document.querySelector('.input-wrapper input[type="text"]');
    const sendButton = document.querySelector('.input-wrapper button');
    const resultDisplay = document.querySelector('.boxqui .box-contents');
    const loadingPlaceholder = document.querySelector('.faiqui');

    // Funzione per risolvere il problema matematico
    function solveMathProblem(problem) {
        try {
            // Usa math.js per valutare l'espressione matematica
            return math.evaluate(problem).toString();
        } catch (error) {
            return "Errore: Input non valido";
        }
    }

    // Funzione per mostrare il risultato
    function displayResult(problem, result) {
        resultDisplay.innerHTML = `
            <div style="padding: 20px; font-size: 18px;">
                <p><strong>Problema:</strong> ${problem}</p>
                <p><strong>Risultato:</strong> ${result}</p>
            </div>
        `;
    }

    // Funzione principale per gestire l'input dell'utente
    function handleUserInput() {
        const problem = input.value.trim();
        if (problem) {
            loadingPlaceholder.style.display = 'block';  // Mostra il placeholder di caricamento
            const result = solveMathProblem(problem);
            displayResult(problem, result);
            input.value = '';  // Pulisce il campo di input
        }
    }

    // Aggiunge gli event listener
    sendButton.addEventListener('click', handleUserInput);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
});
