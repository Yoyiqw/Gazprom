const info = document.querySelector(".header__row")
const big = document.querySelector(".projects__row")
const build = document.querySelector(".building__row")
const photo = document.querySelector(".photo__row")
const friend = document.querySelector(".partners__row")
const work = document.querySelector(".review__row")
const contacts = document.querySelector(".info__row")

const mails = [
    {
        img:"./icon/pin.svg",
        title:"АДРЕС:",
        info:"НЕВСКИЙ ПРОСПЕКТ 140, ОФИС 140-142",
    },
    {
        img:"./icon/phone.svg",
        title:"ТЕЛЕФОН:",
        info:"8 (812) 111-22-33 8 (812) 111-22-33",
    },
    {
        img:"./icon/time.svg",
        title:"ВРЕМЯ РАБОТЫ:",
        info:"ПН-СБ 10:00 - 20:00",
    },
    {
        img:"./icon/email.svg",
        title:"E-MAIL:",
        info:"INFO@VIP.RU",
    },
]

const revs = [
    {
        img: "./icon/quotes.svg",
        desc: "Lorem Ipsum - это текст-`рыба`, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной `рыбой` для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.",
        name:"Иванов Иван,",
        title:"ООО “Газпром-Арена”",

    },
    {
        img: "./icon/quotes.svg",
        desc: "Lorem Ipsum - это текст-`рыба`, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной `рыбой` для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.",
        name:"Иванов Иван,",
        title:"ООО “Газпром-Арена”",

    },
    {
        img: "./icon/quotes.svg",
        desc: "Lorem Ipsum - это текст-`рыба`, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной `рыбой` для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.",
        name:"Иванов Иван,",
        title:"ООО “Газпром-Арена”",

    },
]

const parts = [
    {
        img: "./img/berksho.png",
    },
    {
        img: "./img/berksho.png",
    },
    {
        img: "./img/berksho.png",
    },
    {
        img: "./img/berksho.png",
    },
    {
        img: "./img/berksho.png",
    },
]

const camers = [
    {
        img: "./img/photo.png",
    },
    {
        img: "./img/photo.png",
    },
    {
        img: "./img/photo.png",
    },
    {
        img: "./img/photo.png",
    },
    {
        img: "./img/photo.png",
    },
    {
        img: "./img/photo.png",
    },
    {
        img: "./img/photo.png",
    },
    {
        img: "./img/photo.png",
    },
] 

const builds = [
    {
        img: "./icon/build.svg",
        title: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
    },
    {
        img: "./icon/build.svg",
        title: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
    },
    {
        img: "./icon/build.svg",
        title: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
    },
    {
        img: "./icon/build.svg",
        title: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
    },
    {
        img: "./icon/build.svg",
        title: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
    },
    {
        img: "./icon/build.svg",
        title: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
    },
]


const projects = [
    {
        photo: "./img/projectsbg.png",
        title: "Газпром Арена",
        description: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву."

    },
    {
        photo: "./img/projectsbg.png",
        title: "Газпром Арена",
        description: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву."

    },
    {
        photo: "./img/projectsbg.png",
        title: "Газпром Арена",
        description: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву."

    },
]


const data = [
    {
        title: "на рынке",
        date: "26",
        year: "Лет",

    },
    {
        title: "на рынке",
        date: "26",
        year: "Лет",

    },
    {
        title: "на рынке",
        date: "26",
        year: "Лет",

    },
    {
        title: "на рынке",
        date: "26",
        year: "Лет",

    },
]


//первый вариант
for (let i = 0; i < data.length; i++) {
    info.innerHTML +=
        `
    <div class="header__item">
    <p class="header__date">${data[i].date}</p>
    <p class="header__year">${data[i].year}</p>
    <p class="header__market">${data[i].title}</p>
</div>
    `
}

//второй вариант 

for (const project of projects) {
    big.innerHTML +=
        `
    <div class="projects__item">
    <img class="projects__photo" src="${project.photo}" alt="">
    <div class="projects__stick"></div>
    <h2 class="projects__arena">${project.title}</h2>
    <p class="projects__description">${project.description}</p>
</div>
    `
}

//третий вариант 

for (const builder of builds) {
    build.innerHTML +=
    `
    <div class="building__item">
            <img src="${builder.img}" alt="">
            <p class="building__description">${builder.title}</p>
    </div>
    `
}   

//четвертый вариант 

for (const camera of camers ) {
    photo.innerHTML +=
    `
    <div class="photo__item">
            <img class="photo__test" src="${camera.img}" alt="">
    </div>
    `
}

//пятый вариант 

for (const part of parts) {
    friend.innerHTML +=
    `
    <div class="partners__item">
            <img class="partners__photo" src="${part.img}" alt="">
    </div>
    `
}

//шестой вариант

for (const rev of revs) {
    work.innerHTML +=
    `
    <div class="review__item">
            <img class="review__icon" src="${rev.img}" alt="">
                <p class="review__description">${rev.desc}</p>

            <div class="review__info">
                <p class="review__name">${rev.name}</p>
                <p class="review__arena">${rev.title}</p>
            </div>
    </div>
    `
}

//седьмой вариант 

for (const mail of mails) {
    contacts.innerHTML +=
    `
    <div class="info__item">
          <img class="info__photo" src="${mail.img}" alt="">
          <h1 class="info__addres">${mail.title}</h1>
          <h3 class="info__more">${mail.info}</h3>
    </div>  
    `
}