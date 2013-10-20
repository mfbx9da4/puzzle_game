    function log(str)
    {
        if (typeof(console) != "undefined")
        {
            console.log(str);
        }
        else
        {
            alert(str);
        }
    }

    function randChoice(array)
    {
        return array[Math.floor(Math.random() * array.length)]
    }


    function moveToTop(canvas)
    {
        for (var i = 0; i < canvases.length; i ++)
        {
            canvases[i].style.zIndex = 0;
        }
        canvas.style.zIndex = 1;
    }
