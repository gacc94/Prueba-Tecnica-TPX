const d = document;
const $ = (arg) => d.querySelector(arg);
const $link         = d.querySelectorAll('.item__h3--main');
const URL           = `./data.json`
const $template     = $('#template').content;
const $card         = $('#section')
const $fragment     = document.createDocumentFragment();

$link.forEach((el, i) => {
    $link[i].addEventListener('click', (e) => {
        $link.forEach((ele, i) => {

            $link[i].classList.remove('item__h3--active')
        })
        $link[i].classList.add('item__h3--active')


        let val = $link[i].textContent;
        localStorage.setItem('value',val)
    })
});


const getDay = async () => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        data.forEach((el) => {
            $template.querySelector('.item__h3').textContent = el.title;
            $template.querySelector('.item__h1').textContent = `${el.timeframes.daily.current}hrs`
            $template.querySelector('.item__h5').textContent = `Last Week - ${el.timeframes.daily.current}hrs`

            let $clon = d.importNode($template, true);
            $fragment.append($clon);
        });
        $card.innerHTML = '';
        $card.append($fragment);
    } catch (error) {
        console.log(error);
    }
}
const getWeekly = async () => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        data.forEach((el) => {
            $template.querySelector('.item__h3').textContent = el.title;
            $template.querySelector('.item__h1').textContent = `${el.timeframes.weekly.current}hrs`
            $template.querySelector('.item__h5').textContent = `Last Week - ${el.timeframes.weekly.current}hrs`

            let $clon = d.importNode($template, true);
            $fragment.append($clon);
        });
        $card.innerHTML = '';
        $card.append($fragment);
    } catch (error) {
        console.log(error);
    }

}
const getMonth = async () => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        data.forEach((el) => {
            $template.querySelector('.item__h3').textContent = el.title;
            $template.querySelector('.item__h1').textContent = `${el.timeframes.monthly.current}hrs`
            $template.querySelector('.item__h5').textContent = `Last Week - ${el.timeframes.monthly.current}hrs`

            let $clon = d.importNode($template, true);
            $fragment.append($clon);
        });
        $card.innerHTML = '';
        $card.append($fragment);
    } catch (error) {
        console.log(error);
    }

}

d.addEventListener('DOMContentLoaded', (e) => {
    getWeekly()
})

d.addEventListener('click', (e) => {
    if (e.target.matches('#item-day')){
        getDay()
    }
    if (e.target.matches('#item-week')){
        getWeekly()
    }
    if (e.target.matches('#item-month')){
        getMonth()
    }
})