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


const domFunction = (element) => {
    const body = document.body;
    const containerMain = document.createElement('div');
    body.appendChild(containerMain)
    containerMain.classList.add('main');
    const container = document.createElement('div');
    containerMain.appendChild(container)
    container.classList.add('container');
    const coloana1 = document.createElement('div');
    const coloana2 = document.createElement('div');
    const coloana3 = document.createElement('div');
    [coloana1, coloana2, coloana3].forEach(elm => {
        elm.classList.add('coloana');
        container.appendChild(elm)
    });
    const header1 = document.createElement('div');
    const header2 = document.createElement('div');
    const header3 = document.createElement('div');
    [header1, header2, header3].forEach(elm => {
        elm.classList.add('header')
    });
    coloana1.appendChild(header1);
    coloana2.appendChild(header2);
    coloana3.appendChild(header3);

    const contain1 = document.createElement('div');
    const contain2 = document.createElement('div');
    const contain3 = document.createElement('div');
    [contain1, contain2, contain3].forEach(elm => {
        elm.classList.add('contain')
    });
    coloana1.appendChild(contain1);
    coloana2.appendChild(contain2);
    coloana3.appendChild(contain3);

    
}


