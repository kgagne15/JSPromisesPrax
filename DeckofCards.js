let baseUrl = 'https://deckofcardsapi.com/api/deck/'
let $body = $('body')
let $btn = $('#card')

// Number 1
let drawCard = axios.get(baseUrl + 'new/draw')
drawCard
.then(data => console.log(`${data.data.cards[0].value} of ${data.data.cards[0].suit}`))
.catch(() => console.log('REJECTED'))

// Number 2
let newShuffleCard = axios.get(baseUrl + 'new/draw/')
newShuffleCard
.then(data => {
    let deckId = data.data.deck_id
    let cardOne = `${data.data.cards[0].value} of ${data.data.cards[0].suit}`
    console.log(cardOne)
    return axios.get(baseUrl + `${deckId}/draw/`)
})
.then(data => {
    let cardTwo = `${data.data.cards[0].value} of ${data.data.cards[0].suit}`
    console.log(cardTwo)
})
.catch(err => console.log('REJECTED', err))

// Number 3 (used the solution for guidance)
let deckId = null;
let $cardArea = $('#card-area')
let newDeck = axios.get(baseUrl + 'new/shuffle')
newDeck
.then(data => {
    deckId = data.data.deck_id;
    $btn.show()
})
.catch(() => console.log('REJECTED'))

$btn.on('click', function() {
    let newCard = axios.get(baseUrl + `${deckId}` + '/draw/')
    newCard
    .then(data => {
        if (data.data.remaining !== 0) {
        let $item = `
        <div>
            <img src="${data.data.cards[0].image}">
        </div>
        `
        $cardArea.append($item)
        } else {
            alert('You are out of cards. Refresh for a new deck')
        }
    })
    .catch(err => console.log(err))
})