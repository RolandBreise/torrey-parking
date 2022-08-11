import { AmplifyApiGraphQlResourceStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyApiGraphQlResourceStackTemplate) {
    resources.models["Releases"].modelDatasource.dynamoDbConfig['deltaSyncConfig']['baseTableTtl'] = '0'
    resources.models["Student"].modelDatasource.dynamoDbConfig['deltaSyncConfig']['baseTableTtl'] = '0'
    resources.models["ParkingSpot"].modelDatasource.dynamoDbConfig['deltaSyncConfig']['baseTableTtl'] = '0'
}
