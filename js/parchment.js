/***********************************************************************************************************************
 * PARCHMENT - AUTO (Pièce d'or par seconde, par clics)
 **********************************************************************************************************************/

setInterval(incrementSeconds, 1000);

/**
 * Génère de l'or pour chaque clics (valeur de base 1clic = 1or)
 */
function earningCoin()
{
    document.getElementById("nbGold").innerHTML = nbGold + '<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
}

/**
 * Enregistre chaque secondes comme 1 pièce d'or
 */
function incrementSeconds()
{
    nbGold += 1;
    document.getElementById("nbGold").innerHTML = nbGold + '<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
}

/***********************************************************************************************************************
 * PARCHMENT - ITEMS (Achats et améliorations des items)
 **********************************************************************************************************************/

/**
 *  Permet l'amélioration de l'épée
 */
function manageSword()
{
    switch (lvl)
    {
        case 1:
            if (nbGold >= 100)
            {
                lvl++;
                nbGold -= 100;   document.getElementById('sword').innerHTML = 'Upgrade 250<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
            }
        break;

        case 2:
            if (nbGold >= 250)
            {
                lvl = 10;
                nbGold -= 250;   document.getElementById('sword').innerHTML = 'Upgrade 1,25k<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
            }
        break;

        case 10:
            if (nbGold >= 1250)
            {
                lvl = 40;
                nbGold -= 1250;   document.getElementById('sword').innerHTML = 'Upgrade 2,30k<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
            }
        break;

        case 40:
            if (nbGold >= 2300)
            {
                lvl = 80;
                nbGold -= 2300;   document.getElementById('sword').innerHTML = 'Upgrade 6,85k<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
            }
        break;

        case 80:
            if (nbGold >= 6850)
            {
                lvl = 150;
                nbGold -= 6850;   document.getElementById('sword').innerHTML = 'Upgrade 10k<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
            }
        break;

        case 150:
            if (nbGold >= 10000)
            {
                lvl = 200;
                nbGold -= 10000;   document.getElementById('sword').innerHTML= 'Fully Upgraded';
                document.getElementById('sword').disabled = 'true';
            }
        break;
    }
}

/**
 * Permet d'acheter & d'améliorer le bouclier
 */
function manageShield()
{
    switch (lvlShield)
    {
        case 0:
            if (nbGold >= 25000)
            {
                lvlShield = 500;
                nbGold -= 25000;   document.getElementById('shield').innerHTML = 'Upgrade 50k<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
            }
        break;

        case 500:
            if (nbGold >= 50000)
            {
                lvlShield = 1200;
                nbGold -= 50000;   document.getElementById('shield').innerHTML = 'Upgrade 100k<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
            }
        break;

        case 1200:
            if (nbGold >= 100000)
            {
                lvlShield = 5000;
                nbGold -= 100000;   document.getElementById('shield').innerHTML= 'Fully Upgraded';
                document.getElementById('shield').disabled = 'true';
            }
        break;
    }
}

/**
 * Permet d'acheter les Lunettes Bonus
 */
function manageLunette()
{
    switch (lvlLunette)
    {
        case 0:
            if (nbGold >= 1000000)
            {
                lvlLunette = 5000000;
                nbGold -= 1000000;   document.getElementById('trollBonus').innerHTML= 'Fully Upgraded';
                document.getElementById('trollBonus').disabled = 'true';
            }
        break;
    }
}

/***********************************************************************************************************************
 * PARCHMENT - SPELLS (Achats et améliorations des sorts)
 **********************************************************************************************************************/

function manageHourGlass()
{
    switch (lvlHourGlass)
    {
        case 0:
            if (nbGold >= 10)
            {
                lvlHourGlass++;
                nbGold -= 10;   incrementSeconds();
            }
        break;

        case 10:
            if (nbGold >= 20)
            {
                lvlHourGlass = 50;
                nbGold -= 20;   document.getElementById('hourglass').innerHTML= 'Fully Upgraded';
            }
        break;
    }
}