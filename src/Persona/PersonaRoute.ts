/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseRoute from '../Abstract/BaseRoute';
import AesirXApiInstance from '../Gateway/Instance';

/**
 * Class PersonaRoute extends BaseRoute
 */
class PersonaRoute extends BaseRoute {
  /**
   * function getPersonaRequest get specified Persona Data from Aesir Redcore WS
   * @param  personaId
   * @return JSON
   */

  getPersonaRequest = (personaId: any) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'persona',
        id: personaId,
      })
    );

  /**
   *
   * @param data
   */
  createPersonaRequest = (data: any) =>
    AesirXApiInstance.post(
      this.createRequestURL({
        option: 'persona',
      }),
      data
    );

  /**
   *
   * @param data
   */
  updatePersonaRequest = (data: any) =>
    AesirXApiInstance.put(
      this.createRequestURL({
        option: 'persona',
      }),
      data
    );

  /**
   *
   * @param personaId
   */

  deletePersonaRequest = (personaId: any) => {
    const ids = personaId.split(',');

    if (ids.length < 2) {
      return AesirXApiInstance.delete(
        this.createRequestURL({
          option: 'persona',
          id: personaId,
        })
      );
    } else {
      return AesirXApiInstance.post(
        this.createRequestURL({
          option: 'persona',
          task: 'deleteAll',
        }),
        {
          id: personaId,
        }
      );
    }
  };

  getPersonasRequest = (page = 1, limit = 20) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'persona',
        'list[limitstart]': (page - 1) * limit,
        'list[limit]': limit,
      })
    );

  getPersonaMasterDataRequest = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'persona',
        task: 'getMasterData',
      })
    );
  };

  getConnectedChannelByOrganisationIdRequest = (organisationId: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'persona',
        task: 'getConnectedChannelByOrganisationId',
        organisationId: organisationId,
      })
    );
  };

  /**
   * function getConnectedChannelByPersonaIdsRequest
   * @param  personaIds = '123, 456'
   * @return JSON
   */
  getConnectedChannelByPersonaIdsRequest = (personaIds: any) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'persona',
        task: 'getConnectedChannelByPersonaIds',
        persona_id: personaIds,
      })
    );
  };

  searchPersonasRequest = (dataFilter: any, page = 1, limit = 20) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'persona',
        task: 'filterPersona',
        limitStart: (page - 1) * limit,
        limit: limit,
        ...dataFilter,
      })
    );
  };

  getMemberInfoRequest = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'persona',
        task: 'getMemberInfo',
      })
    );
  };
}

export default PersonaRoute;
