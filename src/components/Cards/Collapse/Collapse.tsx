// import { useEffect, useRef, useState } from "react";

// interface Props {
//   toggleAccordion: boolean;
//   children: React.ReactNode;
// }
// const Accordion = ({ toggleAccordion, children }: Props) => {
//   const [height, setHeight] = useState("0px");
//   const content = useRef(null);
//   useEffect(() => {
//     setHeight(toggleAccordion ? ${content.current.scrollHeight}px : "0px");
//   }, [toggleAccordion]);
//   return (
//     <div
//       ref={content}
//       sx={{
//         maxHeight: height,
//         overflow: "hidden",
//         transition: "max-height 0.6s ease",
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export default Accordion;
