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
                'carnage as people riot over depleted stocks of Parmesan',
                'cancer'
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
                'punches the Queen'
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
