// window.onload = () => {
//     function getEqualMinHeight(elements) {
//         let maxHeight = 0;

//         elements.forEach(element => {
//             let currentHeight = element.offsetHeight;
//             if (currentHeight > maxHeight) {
//                 maxHeight = currentHeight;
//             }
//         });

//         // Apply the maximum height as min-height to all elements
//         elements.forEach(element => {
//             element.style.height = maxHeight + "px";
//         });
//     }

//     let titles = document.querySelectorAll('.ser-title');
//     let texts = document.querySelectorAll('.ser-text');
//     getEqualMinHeight(titles);
//     getEqualMinHeight(texts);
// };

window.onload = () => {
    function getEqualMinHeight(elements) {
        let maxHeight = 0;

        elements.forEach(element => {
            let currentHeight = element.offsetHeight;
            if (currentHeight > maxHeight) {
                maxHeight = currentHeight;
            }
        });

        // Apply the maximum height as min-height to all elements
        elements.forEach(element => {
            element.style.minHeight = maxHeight + "px";  // ✅ Use 'minHeight' in camelCase
        });
    }

    let titles = document.querySelectorAll('.ser-title');
    let texts = document.querySelectorAll('.ser-text');
    getEqualMinHeight(titles);
    getEqualMinHeight(texts);
};


