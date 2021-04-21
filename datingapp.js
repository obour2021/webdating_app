let users = [
    {
        name: 'Lucy',
        age: 25,
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png' 
               
    },
    {
        name: 'Betty',
        age: 22,
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar2.png',
    },
    {
        name: 'Ronald',
        age: 35,
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar3.png',
    },
    {
        name: 'Christopher',
        age: 19,
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar4.png'
    },
    {
        name: 'Ximena',
        age: 22,
        gender: 'F',
        hobby: 'reading',
        avatar: 'avatar5.png'
    },
    {
        name: 'Paul',
        age: 28,
        gender: 'M',
        hobby: 'shopping',
        avatar: 'avatar6.png'
    },
    {
        name: 'Charlie',
        age: 32,
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.png'
    },
];

window.addEventListener("load", function(){
  let results = document.getElementById("results");

   function search(){
    // user input values
    // hobbies
    let hobbyField = document.getElementById("hobby");
    let hobby = hobbyField.value;


    // gender
    let genderField = document.getElementById("gender");
    let genderSelect = genderField.selectedIndex;
    let gender = genderField.options[genderSelect].value;
   
        // age 
    
    let resultsHtml = ' ';
    let userLength = users.length;
    for(i =0; i < userLength; i++){
            // search checks
            // gender
        if(gender =='A' || gender==users[i].gender){
            // age
        
             // hobby
        if (hobby== '' || hobby==users[i].hobby){
       
        resultsHtml +=  '<div class="person-row">\
        <img src="images/' + users[i].avatar + '" />\
        <div class="person-info">\
        <div>' + users[i].name + '</div>\
        <div>' + users[i].age + '</div>\
        <div>' + users[i].hobby + '</div></div>\
         <button>Add as friend</button></div>';  
          }
         }
    } 
    
    results.innerHTML = resultsHtml;

   }
    let searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener(("click"), search);
    
});

