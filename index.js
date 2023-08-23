let btn = document.getElementById("button")
function addingEventListener() {
    btn.addEventListener('click',addingEventListener)
}
addingEventListener()