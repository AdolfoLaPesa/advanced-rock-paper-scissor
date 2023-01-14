

const MAPPING = {
    rock: {
        rock: 0,
        paper: -1,
        scissor: 1
    },
    paper: {
        rock: 1,
        paper: 0,
        scissor: -1,
    },
    scissor: {
        rock: -1,
        paper: 1,
        scissor: 0,
    }
};

module.exports = MAPPING;