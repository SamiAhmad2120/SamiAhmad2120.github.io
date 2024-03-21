document.getElementById('fetchData').addEventListener('click', function() {
    fetch('https://brianobruno.github.io/cats.json')
        .then(response => response.json())
        .then(data => {
            updateTable(data.facts);
            updateImage(data.picture);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function updateTable(facts) {
    const table = document.getElementById('factsTable');
    // Clear existing rows except the header
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    // Add new rows
    facts.forEach(fact => {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = fact.factId;
        cell2.textContent = fact.fact;
    });
}

function updateImage(pictureUrl) {
    document.getElementById('catImage').src = pictureUrl;
}

