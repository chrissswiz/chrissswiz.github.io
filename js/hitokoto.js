// hitokoto.js

document.addEventListener('DOMContentLoaded', function () {
    // Replace 'YOUR_API_URL' with the actual API URL, for example: 'https://v1.hitokoto.cn'
    const apiUrl = 'YOUR_API_URL?c=e&encode=json'; // This request gets a sentence of type 'e' (原创) in JSON format
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const sloganElement = document.getElementById('slogan');
        sloganElement.textContent = data.hitokoto;
      })
      .catch(error => {
        console.error('Error fetching slogan:', error);
      });
  });
  