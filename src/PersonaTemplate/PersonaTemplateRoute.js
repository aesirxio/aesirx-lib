/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseRoute from '../Abstract/BaseRoute';
import AesirxApiInstance from '../gateway/Instance';

/**
 * Class PersonaRoute extends BaseRoute
 */
class PersonaTemplateRoute extends BaseRoute {
  /**
   * function getPersonaRequest get specified Persona Data from Aesir Redcore WS
   * @param  personaTemplateId
   * @return JSON
   */

  getPersonaTemplateRequest = (personaTemplateId) =>
    AesirxApiInstance.get(
      this.createRequestURL({
        option: 'persona_template',
        id: personaTemplateId,
      })
    );

  getPersonaTemplatesRequest = (page = 1, limit = 20) => {
    return AesirxApiInstance.get(
      this.createRequestURL({
        option: 'persona_template',
        'list[limitstart]': (page - 1) * limit,
        'list[limit]': limit,
      })
    );
  };
}

export default PersonaTemplateRoute;
