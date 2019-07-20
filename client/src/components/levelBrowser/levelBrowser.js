import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import RandomLevel from './randomLevel'
import Levels from "./levels";

function LevelBrowser() {
    const levelTypes = ["Auto","Kaizo","Multi","Music","Puzzle","Speedrun","Standard","Troll","UnoMas"];
    const levels = levelTypes.map((levelType) =>
        <Levels key={levelType.toString()}
                value={levelType}/>
    );

    return(
        <div>
            <h1>Random Level</h1>
            <RandomLevel/>
            <h2>Full Level Browser</h2>
            <Accordion defaultActiveKey="0">
                {levels}
            </Accordion>
        </div>
    );
}
export default LevelBrowser;

