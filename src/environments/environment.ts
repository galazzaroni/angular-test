// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox: {
      accessToken: 'pk.eyJ1IjoiZ2FsYXp6YXJvbmkiLCJhIjoiY2tna2U2dzRuMDF3dTMwcGE0b3Z2d2s4cCJ9.zYasHFTZmC9uLDvK0QaSwQ', // Optionnal, can also be set per map (accessToken input of mgl-map)
      geocoderAccessToken: 'pk.eyJ1IjoiZ2FsYXp6YXJvbmkiLCJhIjoiY2tna2U2dzRuMDF3dTMwcGE0b3Z2d2s4cCJ9.zYasHFTZmC9uLDvK0QaSwQ' // Optional, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
