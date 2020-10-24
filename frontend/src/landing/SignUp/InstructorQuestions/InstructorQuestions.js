import React from 'react';

const InstructorQuesitons =  (props) => {
    return(
        <div>
            <h2>-- Additional questions for Instructors --</h2>
            <form>
                <h3>Check all that apply. Do you identify as:</h3>
                <label htmlFor="coach">Coach</label>
                <input className="checkboxLeft" type="checkbox" name="coach" id="coach" onChange={props.handleSelectIdentify}/><br/>
                
                <label htmlFor="teacher">Teacher</label>
                <input className="checkboxLeft" type="checkbox" name="teacher" id="teacher" onChange={props.handleSelectIdentify}/><br/>
                
                <label htmlFor="facilitator">Facilitator</label>
                <input className="checkboxLeft" type="checkbox" name="facilitator" id="facilitator" onChange={props.handleSelectIdentify}/><br/>

                <label htmlFor="other">Other: Please List:</label>
                <input type="text" name="other" id="otherInstructor" onChange={props.handleSelectIdentify}/><br/>
            </form>
            <form>
                <h3>What do you need U-Impactify for?</h3>
                <label htmlFor="choice1">Conduct Lessons Live</label>
                <input className="checkboxLeft" type="checkbox" name="choice1" id="choice1" onChange={props.handleSelectChoice}/><br/>
                
                <label htmlFor="choice2">Handle Administrative Tasks</label>
                <input className="checkboxLeft" type="checkbox" name="choice2" id="choice2" onChange={props.handleSelectChoice}/><br/>
                
                <label htmlFor="choice3">Plan my lessons and sessions</label>
                <input className="checkboxLeft" type="checkbox" name="choice3" id="choice3" onChange={props.handleSelectChoice}/><br/>
            </form>
        </div>
    )
}

export default InstructorQuesitons;