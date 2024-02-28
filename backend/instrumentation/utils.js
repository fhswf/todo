function cov_19dla29gjx() {
  var path = "/workspaces/todo_TKKG/backend/utils.js";
  var hash = "6180ffdce5b1f93fccfb105ee9eba5583edb2f21";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspaces/todo_TKKG/backend/utils.js",
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
    hash: "6180ffdce5b1f93fccfb105ee9eba5583edb2f21"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_19dla29gjx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_19dla29gjx();
import axios from 'axios';
import qs from 'qs';
async function getKeycloakToken() {
  cov_19dla29gjx().f[0]++;
  const keycloakConfig = (cov_19dla29gjx().s[0]++, {
    baseUrl: 'https://jupiter.fh-swf.de/keycloak',
    realm: 'webentwicklung',
    clientId: 'todo-backend'
  });
  const tokenEndpoint = (cov_19dla29gjx().s[1]++, `${keycloakConfig.baseUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/token`);
  cov_19dla29gjx().s[2]++;
  try {
    const response = (cov_19dla29gjx().s[3]++, await axios.post(tokenEndpoint, {
      'grant_type': 'password',
      'client_id': keycloakConfig.clientId,
      'username': 'public',
      'password': 'todo'
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }));
    cov_19dla29gjx().s[4]++;
    return response.data.access_token;
  } catch (error) {
    cov_19dla29gjx().s[5]++;
    console.error('Fehler beim Abrufen des Keycloak-Tokens', error);
    cov_19dla29gjx().s[6]++;
    return null;
  }
}
export default getKeycloakToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTlkbGEyOWdqeCIsImFjdHVhbENvdmVyYWdlIiwiYXhpb3MiLCJxcyIsImdldEtleWNsb2FrVG9rZW4iLCJmIiwia2V5Y2xvYWtDb25maWciLCJzIiwiYmFzZVVybCIsInJlYWxtIiwiY2xpZW50SWQiLCJ0b2tlbkVuZHBvaW50IiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsImRhdGEiLCJhY2Nlc3NfdG9rZW4iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlcyI6WyJ1dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHFzIGZyb20gJ3FzJztcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRLZXljbG9ha1Rva2VuKCkge1xuICAgIGNvbnN0IGtleWNsb2FrQ29uZmlnID0ge1xuICAgICAgICBiYXNlVXJsOiAnaHR0cHM6Ly9qdXBpdGVyLmZoLXN3Zi5kZS9rZXljbG9haycsXG4gICAgICAgIHJlYWxtOiAnd2ViZW50d2lja2x1bmcnLFxuICAgICAgICBjbGllbnRJZDogJ3RvZG8tYmFja2VuZCcsXG4gICAgfTtcblxuICAgIGNvbnN0IHRva2VuRW5kcG9pbnQgPSBgJHtrZXljbG9ha0NvbmZpZy5iYXNlVXJsfS9yZWFsbXMvJHtrZXljbG9ha0NvbmZpZy5yZWFsbX0vcHJvdG9jb2wvb3BlbmlkLWNvbm5lY3QvdG9rZW5gO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHRva2VuRW5kcG9pbnQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ2dyYW50X3R5cGUnOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgICdjbGllbnRfaWQnOiBrZXljbG9ha0NvbmZpZy5jbGllbnRJZCxcbiAgICAgICAgICAgICAgICAndXNlcm5hbWUnOiAncHVibGljJyxcbiAgICAgICAgICAgICAgICAncGFzc3dvcmQnOiAndG9kbycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZlaGxlciBiZWltIEFicnVmZW4gZGVzIEtleWNsb2FrLVRva2VucycsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRLZXljbG9ha1Rva2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixPQUFPRSxLQUFLLE1BQU0sT0FBTztBQUN6QixPQUFPQyxFQUFFLE1BQU0sSUFBSTtBQUduQixlQUFlQyxnQkFBZ0JBLENBQUEsRUFBRztFQUFBSixjQUFBLEdBQUFLLENBQUE7RUFDOUIsTUFBTUMsY0FBYyxJQUFBTixjQUFBLEdBQUFPLENBQUEsT0FBRztJQUNuQkMsT0FBTyxFQUFFLG9DQUFvQztJQUM3Q0MsS0FBSyxFQUFFLGdCQUFnQjtJQUN2QkMsUUFBUSxFQUFFO0VBQ2QsQ0FBQztFQUVELE1BQU1DLGFBQWEsSUFBQVgsY0FBQSxHQUFBTyxDQUFBLE9BQUksR0FBRUQsY0FBYyxDQUFDRSxPQUFRLFdBQVVGLGNBQWMsQ0FBQ0csS0FBTSxnQ0FBK0I7RUFBQ1QsY0FBQSxHQUFBTyxDQUFBO0VBRS9HLElBQUk7SUFDQSxNQUFNSyxRQUFRLElBQUFaLGNBQUEsR0FBQU8sQ0FBQSxPQUFHLE1BQU1MLEtBQUssQ0FBQ1csSUFBSSxDQUFDRixhQUFhLEVBQzNDO01BQ0ksWUFBWSxFQUFFLFVBQVU7TUFDeEIsV0FBVyxFQUFFTCxjQUFjLENBQUNJLFFBQVE7TUFDcEMsVUFBVSxFQUFFLFFBQVE7TUFDcEIsVUFBVSxFQUFFO0lBQ2hCLENBQUMsRUFDRDtNQUNJSSxPQUFPLEVBQUU7UUFBRSxjQUFjLEVBQUU7TUFBb0M7SUFDbkUsQ0FBQyxDQUFDO0lBQUNkLGNBQUEsR0FBQU8sQ0FBQTtJQUNQLE9BQU9LLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxZQUFZO0VBQ3JDLENBQUMsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7SUFBQWpCLGNBQUEsR0FBQU8sQ0FBQTtJQUNaVyxPQUFPLENBQUNELEtBQUssQ0FBQyx5Q0FBeUMsRUFBRUEsS0FBSyxDQUFDO0lBQUNqQixjQUFBLEdBQUFPLENBQUE7SUFDaEUsT0FBTyxJQUFJO0VBQ2Y7QUFDSjtBQUVBLGVBQWVILGdCQUFnQiJ9