/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxContentThemeApiService from '../ContentTheme/ContentTheme';
import { requestANewAccessToken } from '../gateway/Instance';
import ContentThemeMockData from './__mock__/ContentTheme.mock';

describe('Unit Testing - AesirX - Content Theme Service', () => {
  beforeAll(async () => {
    await requestANewAccessToken();
  });

  it('Unit Test API - Read List Contents Theme', async () => {
    const contentThemeService = new AesirxContentThemeApiService();
    const data = await contentThemeService.getContentThemes(1, 2, false);
    const mockDataToAssert = 2;
    let receivedData = 0;
    if (data) {
      receivedData = data.list.totalItems();
    }
    expect(receivedData).toEqual(mockDataToAssert);
  });

  it('Unit Test API - Read content Item', async () => {
    const contentThemeService = new AesirxContentThemeApiService();
    const contentThemes = await contentThemeService.getContentThemes(1, 2, false);
    if (!contentThemes || !contentThemes.list.items) {
      return false;
    }

    const dataToFetch = contentThemes.list.items[0];
    const idToFetch = dataToFetch.getId();
    const mockContentThemeIdToAssert = idToFetch;

    const data = await contentThemeService.getContentThemeItem(idToFetch);

    let receivedContentThemeID = 0;
    if (data) {
      receivedContentThemeID = data.id;
    }
    expect(receivedContentThemeID).toEqual(mockContentThemeIdToAssert);
  });

  it('Unit Test API - Create A Content Theme', async () => {
    const contentThemeService = new AesirxContentThemeApiService();

    const data = ContentThemeMockData.mockContenThemeItemToCreate();
    const result = await contentThemeService.createContentTheme(data);

    expect(result).toBeTruthy();
  });

  it('Unit Test API - Update Content Theme', async () => {
    const contentThemeService = new AesirxContentThemeApiService();
    const contentThemes = await contentThemeService.getContentThemes(1, 2, false);
    if (!contentThemes || !contentThemes.list.items) {
      return false;
    }

    const contentThemeId = contentThemes.list.items[0].getId();

    const data = ContentThemeMockData.mockContentThemeItemToUpdate(contentThemeId);

    const result = await contentThemeService.updateContentTheme(data);

    return result;
  });

  it('Unit Test API - Delete Content Theme', async () => {
    const contentThemeService = new AesirxContentThemeApiService();
    const contentThemes = await contentThemeService.getContentThemes(1, 2, false);
    if (!contentThemes || !contentThemes.list.items) {
      return false;
    }
    const dataToFetch = contentThemes.list.items[0];
    const idToFetch = dataToFetch.getId();
    const mockContentIdToAssert = idToFetch;
    const data = await contentThemeService.getContentThemeItem(idToFetch);

    let receivedContentThemeID = 0;
    if (data) {
      receivedContentThemeID = data.id;

      contentThemeService.deleteContentTheme(receivedContentThemeID);
    }

    expect(receivedContentThemeID).toEqual(mockContentIdToAssert);
  });

  it('Unit Test API - Get Content Theme By Design Id', async () => {
    const contentThemeService = new AesirxContentThemeApiService();
    const contentThemes = await contentThemeService.getContentThemes(1, 2, false);
    if (!contentThemes || !contentThemes.list.items) {
      return false;
    }

    const dataToFetch = contentThemes.list.items[0];
    const idToFetch = dataToFetch.designId;
    const mockContentThemeIdToAssert = idToFetch;

    const data = await contentThemeService.getContentThemeByDesignId(idToFetch);

    let receivedContentThemeID = 0;
    if (data) {
      receivedContentThemeID = parseInt(data.design_id);
    }

    expect(receivedContentThemeID).toEqual(mockContentThemeIdToAssert);
  });
});
