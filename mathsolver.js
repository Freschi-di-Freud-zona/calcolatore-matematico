document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.input-wrapper input[type="text"]');
    const sendButton = document.querySelector('.input-wrapper button');
    const boxContents = document.querySelector('.boxqui .box-contents');
    const placeholder = document.querySelector('.faiqui');

    function solveMathProblem(problem) {
        try {
            // Utilizziamo l'oggetto math globale fornito da math.js
            const result = math.evaluate(problem);
            return result.toString();
        } catch (error) {
            return "Errore: Input non valido";
        }
    }

    function displayResult(problem, result) {
        boxContents.innerHTML = `
            <div style="padding: 20px; font-size: 18px;">
                <p><strong>Problema:</strong> ${problem}</p>
                <p><strong>Risultato:</strong> ${result}</p>
            </div>
        `;
    }

    function handleInput() {
        const problem = input.value.trim();
        if (problem) {
            placeholder.style.display = 'block';
            const result = solveMathProblem(problem);
            displayResult(problem, result);
            input.value = '';
        }
    }

    sendButton.addEventListener('click', handleInput);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleInput();
        }
    });
});
