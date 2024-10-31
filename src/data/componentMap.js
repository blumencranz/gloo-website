// src/data/componentMap.js
import Needfinding from "../pages/process/Needfinding";
import AdditionalNeedfinding from "../pages/process/AdditionalNeedfinding";
import ConceptVideo from "../pages/process/ConceptVideo";
import LowFiPrototype from "../pages/process/LowFiPrototype";
import MedFiPrototype from "../pages/process/MedFiPrototype";

const componentMap = {
  needfinding: Needfinding,
  "additional-needfinding": AdditionalNeedfinding,
  "concept-video": ConceptVideo,
  "low-fi-prototype": LowFiPrototype,
  "med-fi-prototype": MedFiPrototype,
};

export default componentMap;
