const express = require('express');

const app = express();

//Standard ID = 1
app.get('/api/StandardLevels', (req, res) => {
    const levels = [
        {
            "course_id": "123-123-123",
            "title": "Canadian Blues",
            "user":{
                "userName": "BinaryChaosTV"
            },
        },
        {
            "course_id": "234-123-423",
            "title": "Get DUUUUUUUU",
            "user":{
                "userName": "TeddyBearKisses"
            },
        },
        {
            "course_id": "234-123-423",
            "title": "Baked Beans To Live",
            "user":{
                "userName": "FrostBytes"
            },
        },
    ];

    res.json(levels);
});

// puzzle ID 2
app.get('/api/PuzzleLevels', (req, res) => {
    const levels = [
        {
            "course_id": "234-123-423",
            "title": "Puzzle Castle Infinity",
            "user":{
                "userName": "LilithSM"
            },
        },
    ];

    res.json(levels);
});

//Speedrun ID = 3
app.get('/api/SpeedrunLevels', (req, res) => {
    const levels = [
        {
            "course_id": "234-123-423",
            "title": "GrizzRekt 4 Days",
            "user":{
                "userName": "Grizzlage"
            },
        },
        {
            "course_id": "234-123-423",
            "title": "Sub To AverageGhost",
            "user":{
                "userName": "AverageGhost"
            },
        },
    ];

    res.json(levels);
});

// Auto ID 4
app.get('/api/AutoLevels', (req, res) => {
    const levels = [
        {
            "course_id": "234-123-423",
            "title": "Quack",
            "user":{
                "userName": "PharmGurl"
            },
        },
    ];

    res.json(levels);
});

//UnoMas ID = 5
app.get('/api/UnoMasLevels', (req, res) => {
    const levels = [
        {
            "course_id": "234-123-423",
            "title": "A Clever Title",
            "user":{
                "userName": "Robraf"
            },
        },
        {
            "course_id": "234-123-423",
            "title": "FREE-F",
            "user":{
                "userName": "Foggles"
            },
        },
    ];

    res.json(levels);
});

// Multi ID 6
app.get('/api/MultiLevels', (req, res) => {
    const levels = [
        {
            "course_id": "234-123-423",
            "title": "2 Sheilas 1 Controller",
            "user":{
                "userName": "FreakAndGeek"
            },
        },
    ];

    res.json(levels);
});

// Music ID 7
app.get('/api/MusicLevels', (req, res) => {
    const levels = [
        {
            "course_id": "234-123-423",
            "title": "Fur Elizabeth",
            "user":{
                "userName": "Composer"
            },
        },
    ];

    res.json(levels);
});

//Troll ID = 8
app.get('/api/TrollLevels', (req, res) => {
    const levels = [
        {
            "course_id": "234-123-423",
            "title": "Absolute Trash:  The Definitive Edition",
            "user":{
                "userName": "Defender1031"
            },
        },
        {
            "course_id": "234-123-423",
            "title": "PooStompSim",
            "user":{
                "userName": "Potatochan"
            },
        },
    ];

    res.json(levels);
});

// Kaizo ID 9
app.get('/api/KaizoLevels', (req, res) => {
    const levels = [
        {
            "course_id": "123-123-123",
            "title": "P Break",
            "user":{
                "userName": "Panga"
            },
        },
        {
            "course_id": "234-123-423",
            "title": "Best Lever",
            "user":{
                "userName": "SonoMore"
            },
        },
        {
            "course_id": "234-123-423",
            "title": "Kaizo Khaos",
            "user":{
                "userName": "DefyByDefault"
            },
        },
    ];

    res.json(levels);
});

const port = 5000;

app.listen(port, () => console.log(`Server start on port ${port}`));
