/**
 * Var All Monsters
 */
var allMonsters =
    [
        [
            '<img class="img-fluid monster1" id="monster" src="resources/gifs/commun/cactus.gif">',
            '<img class="img-fluid monster1" id="monster" src="resources/gifs/commun/harpie.gif">',
            '<img class="img-fluid monster1" id="monster" src="resources/gifs/commun/slime.gif">',
            '<img class="img-fluid monster1" id="monster" src="resources/gifs/commun/birdblack.gif">',
            '<img class="img-fluid monster1" id="monster" src="resources/gifs/commun/birdgreen.gif">'
        ],
        [
            '<img class="img-fluid monster2" id="monster" src="resources/gifs/normal/groscaca.gif">',
            '<img class="img-fluid monster2" id="monster" src="resources/gifs/normal/grosse.gif">',
            '<img class="img-fluid monster2" id="monster" src="resources/gifs/normal/wolf.gif">'
        ],
        [
            '<img class="img-fluid monster3" id="monster" src="resources/gifs/rare/demon.gif">',
            '<img class="img-fluid monster3" id="monster" src="resources/gifs/rare/dragon.gif">',
            '<img class="img-fluid monster3" id="monster" src="resources/gifs/rare/orc.gif">'
        ],
        [
            '<img class="img-fluid monster4" id="monster" src="resources/gifs/elite/leo.gif">',
            '<img class="img-fluid monster4" id="monster" src="resources/gifs/elite/marteau.gif">',
            '<img class="img-fluid monster4" id="monster" src="resources/gifs/elite/rathian.gif">'
        ],
        [
            '<img class="img-fluid monster5" id="monster" src="resources/gifs/boss/kouizine.png">',
            '<img class="img-fluid monster5" id="monster" src="resources/gifs/boss/shiba.gif">',
        ]
    ]

/**
 * Fonction qui affiche certains monstres en fonction des clics (niveaux)
 */

var pop = 1;

document.getElementById("popZone").innerHTML = allMonsters[0][Math.floor(Math.random()*5)]

function popMonster()
{

    if( pop < 5)
    {
        if (pop === (x /5))
        {
            pop++;
            document.getElementById("popZone").innerHTML = allMonsters[0][Math.floor(Math.random()*5)];
        }
    }

    if(pop >= 5 && pop <10)
    {
        if (pop === (x /10))
        {
            pop++;
            document.getElementById("popZone").innerHTML = allMonsters[1][Math.floor(Math.random()*3)];
        }
    }

    if(pop >= 10 && pop <15)
    {
        if (pop === (x /15))
        {
            pop++;
            document.getElementById("popZone").innerHTML = allMonsters[2][Math.floor(Math.random()*3)];
        }
    }

    if(pop >= 15 && pop <20)
    {
        if (pop === (x /20))
        {
            pop++;
            document.getElementById("popZone").innerHTML = allMonsters[3][Math.floor(Math.random()*3)];
        }
    }

    if (pop >= 20 && pop <25)
    {
        if (pop === (x /25))
        {
            pop++;
            document.getElementById("popZone").innerHTML = allMonsters[4][Math.floor(Math.random()*2)];
        }
    }
    console.log(pop)
}














