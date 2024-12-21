
console.log('helo :)')

const list = ['body','gesture','hands','head','feet','legs','hair','nose','mouth','clothes','backgorund']

const box = document.querySelector('.box')
const button = document.querySelector('.button')


const randomString = Math.floor(Math.random() * list.length);

console.log(list[randomString])
console.log(list.length)
console.log(randomString)

button.addEventListener('click', (e) => {
    box.textContent = ''
    box.textContent = list[Math.floor(Math.random() * list.length)];
})




