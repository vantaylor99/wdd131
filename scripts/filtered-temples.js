const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, USA",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, USA",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, USA",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Arequipa Peru Temple",
        location: "Arequipa Peru",
        dedicated: "2019, December, 15",
        area: 26969,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/4-48661c257177c19a0f39a3991b1a7e7aa0338487.jpeg"
    },
    {
        templeName: "Albuquerque New Mexico Temple",
        location: "Albuquerque New Mexico",
        dedicated: "2000, March, 5",
        area: 34245,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-137883-wallpaper.jpg"
    },
    {
        templeName: "Seattle Washington Temple",
        location: "Seattle Washington",
        dedicated: "1980, November, 21",
        area: 110000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seattle-washington/400x250/seattle-washington-temple-lighted-1079843-wallpaper.jpg"
    },
    {
        templeName: "Billings Montana Temple",
        location: "Billings Montana",
        dedicated: "1999, November, 21",
        area: 33800,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/400x250/02-Billings-Montana-Temple-1572044.jpg"
    },
    {
        templeName: "Calgary Alberta Temple",
        location: "Calgary Alberta",
        dedicated: "2012, October, 28",
        area: 33000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/400x250/calgary-alberta-temple-lds-1058967-wallpaper.jpg"
    },

];




function filterOld() {
    let oldTemples = temples.filter(temple => {
        let year = parseInt(temple.dedicated.split(",")[0]);
        return year < 2000;

    });

    let oldTempleName = oldTemples.map(temple => temple.templeName)
    return oldTempleName
};



function filterNew() {
    let newTemples = temples.filter(temple => {
        let year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });

    let newTempleName = newTemples.map(temple => temple.templeName)
    return newTempleName
};


function filterLarge() {
    let largeTemples = temples.filter(temple => {
        let size = parseInt(temple.area);
        return size > 35000;
    });

    let largeTempleName = largeTemples.map(temple => temple.templeName)
    return largeTempleName
};

function filterSmall() {
    let smallTemples = temples.filter(temple => {
        let size = parseInt(temple.area);
        return size < 35000;
    });

    let smallTempleName = smallTemples.map(temple => temple.templeName)
    return smallTempleName
};


function hideTemples(templesToShow) {
    const allTempleCards = document.querySelectorAll('.temple-card');
    allTempleCards.forEach(temple => {
        const name = temple.querySelector("h2").textContent;

        if (templesToShow.includes(name)) {
            temple.classList.add("show");
        }
        else {
            temple.classList.remove("show")
        }

    });
}

function showAllTemples() {
    const allTempleCards = document.querySelectorAll('.temple-card');
    allTempleCards.forEach(card => {
        card.classList.add("show");
    });
}

document.addEventListener("DOMContentLoaded", function () {

    renderTemples();

    showAllTemples();

    document.querySelector("#show-all").addEventListener("click", () => {
        showAllTemples();
    })

    document.querySelector("#filter-old").addEventListener("click", () => {
        hideTemples(filterOld());
    });

    document.querySelector("#filter-new").addEventListener("click", () => {
        hideTemples(filterNew());
    });

    document.querySelector("#filter-large").addEventListener("click", () => {
        hideTemples(filterLarge());
    });

    document.querySelector("#filter-small").addEventListener("click", () => {
        hideTemples(filterSmall());
    })

    const navLinks = document.querySelectorAll(".navigation a");


    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(otherLink => otherLink.classList.remove("active"));

            this.classList.add("active");
        });

    });
});







function renderTemples() {
    temples.forEach((temple) => {

        const card = document.createElement("div");

        const templeNameH2 = document.createElement("h2")
        const templeLocation = document.createElement("p")
        const templeDedicated = document.createElement("p")
        const templeArea = document.createElement("p")
        const templeImage = document.createElement("img")

        templeNameH2.textContent = temple.templeName;
        templeLocation.innerHTML = `<b>Location:</b> ${temple.location}`;
        templeDedicated.innerHTML = `<b>Dedicated:</b> ${temple.dedicated}`;
        templeArea.innerHTML = `<b>Area:</b> ${temple.area} sq ft`;
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.templeName;
        templeImage.loading = "lazy";


        card.appendChild(templeNameH2);
        card.appendChild(templeLocation);
        card.appendChild(templeDedicated);
        card.appendChild(templeArea);
        card.appendChild(templeImage);
        card.classList.add("card", "temple-card");

        document.querySelector(".temple-container").appendChild(card);

        console.log(`Also this note was found on the assignement and is important to know when looking at the lighthouse score. "Note: Using the absolute references to images on the Church's content delivery network can lead to some less favorable performance issues. You can ignore this or go ahead and create local copies of temple images that are optimized. Be aware of copyrights."`)




    });
}

