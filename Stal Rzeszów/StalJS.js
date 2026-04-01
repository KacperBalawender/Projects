var back_photos = document.getElementsByClassName('back-img');
var tabs = document.getElementsByClassName('scroller');

function changePhoto()
{
    
    for(x=0;x<back_photos.length;x++)
    {
        if(back_photos[x].classList.contains('img-current'))
        {
            for(y=0;y<tabs.length;y++)
            {
                    if(tabs[y].classList.contains('scroller-selected'))
                    {
                        if(x == 1)
                        {
                            tabs[y].classList.remove('scroller-selected');
                            tabs[1].classList.add('scroller-selected');
                        }
                        else if(x == 2)
                        {
                            tabs[y].classList.remove('scroller-selected');
                            tabs[2].classList.add('scroller-selected');
                        }
                        else
                        {
                            tabs[y].classList.remove('scroller-selected');
                            tabs[0].classList.add('scroller-selected');
                        }
                    }    
            }
        }
        

        if(back_photos[x].classList.contains('img-current'))
        {
            console.log(x);
            if(x+1 == back_photos.length)
            {      
                 back_photos[x].classList.remove('img-current');
                 back_photos[x].classList.add('img-left');
                 back_photos[x-2].classList.remove('img-right');
                 back_photos[x-2].classList.add('img-current');
                 back_photos[x-1].classList.remove('img-left');
                 back_photos[x-1].classList.add('img-right');
                 break;
            }
            else if(x == 0)
            {
                back_photos[x].classList.remove('img-current');
                back_photos[x].classList.add('img-left');
                back_photos[x+1].classList.remove('img-right');
                back_photos[x+1].classList.add('img-current');
                back_photos[x+2].classList.remove('img-left');
                back_photos[x+2].classList.add('img-right');
                break;    
            }
            else
            {
                back_photos[x].classList.remove('img-current');
                back_photos[x].classList.add('img-left');
                back_photos[x+1].classList.remove('img-right');
                back_photos[x+1].classList.add('img-current');
                back_photos[x-1].classList.remove('img-left');
                back_photos[x-1].classList.add('img-right');
                break;    
            }   
        }
    }
}

const interval = setInterval(() => {
    changePhoto();
}, 7000);


