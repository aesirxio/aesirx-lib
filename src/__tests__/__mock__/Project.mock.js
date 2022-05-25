import {
  ESI_PROJECT_API_RESPONSE_FIELD_KEY,
  ESI_PROJECT_FIELD_KEY,
} from '../../Constant/ProjectConstant';
import faker from 'faker';
import Utils from '../../Utils/Utils';
class ProjectMockData {
  static mockProjectItem() {
    const mockData = {
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.ID]: 10,
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.TITLE]: '',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.START_DATE]: '2020-11-02T00:00:00+00:00',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.END_DATE]: '2020-11-02T00:00:00+00:00',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.SHORT_DESCRIPTION]: '',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.LOGO]: '[]',
      [ESI_PROJECT_API_RESPONSE_FIELD_KEY.PROJECT_LEAD]: 0,
    };
    return mockData;
  }

  static mockProjectTitle = () => faker.lorem.word(10);

  static mockProjectList() {
    //   const mockData = []
  }

  static mockProjectItemToCreate() {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + 10);
    return {
      [ESI_PROJECT_FIELD_KEY.TITLE]: faker.lorem.words(5),
      [ESI_PROJECT_FIELD_KEY.START_DATE]: Utils.formatDatetimeByLocale(startDate),
      [ESI_PROJECT_FIELD_KEY.END_DATE]: Utils.formatDatetimeByLocale(endDate),
      [ESI_PROJECT_FIELD_KEY.SHORT_DESCRIPTION]: faker.lorem.sentence(50),
      [ESI_PROJECT_FIELD_KEY.LOGO]: '',
      [ESI_PROJECT_FIELD_KEY.PROJECT_LEAD]: 1,
    };
  }
  static mockProjectItemToUpdate(projectID) {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + 10);
    return {
      [ESI_PROJECT_FIELD_KEY.ID]: projectID,
      [ESI_PROJECT_FIELD_KEY.TITLE]: faker.lorem.words(10),
      [ESI_PROJECT_FIELD_KEY.START_DATE]: Utils.formatDatetimeByLocale(startDate),
      [ESI_PROJECT_FIELD_KEY.END_DATE]: Utils.formatDatetimeByLocale(endDate),
      [ESI_PROJECT_FIELD_KEY.SHORT_DESCRIPTION]: faker.lorem.sentence(50),
      [ESI_PROJECT_FIELD_KEY.LOGO]: '',
      [ESI_PROJECT_FIELD_KEY.PROJECT_LEAD]: 1,
    };
  }

  static mockProjectItemToDelete() {}
}

export default ProjectMockData;
