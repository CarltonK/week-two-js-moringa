const analyzer = (message: string) => {
    // Placeholder variables
    let code: string, amount: string, day: string, till: string

    const initialSplitter = message.split(" Confirmed. ");
    code = initialSplitter[0];

    const rightHandside = initialSplitter[1];
    const secondarySplitter = rightHandside.split(" paid to ");
    amount = secondarySplitter[0].replace("Ksh", '')

    till = secondarySplitter[1].split(". on ")[0]
    day = secondarySplitter[1].split(". on ")[1].split(".New ")[0];
    return till;
}