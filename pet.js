const allDogs = [
    {
        dogName: "Abby",
        breed: "SharPei",
        age: 7
    },
    {
        dogName: "Akino",
        breed: "Husky",
        age: 5
    },
    {
        dogName: "Anthony",
        breed: "Terrier",
        age: 6   
    },
    {
        dogName: "Axel",
        breed: "PitBull",
        age: 2  
    },
    {
        dogName: "Beanie",
        breed: "Terrier",
        age: 2
    },
    {
        dogName: "Bebe",
        breed: "Terrier",
        age: 6   
    },
    {
        dogName: "Boo Boo",
        breed: "American Eskimo",
        age: 9   
    },
    {
        dogName: "Bowser",
        breed: "Mastiff",
        age: 3  
    },
    {
        dogName: "Brutus Xavier",
        breed: "Terrier",
        age: 5  
    },
    {
        dogName: "Buttercup",
        breed: "Terrier",
        age: 4  
    },
];

function findDogs() {
    const minAge = parseInt(document.querySelector('input[name="minAge"]').value); 
    const selectedDogs = [];

    allDogs.forEach(dog => {
        if (dog.age >= minAge) {
            selectedDogs.push(dog);
        }
    });

    displayDogs(selectedDogs);
}


function displayDogs(dogs) {
    const dogList = document.querySelector('#dogList'); 
    dogList.innerHTML = '';
    if (dogs.length === 0) {
        dogList.innerHTML = '<li>No dogs found that meet the criteria.</li>';
        return;
    }

    dogs.forEach(dog => {
        const listItem = document.createElement('li');
        listItem.textContent = `${dog.dogName}, the ${dog.breed}, is ${dog.age} years old.`;
        dogList.appendChild(listItem);
    });
}
