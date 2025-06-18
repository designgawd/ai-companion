"use client";
import { useEffect, useState } from "react";

interface ComponentProps {
    initialMinutes: number;
    initialSeconds: number;
    start: boolean;
    callback: (data: boolean) => void;
}

export default function Timer({ initialMinutes = 3, initialSeconds = 0, start = false, callback }: ComponentProps) {
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if (!start) return;
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes === 0) {
                    clearInterval(interval);
                    callback(true);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [minutes, seconds, start, callback]);

    return (
        <div style={styles.container}>
            <p style={styles.timer}>
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </p>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    timer: {
        fontSize: "2rem",
        fontFamily: "monospace",
        color: "#ffffff",
    },
};
