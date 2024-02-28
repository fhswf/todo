function cov_7kzfz9i22() {
  var path = "C:\\Users\\timga\\Downloads\\todo_TKKG\\backend\\utils.js";
  var hash = "7cc12b2d10b23c41c45925385dfa81607cc9628b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timga\\Downloads\\todo_TKKG\\backend\\utils.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 27
        },
        end: {
          line: 10,
          column: 5
        }
      },
      "1": {
        start: {
          line: 12,
          column: 26
        },
        end: {
          line: 12,
          column: 114
        }
      },
      "2": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "3": {
        start: {
          line: 15,
          column: 25
        },
        end: {
          line: 24,
          column: 14
        }
      },
      "4": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
          column: 42
        }
      },
      "5": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 72
        }
      },
      "6": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "getKeycloakToken",
        decl: {
          start: {
            line: 5,
            column: 15
          },
          end: {
            line: 5,
            column: 31
          }
        },
        loc: {
          start: {
            line: 5,
            column: 34
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7cc12b2d10b23c41c45925385dfa81607cc9628b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_7kzfz9i22 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_7kzfz9i22();
import axios from 'axios';
import qs from 'qs';
async function getKeycloakToken() {
  cov_7kzfz9i22().f[0]++;
  const keycloakConfig = (cov_7kzfz9i22().s[0]++, {
    baseUrl: 'https://jupiter.fh-swf.de/keycloak',
    realm: 'webentwicklung',
    clientId: 'todo-backend'
  });
  const tokenEndpoint = (cov_7kzfz9i22().s[1]++, `${keycloakConfig.baseUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/token`);
  cov_7kzfz9i22().s[2]++;
  try {
    const response = (cov_7kzfz9i22().s[3]++, await axios.post(tokenEndpoint, {
      'grant_type': 'password',
      'client_id': keycloakConfig.clientId,
      'username': 'public',
      'password': 'todo'
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }));
    cov_7kzfz9i22().s[4]++;
    return response.data.access_token;
  } catch (error) {
    cov_7kzfz9i22().s[5]++;
    console.error('Fehler beim Abrufen des Keycloak-Tokens', error);
    cov_7kzfz9i22().s[6]++;
    return null;
  }
}
export default getKeycloakToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfN2t6Zno5aTIyIiwiYWN0dWFsQ292ZXJhZ2UiLCJheGlvcyIsInFzIiwiZ2V0S2V5Y2xvYWtUb2tlbiIsImYiLCJrZXljbG9ha0NvbmZpZyIsInMiLCJiYXNlVXJsIiwicmVhbG0iLCJjbGllbnRJZCIsInRva2VuRW5kcG9pbnQiLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIiwiZGF0YSIsImFjY2Vzc190b2tlbiIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBxcyBmcm9tICdxcyc7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0S2V5Y2xvYWtUb2tlbigpIHtcclxuICAgIGNvbnN0IGtleWNsb2FrQ29uZmlnID0ge1xyXG4gICAgICAgIGJhc2VVcmw6ICdodHRwczovL2p1cGl0ZXIuZmgtc3dmLmRlL2tleWNsb2FrJyxcclxuICAgICAgICByZWFsbTogJ3dlYmVudHdpY2tsdW5nJyxcclxuICAgICAgICBjbGllbnRJZDogJ3RvZG8tYmFja2VuZCcsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRva2VuRW5kcG9pbnQgPSBgJHtrZXljbG9ha0NvbmZpZy5iYXNlVXJsfS9yZWFsbXMvJHtrZXljbG9ha0NvbmZpZy5yZWFsbX0vcHJvdG9jb2wvb3BlbmlkLWNvbm5lY3QvdG9rZW5gO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHRva2VuRW5kcG9pbnQsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICdncmFudF90eXBlJzogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICdjbGllbnRfaWQnOiBrZXljbG9ha0NvbmZpZy5jbGllbnRJZCxcclxuICAgICAgICAgICAgICAgICd1c2VybmFtZSc6ICdwdWJsaWMnLFxyXG4gICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJzogJ3RvZG8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5hY2Nlc3NfdG9rZW47XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZlaGxlciBiZWltIEFicnVmZW4gZGVzIEtleWNsb2FrLVRva2VucycsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0S2V5Y2xvYWtUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxhQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxhQUFBO0FBZlosT0FBT0UsS0FBSyxNQUFNLE9BQU87QUFDekIsT0FBT0MsRUFBRSxNQUFNLElBQUk7QUFHbkIsZUFBZUMsZ0JBQWdCQSxDQUFBLEVBQUc7RUFBQUosYUFBQSxHQUFBSyxDQUFBO0VBQzlCLE1BQU1DLGNBQWMsSUFBQU4sYUFBQSxHQUFBTyxDQUFBLE9BQUc7SUFDbkJDLE9BQU8sRUFBRSxvQ0FBb0M7SUFDN0NDLEtBQUssRUFBRSxnQkFBZ0I7SUFDdkJDLFFBQVEsRUFBRTtFQUNkLENBQUM7RUFFRCxNQUFNQyxhQUFhLElBQUFYLGFBQUEsR0FBQU8sQ0FBQSxPQUFJLEdBQUVELGNBQWMsQ0FBQ0UsT0FBUSxXQUFVRixjQUFjLENBQUNHLEtBQU0sZ0NBQStCO0VBQUNULGFBQUEsR0FBQU8sQ0FBQTtFQUUvRyxJQUFJO0lBQ0EsTUFBTUssUUFBUSxJQUFBWixhQUFBLEdBQUFPLENBQUEsT0FBRyxNQUFNTCxLQUFLLENBQUNXLElBQUksQ0FBQ0YsYUFBYSxFQUMzQztNQUNJLFlBQVksRUFBRSxVQUFVO01BQ3hCLFdBQVcsRUFBRUwsY0FBYyxDQUFDSSxRQUFRO01BQ3BDLFVBQVUsRUFBRSxRQUFRO01BQ3BCLFVBQVUsRUFBRTtJQUNoQixDQUFDLEVBQ0Q7TUFDSUksT0FBTyxFQUFFO1FBQUUsY0FBYyxFQUFFO01BQW9DO0lBQ25FLENBQUMsQ0FBQztJQUFDZCxhQUFBLEdBQUFPLENBQUE7SUFDUCxPQUFPSyxRQUFRLENBQUNHLElBQUksQ0FBQ0MsWUFBWTtFQUNyQyxDQUFDLENBQUMsT0FBT0MsS0FBSyxFQUFFO0lBQUFqQixhQUFBLEdBQUFPLENBQUE7SUFDWlcsT0FBTyxDQUFDRCxLQUFLLENBQUMseUNBQXlDLEVBQUVBLEtBQUssQ0FBQztJQUFDakIsYUFBQSxHQUFBTyxDQUFBO0lBQ2hFLE9BQU8sSUFBSTtFQUNmO0FBQ0o7QUFFQSxlQUFlSCxnQkFBZ0IifQ==