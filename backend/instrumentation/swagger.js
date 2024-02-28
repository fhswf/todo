function cov_r677km27p() {
  var path = "/workspaces/todo_TKKG/backend/swagger.js";
  var hash = "c850c4784f3bbebbea637c2d18c67f1a1e13a10e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspaces/todo_TKKG/backend/swagger.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 13
        },
        end: {
          line: 1,
          column: 37
        }
      },
      "1": {
        start: {
          line: 3,
          column: 23
        },
        end: {
          line: 58,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 1,
            column: 13
          },
          end: {
            line: 1,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1,
            column: 13
          },
          end: {
            line: 1,
            column: 29
          }
        }, {
          start: {
            line: 1,
            column: 33
          },
          end: {
            line: 1,
            column: 37
          }
        }],
        line: 1
      }
    },
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c850c4784f3bbebbea637c2d18c67f1a1e13a10e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_r677km27p = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_r677km27p();
const PORT = (cov_r677km27p().s[0]++, (cov_r677km27p().b[0][0]++, process.env.PORT) || (cov_r677km27p().b[0][1]++, 3000));
const swaggerOptions = (cov_r677km27p().s[1]++, {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo API',
      version: '1.0.0',
      description: 'Todo API Dokumentation'
    },
    servers: [{
      url: `http://localhost:${PORT}`
    }],
    components: {
      schemas: {
        Todo: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'MongoDB ID',
              example: '6439519dadb77c080671a573'
            },
            title: {
              type: 'string',
              description: 'Titel des Todos',
              example: 'Für die Klausur Webentwicklung lernen'
            },
            due: {
              type: 'string',
              description: 'Fälligkeitsdatum',
              example: '2023-01-14T00:00:00.000Z'
            },
            status: {
              type: 'integer',
              description: 'Status des Todos',
              example: 0
            }
          }
        }
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ['./index.js']
});
export { swaggerOptions };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfcjY3N2ttMjdwIiwiYWN0dWFsQ292ZXJhZ2UiLCJQT1JUIiwicyIsImIiLCJwcm9jZXNzIiwiZW52Iiwic3dhZ2dlck9wdGlvbnMiLCJzd2FnZ2VyRGVmaW5pdGlvbiIsIm9wZW5hcGkiLCJpbmZvIiwidGl0bGUiLCJ2ZXJzaW9uIiwiZGVzY3JpcHRpb24iLCJzZXJ2ZXJzIiwidXJsIiwiY29tcG9uZW50cyIsInNjaGVtYXMiLCJUb2RvIiwidHlwZSIsInByb3BlcnRpZXMiLCJfaWQiLCJleGFtcGxlIiwiZHVlIiwic3RhdHVzIiwic2VjdXJpdHlTY2hlbWVzIiwiYmVhcmVyQXV0aCIsInNjaGVtZSIsImJlYXJlckZvcm1hdCIsInNlY3VyaXR5IiwiYXBpcyJdLCJzb3VyY2VzIjpbInN3YWdnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuY29uc3Qgc3dhZ2dlck9wdGlvbnMgPSB7XG4gICAgc3dhZ2dlckRlZmluaXRpb246IHtcbiAgICAgICAgb3BlbmFwaTogJzMuMC4wJyxcbiAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgdGl0bGU6ICdUb2RvIEFQSScsXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUb2RvIEFQSSBEb2t1bWVudGF0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUfWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBzY2hlbWFzOiB7XG4gICAgICAgICAgICAgICAgVG9kbzoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdNb25nb0RCIElEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFtcGxlOiAnNjQzOTUxOWRhZGI3N2MwODA2NzFhNTczJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGl0ZWwgZGVzIFRvZG9zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFtcGxlOiAnRsO8ciBkaWUgS2xhdXN1ciBXZWJlbnR3aWNrbHVuZyBsZXJuZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRsOkbGxpZ2tlaXRzZGF0dW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YW1wbGU6ICcyMDIzLTAxLTE0VDAwOjAwOjAwLjAwMFonLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1N0YXR1cyBkZXMgVG9kb3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YW1wbGU6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VjdXJpdHlTY2hlbWVzOiB7XG4gICAgICAgICAgICAgICAgYmVhcmVyQXV0aDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaHR0cCcsXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtZTogJ2JlYXJlcicsXG4gICAgICAgICAgICAgICAgICAgIGJlYXJlckZvcm1hdDogJ0pXVCcsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VjdXJpdHk6IFt7XG4gICAgICAgICAgICBiZWFyZXJBdXRoOiBbXVxuICAgICAgICB9XSxcblxuICAgIH0sXG4gICAgYXBpczogWycuL2luZGV4LmpzJ10sXG59O1xuXG5leHBvcnQge3N3YWdnZXJPcHRpb25zfSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGFBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGFBQUE7QUFmWixNQUFNRSxJQUFJLElBQUFGLGFBQUEsR0FBQUcsQ0FBQSxPQUFHLENBQUFILGFBQUEsR0FBQUksQ0FBQSxVQUFBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxNQUFBRixhQUFBLEdBQUFJLENBQUEsVUFBSSxJQUFJO0FBRXJDLE1BQU1HLGNBQWMsSUFBQVAsYUFBQSxHQUFBRyxDQUFBLE9BQUc7RUFDbkJLLGlCQUFpQixFQUFFO0lBQ2ZDLE9BQU8sRUFBRSxPQUFPO0lBQ2hCQyxJQUFJLEVBQUU7TUFDRkMsS0FBSyxFQUFFLFVBQVU7TUFDakJDLE9BQU8sRUFBRSxPQUFPO01BQ2hCQyxXQUFXLEVBQUU7SUFDakIsQ0FBQztJQUNEQyxPQUFPLEVBQUUsQ0FDTDtNQUNJQyxHQUFHLEVBQUcsb0JBQW1CYixJQUFLO0lBQ2xDLENBQUMsQ0FDSjtJQUNEYyxVQUFVLEVBQUU7TUFDUkMsT0FBTyxFQUFFO1FBQ0xDLElBQUksRUFBRTtVQUNGQyxJQUFJLEVBQUUsUUFBUTtVQUNkQyxVQUFVLEVBQUU7WUFDUkMsR0FBRyxFQUFFO2NBQ0RGLElBQUksRUFBRSxRQUFRO2NBQ2ROLFdBQVcsRUFBRSxZQUFZO2NBQ3pCUyxPQUFPLEVBQUU7WUFDYixDQUFDO1lBQ0RYLEtBQUssRUFBRTtjQUNIUSxJQUFJLEVBQUUsUUFBUTtjQUNkTixXQUFXLEVBQUUsaUJBQWlCO2NBQzlCUyxPQUFPLEVBQUU7WUFDYixDQUFDO1lBQ0RDLEdBQUcsRUFBRTtjQUNESixJQUFJLEVBQUUsUUFBUTtjQUNkTixXQUFXLEVBQUUsa0JBQWtCO2NBQy9CUyxPQUFPLEVBQUU7WUFDYixDQUFDO1lBQ0RFLE1BQU0sRUFBRTtjQUNKTCxJQUFJLEVBQUUsU0FBUztjQUNmTixXQUFXLEVBQUUsa0JBQWtCO2NBQy9CUyxPQUFPLEVBQUU7WUFDYjtVQUNKO1FBQ0o7TUFDSixDQUFDO01BQ0RHLGVBQWUsRUFBRTtRQUNiQyxVQUFVLEVBQUU7VUFDUlAsSUFBSSxFQUFFLE1BQU07VUFDWlEsTUFBTSxFQUFFLFFBQVE7VUFDaEJDLFlBQVksRUFBRTtRQUNsQjtNQUNKO0lBQ0osQ0FBQztJQUNEQyxRQUFRLEVBQUUsQ0FBQztNQUNQSCxVQUFVLEVBQUU7SUFDaEIsQ0FBQztFQUVMLENBQUM7RUFDREksSUFBSSxFQUFFLENBQUMsWUFBWTtBQUN2QixDQUFDO0FBRUQsU0FBUXZCLGNBQWMifQ==