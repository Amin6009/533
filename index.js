// let modal_w = document.querySelector('.modal-window')
// let bg_modal = document.querySelector('.bg-modal')
// let open_btn = document.querySelector('.open')
// let close_btns = document.querySelectorAll('[data-close]')
// console.log(close_btns);


// open_btn.onclick = () => {
//     open_modal_window()
// }

// close_btns.forEach(button => {
//     button.onclick = () => {
//         close_modal_window()
//     }
// })


// const open_modal_window = () => {
//     modal_w.classList.add("active")
//     bg_modal.style.display = "block"

//     setTimeout(() => {
//         bg_modal.style.opacity = "1"
//     }, 100);

// }

// const close_modal_window = () => {
//     modal_w.classList.remove("active")
//     bg_modal.style.opacity = "0"
    
//     setTimeout(() => {
//         bg_modal.style.display = "none"
//     }, 100);

// }


// let img = document.querySelector('img')
// let btn = document.querySelector('button')


// btn.onclick = () => {
//     console.log(btn.getAttribute('data-color'));
//     img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=470&hei=556&fmt=png-alpha&.v=1631652955000')

//     // if(inp.getAttribute('type') === 'password') {
//     //     inp.setAttribute('type','text')
//     // } else {
//     //     inp.setAttribute('type','password')
//     // }

// }

let h1 = document.querySelector('h1')
let btn_info = document.querySelectorAll('button[data-info]')


btn_info.forEach(btn => {
    btn.onclick = () => {
        h1.innerHTML = "<h1>hello</h1> " + btn.getAttribute('data-info')
        // console.log(btn.getAttribute('data-info'));
    }
})