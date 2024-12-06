const color_code = document.getElementById("color-code");

const getColor = () => {
    // Max Code

    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomNumber, randomCode);
    document.body.style.backgroundColor = randomCode; 
    color_code.innerText = randomCode;

}

// init call:
getColor();

// event call:
document.getElementById("btn").addEventListener("click", getColor);
