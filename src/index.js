import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const users = [
    {
        name: "Artem",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQG7Kt1a3jCgZQ/profile-displayphoto-shrink_800_800/0/1517435267761?e=1670457600&v=beta&t=oPLEzCwlubODpVjguPTvEr1L0BIK2nEg8GnTStxKEBk",
        homeworks: [100, 100, 80, 100, 85, 100, 100, 100, 100, 100, 99],
    },
    {
        name: "Alexander Alexander",
        img: "https://scontent.fath3-4.fna.fbcdn.net/v/t1.6435-1/71784489_1087504121448164_7747775407440527360_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=102&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=rjJ7zK6T4NkAX_0LrC0&_nc_ht=scontent.fath3-4.fna&oh=00_AT_YZlX3yEQ1FN1uHDqgHQ30--VgAEiPdnnZPSK6B9EXfg&oe=63621F61",
        homeworks: [30, 80, 85, 60, 35, 49, 55, 77],
    },
    {
        name: "Marina",
        img: "https://images.pexels.com/photos/2531093/pexels-photo-2531093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        homeworks: [100, 50, 80, 100, 85, 100, 100, 99, 98, 100],
    },
    {
        name: "Elena",
        img: "https://images.pexels.com/photos/2050979/pexels-photo-2050979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        homeworks: [100, 50, 80, 100, 85, 89],
    },
    {
        name: "Pavlo",
        img: "https://images.pexels.com/photos/1334945/pexels-photo-1334945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        homeworks: [100, 75, 100, 85, 99],
    },
    {
        name: "Mykola",
        img: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        homeworks: [100, 55, 80, 77, 97, 95, 79, 85, 77, 66, 55],
    },
    {
        name: "Olesia",
        img: "https://images.pexels.com/photos/3775168/pexels-photo-3775168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        homeworks: [100, 50, 80, 100, 85, 99, 99],
    },
    {
        name: "Denys",
        img: "https://images.pexels.com/photos/3030332/pexels-photo-3030332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        homeworks: [100, 50, 80, 100, 85, 33],
    },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App users={users} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
