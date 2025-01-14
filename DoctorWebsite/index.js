'use strict';

/* navbar toggle*/
//For mobile devices

const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggle]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

//Handle clicks for options on header

/*navbar toggle for the state in the US*/
//For both mobile and computers
const $Snavbar = document.querySelector("[data-search-options]");
const $SnavToggler = document.querySelector("[data-nav-search-toggle]");

$SnavToggler.addEventListener("click", () => $Snavbar.classList.toggle("active"));

const stateLinks = document.querySelectorAll(".search-state-link");
stateLinks.forEach(link => {
    link.addEventListener("click", () => {
        $Snavbar.classList.remove("active");
    });
});
/*Search toggle input*/
//User enters few letters of their state
document.getElementById('stateInput').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    const stateList = document.getElementById('stateList');
    const states = stateList.getElementsByTagName('li');

    for (let i=0; i<states.length; i++) {
        const stateName = states[i].textContent.toLowerCase();
        if (stateName.startsWith(input)) {
            states[i].style.display = ''; //Shows the state
        } else {
            states[i].style.display = 'none'; //hides the state
        }
    }
    const searchOptions = document.querySelector('.search-options');
    if (input) {
        searchOptions.classList.add('active'); // Show the dropdown
    } else {
        searchOptions.classList.remove('active'); // Hide the dropdown
    }
});
const stateLinks2 = document.querySelectorAll('.search-state-link');
    stateLinks2.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('stateInput').value = this.textContent; // Set input value to clicked state
            document.querySelector('.search-options').classList.remove('active'); // Hide the dropdown
        });
    });

document.querySelector('.search-icon-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const state = document.getElementById('stateInput').value;
    const county = document.querySelector('.county-input').value;
    const zipCode = document.querySelector('.zip-code-input').value;

    // Fake doctor office data
    const doctorOffices = [
        { name: "MedaExample Clinic A", address: "123 Main St, " + county + ", " + state + " " + zipCode },
        { name: "MedaExample Practice B", address: "456 Elm St, " + county + ", " + state + " " + zipCode }
    ];

    // Display results
    const searchAnswer = document.getElementById('searchAnswer');
    searchAnswer.innerHTML = "Locations in area:<br>" + doctorOffices.map(office => 
        office.name + " - " + office.address).join("<br>");
});