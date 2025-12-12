function calculateExperience() {
    const startDate = new Date('2022-07-18');
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    if (currentDate.getDate() < startDate.getDate()) {
        months--;
        if (months < 0) {
            years--;
            months += 12;
        }
    }

    let experienceString = `${years}+ Years Experience`;

    if (years === 0) {
        experienceString = `${months} Months Experience`;
    } else if (years === 1) {
        experienceString = `${years} Year ${months} Months Experience`;
    }

    return {
        years,
        months,
        string: experienceString,
        shortString: `${years}+ Years`
    };
}

function animateSkillBars() {
    const skillProgressElements = document.querySelectorAll('.skill-progress');
    skillProgressElements.forEach((el) => {
        const width = el.style.width;
        el.style.width = '0';
        setTimeout(() => {
            el.style.width = width;
        }, 300);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = formattedDate;
    }

    const experience = calculateExperience();

    const expYearsEl = document.getElementById('experience-years');
    const expDynamicEl = document.getElementById('exp-years-dynamic');
    const expValueEl = document.getElementById('exp-years-value');

    if (expYearsEl) {
        expYearsEl.textContent = experience.string;
    }
    if (expDynamicEl) {
        expDynamicEl.textContent = experience.string;
    }
    if (expValueEl) {
        expValueEl.textContent = experience.shortString;
    }

    animateSkillBars();
});
