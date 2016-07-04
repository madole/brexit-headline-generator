import { handleActions } from 'redux-actions';

const initialState = {
    headline: null,
    headlines: [
        {
            start: 'Brexit causes ',
            endings: [
                'man\'s hat to fall off',
                'a skunk to mate with a squirrel',
                'NHS to employ AI bots to clean toilets',
                'falafel shop to start selling sausage rolls',
                'Borris to change his name to Norris',
                'Nigel Farage to get face transplant with a worm',
                'David Cameron to say "Fuck it all, I\'m moving to Spain"',
                '8 years of rain',
                'carnage as people riot over depleted stocks of parmesan',
                'cancer',
                'value of english crumpets to plummet'
            ]
        },
        {
            start: 'Borris Johnson ',
            endings: [
                'changes name to Norris',
                'caught in Trump wig-swap scandal',
                'gets penis caught in zipper during public address',
                'banned from Europe',
                'performs another political U-turn to announce candidacy for Labour leader',
                'admits Brexit was all just a joke that got out of hand',
                'spotted in nightclub in Magaluf',
                'was born a newt',
                'punches the Queen',
                'found in a wheely bin covered in kebab sauce'
            ]
        }, {
            start: 'Michael Gove ',
            endings: [
                'is a meat puppet',
                'malfunctions in press conference',
                'admits lacking carisma, style and opposable thumbs',
                'sucks his thumb at night',
                'is laboratory experiment gone wrong',
                'admits finding Borris\' TAKE OVER UK plans and saves them for himself',
                'is a selfless saviour offering himself up for PM',
                'will miss his beloved dutch clogs when we leave the EU',
                'once sold his gran on eBay'
            ]
        }, {
            start: 'Nigel Farage',
            endings: [
                'quits UKIP to start German beer brewing',
                'smashes the country to the ground then walks away',
                'announces civil partnership with Norris(formerly Borris)',
                'to start transitioning to become a female',
                'joins The Sun and chief editor after garden party talks'
            ]
        }
    ]
};

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
}

export default handleActions({
    'get random headline'(state) {
        const headlines = state.headlines;
        const { start, endings } = headlines[getRandomNumber(headlines.length)];
        const randomEnding = endings[getRandomNumber(endings.length)];

        return {
            headline: `${start}${randomEnding}`,
            headlines: state.headlines
        };
    }
}, initialState);
