const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '404d9cd8f73294aee24a847aba231852';

export const fetchWeather = async (city) => {
    try {
    const response = await fetch(`${API_URL}weather?units=metric&q=${city}&appid=${API_KEY}&lang=ru`);
    if (!response.ok) {
        throw new Error('Ошибка запроса');
    }
    const data = await response.json();

    return {success: true, data};
    } catch (err) {
        return {success: false, err};
    }
}