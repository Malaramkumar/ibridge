import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Nar_Home';
import MainHome from "./components/MainHome";
import IndustrySkills from './components/IndustrySkills';
import HomeSlide2 from './components/MainHomeSlide/Home_slide2';
import HomeSlide3 from './components/MainHomeSlide/HomeSlide3';

import AllCourses from './components/AllCourses';
import Resources from './components/CourseSyllabus';
import CourseHighlights from './pages/CourseHighlights';
import UpcomingBatches from './pages/UpcomingBatches';
import FaqSection from './pages/FaqSection';
import Introduction from './Module/CoreModule/Introduction';
import JavaEnvironment from './Module/CoreModule/JavaEnvironment';
import FundamentalsOfJava from './Module/CoreModule/FundamentalsOfJava';
import ControlStructures from './Module/CoreModule/ControlStructures';
import InputFundamentals from './Module/CoreModule/InputFundamentals';
import ObjectOrientedProgramming from './Module/CoreModule/ObjectOrientedProgramming';
import CommandLineArguments from './Module/CoreModule/CommandLineArguments';
import IntegratedDevelopmentEnvironment from './Module/CoreModule/IntegratedDevelopmentEnvironment';
import InnerClass from './Module/CoreModule/InnerClass';
import Inheritance from './Module/CoreModule/Inheritance';
import AbstractClassesAndInheritance from './Module/CoreModule/AbstractClassesAndInheritance';
import Polymorphism from './Module/CoreModule/Polymorphism';
import Package from './Module/CoreModule/Package';
import PredefinedPackageAndClasses from './Module/CoreModule/PredefinedPackageAndClasses';
import NewConceptsInPackage from './Module/CoreModule/NewConceptsInPackage';
import GarbageCollection from './Module/CoreModule/GarbageCollection';
import ExceptionHandling from './Module/CoreModule/ExceptionHandling';
import Multithreading from './Module/CoreModule/Multithreading';
import InputAndOutput from './Module/CoreModule/InputAndOutput';
import Serialization from './Module/CoreModule/Serialization';
import CollectionFramework from './Module/CoreModule/CollectionFramework';
import JavaFeatures from './Module/CoreModule/JavaFeatures';
import JDBC from './Module/AdvancedModule/JDBC'; 
import Jsp from './Module/AdvancedModule/JSP';
import Servlet from './Module/AdvancedModule/Servlet'; 
import ConcurrentAndCollectionImplementation from './Module/AdvancedModule/ConcurrentAndCollectionImplementation';
import AdvancedMultithreading from './Module/AdvancedModule/AdvancedMultithreading'; 
import JavaMailAPI from './Module/AdvancedModule/JavaMailAPI'; 
import DesignPatterns from './Module/AdvancedModule/DesignPatterns';
import JUnitModule from './Module/AdvancedModule/JUnitModule';
import Maven from './Module/AdvancedModule/Maven'; 
import ProjectGuidance from './Module/AdvancedModule/ProjectGuidance';

import CoreJavaChennai from './RightSideBar/CoreJavaChennai';
import AdvancedFullStackJava from './RightSideBar/AdvancedFullStackJava';
import JavaSpringMicroservices from "./RightSideBar/JavaSpringMicroservices";
import JavaSeleniumTraining from "./RightSideBar/JavaSeleniumTraining";
import FullStackSeleniumIntro from "./RightSideBar/FullStackSeleniumIntro";
import ScrollToTop from './components/ScrollToTop';

import Blog from './pages/StudentZone/Blog';
import Internship from './pages/StudentZone/Internship';
import Tutorials from './pages/StudentZone/Tutorials';
import VideoReviews from './pages/StudentZone/VideoReviews';
import OnlineTrainingReviews from './pages/StudentZone/OnlineTrainingReviews';
import Reviews from './pages/StudentZone/Reviews';
import InterviewQuestions from './pages/StudentZone/InterviewQuestions';
import OnlineTraining from './pages/StudentZone/OnlineTraining';
import PlacedStudents from './pages/StudentZone/PlacedStudents';
import GSTInvoice from './pages/StudentZone/GSTInvoice';

