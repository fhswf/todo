function cov_suhp10ev4() {
  var path = "C:\\Users\\timga\\Downloads\\todo_TKKG\\backend\\swagger.js";
  var hash = "5e684b108aa01b64be605ead95daad19f9361284";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timga\\Downloads\\todo_TKKG\\backend\\swagger.js",
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
    hash: "5e684b108aa01b64be605ead95daad19f9361284"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_suhp10ev4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_suhp10ev4();
const PORT = (cov_suhp10ev4().s[0]++, (cov_suhp10ev4().b[0][0]++, process.env.PORT) || (cov_suhp10ev4().b[0][1]++, 3000));
const swaggerOptions = (cov_suhp10ev4().s[1]++, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3Zfc3VocDEwZXY0IiwiYWN0dWFsQ292ZXJhZ2UiLCJQT1JUIiwicyIsImIiLCJwcm9jZXNzIiwiZW52Iiwic3dhZ2dlck9wdGlvbnMiLCJzd2FnZ2VyRGVmaW5pdGlvbiIsIm9wZW5hcGkiLCJpbmZvIiwidGl0bGUiLCJ2ZXJzaW9uIiwiZGVzY3JpcHRpb24iLCJzZXJ2ZXJzIiwidXJsIiwiY29tcG9uZW50cyIsInNjaGVtYXMiLCJUb2RvIiwidHlwZSIsInByb3BlcnRpZXMiLCJfaWQiLCJleGFtcGxlIiwiZHVlIiwic3RhdHVzIiwic2VjdXJpdHlTY2hlbWVzIiwiYmVhcmVyQXV0aCIsInNjaGVtZSIsImJlYXJlckZvcm1hdCIsInNlY3VyaXR5IiwiYXBpcyJdLCJzb3VyY2VzIjpbInN3YWdnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcclxuXHJcbmNvbnN0IHN3YWdnZXJPcHRpb25zID0ge1xyXG4gICAgc3dhZ2dlckRlZmluaXRpb246IHtcclxuICAgICAgICBvcGVuYXBpOiAnMy4wLjAnLFxyXG4gICAgICAgIGluZm86IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUb2RvIEFQSScsXHJcbiAgICAgICAgICAgIHZlcnNpb246ICcxLjAuMCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVG9kbyBBUEkgRG9rdW1lbnRhdGlvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJ2ZXJzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIHNjaGVtYXM6IHtcclxuICAgICAgICAgICAgICAgIFRvZG86IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ01vbmdvREIgSUQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhbXBsZTogJzY0Mzk1MTlkYWRiNzdjMDgwNjcxYTU3MycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGl0ZWwgZGVzIFRvZG9zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YW1wbGU6ICdGw7xyIGRpZSBLbGF1c3VyIFdlYmVudHdpY2tsdW5nIGxlcm5lbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0bDpGxsaWdrZWl0c2RhdHVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YW1wbGU6ICcyMDIzLTAxLTE0VDAwOjAwOjAwLjAwMFonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU3RhdHVzIGRlcyBUb2RvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFtcGxlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWN1cml0eVNjaGVtZXM6IHtcclxuICAgICAgICAgICAgICAgIGJlYXJlckF1dGg6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaHR0cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1lOiAnYmVhcmVyJyxcclxuICAgICAgICAgICAgICAgICAgICBiZWFyZXJGb3JtYXQ6ICdKV1QnLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VjdXJpdHk6IFt7XHJcbiAgICAgICAgICAgIGJlYXJlckF1dGg6IFtdXHJcbiAgICAgICAgfV0sXHJcblxyXG4gICAgfSxcclxuICAgIGFwaXM6IFsnLi9pbmRleC5qcyddLFxyXG59O1xyXG5cclxuZXhwb3J0IHtzd2FnZ2VyT3B0aW9uc30iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxhQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxhQUFBO0FBZlosTUFBTUUsSUFBSSxJQUFBRixhQUFBLEdBQUFHLENBQUEsT0FBRyxDQUFBSCxhQUFBLEdBQUFJLENBQUEsVUFBQUMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksTUFBQUYsYUFBQSxHQUFBSSxDQUFBLFVBQUksSUFBSTtBQUVyQyxNQUFNRyxjQUFjLElBQUFQLGFBQUEsR0FBQUcsQ0FBQSxPQUFHO0VBQ25CSyxpQkFBaUIsRUFBRTtJQUNmQyxPQUFPLEVBQUUsT0FBTztJQUNoQkMsSUFBSSxFQUFFO01BQ0ZDLEtBQUssRUFBRSxVQUFVO01BQ2pCQyxPQUFPLEVBQUUsT0FBTztNQUNoQkMsV0FBVyxFQUFFO0lBQ2pCLENBQUM7SUFDREMsT0FBTyxFQUFFLENBQ0w7TUFDSUMsR0FBRyxFQUFHLG9CQUFtQmIsSUFBSztJQUNsQyxDQUFDLENBQ0o7SUFDRGMsVUFBVSxFQUFFO01BQ1JDLE9BQU8sRUFBRTtRQUNMQyxJQUFJLEVBQUU7VUFDRkMsSUFBSSxFQUFFLFFBQVE7VUFDZEMsVUFBVSxFQUFFO1lBQ1JDLEdBQUcsRUFBRTtjQUNERixJQUFJLEVBQUUsUUFBUTtjQUNkTixXQUFXLEVBQUUsWUFBWTtjQUN6QlMsT0FBTyxFQUFFO1lBQ2IsQ0FBQztZQUNEWCxLQUFLLEVBQUU7Y0FDSFEsSUFBSSxFQUFFLFFBQVE7Y0FDZE4sV0FBVyxFQUFFLGlCQUFpQjtjQUM5QlMsT0FBTyxFQUFFO1lBQ2IsQ0FBQztZQUNEQyxHQUFHLEVBQUU7Y0FDREosSUFBSSxFQUFFLFFBQVE7Y0FDZE4sV0FBVyxFQUFFLGtCQUFrQjtjQUMvQlMsT0FBTyxFQUFFO1lBQ2IsQ0FBQztZQUNERSxNQUFNLEVBQUU7Y0FDSkwsSUFBSSxFQUFFLFNBQVM7Y0FDZk4sV0FBVyxFQUFFLGtCQUFrQjtjQUMvQlMsT0FBTyxFQUFFO1lBQ2I7VUFDSjtRQUNKO01BQ0osQ0FBQztNQUNERyxlQUFlLEVBQUU7UUFDYkMsVUFBVSxFQUFFO1VBQ1JQLElBQUksRUFBRSxNQUFNO1VBQ1pRLE1BQU0sRUFBRSxRQUFRO1VBQ2hCQyxZQUFZLEVBQUU7UUFDbEI7TUFDSjtJQUNKLENBQUM7SUFDREMsUUFBUSxFQUFFLENBQUM7TUFDUEgsVUFBVSxFQUFFO0lBQ2hCLENBQUM7RUFFTCxDQUFDO0VBQ0RJLElBQUksRUFBRSxDQUFDLFlBQVk7QUFDdkIsQ0FBQztBQUVELFNBQVF2QixjQUFjIn0=