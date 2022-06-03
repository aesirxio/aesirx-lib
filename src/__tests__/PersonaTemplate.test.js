/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxPersonaTemplateApiService from '../PersonaTemplate/PersonaTemplate';
import { requestANewAccessToken } from '../gateway/Instance';

describe('Unit Testing - AesirX - persona template Service', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  it('Unit Test API - Read List Personas templates', async () => {
    const personaTemplateService = new AesirxPersonaTemplateApiService();
    const data = await personaTemplateService.getPersonaTemplates(1, 2, false);

    const mockDataToAssert = data.list.totalItems();
    let receivedData = 0;

    if (data) {
      receivedData = data.list.totalItems();
    }

    expect(receivedData).toEqual(mockDataToAssert);
  });

  it('Unit Test API - Read Persona template Item', async () => {
    const PersonaTemplateService = new AesirxPersonaTemplateApiService();
    const perosnaTemplates = await PersonaTemplateService.getPersonaTemplates(1, 2, false);

    if (!perosnaTemplates || !perosnaTemplates.items) {
      return false;
    }

    const dataToFetch = perosnaTemplates.items[0];
    const idToFetch = dataToFetch.getId();
    const mockProjectIdToAssert = idToFetch;
    const data = await PersonaTemplateService.getPersonaTemplate(idToFetch);

    let receivedProjectID = 0;

    if (data) {
      receivedProjectID = data.id;
    }

    expect(receivedProjectID).toEqual(mockProjectIdToAssert);
  });
});
