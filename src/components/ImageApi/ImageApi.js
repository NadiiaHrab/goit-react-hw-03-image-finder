
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31953221-a38c3b213a2db269dddf8e264';
const filter = 'image_type=photo&orientation=horizontal&safesearch=true';


function fetchImages(name) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${name}&${filter}&per_page=12&page=1`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        return Promise.reject(new Error(`не знайдено збігів ${name}`));
  })
}

const api = {
  fetchImages,
};

export default api;