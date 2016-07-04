import { handleActions } from 'redux-actions';
import { seedData } from '../seed-data';

const initialState = {
    headline: null,
    headlines: seedData
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
