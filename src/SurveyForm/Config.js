import Welcome from "./pages/Welcome";
import CurrentSituation from "./pages/CurrentSituation";
import DescriptionOfProblem from "./pages/DescriptionOfProblem";
import CurrentSolution from "./pages/CurrentSolution";
import LimitationsOfCurrentSolution from "./pages/LimitationsOfCurrentSolution";
import Solution from "./pages/Solution";
import HowDoYouThinkItShouldBe from "./pages/HowDoYouThinkItShouldBe";
import Approach from "./pages/Approach";
import PeopleWithThisProblem from "./pages/PeopleWithThisProblem";
import ProblemFrequency from "./pages/ProblemFrequency";
import GrowSpeedOfProblem from "./pages/GrowSpeedOfProblem";
import WhatImportant from "./pages/WhatImportant";
import Goals from "./pages/Goals";
import ImportantAspect1 from "./pages/ImportantAspect1";
import ImportantAspect2 from "./pages/ImportantAspect2";
import ImportantAspect3 from "./pages/ImportantAspect3";
import AlternativeSolution from "./pages/AlternativeSolution";
import Solutions from "./pages/Solutions";
import DiagramPage from "./pages/DiagramPage";
import AboutYou from "./pages/AboutYou";
import Motivation from "./pages/Motivation";
import TheFuture from "./pages/TheFuture";
import Dealbreakers from "./pages/Dealbreakers";
import ThankYou from "./pages/ThankYou";

