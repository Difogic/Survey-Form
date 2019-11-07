import Solution from './pages/Solution';
import Config from './Config';
import PeopleWithThisProblem from "./pages/PeopleWithThisProblem";
import AboutYou from "./pages/AboutYou";
import AlternativeSolution from "./pages/AlternativeSolution";

describe('Config', () => {
  let fieldValues = {};
  let form = {
    getFieldValue: jest.fn((field) => fieldValues[field])
  };

  beforeEach(() => {
    fieldValues = {};
  });

  describe('Solution', () => {
    it('should return howDoYouThinkItShouldBe as next page if solution is yes', () => {
      const solutionConfig = Config.find(c => c.page === Solution);
      fieldValues = {
        solution: 'Yes'
      };
      expect(solutionConfig.getNextPage(form)).toEqual('howDoYouThinkItShouldBe');
    });

    it('should return peopleWithThisProblem as next page if solution is not yes', () => {
      const solutionConfig = Config.find(c => c.page === Solution);
      fieldValues = {
        solution: 'some other value'
      };
      expect(solutionConfig.getNextPage(form)).toEqual('peopleWithThisProblem');
    });
  });

  describe('PeopleWithThisProblem', () => {
    it('should return approach as previous page if solution is yes', () => {
      const PeopleWithThisProblemConfig = Config.find(c => c.page === PeopleWithThisProblem);
      fieldValues = {
        solution: 'Yes'
      };
      expect(PeopleWithThisProblemConfig.getPreviousPage(form)).toEqual('approach');
    });

    it('should return solution as previous page if solution is not yes', () => {
      const PeopleWithThisProblemConfig = Config.find(c => c.page === PeopleWithThisProblem);
      fieldValues = {
        solution: 'some other value'
      };
      expect(PeopleWithThisProblemConfig.getPreviousPage(form)).toEqual('solution');
    });
  });

  describe('AlternativeSolution', () => {
    it('should return solutions as next page if alternativeSolution is yes', () => {
      const AlternativeSolutionConfig = Config.find(c => c.page === AlternativeSolution);
      fieldValues = {
        alternativeSolution: 'Yes'
      };
      expect(AlternativeSolutionConfig.getNextPage(form)).toEqual('solutions');
    });

    it('should return aboutYou as next page if alternativeSolution is not yes', () => {
      const AlternativeSolutionConfig = Config.find(c => c.page === AlternativeSolution);
      fieldValues = {
        alternativeSolution: 'some other value'
      };
      expect(AlternativeSolutionConfig.getNextPage(form)).toEqual('aboutYou');
    });
  });

  describe('AboutYou', () => {
    it('should return solutionsCostsAndImportance as previous page if alternativeSolution is yes', () => {
      const AboutYouConfig = Config.find(c => c.page === AboutYou);
      fieldValues = {
        alternativeSolution: 'Yes'
      };
      expect(AboutYouConfig.getPreviousPage(form)).toEqual('solutionsCostsAndImportance');
    });

    it('should return alternativeSolutions as previous page if alternativeSolution is not yes', () => {
      const AboutYouConfig = Config.find(c => c.page === AboutYou);
      fieldValues = {
        alternativeSolution: 'some other value'
      };
      expect(AboutYouConfig.getPreviousPage(form)).toEqual('alternativeSolutions');
    });
  });
});