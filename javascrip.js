

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar =document.getElementById('myprogressbar') ; 
let songitems = Array.from(document.getElementsByClassName('song-list'));

let text = document.getElementById("text")
let song = [
   
        { songName : "Tere Vaaste",filePath:"songs/1.mp3",coverPath : "covers/1.jpg" },
        { songName : "Teri Kami",filePath:"songs/2.mp3",coverPath : "covers/2.jpg" },
       { songName : "Tu Meri Rani ",filePath:"songs/3.mp3",coverPath : "covers/3.jpg" },
        { songName : "Zihaal e Miskin",filePath:"songs/4.mp3",coverPath : "covers/4.jpg" },
        { songName : "Rooh",filePath:"songs/5.mp3",coverPath : "covers/5.jpg" },
    
]

songitems.forEach((element,i)=>{

    element.getElementsByClassName('imgx')[0].src = song[i].coverPath;
    element.getElementsByClassName('songname')[0].innerHTML = song[i].songName;


});


masterplay.addEventListener('click', () => {

    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');

    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');

    }
});

audioElement.addEventListener('timeupdate', ()=>{
 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressbar.value = progress;


});

myprogressbar.addEventListener('change' ,() =>{

    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;


});




const makeAllplays = () => {

    Array.from(document.getElementsByClassName('song-icons')).forEach((element)=> {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play')
    });
}

Array.from(document.getElementsByClassName('song-icons')).forEach(  (element)=>{

     
    element.addEventListener('click',  (e)=>{
       

   makeAllplays();
   songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause')

         document.getElementById("postimg").src =  `covers/${songIndex}.jpg`; //by me

        audioElement.src = `songs/${songIndex}.mp3`;
        
         text.innerHTML = song[songIndex-1].songName;
         
        
        audioElement.currentTime = 0;
         audioElement.play();
         masterplay.classList.remove('fa-play');
         masterplay.classList.add('fa-pause');



    });

});