import AwsHeroSection from './FooterCourse/Aws'; 
import PythonHeroSection from './FooterCourse/Python';
import DevopsHeroSection from './FooterCourse/Devops'; 
import SeleniumHeroSection from './FooterCourse/Selenium';
import FullStackHeroSection from './FooterCourse/FullStack';
import DataSciencePython from './FooterCourse/DataSciencePython';
import MachineLearningHeroSection from './FooterCourse/MachineLearning';
import PowerBiHeroSection from './FooterCourse/power-bi'; 
import AzureHeroSection from './FooterCourse/Azure';
import AiHeroSection from './FooterCourse/AI';
import DotNetHeroSection from './FooterCourse/DotNet';
import AndroidHeroSection from './FooterCourse/Android';
import DevWebHeroSection from './FooterCourse/WebDev';
import CloudHeroSection from './FooterCourse/Cloud';
import RproHeroSection from './FooterCourse/Rpro';
import MobileAppHeroSection from './FooterCourse/MobileApp';
import DmHeroSection from './FooterCourse/Dm'; 
import UiUxHeroSection from './FooterCourse/UiUx';
import AllPrograms from './components/AllPrograms';


import About from './Company/About';
import Contact from './Company/Contact';
import Services from './Company/Services';
import CorporateTraining from './Company/CorporateTraining';
import CareersPage from './Company/CareersPage';
import Footer from './components/Footer';

import ICAPPage from './components/ICAPPage';
import Slideshow from './components/Demo';

//Transforming Rural
 import IBridgeUpskilling1 from './components/TransformingRural/TransformingRuralPeople';
 import SchoolProgram from './components/TransformingRural/ShapingFuture';
// 5 nation
import IBridgeAdvantage from './components/Nation/IBridgeAdvantage'; 
import ICAP from './components/Nation/Icap';
import ExpertLedTraining from './components/Nation/ExpertLed';
import LearnOnline from './components/Nation/LearnOnline';
import ConnectOffline from './components/Nation/ConnectOffline';
import FeeStructure from './components/Nation/Feestructure';
import GraduationSkills from './components/Nation/GraduationSkills';
import Syllabus from "./components/Syllabus"
import RuralUpskilling from './components/Rural/RuralUpskilling';
import SchoolSkills from './components/Rural/SchoolSkills';
import EarlySkillDevelopment from './components/Rural/EarlySkillDevelopment';
import FlipCard from './components/FlipCard';
import IbridgeHome from './components/IbridgeHome';

