function heroAnimation1()
{
    if ( document.getElementById("hero").classList.contains('wobble') || document.getElementById("popZone").classList.contains('flash'))
    {
        document.getElementById("hero").classList.remove("wobble");
        document.getElementById("popZone").classList.remove("flash");
    }
    else
    {
        document.getElementById("hero").classList.add("wobble");
        document.getElementById("popZone").classList.add("flash");
    }
}