const testGender = (listNumber) => {
    listNumber.forEach(n => {
        if (n % 3 == 0 & n % 5 != 0) {
            console.log("Garcon");
        }
        else if (n % 5 == 0 & n % 3 != 0) {
            console.log("Fille");
        }
        else if (n % 3 == 0 & n % 5 == 0) {
            console.log("GarconFille");
        }
        else {
            console.log(n);
        }
    });
}

const printDate = (listDate) => {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //all last day of each month
    listDate.forEach(n => {
        console.log("La date est : ", n);

        let lastDay = "";
        if (n.getMonth() - 1 == -1) {
            lastDay = "31/1";
        }
        else {
            lastDay = months[n.getMonth() - 1].toString() + '/' + (n.getMonth() - 1).toString();
        }
        console.log("date du dernier jour du mois précédent : ", lastDay);

        n.setMinutes(0);
        n.setHours(0);
        console.log("date avec heures et minutes mise à zéro : ", n);

        console.log("la date au format DD/MM/YYYY hh:mm : ", n.toLocaleString());

        let firstJan = new Date(n.getFullYear(), 0, 1);
        let numberOfDays = Math.floor((n - firstJan) / (24 * 60 * 60 * 1000));
        let nWeek = Math.ceil((n.getDay() + 1 + numberOfDays) / 7);
        console.log("le nombre de la semaine dans l’année : ", nWeek);

    })
}

const l = [1, 2, 3, 5, 15, 20, 21, 30, 22];
const dates = [new Date('September 23, 2021 15:00:00'), new Date('May 31, 2000 22:55:13'), new Date('October 10, 2018 06:00:00'), new Date('January 01, 2018 10:23:00')];

testGender(l);
printDate(dates);