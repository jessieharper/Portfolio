// import { motion } from "framer-motion";
// import { useEffect } from "react";

// const About = (): JSX.Element => {
//   useEffect(() => {
//     document.documentElement.classList.add("about");

//     return () => {
//       document.documentElement.classList.remove("about");
//     };
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="h-[500vh]"
//     >
//       <div className="h-[100vh] w-full flex items-center gap-40 -mt-24 md:-mt-28 container">
//         <div className="w-1/2 flex justify-center items-center">
//           <img
//             className="w-full h-full"
//             src="/images/suzuki.png"
//             alt="A Suzuki Carry Van"
//           />
//         </div>
//         <div className="max-w-[500px] w-1/2">
//           <h2 className="text-xl mb-8">About Me</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
//             molestiae officia mollitia! Molestias aliquid odio eveniet, ipsam
//             veniam deleniti qui!
//           </p>
//         </div>
//       </div>

//       <div className="h-[300vh] w-full flex items-center gap-40 -mt-24 md:-mt-28 relative">
//         <div className="w-3/4 mx-auto flex justify-center items-center">
//           <img className="w-full h-full" src="/images/ferns.png" alt="" />
//         </div>
//         <div className="absolute bottom-0">
//           <img className="w-full h-full" src="/images/clouds.png" alt="" />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default About;
