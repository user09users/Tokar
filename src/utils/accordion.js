// Instead of wrapping content with a div having contentClass
// Just clone content and add the className dynamically

import React from "react";

const Accordion = ({ items, blockClass, headerClass, contentClass, subtitleClass }) => {
    const [openIndices, setOpenIndices] = React.useState(new Set());

    const toggleIndex = (index) => {
        const newOpen = new Set(openIndices);
        if (newOpen.has(index)) {
            newOpen.delete(index);
        } else {
            newOpen.add(index);
        }
        setOpenIndices(newOpen);
    };

    return (
        <div>
            {items.map(({ header, content, subtitle }, i) => {
                // Clone the content element, add active class if open
                const contentWithClass = React.cloneElement(
                    content,
                    {
                        className: `${content.props.className} ${openIndices.has(i) ? "active" : ""
                            }`,
                    }
                );

                return (
                    <div
                        key={i}
                        className={`${blockClass} ${openIndices.has(i) ? "active" : ""}`}
                    >
                        <div
                            className={`${headerClass} ${openIndices.has(i) ? "active" : ""
                                }`}
                            onClick={() => toggleIndex(i)}
                        >
                            {header}
                        </div>
                        {subtitle && (
                            <div
                                className={`${subtitleClass} ${openIndices.has(i) ? "active" : ""
                                    }`}
                            >
                                {subtitle}
                            </div>
                        )}
                        {contentWithClass}
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;
