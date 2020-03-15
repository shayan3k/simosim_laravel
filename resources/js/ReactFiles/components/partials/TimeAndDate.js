import React, { useEffect, useState } from "react";
import moment from "moment-jalaali";
import persianJs from "persianjs";
import Skeleton from "react-loading-skeleton";

export default function TimeAndDate() {
    const [counter, setCounter] = useState(false);
    const [date, setDate] = useState("");
    const [clock, setClock] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(!counter);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [counter]);

    useEffect(() => {
        JalaliDateAndTime();
    }, []);

    const JalaliDateAndTime = () => {
        let m = moment();
        let today = new Date("January 1, 2008 11:10:00");
        var dayOfWeek = [
            "یکشنبه",
            "دوشنبه",
            "سه شنبه",
            "چهارشنبه",
            "پنج شنبه",
            "جمعه",
            "شنبه"
        ];
        dayOfWeek = dayOfWeek[new Date().getDay()];

        let month = [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند"
        ];
        month = month[m.jMonth()];

        setClock(
            persianJs(m.format("HH:mm"))
                .englishNumber()
                .toString()
        );

        setDate(
            dayOfWeek +
                " " +
                persianJs(m.jDate())
                    .englishNumber()
                    .toString() +
                " " +
                month
        );
    };

    return date.length && clock.length ? date + " | " + clock : <Skeleton />;
}
