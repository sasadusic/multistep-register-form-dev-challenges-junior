const cont_1 = document.getElementById("cont-1")
const cont_2 = document.getElementById("cont-2")
const cont_3 = document.getElementById("cont-3")
const conts = document.querySelectorAll('.cont')
const btns = document.querySelectorAll('.btn')
const forms = document.querySelectorAll('.form')
const check_conts = document.querySelectorAll(".check-cont")
const checks = document.querySelectorAll('.checkbox')
const form_1 = document.getElementById('form-1')
const form_2 = document.getElementById('form-2')
const name = document.getElementById('name')
const email = document.getElementById('email')
const name_p = document.getElementById('name-p')
const email_p = document.getElementById('email-p')
const btn_3 = document.getElementById('btn-3')
const topics_cont = document.getElementById('topics-cont')

cont_2.style.display = 'none'
cont_3.style.display = 'none'

const info = {
    name: '',
    email: '',
    topics: []
}

// btns.forEach(btn => {
//     btn.onclick = (e) => {
//         e.preventDefault()
//         // alert(`clicked ${btn.dataset.form}`)
//         conts.forEach(cont => cont.style.display = 'none')
//         const cont = document.querySelector(`#cont-${btn.dataset.form}`)
//         // console.log(cont)
//         cont.style.display = 'block'
//     }
// })

check_conts.forEach(cont => {
    cont.onclick = () => {
        const check = cont.querySelector('.checkbox')
        if(check.checked){
            cont.classList.remove('check-active')
        }else{
            cont.classList.add('check-active')

        }
        check.checked = !check.checked
        
    }
})

form_1.onsubmit = (e) => {
    e.preventDefault()
    conts.forEach(cont => cont.style.display = 'none')
    cont_2.style.display = 'block'
    name_p.innerText = name.value
    email_p.innerText = email.value
    name.value = ''
    email.value = ''
    
}

form_2.onsubmit = (e) => {
    e.preventDefault()
    conts.forEach(cont => cont.style.display = 'none')
    topics_cont.innerHTML = ''

    checks.forEach(check => {
        if(check.checked){
            const li = document.createElement('li')
            li.classList.add('phar')
            li.classList.add('info-phar')
            li.classList.add('li-phar')
            li.innerText = check.value
            topics_cont.appendChild(li)
        }
    })

    cont_3.style.display = 'block'
    checks.forEach(check => check.checked = false)
    check_conts.forEach(cont => cont.classList.remove('check-active'))

    
}

btn_3.onclick = () => {
    // alert('btn 3 clicked')
    conts.forEach(cont => cont.style.display = 'none')
    cont_1.style.display = 'block'

}