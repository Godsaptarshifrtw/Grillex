
// interface IProps<T> {
//     original_list : T;
    
// }


// export const generateListForSlider = () => {
//     if (window.innerWidth < 639) {
//         const newList: TestimonialType[][] = [];
//         testimonials.forEach((eachItem) => {
//           newList.push([eachItem]);
//         });
//         setServicesList(newList);
//       } else {
//         const newList: TestimonialType[][] = [];
//         let count = 0;
//         testimonials.forEach((eachItem, index) => {
//           if (!newList[count]) {
//             newList[count] = [eachItem];
//           } else {
//             newList[count].push(eachItem);
//           }
//           if ((index + 1) % 3 === 0) {
//             count++;
//           }
//         });
//         setServicesList(newList);
//       }
// }