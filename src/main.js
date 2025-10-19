import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchImage = document.querySelector(".form");
const userRequest = searchImage.querySelector('input[name="search-text"]');


searchImage.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    const query = userRequest.value.trim();
    
    if (!query) {
        iziToast.error({
            title: "Error",
            message: "Please enter a search term!",
            close: false,
            position: "topRight",
        });
        return;
    }
    
    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then((data) => {
            if (data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    timeout: 3000,
                    close: false,
                    position: "topRight",
                });
                return;
            }

            createGallery(data.hits);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            hideLoader();
        });
}