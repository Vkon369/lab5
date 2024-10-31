const apiKey = '21f58ddf06e70046bd9c69752e998c47';
const city = 'London'; // або інше місто за вашим бажанням

document.getElementById('fetchWeather').addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            document.getElementById('weatherInfo').innerHTML = `
                <h2>Погода в ${city}</h2>
                <p>Температура: ${temperature}°C</p>
                <p>Вологість: ${humidity}%</p>
                <p>Швидкість вітру: ${windSpeed} м/с</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = `<p>Помилка: ${error.message}</p>`;
        });
});
