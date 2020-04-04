import React from "react";

export default function SectionTitleCollapse(props) {
    return (
        <div
            className="sectionTitleToggler d-none d-md-flex"
            onClick={e => props.handleSectioTitleCollapse(e)}
        >
            <i className="fas fa-plus"></i>
        </div>
    );
}
