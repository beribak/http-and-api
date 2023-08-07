// TODO - Fetch an activity with the Bored API - Let's psuedocode!
const url = 'https://www.boredapi.com/api/activity/'

// 1. selecting elements
const btn = document.querySelector(".btn-warning")
const activity = document.querySelector("#activity")
const activities = ["Do your flashcards", "Listen to Music", "Eat junk food"]
//                           0                     1                2
// 2. listening for user input 
btn.addEventListener("click", () => {
    // console.log("Hello from event listener")
    
    // 3. manipulation 
    // without calling api
    // activity.innerText = activities[Math.floor(Math.random()*3)]
    
    // with calling API 
    fetch('https://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => activity.innerText = data["activity"])
})