import React from 'react';

const Home=React.lazy(()=>import('../components/home/home'));
const AboutMe=React.lazy(()=>import("../components/about/aboutMe"));
const MyProjects=React.lazy(()=>import("../components/projects/project"));
const MyExperience=React.lazy(()=>import("../components/experience/experienceTimeline"));


const routes=[
    {path:'/home', exact:true, name:'Home', component:Home},
    {path:'/aboutme', exact:true, name:'About me', component:AboutMe},
    {path:'/myprojects', exact:true, name:'My Projects', component:MyProjects},
    {path:'/myexperiences', exact:true, name:'My Experiences', component:MyExperience}
];

export default routes;
