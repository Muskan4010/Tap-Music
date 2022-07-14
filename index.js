// handling the sounds and what they do using js
window.addEventListener("load", ()=>{
    const sounds= document.querySelectorAll(".sound");
    // get the values of sounds class
    const pads= document.querySelectorAll(".pad div");
    // getting the small ones from the parent pad
    const visual= document.querySelector('.visual');
    // to add the visuals
    const colors= [
       " #f45f48",
        "#57f96a",
       " #f2f523",
        "#9baafc",
        "#ec9cf0",
        "#f696b3"
    ];
    // get all the colours series wise
    
    //console.log(sounds[0])
    // Lets get going with a sound here
    pads.forEach((pad,index)=>{
        pad.addEventListener('click', function(){
            // whenever we click the pad we run this function
            // to run it multiple times we need to reset the current time
            sounds[index].currentTime= 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    // create a function that makes bubbles
    const createBubbles=(index)=>{
        const bubble= document.createElement("div");
        visual.appendChild(bubble);
        // attaching the bubble to visual div
        bubble.style.backgroundColor= colors[index];
        bubble.style.animation="jump 1s ease";
        // we dont want the bubble to stay on screen forever
        // using add event listener whenever animation ends we terminate the bubble
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});