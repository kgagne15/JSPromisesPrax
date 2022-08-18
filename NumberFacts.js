let baseUrl = 'http://numbersapi.com/'
let $body = $('body')

// Number 1

let numberFact = axios.get(baseUrl + 9 + '?json');
numberFact
.then(data => console.log(data.data.text))
.catch(() => console.log('REJECTED'))

// Number 2

let minNum = 9
let maxNum = 18
let multipleNumFacts = axios.get(baseUrl + minNum + '..' + maxNum + '?json')
multipleNumFacts
.then(data => { console.log(data)
    for (let i = minNum; i <= maxNum; i++) {
        console.log(data.data[i])
        let $item = `<p>${data.data[i]}</p>`
        $body.append($item)
    }
})

// Number 3
let sameNumFacts = axios.get(baseUrl + 9 + '?json');
sameNumFacts
.then(data => {
    console.log(data.data.text)
    let $numFacts = `<p>${data.data.text}</p>`
    $body.append($numFacts)
    return axios.get(baseUrl + 9 + '?json');
})
.then(data => {
    console.log(data.data.text)
    let $numFacts = `<p>${data.data.text}</p>`
    $body.append($numFacts)
    return axios.get(baseUrl + 9 + '?json');
})
.then(data => {
    console.log(data.data.text)
    let $numFacts = `<p>${data.data.text}</p>`
    $body.append($numFacts)
    return axios.get(baseUrl + 9 + '?json');
})
.then(data => {
    console.log(data.data.text)
    let $numFacts = `<p>${data.data.text}</p>`
    $body.append($numFacts)
})
.catch(err => console.log(err))