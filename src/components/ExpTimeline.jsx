import React from 'react';

const ExperienceTimeline = ({ experiences }) => {
    return (
        <div className="timeline">
            {experiences.map((experience, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-content">
                        <div className="card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                <div className="row align-items-center">
                                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div className="bg-light p-4 rounded-4">
                                            <div className="text-primary fw-bolder mb-2">{experience.date}</div>
                                            <div className="small fw-bolder">{experience.title}</div>
                                            <div className="small text-muted">{experience.company}</div>
                                            <div className="small text-muted">{experience.location}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div>{experience.description}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceTimeline;
