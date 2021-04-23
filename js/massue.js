var massue = 1;

/**
 *  Achat et amélioration de la massue
 */
function buyAndUpmassue()
{
    switch (massue)
    {
        case 1:
            if (x >= 5000)
            {
                massue++;
                x -= 5000;
                document.getElementById("massue").innerHTML = "Améliorer massue - 6000 Or";
            }
        break;

        case 2:
            if (x >= 6000)
            {
                massue = 80;
                x -= 6000;
                document.getElementById("massue").innerHTML = "Améliorer massue - 8000 Or";
            }
        break;

        case 80:
            if (x >= 8000)
            {
                massue = 120;
                x -= 8000;
                document.getElementById("massue").innerHTML = "Améliorer massue - 10000 Or";
            }
        break;

        case 30:

            if (x >= 10000)
            {
                massue = 100;
                x -= 10000;
                document.getElementById("massue").innerHTML = "Fully Upgraded";
            }
        break;
    }
}