function App() {
  return (
    <Router>
       
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IbridgeHome />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/industry-skills" element={<IndustrySkills />} />

        <Route path="/courses" element={<AllCourses />} />
        <Route path="/resourses" element={<Resources />} />
        <Route path="/section/course-highlights" element={<CourseHighlights />} />
        <Route path="/section/upcoming-batches" element={<UpcomingBatches />} />
        <Route path="/section/faq" element={<FaqSection />} />
        
        {/* Add more routes as needed */}
        <Route path="/modules/Introduction" element={<Introduction />} />
        <Route path="/modules/java-environment" element={<JavaEnvironment />} />
        <Route path="/modules/fundamentals-of-java" element={<FundamentalsOfJava />} />
        <Route path="/modules/control-structures" element={<ControlStructures />} />
        <Route path="/modules/input-fundamentals" element={<InputFundamentals />} />
        <Route path="/modules/object-oriented-programming" element={<ObjectOrientedProgramming />} />
        <Route path="/modules/command-line-arguments" element={<CommandLineArguments />} />
        <Route path="/modules/integrated-development-environment" element={<IntegratedDevelopmentEnvironment />} />
        <Route path="/modules/inner-class" element={<InnerClass />} />
        <Route path="/modules/inheritance" element={<Inheritance />} />
        <Route path="/modules/abstract-classes-and-inheritance" element={<AbstractClassesAndInheritance />} />
        <Route path="/modules/polymorphism" element={<Polymorphism />} />  
        <Route path="/modules/package" element={<Package />} />
        <Route path="/modules/predefined-package-and-classes" element={<PredefinedPackageAndClasses />} />
        <Route path="/modules/new-concepts-in-package" element={<NewConceptsInPackage />} />
        <Route path="/modules/garbage-collection" element={<GarbageCollection />} />
        <Route path="/modules/exception-handling" element={<ExceptionHandling />} />
        <Route path="/modules/multithreading" element={<Multithreading />} />
        <Route path="/modules/input-and-output" element={<InputAndOutput />} />
        <Route path="/modules/serialization" element={<Serialization />} />
        <Route path="/modules/collection-framework" element={<CollectionFramework />} />
        <Route path="/modules/javafeatures" element={<JavaFeatures />} />

        <Route path="/modules/jdbc" element={<JDBC />} />
        <Route path="/modules/jsp" element={<Jsp />} />
        <Route path="/modules/servlet" element={<Servlet />} />
        <Route path="/modules/concurrent-and-collection-implementation" element={<ConcurrentAndCollectionImplementation />} />
        <Route path="/modules/advanced-multithreading" element={<AdvancedMultithreading />} />
        <Route path="/modules/javamail-api" element={<JavaMailAPI />} />
        <Route path="/modules/design-patterns" element={<DesignPatterns />} />
        <Route path="/modules/junit" element={<JUnitModule />} />
        <Route path="/modules/maven" element={<Maven />} />
        <Route path="/modules/project-guidance" element={<ProjectGuidance />} />
               
        {/* ✅ Add more modules here... */}
        <Route path="/core-java-chennai" element={<CoreJavaChennai />} />
        <Route path="/advanced-fullstack-java" element={<AdvancedFullStackJava />} />
        <Route path="/spring-microservices" element={<JavaSpringMicroservices />} />
        <Route path="/java-selenium-training" element={<JavaSeleniumTraining />} />
        <Route path="/fullstack-selenium" element={<FullStackSeleniumIntro />} />
        {/* Add more routes as needed */}
              

      <Route path="/blog" element={<Blog />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="/tutorials" element={<Tutorials />} />
      <Route path="/video-reviews" element={<VideoReviews />} />
      <Route path="/online-training-reviews" element={<OnlineTrainingReviews />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/interview-questions" element={<InterviewQuestions />} />
      <Route path="/online-training" element={<OnlineTraining />} />
      <Route path="/placed-students" element={<PlacedStudents />} />
      <Route path="/gst-invoice" element={<GSTInvoice />} />


      {/* Footer Course Routes */}
      <Route path="/footerCourse/aws" element={<AwsHeroSection />} />
      <Route path="/footerCourse/python" element={<PythonHeroSection />} />
      <Route path="/footerCourse/devops" element={<DevopsHeroSection />} />
      <Route path="/footerCourse/selenium" element={<SeleniumHeroSection />} />
      <Route path="/footerCourse/fullstack" element={<FullStackHeroSection />} />
      <Route path="/footerCourse/data-science-python" element={<DataSciencePython />} />
      <Route path="/footerCourse/machine-learning" element={<MachineLearningHeroSection />} />
      <Route path="/footerCourse/power-bi" element={<PowerBiHeroSection />} />
      <Route path="/footerCourse/azure" element={<AzureHeroSection />} />
      <Route path="/footerCourse/ai" element={<AiHeroSection />} />
      <Route path="/footerCourse/dotnet" element={<DotNetHeroSection />} />
      <Route path="/FooterCourse/android" element={<AndroidHeroSection />} />
      <Route path="/FooterCourse/webdev" element={<DevWebHeroSection />} />
      <Route path="/FooterCourse/cloud" element={<CloudHeroSection />} />
      <Route path="/FooterCourse/r" element={<RproHeroSection />} />
      <Route path="/FooterCourse/dm" element={<DmHeroSection />} />
      <Route path="/FooterCourse/mobileapp" element={<MobileAppHeroSection />} />
      <Route path="/MobileApp" element={<MobileAppHeroSection />} />
      <Route path="/FooterCourse/uiux" element={<UiUxHeroSection />} />
      <Route path="/components/AllPrograms" element={<AllPrograms />} />

      {/* Footer company */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/corporate-training" element={<CorporateTraining />} />
      <Route path="/careers" element={<CareersPage />} />
    
      {/* Add more routes as needed */}
      <Route path="/icap" element={<ICAPPage />} />
      <Route path="/HomeSlide2" element={<HomeSlide2 />} />
      <Route path="/HomeSlide3" element={<HomeSlide3 />} />
      <Route path="/s" element={<Slideshow />} />


      <Route path="/t1" element={<IBridgeUpskilling1 />} />
      <Route path="/t2" element={<SchoolProgram />} />

      {/* 5 nation */}
      <Route path="/5-1" element={<IBridgeAdvantage />} />
      <Route path="/5-2" element={<ICAP />} />
      <Route path="/5-3" element={<ExpertLedTraining />} />
      <Route path="/5-4" element={<LearnOnline />} />
      <Route path="/5-5" element={<ConnectOffline />} />
      <Route path="/5-7" element={<FeeStructure />} />
      <Route path="/5-6" element={<GraduationSkills />} />
      {/* rural */}
        <Route path="/6-1" element={<RuralUpskilling />} />
        <Route path="/6-2" element={<SchoolSkills />} />
        <Route path="/6-3" element={<EarlySkillDevelopment />} />



      
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/f" element={<FlipCard />} />
      


       
       {/* Add more routes as needed */}

      {/* Add more routes as needed */}

       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
