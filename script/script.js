const oszlop = 2;
const sor = 2;

function visszafordit() {
    console.log('Most fordult vissza.');
    let nyitott = document.getElementsByClassName('open');
    while (nyitott.length){
        nyitott[0].style.backgroundImage = '';
        nyitott[0].classList.remove('open');
    }
    
    /*  ne így!
    for (let i = 0; i < nyitott.length; i++) {
        nyitott[i].style.backgroundImage = '';
        nyitott[i].classList.remove('open');
        
    } */

};
function megfordit(){
    let nyitott = document.getElementsByClassName('open');
    if (nyitott.length < 2) {
        this.classList.add('open');
        this.style.backgroundImage = this.dataset.bgimg;

        if (nyitott.length == 2) {

            let idozito = setTimeout(function(){visszafordit()}, 2000);

            if (nyitott[0].dataset.bgimg == nyitott[1].dataset.bgimg) {
                clearTimeout(idozito);

                nyitott[1].classList.add('kitalalva');
                nyitott[0].classList.add('kitalalva');

                nyitott[1].onclick = null;
                nyitott[0].onclick = null;
                
                nyitott[1].classList.remove('open');
                nyitott[0].classList.remove('open');

                if (document.getElementsByClassName('kitalalva').length == (oszlop * sor)) {
                    console.log('Győzött.');
                    document.getElementById('uzenet').innerHTML = 'Te egy győztes vagy tesó! Új játékért nyomj egy F5-öt.'
                }
            }
        }
    }
};

const kepSzam = oszlop * sor / 2; //páros és max 44

const kepek = [];
for (let i = 0; i < kepSzam; i++) {
    let k = Math.round(Math.random()*21+1);
    if (kepek.indexOf(k) == -1) kepek.push(k);
    else i--;
}
console.log(kepek);


if (kepSzam % 1 == 0 && (kepSzam <= 44) && (kepSzam >= 2)) {
for(let i = 0; i < sor; i++){
    let sor = document.createElement('div');
    sor.className = 'sor';
    for (let j = 0; j < oszlop; j++) {
        let cella = document.createElement('div');
        cella.onclick = megfordit;
        cella.className = 'cella';
        sor.appendChild(cella); 
    }
    document.getElementById('palya').appendChild(sor);
}     
} else {
    document.getElementById('uzenet').innerHTML = 'Nem előállítható pálya.';
};


        for (let i = 1; i <= kepSzam; i++) {
        for (let j = 0; j < 2; j++) {
                
            let x = Math.round(Math.random() * (sor - 1));
            let y = Math.round(Math.random() * (oszlop - 1));
            let kepCella = document.getElementById('palya').children[x].children[y];
            if (!kepCella.dataset.bgimg) {
                kepCella.setAttribute('data-bgimg','url("./img/'+kepek[i-1]+'.png")');
                //kepCella.style.backgroundImage = 'url("./img/'+i+'.png")';
                //kepCella.dataset.img = 'url("./img/'+i+'.png")';
            } 
            else {j--};
        }
    }
