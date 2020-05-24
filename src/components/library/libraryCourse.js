import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {/* Icon component */}
                {/* Arrow component */}
                {/* ACtion button component */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales, odio non mollis lacinia, lorem nulla suscipit libero, quis viverra magna nunc a urna. Donec sit amet vestibulum magna, non auctor magna.</p>
                </div>
            </div>
        )
    }      
}

export default LibraryCourse;