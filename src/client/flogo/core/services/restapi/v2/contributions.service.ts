import { Injectable } from '@angular/core';
import { ContribSchema } from '@flogo/core';
import {FLOGO_PROFILE_TYPE} from '@flogo/core/constants';
import {RestApiService} from '../rest-api.service';
import { map } from 'rxjs/operators';

interface InstallationData {
  url: string;
  type?: string;
}

@Injectable()
export class RESTAPIContributionsService {

  contributionPathByProfileType = new Map<FLOGO_PROFILE_TYPE, string>([
    [FLOGO_PROFILE_TYPE.MICRO_SERVICE, 'contributions/microservices'],
    [FLOGO_PROFILE_TYPE.DEVICE, 'contributions/devices']
  ]);

  constructor(private restApi: RestApiService) {
  }

  getContributionDetails(profileType: FLOGO_PROFILE_TYPE, ref: string) {
    return this.restApi.get<any[]>(this.getApiPath(profileType) + '?filter[ref]=' + ref)
      .pipe(map(([schema]) => schema))
      .toPromise();
  }

  getShimContributionDetails(profileType: FLOGO_PROFILE_TYPE) {
    return this.restApi.get<any[]>(this.getApiPath(profileType) + '?filter[shim]=' + true).toPromise();
  }

  listContribs(profileType, type) {
    return this.restApi.get<any[]>(this.getApiPath(profileType) + '?filter[type]=' + type).toPromise();
  }

  installContributions({profileType, installType, url}) {
    const body = this.prepareBodyData(profileType, installType, url);
    return this.restApi.post(this.getApiPath(profileType), body).toPromise();
  }

  private prepareBodyData(profileType, type, url): InstallationData {
    const data: InstallationData = {url};
    if (profileType === FLOGO_PROFILE_TYPE.MICRO_SERVICE) {
      data.type = type;
    }
    return data;
  }

  private getApiPath(profileType: FLOGO_PROFILE_TYPE): string {
    const pathToContribution = this.contributionPathByProfileType.get(profileType);
    if (!pathToContribution) {
      throw new Error(`Contributions API path for '${FLOGO_PROFILE_TYPE[profileType]}' profile is not found`);
    }
    return pathToContribution;
  }
}
