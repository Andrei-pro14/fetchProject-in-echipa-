const requestUrl2 = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter'

const requestFetch = async() => {
    try {
        const response = await fetch(requestUrl2);
        if (!response.ok) {
            throw new Error('Error fetching data')
        } else {
            const dataJson = await response.json();
            dataJson.items.forEach(element => {
                console.log(element)
            });
        }
    } catch (error) {
        console.error('An error acured', error);
    }
}

requestFetch();