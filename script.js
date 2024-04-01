// script.js

document.getElementById('fetch-data').addEventListener('click', async () => {
  try {
      const response = await fetch('/api/data');
      const data = await response.json();
      document.getElementById('api-response').textContent = JSON.stringify(data, null, 2);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
});
