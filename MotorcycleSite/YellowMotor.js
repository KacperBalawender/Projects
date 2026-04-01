var bikes = document.getElementsByClassName('bike');
var arrowleft = document.getElementById('arrow-left');
var arrowright = document.getElementById('arrow-right');

function changeBikePlus()
{
    for(x = 0;x<bikes.length;x++)
    {
        if(bikes[x].classList.contains('content'))
        {
            if(x+1 < bikes.length)
            {
                bikes[x].classList.remove('content');
                bikes[x].classList.add('content-not-active')
                bikes[x+1].classList.remove('content-not-active');
                bikes[x+1].classList.add('content');
                break
            }
            else
            {
                bikes[x].classList.remove('content');
                bikes[x].classList.add('content-not-active')
                bikes[0].classList.remove('content-not-active');
                bikes[0].classList.add('content');
                break
            }
        }
    }
}

function changeBikeMinus()
{
    for(x = 0;x<bikes.length;x++)
    {
        if(bikes[x].classList.contains('content'))
        {
            if(x-1 >= 0)
            {
                bikes[x].classList.remove('content');
                bikes[x].classList.add('content-not-active')
                bikes[x-1].classList.remove('content-not-active');
                bikes[x-1].classList.add('content');
                break
            }
            else
            {
                bikes[x].classList.remove('content');
                bikes[x].classList.add('content-not-active')
                bikes[bikes.length-1].classList.remove('content-not-active');
                bikes[bikes.length-1].classList.add('content');
                break
            }
        }
    }
}


arrowleft.addEventListener('click', changeBikeMinus);
arrowright.addEventListener('click', changeBikePlus);






var scrindex = document.getElementsByClassName('scroll-index');
var boxindex = document.getElementById('shop-accesories');
var procentToMove;

function changeShopIndex()
{
    procentToMove = 0;
    for(x = 0;x < scrindex.length;x++)
    {
        if(scrindex[x].classList.contains('scroll-index-up'))
        {
            scrindex[x].classList.remove('scroll-index-up');        
        }
        else if(scrindex[x].classList.contains('scroll-index-middle'))
        {
            scrindex[x].classList.remove('scroll-index-middle');      
        }
        else if(scrindex[x].classList.contains('scroll-index-low'))
        {
            scrindex[x].classList.remove('scroll-index-low');      
        }
    }
    for(y = 0;y < scrindex.length;y++)
    {
        if(scrindex[y] == event.target)
        {
            if(y==0)
            {
                procentToMove = 0;
            }
            else
            {
                procentToMove = -15.1 * y;
            }
            
            if(y == scrindex.length-1)
            {         
                scrindex[y].classList.add('scroll-index-up');
                scrindex[y-1].classList.add('scroll-index-middle');
                
            }
            else if(y == 0)
            {
                scrindex[y].classList.add('scroll-index-up');
                scrindex[y+1].classList.add('scroll-index-middle');
            }
            else
            {
                scrindex[y].classList.add('scroll-index-up');
                scrindex[y+1].classList.add('scroll-index-middle');
                scrindex[y-1].classList.add('scroll-index-middle');
            }
            
            boxindex.style.transform = 'translateX('+procentToMove+'%)';
        }
    }
}

for (var i = 0; i < scrindex.length; i++) 
{
    scrindex[i].addEventListener('click', changeShopIndex);
}


