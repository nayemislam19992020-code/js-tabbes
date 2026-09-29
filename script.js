const header = document.querySelector('.header');

const details = document.querySelector('.details');

const headerArrow = Array.from(header.children);

const detailsArrow = Array.from(details.children);

headerArrow.forEach((hd, index) => {

    hd.addEventListener('click', () => {

        headerArrow.forEach((h, i) => {

            if (index === i) {

                // Active tab
                h.className = `
                    w-full text-center text-xl
                    font-bold cursor-pointer py-2
                    bg-gray-400
                    ${i !== headerArrow.length - 1 ? 'border-r' : ''}
                `;

                // Show active content
                detailsArrow[i].className = `
                    p-4 bg-gray-300 italic text-gray-600
                    transition-opacity duration-500 opacity-100
                `;

            } else {

                // Inactive tabs
                h.className = `
                    w-full text-center text-xl
                    border-b hover:bg-gray-400
                    cursor-pointer py-2
                    ${i !== headerArrow.length - 1 ? 'border-r' : ''}
                `;

                // Hide inactive content
                detailsArrow[i].className = `
                    p-4 bg-gray-300 italic text-gray-600
                    hidden opacity-0
                    transition-opacity duration-500
                `;

            }

        });

    });

});