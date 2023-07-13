console.log("Person 1: Shows Ticket")
console.log("Person 2: Shows Ticket")

const preMovie = async () => {
    const p1WifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => resolve("tickets"), 3000);
    })

    const getPopcorn = new Promise((resolve, reject) => {
        resolve("popcorn")
    })

    const addButter = new Promise((resolve, reject) => {
        resolve("butter")
    })

    const getColdDrinks = new Promise((resolve, reject) => {
        resolve("Cold-drink")
    })

    let ticket = await p1WifeBringingTickets;
    console.log(`Wife: I have the ${ticket}`);
    console.log(`Husband: We should go in`);
    console.log(`Wife: No i am hungry`);

    let popcorn = await getPopcorn;
    console.log(`husbant: I got some ${popcorn}`);
    console.log(`Husband: We should go in`);
    console.log(`Wife: I need butter on my popcorn`);

    let butter = await addButter;
    console.log(`Husband: This is your Popcorn with ${butter}`);
    console.log(`Wife: Please bring Cold-drink too`);

    let coldDrink = await getColdDrinks;
    console.log(`Husband: Here is your ${coldDrink}`);
    console.log(`Husband: We are getting late`);
    console.log(`Wife: Yeah lets go`);

    return ticket
}

preMovie().then((m) => {console.log(`Person 3: Shows ${m}`)});
console.log("Person 4: Shows Ticket");
console.log("Person 5: Shows Ticket");