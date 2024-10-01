document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.input-wrapper input[type="text"]');
    const sendButton = document.querySelector('.input-wrapper button');
    const boxContents = document.querySelector('.boxqui .box-contents');
    const placeholder = document.querySelector('.faiqui');



    Object.entries(constants).forEach(([key, value]) => {
        math.evaluate(`${key} = ${value}`);
    });

    catch (error) {
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
