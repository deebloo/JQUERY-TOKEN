import { OpaqueToken } from '@angular/core';

export const JQ_TOKEN = new OpaqueToken('jQuery');
export declare let jQuery: any;

// providers
export const JQUERY_PROVIDER = [
    { provide: JQ_TOKEN, useValue: jQuery },
];
