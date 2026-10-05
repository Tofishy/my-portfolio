// src/data/projects.js

import * as Sentry from "@sentry/browser";

Sentry.init({
    dsn: "https://fac29adc0665b469b95fe613aa13566b@o4512202352623616.ingest.us.sentry.io/4512202359635968"
});



export const projects = [{
        id: 1,
        title: "Tasktracker",
        description: "A tracker that can track all of your task",
        link: "https://github.com/Tofishy/tasktrackr-web.git",
    },
    {
        id: 2,
        title: "Student Directory",
        description: "A student directory built using React state.",
        link: "https://github.com/Tofishy/student-directory.git",
    },
    {
        id: 3,
        title: "Student Loan System",
        description: "A system where students can loan and check their balance and payment history.",
        link: "https://github.com/potatomato-commits/student-loan-system.git",
    },
];

myUndefinedFunction();