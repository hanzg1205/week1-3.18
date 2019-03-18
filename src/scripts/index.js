const btn = [...document.querySelectorAll('.btn a')];
btn.forEach(file => {
    file.onclick = function(e) {
        let tar = e.target;
        if (tar.tagName === 'A') {
            tar.parentNode.querySelector('.active').classList.remove('active');
            tar.classList.add('active');
            if (tar.innerHTML == '正在读') {
                document.querySelector('.list2').style.display = "none";
                document.querySelector('.list1').style.display = "flex";
            } else if (tar.innerHTML == '已读完') {
                document.querySelector('.list1').style.display = "none";
                document.querySelector('.list2').style.display = "flex";
            }
        }
    }
})