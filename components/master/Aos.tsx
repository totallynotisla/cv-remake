"use client";

import React from "react";
import AOS from "aos";

export default function Aos() {
    React.useEffect(() => {
        AOS.init({ once: true, duration: 750 });
        AOS.refresh();
    }, []);

    return <></>;
}
