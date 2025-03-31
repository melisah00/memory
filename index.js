
function novaIgra() {
    document.getElementById('upute').style.display = 'none';
    document.getElementById('o-projektu').style.display = 'none';
 
    const dugme1 = document.getElementById('dugme1');
    const dugme2 = document.getElementById('dugme2');
    const dugme3 = document.getElementById('dugme3');
    const button = document.getElementById('nova-igra');

    if (dugme1.style.display === 'none' && dugme2.style.display === 'none' && dugme3.style.display === 'none') {
        dugme1.style.display = 'inline';
        dugme2.style.display = 'inline';
        dugme3.style.display = 'inline';
        button.style.display = 'none';
    } else {
        dugme1.style.display = 'none';
        dugme2.style.display = 'none';
        dugme3.style.display = 'none';
    }
}


function upute() {
    const text = document.getElementById('text1');
    const button = document.getElementById('upute');
    if (text.style.display === 'none') {
        text.style.display = 'inline';
        button.style.display = 'none';
    } else {
        text.style.display = 'none';
        button.style.display = 'inline';
    }   
}


function oProjektu() {
    const text = document.getElementById('text');
    const button = document.getElementById('o-projektu');
    if (text.style.display === 'none') {
        text.style.display = 'inline';
        button.style.display = 'none';
    } else {
        text.style.display = 'none';
        button.style.display = 'inline';
    }
  }


function izmijesajNiz(niz) {
    for (let i = niz.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [niz[i], niz[j]] = [niz[j], niz[i]];
    }
    return niz;
}


const ploca = document.querySelector('section');
var startTime;

function igraj(niz) {
    startTime = new Date().getTime();
    console.log(startTime)
    document.getElementById('start-meni').style.display = 'none';
    document.getElementById('s').style.display = 'grid';
        
    function cardGenerator() {
        const niz1 = izmijesajNiz(niz);
        for (let i = 0; i < niz1.length; i++) {
            const kartica = document.createElement('div');
            const lice = document.createElement('img');
            const leda = document.createElement('div');
            
            kartica.classList ='kartica';
            lice.classList = 'lice' ;
            leda.classList = 'leda';
            
            lice.src = niz1[i].img;
            kartica.setAttribute('name', niz1[i].name)
                
            ploca.append(kartica);
            kartica.append(lice);
            kartica.append(leda);
    
            function toggleCard(e) {              
                lice.classList.toggle("toggleCard");
                kartica.classList.toggle("toggleCard");  
                provjeriKartice(e)     
            } 
            kartica.addEventListener("click", toggleCard); 
        }               
    }


    let brojOkrenutih = 0
    var par = 0

    function provjeriKartice(e) {
        const provjerena = e.target;
        provjerena.classList.add('flipped');
        brojOkrenutih++;
        var okrenuteKartice = document.querySelectorAll('.flipped');
        if (okrenuteKartice.length === 2) {
            if (okrenuteKartice[0].getAttribute('name') === okrenuteKartice[1].getAttribute('name')) {
                okrenuteKartice.forEach((kartica) => {
                    kartica.classList.remove('flipped');
                    kartica.style.pointerEvents = 'none';
                });
                par++;
            }else {
                okrenuteKartice.forEach((kartica) => {
                    kartica.classList.remove('flipped');
                    setTimeout(() => kartica.classList.remove('toggleCard'), 800);
                });      
            }       
        }
        

        function restartGame() {
            par = 0 
            brojOkrenutih = 0
            startTime = new Date().getTime();
            ploca.style.display='grid'; 
            const gameBoard = document.querySelector('section');
            while (gameBoard.firstChild) {
                gameBoard.removeChild(gameBoard.firstChild);
            }
            cardGenerator();
            document.getElementById('potezi').innerHTML = 'Broj poteza: 0';
            document.getElementById('vrijeme').innerHTML = 'Vrijeme: 0 sekundi';
        }

        if(par === 8){
            const endTime = new Date().getTime();
            setTimeout(function() { 
                ploca.style.display='none';  
                var elapsedTimeInSeconds = (endTime - startTime) / 1000;
                console.log(elapsedTimeInSeconds);
          
                document.getElementById('potezi').innerHTML = 'Broj poteza: ' + brojOkrenutih / 2;
                document.getElementById('vrijeme').innerHTML = 'Vrijeme: ' + elapsedTimeInSeconds + ' sekundi';
          
                const restartContainer= document.getElementById('restart-container');
                restartContainer.style.display = 'block';
            }, 1000);  
        }
          
        const restartButton = document.getElementById('restart-button');
        restartButton.addEventListener('click', restartGame);
        restartButton.addEventListener('click', function() {
            document.getElementById('restart-container').style.display = 'none';
        });          
    }

    cardGenerator() 
}
   

