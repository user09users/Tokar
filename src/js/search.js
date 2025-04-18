const search = () => {
    const input = document.getElementById('search'),
        filter = input.value.toUpperCase(),
        ul = document.querySelector(".catalogSecondPage__wrapper"),
        li = ul.querySelectorAll('.catalogSecondPage__item');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName(".catalogSecondPage__item-title")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

export default search;