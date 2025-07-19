const productList = document.getElementById("product")

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];




function setPageVisits(visits) {
    localStorage.setItem('pageVisits', JSON.stringify(visits))
}

function getPageVisits() {
    return JSON.parse(localStorage.getItem('pageVisits'));
}


document.addEventListener("DOMContentLoaded", function () {
    let pageVisits = getPageVisits() || 0;
    pageVisits++
    setPageVisits(pageVisits)

    const productList = document.getElementById("product")

    products.forEach(product => {
        let id = product.id
        let name = product.name

        let option = document.createElement("option");
        option.textContent = name;
        option.value = id;

        productList.append(option);
    });

    let visitCounter = document.getElementById('pageVisits');
    visitCounter.textContent = `Page Visits: ${pageVisits}`;
});
