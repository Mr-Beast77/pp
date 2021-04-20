export class Download{
    deviceCategory: string = '';
    downloadLink: string = '';
    deviceDetails : DeviceDetails[] = []
}

export class DeviceDetails{
    deviceName: string = '';
    buildVersion: string = '';
    maintainer: string = '';
}