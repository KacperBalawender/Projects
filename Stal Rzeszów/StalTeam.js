var pcon = document.getElementById('pc');
var players = document.getElementsByClassName('p');
var player_b = document.getElementsByClassName('pb');
var arrL = document.getElementById('arr-left');
var arrR = document.getElementById('arr-right');
var procentToMove = 0;

function GoLeft()
{
    

    for(x=0;x<players.length;x++)
    {
        if(players[x].classList.contains('player-middle') && x > 0)
        {
            
            players[x].classList.remove('player-middle');
            players[x].classList.add('player')
            player_b[x].classList.add('player-black');
            player_b[x-1].classList.remove('player-black');
            players[x-1].classList.remove('player')
            players[x-1].classList.add('player-middle');
            procentToMove += 15.5;
            pcon.style.transform = 'translateX('+procentToMove+'%)';
            break;
        }
    }
}

function GoRight()
{
    

    for(x=0;x<players.length;x++)
    {
        if(players[x].classList.contains('player-middle') && x < players.length-1)
        {
            console.log(x+1);
            players[x].classList.remove('player-middle');
            players[x].classList.add('player');
            player_b[x].classList.add('player-black');
            player_b[x+1].classList.remove('player-black');
            players[x+1].classList.remove('player');
            players[x+1].classList.add('player-middle');
            procentToMove -= 15.5;
            pcon.style.transform = 'translateX('+procentToMove+'%)';
            break;
        }
    }
}

arrL.addEventListener('click', GoLeft);
arrR.addEventListener('click', GoRight);