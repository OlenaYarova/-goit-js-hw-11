import axios from 'axios';
const api_key = "51059240-278fa1e6f61101335ccd91301";

export function getImagesByQuery(query) {
    return axios
        .get('https://pixabay.com/api/', {
            params: {
                key: api_key,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
            }
        })

        .then(response => {
            return response.data;
        })
        // console.log(response);
        // list.innerHTML = createGallery(response.data.hits)
        .catch((error => {
            console.error(error);
            throw error;
        }));
}

