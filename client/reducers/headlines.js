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
                'falafel shops to boom as people misunderstand the boundaries of Europe',
                'Boris to change his name to Noris',
                'Nigel Farage to get face transplant with a worm',
                '8 years of rain',
                'carnage as people riot over depleted stocks of parmesan',
                'cancer',
                'value of english crumpets to plummet'
            ]
        },
        {
            start: 'Boris Johnson ',
            endings: [
                'changes name to Norris',
                'caught in Trump wig-swap scandal',
                'gets penis caught in zipper during public address',
                'banned from Europe',
                'performs another political U-turn to announce candidacy for Labour leader',
                'admits Brexit was all just a joke that got out of hand',
                'spotted in nightclub in Magaluf',
                'was born a newt',
                'punches the Queen over corgi/pomeranian spat',
                'found in a wheely bin covered in kebab sauce',
                'invited to garden party around a flaming bin under a bridge'
            ]
        }, {
            start: 'Michael Gove ',
            endings: [
                'is a meat puppet',
                'malfunctions in press conference',
                'admits lacking carisma, style and opposable thumbs',
                'sucks his thumb at night',
                'is laboratory experiment gone wrong',
                'admits finding Boris\' TAKE OVER UK plans and saves them for himself',
                'is a selfless saviour offering himself up for PM',
                'will miss his beloved dutch clogs when we leave the EU',
                'once sold his gran on eBay',
                'has had enough of experts'
            ]
        }, {
            start: 'Nigel Farage ',
            endings: [
                'quits UKIP to start German beer brewing',
                'smashes the country to the ground then walks away',
                'announces civil partnership with Noris (formerly Boris)',
                'to start transitioning to become a female lizard',
                'to spend holiday in sunny south of France',
                'resigns as he\'s achieved "political ambition" of removing the UK from Earth',
                'is a comedy character based on Mr Bean'
            ]
        }, {
            start: 'UKIP ',
            endings: [
                'turn their focus to helping scotland achieve independence',
                'pray to Saint Patrick to get rid of all the snakes slithering towards party leadership bids',
                'turns out to be an elaborate social experiment'
            ]
        }, {
            start: 'David Cameron ',
            endings: [
                'seen on the Thames steadying a ship',
                'heard saying "Fuck it all, I\'m moving to Spain"'
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
