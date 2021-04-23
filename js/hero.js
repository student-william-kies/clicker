/**
 * Execute une animation du héro lorsque l'utilisateur clic sur l'écran
 */
function heroAnimation()
{
    if ( document.getElementById("hero").classList.contains('wobble') || document.getElementById("popZone").classList.contains('flash blood'))
    {
        document.getElementById("hero").classList.remove("wobble");
        document.getElementById("popZone").classList.remove("flash","blood");
    }
    else
    {
        document.getElementById("hero").classList.add("wobble");
        document.getElementById("popZone").classList.add("flash","blood");
    }
}