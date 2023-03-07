import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function IconSearch(props) {
    return (
        <Svg
            width={21}
            height={18}
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M9.512 14.25c3.667 0 6.639-2.686 6.639-6s-2.972-6-6.639-6c-3.666 0-6.639 2.686-6.639 6s2.973 6 6.64 6zM17.81 15.75l-3.61-3.262"
                stroke="#6D3805"
                strokeOpacity={0.49}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export function IconLocation(props) {
    return (
        <Svg
            width={20}
            height={25}
            viewBox="0 0 20 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M18.375 10c0 4.833-8.438 13.75-8.438 13.75S1.5 14.833 1.5 10c0-4.834 3.777-8.75 8.438-8.75 4.66 0 8.437 3.918 8.437 8.75z"
                stroke="#FF7202"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M12.25 9.688a2.312 2.312 0 11-4.625 0 2.312 2.312 0 014.625 0z"
                fill="#FF7203"
                stroke="#FF7202"
            />
        </Svg>
    )
}

export function IconCart(props) {
    return (
        <Svg
            width={22}
            height={19}
            viewBox="0 0 22 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M.629 1.226h2.167c.258 0 .506.1.689.278a.94.94 0 01.286.671v12.016c.001.625.256 1.224.709 1.666a2.45 2.45 0 001.708.69h1.465a1.77 1.77 0 00-.11.614c0 .488.199.955.552 1.3A1.91 1.91 0 009.43 19c.5 0 .98-.194 1.333-.539.354-.345.552-.812.552-1.3a1.77 1.77 0 00-.11-.613h1.478a1.77 1.77 0 00-.11.613c0 .488.198.955.552 1.3a1.91 1.91 0 001.333.539c.5 0 .98-.194 1.333-.539.354-.345.553-.812.553-1.3a1.77 1.77 0 00-.11-.613H17.6a.637.637 0 00.444-.18.606.606 0 000-.867.637.637 0 00-.444-.18H6.188c-.307 0-.6-.119-.817-.33a1.12 1.12 0 01-.342-.795V14.1h11.314a.638.638 0 00.548-.313l4.229-7.35h.251a.637.637 0 00.445-.18.605.605 0 00.184-.433V3.372a.605.605 0 00-.184-.434.637.637 0 00-.445-.18H5.03v-.583A2.15 2.15 0 004.374.637 2.262 2.262 0 002.796 0H.629a.637.637 0 00-.445.18.605.605 0 000 .867c.118.115.278.18.445.18zm20.114 2.759V5.21H5.029V3.985h15.714z"
                fill={props.fill ? props.fill : "#6D3805"}
            />
        </Svg>
    )
}

export function IconExplore(props) {
    return (
        <Svg
            width={17}
            height={17}
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M16.576 13.387l-3.78-3.01c-.212-.142-.53-.142-.706.035l-.106.107-.99-.957c1.661-2.372 1.45-5.666-.67-7.791A6.003 6.003 0 006.049 0a6.003 6.003 0 00-4.274 1.77 6.06 6.06 0 000 8.572 6.003 6.003 0 004.274 1.77c1.272 0 2.473-.39 3.497-1.097l.99.991-.106.107a.54.54 0 00-.036.708l3.003 3.79c.212.247.494.389.812.389.283 0 .53-.106.707-.283l1.766-1.771a1.1 1.1 0 00.318-.78c-.07-.318-.212-.601-.424-.779z"
                fill={props.fill ? props.fill : "#6D3805"}
            />
        </Svg>
    )
}

export function IconHeart(props) {
    return (
        <Svg
            width={18}
            height={16}
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.023 0C15.77 0 18 2.293 18 5.12 18 9.793 9 16 9 16S0 10.017 0 5.12C0 1.6 2.229 0 4.977 0 6.632 0 8.095.835 9 2.114 9.905.835 11.368 0 13.023 0z"
                fill={props.fill ? props.fill : "#6D3805"}
            />
        </Svg>
    )
}

export function IconHome(props) {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17.517 7.83l-.002-.002L10.172.486A1.646 1.646 0 009 0c-.443 0-.859.172-1.172.485L.488 7.824l-.007.008a1.659 1.659 0 001.154 2.825h.293v5.404c0 1.069.87 1.939 1.94 1.939H6.74a.527.527 0 00.527-.527v-4.237c0-.488.397-.885.885-.885h1.694c.488 0 .885.397.885.885v4.237c0 .29.236.527.528.527h2.873c1.07 0 1.94-.87 1.94-1.94v-5.403h.27c.443 0 .86-.172 1.173-.485a1.66 1.66 0 000-2.343z"
                fill={props.fill ? props.fill : "#6D3805"}
            />
        </Svg>
    )
}

export function IconUser(props) {
    return (
        <Svg
            width={16}
            height={19}
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M8 9.5c2.525 0 4.571-2.126 4.571-4.75S10.525 0 8 0 3.429 2.126 3.429 4.75 5.475 9.5 8 9.5zm3.2 1.188h-.596A6.028 6.028 0 018 11.28a6.04 6.04 0 01-2.604-.594H4.8c-2.65 0-4.8 2.235-4.8 4.988v1.544C0 18.202.768 19 1.714 19h12.572c.946 0 1.714-.798 1.714-1.781v-1.544c0-2.754-2.15-4.988-4.8-4.988z"
                fill={props.fill ? props.fill : "#6D3805"}
            />
        </Svg>
    )
}