const nizP = [ 
    {
        name: 'Olovka',
        img: './img/img-1.jpg'
    },       
    { 
        name: 'Olovka',
        img: './img/img-1.jpg'
    },
    { 
        name: 'Gumica',
        img: './img/img-2.jpg'
    },       
    { 
        name: 'Gumica',
        img: './img/img-2.jpg'
    },
    { 
        name: 'Sveska',
        img: './img/img-3.jpg'
    },       
    { 
        name: 'Sveska',
        img: './img/img-3.jpg'
    },
    { 
        name: 'Linijar',
        img: './img/img-4.jpg'
    },       
    { 
        name: 'Linijar',
        img: './img/img-4.jpg'
    },
    { 
        name: 'Sestar',
        img: './img/img-5.jpg'
    },       
    { 
        name: 'Sestar',
        img: './img/img-5.jpg'
    },
    { 
        name: 'Pernica',
        img: './img/img-6.jpg'
    },       
    { 
        name: 'Pernica',
        img: './img/img-6.jpg'
    },
    { 
        name: 'Ruksak',
        img: './img/img-7.jpg'
    },       
    { 
        name: 'Ruksak',
        img: './img/img-7.jpg'
    },
    { 
        name: 'Markeri',
        img: './img/img-8.jpg'
    },       
    { 
        name: 'Markeri',
        img: './img/img-8.jpg'
    }
];


const nizF = [ 
    {
        name: 'Slika 1',
        img: './img/slika1.jpg'
    },       
    { 
        name: 'Slika 1',
        img: './img/slika1.jpg'
    },
    { 
        name: 'Slika 2',
        img: './img/slika2.png'
    },       
    { 
        name: 'Slika 2',
        img: './img/slika2.png'
    },
    { 
        name: 'Slika 3',
        img: './img/slika3.jpg'
    },       
    { 
        name: 'Slika 3',
        img: './img/slika3.jpg'
    },
    { 
        name: 'Slika 4',
        img: './img/slika4.jpg'
    },       
    { 
        name: 'Slika 4',
        img: './img/slika4.jpg'
    },
    { 
        name: 'Slika 5',
        img: './img/slika5.png'
    },       
    { 
        name: 'Slika 5',
        img: './img/slika5.png'
    },
    { 
        name: 'Slika 6',
        img: './img/slika6.jpg'
    },       
    { 
        name: 'Slika 6',
        img: './img/slika6.jpg'
    },
    { 
        name: 'Slika 7',
        img: './img/slika7.jpg'
    },       
    { 
        name: 'Slika 7',
        img: './img/slika7.jpg'
    },
    { 
        name: 'Slika 8',
        img: './img/slika8.jpg'
    },       
    { 
        name: 'Slika 8',
        img: './img/slika8.jpg'
    }
];


function napraviNizR(nizP, nizF) {
    const izmijesanP = izmijesajNiz([...nizP]);
    const izmijesanF = izmijesajNiz([...nizF]);

    let odabraniParovi = [];

    for (let i = 0; odabraniParovi.length < 8; i++) {
        const item = izmijesanP[i];
        if (!odabraniParovi.some(el => el.name === item.name)) {
            odabraniParovi.push(item, item);
        }
    }

    for (let i = 0; odabraniParovi.length < 16; i++) {
        const item = izmijesanF[i];
        if (!odabraniParovi.some(el => el.name === item.name)) {
            odabraniParovi.push(item, item); 
        }
    }

    return izmijesajNiz(odabraniParovi);
}

const nizR = napraviNizR(nizP, nizF);

