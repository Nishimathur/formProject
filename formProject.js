let UserFrom = document.getElementById("UserFrom");
let NameList = document.getElementById("NameList");
let OutputSection = document.getElementById("OutputSection");

let Data = [];

UserFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  let UserData = {
    name: e.target[0].value,
    age: e.target[1].value,
    poster: e.target[2].value,
  };
  Data.push(UserData);
  e.target.reset();
  DisplayData();
});
console.log(Data)

function DisplayData() {
  NameList.innerHTML = "";
  for (let i of Data) {
    let Li = document.createElement("li");
    Li.textContent = i.name;
    Li.addEventListener("click", function () {
      console.log(i);

    let Card = document.createElement("div");

    Card.classList.add("Card");

    Card.innerHTML = `
      <h2>${i.name}</h2>
      <p>${i.age} years old</p>
      <img src="${i.poster}" alt="User Poster">
    `;

    let DleteBtn = document.createElement("button");
    DleteBtn.textContent = "Delete";

    DleteBtn.onclick = function () {
       let index = Data.indexOf(i)
       Data.splice(index,1);
       DisplayData();
    }

    Card.appendChild(DleteBtn);

    OutputSection.innerHTML = ""
    OutputSection.append(Card)

    });
    NameList.appendChild(Li);         
  }
}

  
