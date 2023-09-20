const View = {
    render({minutes, seconds}) {
        //acessando o html e colocando no internamente no html uma função.
        document.body.innerHTML =  `
        <p>Next post in:</p>
        <span>${minutes}:${seconds}</span>
        `;
    }
};

export { View };