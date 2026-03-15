export function SqlIcon({ className = 'h-5 w-5' }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 3C7.58 3 4 4.34 4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6c0-1.66-3.58-3-8-3zm6 15c0 .55-2.69 1.5-6 1.5s-6-.95-6-1.5v-2.43c1.44.71 3.69 1.18 6 1.18s4.56-.47 6-1.18V18zm0-5c0 .55-2.69 1.5-6 1.5s-6-.95-6-1.5v-2.43c1.44.71 3.69 1.18 6 1.18s4.56-.47 6-1.18V13zm-6-3.32c-3.31 0-6-.95-6-1.5s2.69-1.5 6-1.5 6 .95 6 1.5-2.69 1.5-6 1.5z" />
        </svg>
    )
}
