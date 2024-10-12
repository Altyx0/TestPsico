// Inicializar Sortable.js para hacer la lista ordenable
const sortable = Sortable.create(document.getElementById('color-list'), {
    animation: 150
});

// Evento para el botón de enviar
document.getElementById('submit-button').addEventListener('click', () => {
    const colorElements = document.querySelectorAll('.color-item');
    const preferences = [];
    
    colorElements.forEach((elem, index) => {
        preferences.push({
            color: elem.getAttribute('data-color'),
            rank: index + 1
        });
    });
    
    // Procesar las preferencias (aquí puedes personalizar cómo interpretar los resultados)
    // Por simplicidad, mostraremos la ordenación seleccionada
    let resultText = "Tus preferencias de colores son:<br><ol>";
    preferences.forEach(pref => {
        resultText += `<li>${pref.rank}. ${pref.color}</li>`;
    });
    resultText += "</ol>";
    
    document.getElementById('result').innerHTML = resultText;
});
