document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value;
    fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error:', error));
});

function displayResults(shows) {
    const resultsContainer = document.getElementById('result');
    resultsContainer.innerHTML = '';
    shows.forEach(item => {
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        h2.textContent = item.show.name;

        const link = document.createElement('a');
        link.href = item.show.url;
        link.textContent = 'More details';
        link.target = '_blank';

        const img = document.createElement('img');
        img.src = item.show.image?.medium || 'placeholder-image-url.jpg';
        img.alt = item.show.name;

        const summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = item.show.summary;

        article.appendChild(h2);
        article.appendChild(link);
        article.appendChild(img);
        article.appendChild(summaryDiv);
        resultsContainer.appendChild(article);
    });
}