/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import {
  ESI_CONTENT_THEME_API_RESPONSE_FIELD_KEY,
  ESI_CONTENT_THEME_FIELD_KEY,
} from '../../Constant/ContentThemeConstant';
import faker from 'faker';
import Utils from '../../Utils/Utils';

class ContentThemeMockData {
  static mockContenThemeItemToCreate() {
    return {
      [ESI_CONTENT_THEME_FIELD_KEY.DESIGN_ID]: 10,
      [ESI_CONTENT_THEME_FIELD_KEY.IMAGE]:
        'https://beerfridge.vn/components/com_redshop/assets/images/product/b8971688a79c2e771b343157e41378ca.png',
    };
  }

  static mockContentThemeItemToUpdate(id) {
    return {
      [ESI_CONTENT_THEME_FIELD_KEY.ID]: id,
      [ESI_CONTENT_THEME_FIELD_KEY.DESIGN_ID]: 12,
      [ESI_CONTENT_THEME_FIELD_KEY.IMAGE]:
        'https://beerfridge.vn/components/com_redshop/assets/images/product/b8971688a79c2e771b343157e41378ca.png',
    };
  }
}

export default ContentThemeMockData;
