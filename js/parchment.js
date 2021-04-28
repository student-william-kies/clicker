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

    saveGold()
}

function secondForHourGlass()
{
    nbGold += 10000;
    document.getElementById("nbGold").innerHTML = nbGold + '<img src="resources/gifs/coin.gif" class="coin" alt="coin">';

    saveGold()
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
            if (nbGold >= 4000)
            {
                lvl = 200;
                nbGold -= 4000;   document.getElementById('sword').innerHTML= 'Fully Upgraded';
                document.getElementById('sword').disabled = 'true';
            }
        break;
    }
    saveSword()
}

/**
 * Permet d'acheter & d'améliorer la hache
 */
function manageAxe()
{
    switch (lvlAxe)
    {
        case 0:
            if (nbGold >= 120000)
            {
                lvlAxe = 1500;
                nbGold -= 120000;   document.getElementById('axe').innerHTML= 'Fully Upgraded';
                document.getElementById('axe').disabled = 'true';
            }
        break;
    }
    saveAxe()
}

/**
 * Permet d'acheter & d'améliorer le bouclier
 */
function manageShield()
{
    switch (lvlShield)
    {
        case 0:
            if (nbGold >= 300000)
            {
                lvlShield = 5000;
                nbGold -= 300000;   document.getElementById('shield').innerHTML= 'Fully Upgraded';
                document.getElementById('shield').disabled = 'true';
            }
        break;
    }
    saveShield()
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
            if (nbGold >= 200000)
            {
                lvlBow = 3500;
                nbGold -= 200000;   document.getElementById('bow').innerHTML= 'Fully Upgraded';
                document.getElementById('bow').disabled = 'true';
            }
        break;
    }
    saveBow()
}

/**
 * Permet d'acheter et d'améliorer la lance
 */
function manageSpear()
{
    switch (lvlSpear)
    {
        case 0:
            if (nbGold >= 810000)
            {
                lvlSpear = 8000;
                nbGold -= 810000;   document.getElementById('spear').innerHTML= 'Fully Upgraded';
                document.getElementById('spear').disabled = 'true';
            }
        break;
    }
    saveSpear()
}

/**
 * Permet d'acheter et d'améliorer l'arbalète
 */
function manageCrossBow()
{
    switch (lvlCrossBow)
    {
        case 0:
            if (nbGold >= 4500000)
            {
                lvlCrossBow = 12000;
                nbGold -= 4500000;   document.getElementById('crossbow').innerHTML= 'Fully Upgraded';
                document.getElementById('crossbow').disabled = 'true';
            }
        break;
    }
    saveCrossBow()
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
            if (nbGold >= 100000)
            {
                lvlHourGlass++;
                nbGold -= 100000;   document.getElementById('hourglass').innerHTML= 'Fully Upgraded';
                document.getElementById('hourglass').disabled = 'true';
                secondForHourGlass()
                setInterval(secondForHourGlass, 1000);
            }
        break;
    }
    saveHourGlass()
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
    saveLunette()
}

/***********************************************************************************************************************
 * LOCALSTORAGE
 **********************************************************************************************************************/
/**
 * Enregistre le niveau de l'épée
 */
let swordStorage = localStorage.getItem('sword');
document.getElementById('sword').innerHTML = 'Upgrade 4k<img src="resources/gifs/coin.gif" class="price" alt="coin">';

if (swordStorage !== null && swordStorage === '200')
{
    lvl = parseInt(swordStorage);   document.getElementById('sword').innerHTML= 'Fully Upgraded';
    document.getElementById('sword').disabled = 'true';
}
else
{
    lvl = 1;
}

function saveSword()
{
    const sword = () =>
    {
        if (swordStorage == null)
        {
            setSword()
        } else
        {
            setSword()
        }
    }

    function setSword()
    {
        localStorage.setItem('sword', lvl)
    }

    sword()
}

/**
 * Enregistre le niveau de la hache
 */
let axeStorage = localStorage.getItem('axe');
document.getElementById('axe').innerHTML = 'Upgrade 120k<img src="resources/gifs/coin.gif" class="price" alt="coin">';

if (axeStorage !== null && axeStorage === '1500')
{
    lvlAxe = parseInt(axeStorage);  document.getElementById('axe').innerHTML= 'Fully Upgraded';
    document.getElementById('axe').disabled = 'true';
}
else
{
    lvlAxe = 0;
}

function saveAxe()
{
    const axe = () =>
    {
        if (axeStorage == null)
        {
            setAxe()
        } else
        {
            setAxe()
        }
    }

    function setAxe()
    {
        localStorage.setItem('axe', lvlAxe)
    }

    axe()
}

/**
 * Enregistre le niveau du bouclier
 */
let shieldStorage = localStorage.getItem('shield');
document.getElementById('shield').innerHTML = 'Upgrade 300k<img src="resources/gifs/coin.gif" class="price" alt="coin">';

