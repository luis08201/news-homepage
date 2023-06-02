let menubtn = document.getElementById("menubtn");

menubtn.addEventListener('click', () => {
    let navigation = document.getElementById("navigation");
    navigation.classList.toggle("active");
    menubtn.classList.toggle("active");
})


