let nbGold = 0;

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
}