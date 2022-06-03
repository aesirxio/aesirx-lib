/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxPersonaApiService from '../Persona/Persona';
import { requestANewAccessToken } from '../gateway/Instance';
import PersonaMockData from './__mock__/Persona.mock';

describe('Unit Testing - AesirX - persona Service', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  it('Unit Test API - Read List Personas', async () => {
    const personaService = new AesirxPersonaApiService();
    const data = await personaService.getPersonas(1, 2, false);

    const mockDataToAssert = data.list.totalItems();
    let receivedData = 0;

    if (data) {
      receivedData = data.list.totalItems();
    }

    expect(receivedData).toEqual(mockDataToAssert);
  });

  it('Unit Test API - Read Persona Item', async () => {
    const PersonaService = new AesirxPersonaApiService();
    const perosnas = await PersonaService.getPersonas(1, 2, false);

    if (!perosnas || !perosnas.items) {
      return false;
    }

    const dataToFetch = perosnas.items[0];
    const idToFetch = dataToFetch.getId();
    const mockProjectIdToAssert = idToFetch;
    const data = await PersonaService.getPersona(idToFetch);

    let receivedProjectID = 0;

    if (data) {
      receivedProjectID = data.id;
    }

    expect(receivedProjectID).toEqual(mockProjectIdToAssert);
  });

  it('Unit Test API - Create Persona', async () => {
    const PersonaService = new AesirxPersonaApiService();

    const data = PersonaMockData.mockPersonaItemToCreate();

    const result = await PersonaService.createPersona(data);

    expect(result).toBeTruthy();
  });

  it('Unit Test API - Update Persona', async () => {
    const PersonaService = new AesirxPersonaApiService();

    const personas = await PersonaService.getPersonas(1, 2, false);

    if (!personas || !personas.items) {
      return false;
    }

    let dataToSubmit = personas.items[0];
    dataToSubmit = PersonaMockData.mockPersonaItemToUpdate(dataToSubmit.getId());

    const result = await PersonaService.updatePersona(dataToSubmit);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Delete Persona', async () => {
    const PersonaService = new AesirxPersonaApiService();

    const personas = await PersonaService.getPersonas(1, 2, false);
    if (!personas || !personas.items) {
      return false;
    }

    const dataToDelete = personas.items[0];
    const idToDelete = dataToDelete.getId();

    const result = await PersonaService.deletePersona(idToDelete);
    expect(result).toBeTruthy();
  });

  it('Unit Test API - Search Persona', async () => {
    const personaService = new AesirxPersonaApiService();
    const personaData = await personaService.getPersonas(1, 2, false);
    const personas = personaData.list;

    if (!personas || !personas.items) {
      return false;
    }

    const dataToFetch = personas.items[0];
    const dataFilter = {
      keyword: dataToFetch.title,
    };

    const data = await personaService.searchPersonas(dataFilter, 1, 2, false);
    const mockDataToAssert = 1;
    let receivedData = 0;
    if (data) {
      receivedData = data.list.totalItems();
    }
    expect(receivedData).toEqual(mockDataToAssert);
  });

  it('Unit Test API - getConnectedChannelByOrganisationId', async () => {
    const personaService = new AesirxPersonaApiService();
    const data = await personaService.getConnectedChannelByOrganisationId(1);
    if (data) {
      return true;
    }

    return false;
  });

  it('Unit Test API - Get Connected Channel By Persona Ids', async () => {
    const personaService = new AesirxPersonaApiService();
    const personaIds = '1734,1733';
    const data = await personaService.getConnectedChannelByPersonaIds(personaIds);

    if (data) {
      return true;
    }

    return false;
  });
});
