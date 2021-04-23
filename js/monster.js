let pop = 1;

/**
 * Permet l'affichage de différents monstres aux bout d'un certain nombre de clics
 */
function popMonster()
{
    switch (pop)
    {
        case 1:
            if (x >= 1)
            {
                pop++;
                document.getElementById("popZone").innerHTML= ('<img class="img-fluid" id="hero" src="resources/gifs/demon.gif">');
            }
            break;

        case 2:
            if (x >= 10)
            {
                pop = 3;
                document.getElementById("popZone").innerHTML= ('<img class="img-fluid" id="hero" src="resources/gifs/wolf.gif">');
            }
            break;

        case 3:
            if (x >= 30)
            {
                pop = 4;
                document.getElementById("popZone").innerHTML= ('<img class="img-fluid" id="hero" src="resources/gifs/bath.gif">');
            }
            break;
    }
}