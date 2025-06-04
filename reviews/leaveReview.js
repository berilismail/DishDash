const addButton = document.getElementById("addBtn");
const editBtn = document.getElementById("editBtn");
const tableBody = document.getElementById("reviews");
var editingReviewId = null;
var reviews = JSON.parse(localStorage.getItem("reviews")) || [];
reRender();

addButton.addEventListener("click", (event) =>  {
event.preventDefault();

const guid = generateGUID();
const firstLastNameInput = document.getElementById("name").value;
const reviewInput = document.getElementById("review").value;

if( firstLastNameInput !== "" && reviewInput !== ""){
    tableBody.innerHTML += createRow(guid, firstLastNameInput, reviewInput);
    reviews.push({
        id: guid,
        name: firstLastNameInput,
        review: reviewInput
    });
}
localStorage.setItem("reviews", JSON.stringify(reviews));
document.getElementById("form").reset();
})

editBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const firstLastNameInput = document.getElementById("name").value;
    const reviewInput = document.getElementById("review").value;

    var reviewToEdit = reviews.find((review) => review.id === editingReviewId);
    reviewToEdit.name = firstLastNameInput;
    reviewToEdit.review = reviewInput;

    editBtn.hidden = true;
    addButton.hidden = false;
    document.getElementById("form").reset();

    localStorage.setItem("reviews", JSON.stringify(reviews));
    reRender();
})

//#region functions
function deleteReview(id){
 var reviewToDelete = reviews.find((review)=> review.id === id);

 if(!reviewToDelete){
    console.error(`Review with id ${id} not found`);
    return;    
 }
 const index = reviews.indexOf(reviewToDelete);
 if(index > -1){
    reviews.splice(index, 1);
 }
 localStorage.setItem("reviews", JSON.stringify(reviews));
 reRender();
}

function editReview(id){
    var reviewToEdit = reviews.find((review)=> review.id === id);
    editingReviewId = reviewToEdit.id;
    if(!reviewToEdit){
        console.error(`Review with id ${id} not found`);
    return;
    }
    editBtn.hidden = false;
    addButton.hidden = true;

    const firstLastNameInput = document.getElementById("name");
    const reviewInput = document.getElementById("review");

    firstLastNameInput.value = reviewToEdit.name;
    reviewInput.value = reviewToEdit.review;
    }


function createRow(id, name, review) {
    return `<tr>
          <td>${name}</td>
          <td>${review}</td>
          <td><button class="btn btn-outline-danger" onclick="deleteReview('${id}')">Delete</button>
              <button class="btn btn-outline-warning" onclick="editReview('${id}')">Edit</button></td>
      </tr>`;
  };

  function reRender() {
    tableBody.innerHTML = "";
    reviews.forEach((review) => {
      tableBody.innerHTML += createRow(
        review.id,
        review.name,
        review.review,
      );
    });
  };

  function generateGUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  //#endregion