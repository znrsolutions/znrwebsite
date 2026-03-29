"use client";

import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import styles from "./CalendlyButton.module.scss";

export default function CalendlyButton() {
    const [root, setRoot] = useState(null);

    useEffect(() => {
        setRoot(document.body);
    }, []);

    if (!root) return null;

    return (
        <PopupButton
            url="https://calendly.com/tech-znrsolutions/30min"
            rootElement={root}
            text="Schedule a 15 min call →"
            className={styles.btnPrimary}
        />
    );
}