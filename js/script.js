let nbGold = 0;

/**
 * Variables des items
 */
let lvl = 1;
let lvlShield = 0;
let lvlLunette = 0;

/**
 * Variables des spells
 */
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
    nbGold += lvlShield;
    nbGold += lvlLunette;
    nbGold += nbClick;
    x += nbClick;
    earningCoin();
    heroAnimation();
    popMonster();
}