let nbGold;

/**
 * Variables des items Cac
 */
let lvl = 1;
let lvlAxe = 0;
let lvlShield = 0;

/**
 * Variables des items Distance
 */
let lvlBow = 0;
let lvlSpear = 0;
let lvlCrossBow = 0;

/**
 * Variables des items Bonus
 */
let lvlLunette = 0;
let lvlHourGlass = 0;

/**
 * Variables des monstres
 */
var x = 0;
var nbClick = 1;

/**
 * Enregistre le nombre clics
 */
function mouseClicked()
{
    nbGold += lvl;
    nbGold += lvlAxe;
    nbGold += lvlShield;
    nbGold += lvlBow;
    nbGold += lvlSpear;
    nbGold += lvlCrossBow;
    nbGold += lvlHourGlass;
    nbGold += lvlLunette;
    nbGold += nbClick;
    x += nbClick;
    earningCoin();
    heroAnimation();
    popMonster();
    playSound();
}

let video = document.getElementById('playVideo');
video.volume = 0.5;

/***********************************************************************************************************************
 * LOCALSTORAGE
 **********************************************************************************************************************/
let goldStorage = localStorage.getItem('gold');

if (goldStorage !== null)
{
    nbGold = parseInt(goldStorage);
}
else
{
    nbGold = 0;
}

/**
 * Enregistre l'or en local
 */
function saveGold()
{
    const gold = () =>
    {
        if (goldStorage == null)
        {
            setGold()
        } else
        {
            setGold()
        }
    }

    function setGold()
    {
        localStorage.setItem('gold', nbGold);
    }

    gold();
}
document.getElementById('nbGold').innerHTML = nbGold + '<img src="resources/gifs/coin.gif" class="coin" alt="coin">';