const config = [
  {
    name: "welcome",
    page: Welcome,
    getNextPage: () => {
      return "currentSituation";
    }
  },
  {
    name: "currentSituation",
    page: CurrentSituation,
    getNextPage: () => {
      return "descriptionOfProblem";
    },
    getPreviousPage: () => {
      return "currentSituation";
    }
  },
  {
    name: "descriptionOfProblem",
    page: DescriptionOfProblem,
    isCountable: true,
    hasFocusableItems: true,
    getNextPage: () => {
      return "currentSolution";
    },
    getPreviousPage: () => {
      return "currentSituation";
    }
  },
  {
    name: "currentSolution",
    page: CurrentSolution,
    isCountable: true,
    hasFocusableItems: true,
    getNextPage: () => {
      return "limitationsOfCurrentSolution";
    },
    getPreviousPage: () => {
      return "descriptionOfProblem";
    }
  },
  {
    name: "limitationsOfCurrentSolution",
    page: LimitationsOfCurrentSolution,
    isCountable: true,
    hasFocusableItems: true,
    getNextPage: () => {
      return "solution";
    },
    getPreviousPage: () => {
      return "currentSolution";
    }
  },
  {
    name: "solution",
    page: Solution,
    isCountable: true,
    getNextPage: form => {
      const { getFieldValue } = form;
      if (getFieldValue("solution") === "Yes") {
        return "howDoYouThinkItShouldBe";
      } else {
        return "peopleWithThisProblem";
      }
    },
    getPreviousPage: () => {
      return "limitationsOfCurrentSolution";
    }
  },
  {
    name: "howDoYouThinkItShouldBe",
    page: HowDoYouThinkItShouldBe,
    isCountable: true,
    hasFocusableItems: true,
    getNextPage: () => {
      return "approach";
    },
    getPreviousPage: () => {
      return "solution";
    }
  },
  {
    name: "approach",
    page: Approach,
    isCountable: true,
    hasFocusableItems: true,
    getNextPage: () => {
      return "peopleWithThisProblem";
    },
    getPreviousPage: () => {
      return "howDoYouThinkItShouldBe";
    }
  },
  {
    name: "peopleWithThisProblem",
    page: PeopleWithThisProblem,
    isCountable: true,
    getNextPage: () => {
      return "problemFrequency";
    },
    getPreviousPage: form => {
      const { getFieldValue } = form;
      if (getFieldValue("solution") === "Yes") {
        return "approach";
      } else {
        return "solution";
      }
    }
  },
  {
    name: "problemFrequency",
    page: ProblemFrequency,
    isCountable: true,
    getNextPage: () => {
      return "growSpeedOfProblem";
    },
    getPreviousPage: () => {
      return "peopleWithThisProblem";
    }
  },
  {
    name: "growSpeedOfProblem",
    page: GrowSpeedOfProblem,
    isCountable: true,
    getNextPage: () => {
      return "whatImportant";
    },
    getPreviousPage: () => {
      return "problemFrequency";
    }
  },
  {
    name: "whatImportant",
    page: WhatImportant,
    getNextPage: () => {
      return "goals";
    },
    getPreviousPage: () => {
      return "growSpeedOfProblem";
    }
  },
  {
    name: "goals",
    page: Goals,
    isCountable: true,
    hasFocusableItems: true,
    hasConfirmation: true,
    getNextPage: () => {
      return "importantAspect1";
    },
    getPreviousPage: () => {
      return "whatImportant";
    }
  },
  {
    name: "importantAspect1",
    page: ImportantAspect1,
    isCountable: true,
    getNextPage: () => {
      return "importantAspect2";
    },
    getPreviousPage: () => {
      return "goals";
    }
  },
  {
    name: "importantAspect2",
    page: ImportantAspect2,
    isCountable: true,
    getNextPage: () => {
      return "importantAspect3";
    },
    getPreviousPage: () => {
      return "importantAspect1";
    }
  },
  {
    name: "importantAspect3",
    page: ImportantAspect3,
    isCountable: true,
    getNextPage: () => {
      return "alternativeSolutions";
    },
    getPreviousPage: () => {
      return "importantAspect2";
    }
  },
  {
    name: "alternativeSolutions",
    page: AlternativeSolution,
    isCountable: true,
    getNextPage: form => {
      const { getFieldValue } = form;
      if (getFieldValue("alternativeSolution") === "Yes") {
        return "solutions";
      } else {
        return "aboutYou";
      }
    },
    getPreviousPage: () => {
      return "importantAspect3";
    }
  },
  {
    name: "solutions",
    page: Solutions,
    isCountable: true,
    hasFocusableItems: true,
    hasConfirmation: true,
    getNextPage: () => {
      return "solutionsCostsAndImportance";
    },
    getPreviousPage: () => {
      return "alternativeSolutions";
    }
  },
  {
    name: "solutionsCostsAndImportance",
    page: DiagramPage,
    hasConfirmation: true,
    getNextPage: () => {
      return "aboutYou";
    },
    getPreviousPage: () => {
      return "solutions";
    }
  },
  {
    name: "aboutYou",
    page: AboutYou,
    getNextPage: () => {
      return "motivation";
    },
    getPreviousPage: form => {
      const { getFieldValue } = form;
      if (getFieldValue("alternativeSolution") === "Yes") {
        return "solutionsCostsAndImportance";
      } else {
        return "alternativeSolutions";
      }
    }
  },
  {
    name: "motivation",
    page: Motivation,
    isCountable: true,
    hasFocusableItems: true,
    getNextPage: () => {
      return "theFuture";
    },
    getPreviousPage: () => {
      return "aboutYou";
    }
  },
  {
    name: "theFuture",
    page: TheFuture,
    isCountable: true,
    hasFocusableItems: true,
    getNextPage: () => {
      return "dealbreakers";
    },
    getPreviousPage: () => {
      return "motivation";
    }
  },
  {
    name: "dealbreakers",
    page: Dealbreakers,
    isCountable: true,
    hasFocusableItems: true,
    isLast: true,
    getNextPage: () => {
      return "dealbreakers";
    },
    getPreviousPage: () => {
      return "theFuture";
    }
  },
  {
    name: "thankYou",
    page: ThankYou,
    getNextPage: () => {
      return "thankYou";
    }
  }
];
export default config;
