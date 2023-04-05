let cartoon = [

    {
        id: 1,
        name: "saitama",
        link: "saitama.html"
    },

    {
        id: 2,
        name: "doraemon",
        link: "Doraemon.html"
    },

    {
        id: 3,
        name: "dragonball",
        link: "dragonball.html"
    },

    {
        id: 4,
        name: "darling",
        link: "darling.html"
    },

    {
        id: 5,
        name: "jujutsu",
        link: "juju.html"
    }
]

function search() {

    let save = document.getElementById('tex1')

    let save2 = save.value

    if (save2 == 1 || save2 == "saitama") {
        location.href = cartoon[0].link
    }

    if (save2 == 2 || save2 == "Doraemon") {
        location.href = cartoon[1].link
    }

    if (save2 == 3 || save2 == "Dragonball") {
        location.href = cartoon[2].link
    }

    if (save2 == 4 || save2 == "Darling") {
        location.href = cartoon[3].link
    }

    if (save2 == 5 || save2 == "JUJUTSU") {
        location.href = cartoon[4].link
    }
}

function KeyEnter(even) {
    if (even.keyCode == 13) {
        search()
    }
}

let r = confirm('Press a button!')
if (r == true)
    console.log('ok')
else
    console.log('cancle')