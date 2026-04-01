var boots = document.getElementsByClassName("boot");
var background = document.getElementById("back");
var arrows = document.getElementsByClassName('switch');
var empty = document.getElementById('color-selected');
var sizes = document.getElementsByClassName('size');

function ChangeBootLeft()
{
    for(x=0;x<boots.length;x++)
    {
        if(boots[x].classList.contains('boot-current'))
        {
            if(x-1 >= 0)
            {
                boots[x].classList.remove('boot-current');
                boots[x].classList.add('boot-right');
                boots[x-1].classList.remove('boot-left');
                boots[x-1].classList.add('boot-current');
                break      
            }                     
        }
    }
    ChangeBackgroundColor();
}

function ChangeBootRight()
{
    for(x=0;x<boots.length;x++)
    {
        if(boots[x].classList.contains('boot-current'))
        {
            if(x+1 < boots.length )
            {
                boots[x].classList.remove('boot-current');
                boots[x].classList.add('boot-left');
                boots[x+1].classList.remove('boot-right');
                boots[x+1].classList.add('boot-current');
                break                
            }                  
        }
    }
    ChangeBackgroundColor();
}

function ChangeBackgroundColor() {
    for (let x = 0; x < boots.length; x++) 
        {
        if (boots[x].classList.contains('boot-current')) 
        {
            background.classList.remove('background-red', 'background-orange', 'background-berz', 'background-blue');
            if (x === 0) 
            {
                background.classList.add('background-red');
                empty.style.transform = 'translate(-252%, -50%)';
            } 
            else if (x === 1) 
            {
                background.classList.add('background-orange');
                empty.style.transform = 'translate(-132%, -50%)';
            } 
            else if (x === 2) 
            {
                background.classList.add('background-berz');
                empty.style.transform = 'translate(-14%, -50%)';
            } 
            else if (x === 3) 
            {
                background.classList.add('background-blue');
                empty.style.transform = 'translate(105%, -50%)';
            }
        }
    }
}

var arrowleft = document.getElementById('arrL')
arrowleft.addEventListener('click', ChangeBootLeft);

var arrowright = document.getElementById('arrR')
arrowright.addEventListener('click', ChangeBootRight);


function ChangeSize()
{
    for(x = 0;x<boots.length;x++)
    {
        if (boots[x].classList.contains('boot-current')) 
        {
            var sizeClicked = event.target.textContent;
            boots[x].style.transform = 'translate(-50%, -50%) scale('+sizeClicked*10+'%)';
            console.log(boots[x]);
        }
    }
}

for(x=0;x<sizes.length;x++)
{
    sizes[x].addEventListener("click",ChangeSize);
}
