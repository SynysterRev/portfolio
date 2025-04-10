import GradientText from "./GradientText";
import htmlIcon from "../assets/icons/html-icon.svg";
import cssIcon from "../assets/icons/css-icon.svg";
import jsIcon from "../assets/icons/javascript-icon.svg";
import reactIcon from "../assets/icons/react-icon.svg";
import tailwindIcon from "../assets/icons/tailwind-icon.svg";
import angularIcon from "../assets/icons/angular-icon.svg";
import pythonIcon from "../assets/icons/python-icon.svg";
import cSharpIcon from "../assets/icons/c-sharp-icon.svg";
import cPPIcon from "../assets/icons/cpp-icon.svg";
import netCoreIcon from "../assets/icons/net-core-icon.svg";
import gitIcon from "../assets/icons/git-icon.svg";
import djangoIcon from "../assets/icons/django-icon.svg";
import sqlIcon from "../assets/icons/sql-icon.svg";
import unityIcon from "../assets/icons/unity-icon.png";
import unrealIcon from "../assets/icons/unreal-icon.png";

export default function Skills() {
  return (
    <div className="flex justify-center items-center flex-col mt-30">
      <GradientText text="Skills" />
      <p className="text-xl">Tools and technologies I use:</p>
      <div className="flex gap-10 my-14">
        <img src={htmlIcon} alt="HTML icon" className="w-16 h-16"></img>
        <img src={cssIcon} alt="CSS icon" className="w-16 h-16"></img>
        <img src={jsIcon} alt="JavaScript icon" className="w-16 h-16"></img>
        <img src={reactIcon} alt="React icon" className="w-16 h-16"></img>
        <img src={tailwindIcon} alt="Tailwind icon" className="w-16 h-16"></img>
        <img src={angularIcon} alt="Angular icon" className="w-16 h-16"></img>
      </div>
      <div className="flex gap-10 my-14 justify-self-start">
        <img src={pythonIcon} alt="Python icon" className="w-16 h-16"></img>
        <img src={cSharpIcon} alt="C# icon" className="w-16 h-16"></img>
        <img src={cPPIcon} alt="C++ icon" className="w-16 h-16"></img>
        <img src={netCoreIcon} alt="Asp Net Core icon" className="w-16 h-16"></img>
        <img src={gitIcon} alt="Git icon" className="w-16 h-16"></img>
        <img src={djangoIcon} alt="Django icon" className="w-16 h-16"></img>
        <img src={sqlIcon} alt="SQL icon" className="w-16 h-16"></img>
      </div>
      <div className="flex gap-10 my-14">
        <img src={unityIcon} alt="Unity icon" className="w-16 h-16"></img>
        <img src={unrealIcon} alt="Unreal icon" className="w-16 h-16"></img>
      </div>
    </div>
  );
}