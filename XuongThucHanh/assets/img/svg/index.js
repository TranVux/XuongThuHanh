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
