try{
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
}catch (e) {}
let defaultCity = '上海'
export default {
    city: defaultCity
}



