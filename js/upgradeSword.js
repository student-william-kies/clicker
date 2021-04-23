var lvl = 1;

/**
 *  Permet l'amélioration de l'épée
 */
function upgradeSword()
{
    switch (lvl)
    {
        case 1:
            if (x >= 100)
            {
                lvl++;
                x -= 100; document.getElementById("sword").innerHTML = ('Upgrade - 200<img src="resources/gifs/coin.gif" class="coin" alt="coin">');
            }
        break;

        case 2:
            if (x >= 200)
            {
                lvl = 20;
                x -= 200; document.getElementById("sword").innerHTML = ('Upgrade - 600<img src="resources/gifs/coin.gif" class="coin" alt="coin">');
            }
        break;

        case 20:
            if (x >= 600)
            {
                lvl = 30;
                x -= 600; document.getElementById("sword").innerHTML = ('Upgrade - 2000<img src="resources/gifs/coin.gif" class="coin" alt="coin">');
            }
        break;

        case 30:

            if (x >= 2000)
            {
                lvl = 100;
                x -= 2000; document.getElementById("sword").innerHTML= ('Fully Upgraded');
            }
        break;
    }
    console.log(y)
}
