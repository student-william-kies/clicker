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

function secondForHourGlass()
{
    nbGold += 500;
    document.getElementById("nbGold").innerHTML = nbGold + '<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
}

function secondForHourGlass2()
{
    nbGold += 1000;
    document.getElementById("nbGold").innerHTML = nbGold + '<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
}

function secondForHourGlass3()
{
    nbGold += 10000;
    document.getElementById("nbGold").innerHTML = nbGold + '<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
}

/***********************************************************************************************************************
 * PARCHMENT - ITEMS CAC (Achats et améliorations des items corps à corps)
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
 * Permet d'acheter & d'améliorer la hache
 */
function manageAxe()
{
    switch (lvlAxe)
    {
        case 0:
            if (nbGold >= 75000)
            {
                lvlAxe = 250;
                nbGold -= 75000;   document.getElementById('axe').innerHTML = 'Upgrade 80k<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
            }
            break;

        case 250:
            if (nbGold >= 80000)
            {
                lvlAxe = 800;
                nbGold -= 80000;   document.getElementById('axe').innerHTML = 'Upgrade 120k<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
            }
            break;

        case 800:
            if (nbGold >= 120000)
            {
                lvlAxe = 1500;
                nbGold -= 120000;   document.getElementById('axe').innerHTML= 'Fully Upgraded';
                document.getElementById('axe').disabled = 'true';
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

/***********************************************************************************************************************
 * PARCHMENT - ITEMS DISTANCE (Achats et améliorations des items a distance)
 **********************************************************************************************************************/

/**
 * Permet d'acheter et d'améliorer l'arc
 */
function manageBow()
{
    switch (lvlBow)
    {
        case 0:
            if (nbGold >= 100000)
            {
                lvlBow = 600;
                nbGold -= 100000;   document.getElementById('bow').innerHTML = 'Upgrade 140k<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
            }
            break;

        case 600:
            if (nbGold >= 140000)
            {
                lvlBow = 1800;
                nbGold -= 140000;   document.getElementById('bow').innerHTML = 'Upgrade 200k<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
            }
            break;

        case 1800:
            if (nbGold >= 200000)
            {
                lvlBow = 3500;
                nbGold -= 200000;   document.getElementById('bow').innerHTML= 'Fully Upgraded';
                document.getElementById('bow').disabled = 'true';
            }
            break;
    }
}

/**
 * Permet d'acheter et d'améliorer la lance
 */
function manageSpear()
{
    switch (lvlSpear)
    {
        case 0:
            if (nbGold >= 250000)
            {
                lvlSpear = 1200;
                nbGold -= 250000;   document.getElementById('spear').innerHTML = 'Upgrade 380k<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
            }
            break;

        case 1200:
            if (nbGold >= 380000)
            {
                lvlSpear = 4000;
                nbGold -= 380000;   document.getElementById('spear').innerHTML = 'Upgrade 810k<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
            }
            break;

        case 4000:
            if (nbGold >= 810000)
            {
                lvlSpear = 3500;
                nbGold -= 810000;   document.getElementById('spear').innerHTML= 'Fully Upgraded';
                document.getElementById('spear').disabled = 'true';
            }
            break;
    }
}

/**
 * Permet d'acheter et d'améliorer l'arbalète
 */
function manageCrossBow()
{
    switch (lvlCrossBow)
    {
        case 0:
            if (nbGold >= 500000)
            {
                lvlCrossBow = 2500;
                nbGold -= 500000;   document.getElementById('crossbow').innerHTML = 'Upgrade 1.8M<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
            }
            break;

        case 2500:
            if (nbGold >= 1800000)
            {
                lvlCrossBow = 6700;
                nbGold -= 1800000;   document.getElementById('crossbow').innerHTML = 'Upgrade 4.5M<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
            }
            break;

        case 6700:
            if (nbGold >= 4500000)
            {
                lvlCrossBow = 8000;
                nbGold -= 4500000;   document.getElementById('crossbow').innerHTML= 'Fully Upgraded';
                document.getElementById('crossbow').disabled = 'true';
            }
            break;
    }
}

/***********************************************************************************************************************
 * PARCHMENT - ITEMS BONUS (Achats et améliorations des items bonus)
 **********************************************************************************************************************/

/**
 * Permet d'acheter et d'améliorer le sablier
 */
function manageHourGlass()
{
    switch (lvlHourGlass)
    {
        case 0:
            if (nbGold >= 20000)
            {
                lvlHourGlass++;
                nbGold -= 20000;   document.getElementById('hourglass').innerHTML = 'Upgrade 50k<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
                secondForHourGlass()
                setInterval(secondForHourGlass, 1000);
            }
            break;

        case 1:
            if (nbGold >= 50000)
            {
                lvlHourGlass++;
                nbGold -= 50000;   document.getElementById('hourglass').innerHTML = 'Upgrade 100k<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
                secondForHourGlass2()
                setInterval(secondForHourGlass2, 1000);
            }
            break;

        case 2:
            if (nbGold >= 100000)
            {
                lvlHourGlass++;
                nbGold -= 100000;   document.getElementById('hourglass').innerHTML= 'Fully Upgraded';
                document.getElementById('hourglass').disabled = 'true';
                secondForHourGlass3()
                setInterval(secondForHourGlass3, 1000);
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
            if (nbGold >= 50000000)
            {
                lvlLunette = 5000000;
                nbGold -= 50000000;   document.getElementById('trollBonus').innerHTML= 'Fully Upgraded';
                document.getElementById('trollBonus').disabled = 'true';
            }
            break;
    }
}