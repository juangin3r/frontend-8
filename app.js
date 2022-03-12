daily = document.querySelector(".daily");

weekly = document.querySelector("#weekly");

monthly = document.querySelector("#monthly");

first1 = document.querySelector(".first1");

second1 = document.querySelector(".second1");

first2 = document.querySelector(".first2");

second2 = document.querySelector(".second2");

first3 = document.querySelector(".first3");

second3 = document.querySelector(".second3");

first4 = document.querySelector(".first4");

second4 = document.querySelector(".second4");

first5 = document.querySelector(".first5");

second5 = document.querySelector(".second5");

first6 = document.querySelector(".first6");

second6 = document.querySelector(".second6");



let array = [first1, second1];



fetch("data.json")
.then((res) => res.json())
.then((response) => {
    first1.textContent = (`${response[0].timeframes.weekly.current}hrs`);
    second1.textContent = (`Last Week ${response[0].timeframes.weekly.previous}hrs`);
    first2.textContent = (`${response[1].timeframes.weekly.current}hrs`);
    second2.textContent = (`Last Week ${response[1].timeframes.weekly.previous}hrs`);
    first3.textContent = (`${response[2].timeframes.weekly.current}hrs`);
    second3.textContent = (`Last Week ${response[2].timeframes.weekly.previous}hrs`);
    first4.textContent = (`${response[3].timeframes.weekly.current}hrs`);
    second4.textContent = (`Last Week ${response[3].timeframes.weekly.previous}hrs`);
    first5.textContent = (`${response[4].timeframes.weekly.current}hrs`);
    second5.textContent = (`Last Week ${response[4].timeframes.weekly.previous}hrs`);
    first6.textContent = (`${response[5].timeframes.weekly.current}hrs`);
    second6.textContent = (`Last Week ${response[5].timeframes.weekly.previous}hrs`);
})



daily.addEventListener("click", () => {

    fetch("data.json")
    .then((res) => res.json())
    .then((response) => {
        first1.textContent = (`${response[0].timeframes.daily.current}hrs`);
        second1.textContent = (`Yesterday ${response[0].timeframes.daily.previous}hrs`);
        first2.textContent = (`${response[1].timeframes.daily.current}hr`);
        second2.textContent = (`Yesterday ${response[1].timeframes.daily.previous}hrs`);
        first3.textContent = (`${response[2].timeframes.daily.current}hr`);
        second3.textContent = (`Yesterday ${response[2].timeframes.daily.previous}hr`);
        first4.textContent = (`${response[3].timeframes.daily.current}hr`);
        second4.textContent = (`Yesterday ${response[3].timeframes.daily.previous}hr`);
        first5.textContent = (`${response[4].timeframes.daily.current}hr`);
        second5.textContent = (`Yesterday ${response[4].timeframes.daily.previous}hrs`);
        first6.textContent = (`${response[5].timeframes.daily.current}hr`);
        second6.textContent = (`Yesterday ${response[5].timeframes.daily.previous}hr`);
    })
    weekly.classList.remove("active");
    monthly.classList.remove("active");
    daily.classList.toggle("active")
});

weekly.addEventListener("click", () => {
    fetch("data.json")
    .then((res) => res.json())
    .then((response) => {
        first1.textContent = (`${response[0].timeframes.weekly.current}hrs`);
        second1.textContent = (`Last Week ${response[0].timeframes.weekly.previous}hrs`);
        first2.textContent = (`${response[1].timeframes.weekly.current}hrs`);
        second2.textContent = (`Last Week ${response[1].timeframes.weekly.previous}hrs`);
        first3.textContent = (`${response[2].timeframes.weekly.current}hrs`);
        second3.textContent = (`Last Week ${response[2].timeframes.weekly.previous}hrs`);
        first4.textContent = (`${response[3].timeframes.weekly.current}hrs`);
        second4.textContent = (`Last Week ${response[3].timeframes.weekly.previous}hrs`);
        first5.textContent = (`${response[4].timeframes.weekly.current}hrs`);
        second5.textContent = (`Last Week ${response[4].timeframes.weekly.previous}hrs`);
        first6.textContent = (`${response[5].timeframes.weekly.current}hrs`);
        second6.textContent = (`Last Week ${response[5].timeframes.weekly.previous}hrs`);
    })
    daily.classList.remove("active");
    monthly.classList.remove("active");
    weekly.classList.toggle("active");
});

monthly.addEventListener("click", () => {
    fetch("data.json")
    .then((res) => res.json())
    .then((response) => {
        first1.textContent = (`${response[0].timeframes.monthly.current}hrs`);
        second1.textContent = (`Last Month ${response[0].timeframes.monthly.previous}hrs`);
        first2.textContent = (`${response[1].timeframes.monthly.current}hrs`);
        second2.textContent = (`Last Month ${response[1].timeframes.monthly.previous}hrs`);
        first3.textContent = (`${response[2].timeframes.monthly.current}hrs`);
        second3.textContent = (`Last Month ${response[2].timeframes.monthly.previous}hrs`);
        first4.textContent = (`${response[3].timeframes.monthly.current}hrs`);
        second4.textContent = (`Last Month ${response[3].timeframes.monthly.previous}hrs`);
        first5.textContent = (`${response[4].timeframes.monthly.current}hrs`);
        second5.textContent = (`Last Month ${response[4].timeframes.monthly.previous}hrs`);
        first6.textContent = (`${response[5].timeframes.monthly.current}hrs`);
        second6.textContent = (`Last Month ${response[5].timeframes.monthly.previous}hrs`);
    })
    daily.classList.remove("active");
    weekly.classList.remove("active");
    monthly.classList.toggle("active");
});

