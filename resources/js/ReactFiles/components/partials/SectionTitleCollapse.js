import React from "react";

export default function SectionTitleCollapse(props) {
    return (
        <div
            className="sectionTitleToggler"
            onClick={e => props.handleSectioTitleCollapse(e)}
        >
            <i className="fas fa-plus"></i>
        </div>
    );
}
