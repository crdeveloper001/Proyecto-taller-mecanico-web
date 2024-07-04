import emailjs from '@emailjs/browser';

export const sendContactInfo = (information) => {
    // Check if information is provided
    if (!information) {
        return Promise.reject("Information is missing");
    }

    // Return a Promise from the function
    return new Promise((resolve, reject) => {
        emailjs.send('service_ou0e9ca', 'template_l2im0vo', information, 'pfP7yM5s51uOzdpa7')
            .then((response) => {
                // Handle the response status
                if (response.status === 200) {
                    resolve(200);
                } else {
                    reject(`Error: ${response.status}`);
                }
            })
            .catch((error) => {
                // Handle any errors during the request
                reject(`Error: ${error.message}`);
            });
    });
};