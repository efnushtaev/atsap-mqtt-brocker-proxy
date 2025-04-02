export enum ControllersRoutesURL {
	OBJECTS_ALL = '/api/v1/objects',
	OBJECT_ID = '/api/v1/objects/:id',
}

const MQTT_BROCKER_HOST = 'dev.rightech.io';
export const MQTT_BROCKER_API_URL = `https://${MQTT_BROCKER_HOST}/api/v1/`;

export enum RequestMethod {
	GET = 'get',
	POST = 'post',
}
