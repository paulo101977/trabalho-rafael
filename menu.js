// var chk = document.getElementById('chk');

// if(chk) {
//     chk.addEventListener('change', () => {
//         console.log('ev', this.checked);
//         // document.body.classList.toggle('dark')

//         if(this.checked) {
//             document.body.classList.add('dark');
//         } else {
//             document.body.classList.remove('dark');
//         }
//     })
// }

// var $ = window.$;
// console.log('window', window)

$('#chk').change(function() {
    if ($(this).is(':checked')) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});