if (shieldStorage !== null && shieldStorage === '5000')
{
    lvlShield = parseInt(shieldStorage);  document.getElementById('shield').innerHTML= 'Fully Upgraded';
    document.getElementById('shield').disabled = 'true';
}
else
{
    lvlShield = 0;
}

function saveShield()
{
    const shield = () =>
    {
        if (axeStorage == null)
        {
            setShield()
        } else
        {
            setShield()
        }
    }

    function setShield()
    {
        localStorage.setItem('shield', lvlShield)
    }

    shield()
}

/**
 * Enregistre le niveau de l'arc
 */
let bowStorage = localStorage.getItem('bow');
document.getElementById('bow').innerHTML = 'Upgrade 200k<img src="resources/gifs/coin.gif" class="price" alt="coin">';

if (bowStorage !== null && bowStorage === '3500')
{
    lvlBow = parseInt(bowStorage);  document.getElementById('bow').innerHTML= 'Fully Upgraded';
    document.getElementById('bow').disabled = 'true';
}
else
{
    lvlBow = 0;
}

function saveBow()
{
    const bow = () =>
    {
        if (axeStorage == null)
        {
            setBow()
        } else
        {
            setBow()
        }
    }

    function setBow()
    {
        localStorage.setItem('bow', lvlBow)
    }

    bow()
}

/**
 * Enregistre le niveau de la lance
 */
let spearStorage = localStorage.getItem('spear');
document.getElementById('spear').innerHTML = 'Upgrade 810k<img src="resources/gifs/coin.gif" class="price" alt="coin">';

if (spearStorage !== null && spearStorage === '8000')
{
    lvlSpear = parseInt(spearStorage);  document.getElementById('spear').innerHTML= 'Fully Upgraded';
    document.getElementById('spear').disabled = 'true';
}
else
{
    lvlSpear = 0;
}

function saveSpear()
{
    const spear = () =>
    {
        if (axeStorage == null)
        {
            setSpear()
        } else
        {
            setSpear()
        }
    }

    function setSpear()
    {
        localStorage.setItem('spear', lvlSpear)
    }

    spear()
}

/**
 * Enregistre le niveau de l'arbalète
 */
let crossBowStorage = localStorage.getItem('crossbow');
document.getElementById('crossbow').innerHTML = 'Upgrade 4.5M<img src="resources/gifs/coin.gif" class="price" alt="coin">';

if (crossBowStorage !== null && crossBowStorage === '12000')
{
    lvlCrossBow = parseInt(crossBowStorage);  document.getElementById('crossbow').innerHTML= 'Fully Upgraded';
    document.getElementById('crossbow').disabled = 'true';
}
else
{
    lvlCrossBow = 0;
}

function saveCrossBow()
{
    const crossBow = () =>
    {
        if (crossBowStorage == null)
        {
            setCrossBow()
        } else
        {
            setCrossBow()
        }
    }

    function setCrossBow()
    {
        localStorage.setItem('crossbow', lvlCrossBow)
    }

    crossBow()
}

/**
 * Enregistre le niveau du sablier
 */
let hourGlassStorage = localStorage.getItem('hourglass');
document.getElementById('hourglass').innerHTML = 'Upgrade 100k<img src="resources/gifs/coin.gif" class="price" alt="coin">';

if (hourGlassStorage !== null && hourGlassStorage === '1')
{
    lvlHourGlass = parseInt(hourGlassStorage);  document.getElementById('hourglass').innerHTML= 'Fully Upgraded';
    document.getElementById('hourglass').disabled = 'true';
}
else
{
    lvlHourGlass = 0;
}

function saveHourGlass()
{
    const hourGlass = () =>
    {
        if (hourGlassStorage == null)
        {
            setHourGlass()
        } else
        {
            setHourGlass()
        }
    }

    function setHourGlass()
    {
        localStorage.setItem('hourglass', lvlHourGlass)
    }

    hourGlass()
}

/**
 * Enregistre le niveau des lunettes bonus
 */
let lunetteStorage = localStorage.getItem('lunette');
document.getElementById('trollBonus').innerHTML = 'Upgrade 50M<img src="resources/gifs/coin.gif" class="price" alt="coin">';

if (lunetteStorage !== null && lunetteStorage === '5000000')
{
    lvlLunette = parseInt(lunetteStorage);  document.getElementById('trollBonus').innerHTML= 'Fully Upgraded';
    document.getElementById('trollBonus').disabled = 'true';
}
else
{
    lvlLunette = 0;
}

function saveLunette()
{
    const lunette = () =>
    {
        if (lunetteStorage == null)
        {
            setLunette()
        } else
        {
            setLunette()
        }
    }

    function setLunette()
    {
        localStorage.setItem('lunette', lvlLunette)
    }

    lunette()
}