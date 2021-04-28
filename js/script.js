var nbGold = 0;

/**
 * Variables des items
 */
var lvl = 1;
var lvlShield = 0;
var lvlLunette = 0;

/**
 * Variables des spells
 */
var lvlHourGlass = 0;

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
    playSound();
}