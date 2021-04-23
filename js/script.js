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
let x = 0;
let nbClick = 0;

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