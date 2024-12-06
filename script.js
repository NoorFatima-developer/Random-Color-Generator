const getColor = () => {
    // Max Code

    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomNumber, randomCode);
    
    
}

document.getElementById("btn").addEventListener("click", getColor);
