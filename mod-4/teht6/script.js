document.getElementById('jokeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchQuery').value;
    fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(searchTerm)}`)
        .then(response => response.json())
        .then(data => displayJokes(data))
        .catch(error => console.error('Error:', error));
});

function displayJokes(data) {
    const resultsContainer = document.getElementById('jokeResults');
    resultsContainer.innerHTML = '';
    data.result.forEach(joke => {
        const jokeArticle = document.createElement('article');
        const jokeParagraph = document.createElement('p');
        jokeParagraph.textContent = joke.value;
        jokeArticle.appendChild(jokeParagraph);
        resultsContainer.appendChild(jokeArticle);
    });
}
