function cov_whg1cj71m() {
  var path = "C:\\Users\\timga\\Downloads\\todo_TKKG\\backend\\cypress.config.js";
  var hash = "08bbe443d1ac94132320ab23030a456957af5a34";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timga\\Downloads\\todo_TKKG\\backend\\cypress.config.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 13
        },
        end: {
          line: 4,
          column: 37
        }
      },
      "1": {
        start: {
          line: 9,
          column: 12
        },
        end: {
          line: 9,
          column: 62
        }
      },
      "2": {
        start: {
          line: 14,
          column: 12
        },
        end: {
          line: 14,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 8
          },
          end: {
            line: 8,
            column: 9
          }
        },
        loc: {
          start: {
            line: 8,
            column: 36
          },
          end: {
            line: 15,
            column: 11
          }
        },
        line: 8
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 4,
            column: 13
          },
          end: {
            line: 4,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 4,
            column: 13
          },
          end: {
            line: 4,
            column: 29
          }
        }, {
          start: {
            line: 4,
            column: 33
          },
          end: {
            line: 4,
            column: 37
          }
        }],
        line: 4
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "08bbe443d1ac94132320ab23030a456957af5a34"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_whg1cj71m = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_whg1cj71m();
import { defineConfig } from 'cypress';
import require from 'requirejs';
const PORT = (cov_whg1cj71m().s[0]++, (cov_whg1cj71m().b[0][0]++, process.env.PORT) || (cov_whg1cj71m().b[0][1]++, 3000));
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cov_whg1cj71m().f[0]++;
      cov_whg1cj71m().s[1]++;
      require('@cypress/code-coverage/task')(on, config);
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      cov_whg1cj71m().s[2]++;
      return config;
    },
    baseUrl: `http://localhost:${PORT}`,
    codeCoverage: {
      url: `http://localhost:${PORT}/__coverage__`
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3Zfd2hnMWNqNzFtIiwiYWN0dWFsQ292ZXJhZ2UiLCJkZWZpbmVDb25maWciLCJyZXF1aXJlIiwiUE9SVCIsInMiLCJiIiwicHJvY2VzcyIsImVudiIsImUyZSIsInNldHVwTm9kZUV2ZW50cyIsIm9uIiwiY29uZmlnIiwiZiIsImJhc2VVcmwiLCJjb2RlQ292ZXJhZ2UiLCJ1cmwiXSwic291cmNlcyI6WyJjeXByZXNzLmNvbmZpZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICdjeXByZXNzJ1xyXG5pbXBvcnQgcmVxdWlyZSBmcm9tICdyZXF1aXJlanMnXHJcblxyXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIGUyZToge1xyXG4gICAgICAgIHNldHVwTm9kZUV2ZW50cyhvbiwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgIHJlcXVpcmUoJ0BjeXByZXNzL2NvZGUtY292ZXJhZ2UvdGFzaycpKG9uLCBjb25maWcpXHJcbiAgICAgICAgICAgIC8vIGluY2x1ZGUgYW55IG90aGVyIHBsdWdpbiBjb2RlLi4uXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAvLyBJdCdzIElNUE9SVEFOVCB0byByZXR1cm4gdGhlIGNvbmZpZyBvYmplY3RcclxuICAgICAgICAgICAgLy8gd2l0aCBhbnkgY2hhbmdlZCBlbnZpcm9ubWVudCB2YXJpYWJsZXNcclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICBiYXNlVXJsOiBgaHR0cDovL2xvY2FsaG9zdDoke1BPUlR9YCxcclxuICAgICAgICBjb2RlQ292ZXJhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDoke1BPUlR9L19fY292ZXJhZ2VfX2AsXHJcbiAgICAgICAgICB9LFxyXG4gICAgfSxcclxufSlcclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsYUFBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsYUFBQTtBQWZaLFNBQVNFLFlBQVksUUFBUSxTQUFTO0FBQ3RDLE9BQU9DLE9BQU8sTUFBTSxXQUFXO0FBRS9CLE1BQU1DLElBQUksSUFBQUosYUFBQSxHQUFBSyxDQUFBLE9BQUcsQ0FBQUwsYUFBQSxHQUFBTSxDQUFBLFVBQUFDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLE1BQUFKLGFBQUEsR0FBQU0sQ0FBQSxVQUFJLElBQUk7QUFFckMsZUFBZUosWUFBWSxDQUFDO0VBQ3hCTyxHQUFHLEVBQUU7SUFDREMsZUFBZUEsQ0FBQ0MsRUFBRSxFQUFFQyxNQUFNLEVBQUU7TUFBQVosYUFBQSxHQUFBYSxDQUFBO01BQUFiLGFBQUEsR0FBQUssQ0FBQTtNQUN4QkYsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUNRLEVBQUUsRUFBRUMsTUFBTSxDQUFDO01BQ2xEOztNQUVBO01BQ0E7TUFBQVosYUFBQSxHQUFBSyxDQUFBO01BQ0EsT0FBT08sTUFBTTtJQUNmLENBQUM7SUFDSEUsT0FBTyxFQUFHLG9CQUFtQlYsSUFBSyxFQUFDO0lBQ25DVyxZQUFZLEVBQUU7TUFDVkMsR0FBRyxFQUFHLG9CQUFtQlosSUFBSztJQUNoQztFQUNOO0FBQ0osQ0FBQyxDQUFDIn0=