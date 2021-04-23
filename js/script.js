var x = 0;
var nbClick = 1;

function mouseClicked()
{
    x += nbClick;
    textUpdate();
    popMonster();
}

function textUpdate()
{
    document.getElementById("nbGold").innerHTML = x + '<img src="resources/gifs/coin.gif" class="coin" alt="coin">';
}