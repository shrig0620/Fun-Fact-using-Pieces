document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "I love Travelling",
        "I am a Good Chess Player I got multiple Medals",
        "I love Coding!",
        "I speak three languages fluently.",
        "I’m learning to play the guitar in my free time."
    ];

    const button = document.getElementById('showFactButton');
    const funFact = document.getElementById('funFact');

    button.addEventListener('click', () => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        funFact.textContent = randomFact;
        funFact.classList.add('visible');
        gsap.fromTo(funFact, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    });
});
