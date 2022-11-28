fetch('../data/data.json')
    .then(response => {
        return response.json();
    })
    .then(myData => {
        console.table(myData.laptops);
})