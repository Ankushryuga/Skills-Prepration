// import React, {Suspense} from "react";
// import Header from "./header";
// import Footer from "./footer";
// import Contents from "./content";

// const Layout:React.FC=()=>{
//     const loadingHeader=()=>(
//         <div className="h-full w-full flex items-center justify-center border-b bg-white shadow-sm text-gray-600 text-sm">
//             Loading...
//         </div>
//     )

//     return (
//         <div className="relative h-screen overflow-hidden">
//             <div className="absolute w-full">
//                 <div className="flex justify-end sm:justify-start items-center p-4 m-4 md:m-8">
//             <Header />
//             </div>
//             </div>
//             <div className={`absolute top-14 bottom-12 right-0 h-full w-full overflow-y-auto px-4 py-4 transition-all duration-300`}>
//             {/* <Suspense fallback={loadingHeader()}> */}
//             <Contents />
//             {/* </Suspense> */}
//             </div>
//             <div className={`fixed bottom-0 left-0 right-0 z-10`}>
//             <Footer />
//             </div>
//         </div>
//     )
// }
// export default Layout;


import React from "react";
import Header from "./header";
import Footer from "./footer";
import Contents from "./content";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto px-4">
        <Contents />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
