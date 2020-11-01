import React from 'react';
import './CourseCard.css';

import {
    Link
} from "react-router-dom";
  


function CourseCard(props) {
    const link = `/courses/${props.course.id}`
    return (
        <Link to={link}>
            <div className="course-card">
                <div id="instructor">{props.course.instructor}</div>
                <div><h2>{props.course.name}</h2></div>
                <div><blockquote>{props.course.objective}</blockquote></div>
            </div>
        </Link>
    )
}

export default CourseCard;