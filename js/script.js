'use strict';

var playList = [{
    author: "led zeppelin",
    song: "stairway to heaven",
    duration: "2:03"
},
{
    author: "queen",
    song: "bohemian rhapsody",
    duration: "2:30"
},
{
    author: "lynyrd skynyrd",
    song: "free bird",
    duration: "1:56"
},
{
    author: "deep purple",
    song: "smoke on the water",
    duration: "3:03"
},
{
    author: "jimi hendrix",
    song: "all along the watchtower",
    duration: "2:53"
},
{
    author: "AC/DC",
    song: "back in black",
    duration: "2:43"
},
{
    author: "queen",
    song: "we will rock you",
    duration: "2:13"			
},
{
    author: "metallica",
    song: "enter sandman",
    duration: "3:03"			
}
];

var list = document.querySelector('#playList');

function createElem () {

for (var i = 0; i < playList.length; i++) {
    var li = document.createElement('li');
    var author = document.createElement('span');
    var duration = document.createElement('span');
    var song = document.createElement('span');
    var descTop = document.createElement('div');
    var descBottom = document.createElement('div');

    author.innerText = playList[i]['author'];
    duration.innerText = playList[i]['duration'];
    song.innerText = playList[i]['song'];

    descTop.appendChild(duration);
    descTop.appendChild(author);
    descBottom.appendChild(song);

    li.className = 'ba-tune';
    author.className = 'ba-tune__author';
    duration.className = 'ba-tune__duration';
    song.className = 'ba-tune__song';
    descTop.className = 'ba-tune__top';
    descBottom.className = 'ba-tune__song';
    
    li.appendChild(descTop);
    li.appendChild(descBottom);
    
    list.appendChild(li);

}} 

createElem ();