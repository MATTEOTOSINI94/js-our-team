const btnForm = document.getElementById("addMemberButton")
const cardContainer = document.querySelector(".team-container")
console.log(cardContainer)

const card = [
    {
        nome: "Angela Karol",
        ruolo: "Chief Editor",
        immagine: "img/angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Official Manger",
        immagine: "img/angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "img/scott-estrada-developer.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        immagine: "img/walter-gordon-office-manager.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "img/wayne-barnett-founder-ceo.jpg",
    }

]



for (let x = 0; x < card.length; x++) {
    const indiceCard = card[x];
    console.log(indiceCard)

    const cardWork = `<div class="team-card">
    <div class="card-image">
        <img
            src="${indiceCard.immagine}"
            alt="Wayne Barnett"
        />
        </div>
        <div class="card-text">
        <h3>${indiceCard.nome}</h3>
        <p>${indiceCard.ruolo}</p>
        </div>
     </div>
    </div>`

    cardContainer.innerHTML += cardWork
}





btnForm.addEventListener("click", function () {
    //    lettura dati inseriti da input (nome/ruolo/nome dell'immagine)
    //    creazione oggetto con i dati presi da input
    //    creare la card nella mia interfaccia
    //   inserire il nuovo oggetto nel mio array


    const nameUser = document.getElementById("name").value
    const ruoloUser = document.getElementById("role").value
    const imgUser = document.getElementById("image")
    console.log(nameUser)
    const cardUser = {

        name: nameUser,
        ruolo: ruoloUser,
        pic: imgUser,
    }
    console.log(cardUser)

     const cardboh =  `<div class="team-card">
     <div class="card-image">
         <img
             src="img/wayne-barnett-founder-ceo.jpg"
             alt="Wayne Barnett"
         />
         </div>
         <div class="card-text">
         <h3>${cardUser.name}</h3>
         <p>${cardUser.ruolo}</p>
         </div>
      </div>
     </div>`

     cardContainer.innerHTML += cardboh

})




function genraImg() {

}