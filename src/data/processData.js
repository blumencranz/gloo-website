import HeuristicEvaluation from "../pages/home/process/content/HeuristicEvaluation";
import AdditionalNeedfinding from "/src/pages/home/process/content/AdditionalNeedfinding";
import ConceptVideo from "/src/pages/home/process/content/ConceptVideo";
import LowFiPrototype from "/src/pages/home/process/content/LowFiPrototype";
import MedFiPrototype from "/src/pages/home/process/content/MedFiPrototype";
import Needfinding from "/src/pages/home/process/content/Needfinding";

// src/data/processData.js
const processData = {
  needfinding: {
    id: "needfinding",
    title: "Needfinding",
    splash: "Getting out into the world.",
    icon: "🔍",
    disabled: false,
    component: Needfinding,
  },
  "additional-needfinding": {
    id: "additional-needfinding",
    title: "Additional Needfinding",
    splash: "Further exploration into needfinding.",
    icon: "🔍",
    disabled: false,
    component: AdditionalNeedfinding,
  },
  "concept-video": {
    id: "concept-video",
    title: "Concept Video",
    splash: "Create a video to explain your concept.",
    icon: "🎥",
    disabled: false,
    component: ConceptVideo,
  },
  "low-fi-prototype": {
    id: "low-fi-prototype",
    title: "Low-Fi Prototype",
    splash: "Build a low-fidelity prototype.",
    icon: "📐",
    disabled: false,
    component: LowFiPrototype,
  },
  "med-fi-prototype": {
    id: "med-fi-prototype",
    title: "Med-Fi Prototype",
    splash: "Build a medium-fidelity prototype.",
    icon: "📏",
    disabled: false,
    component: MedFiPrototype,
  },
  "hi-fi-prototype": {
    id: "hi-fi-prototype",
    title: "Hi-Fi Prototype",
    splash: "Build a high-fidelity prototype.",
    icon: "🖌️",
    disabled: true,
  },
  "heuristic-evaluation": {
    id: "heuristic-evaluation",
    title: "Heuristic Evaluation",
    splash: "Evaluate your design using heuristics.",
    icon: "🔍",
    disabled: false,
    component: HeuristicEvaluation,
  },
  "poster-pitch-demo": {
    id: "poster-pitch-demo",
    title: "Poster Pitch Demo",
    splash: "Present your project with a poster and demo.",
    icon: "🖼️",
    disabled: true,
  },
  "final-report": {
    id: "final-report",
    title: "Final Report",
    splash: "Compile your work into a final report.",
    icon: "📄",
    disabled: true,
  },
};

export default processData;
