function cov_3ishqgn6l() {
  var path = "/workspaces/todo_TKKG/backend/cypress.config.js";
  var hash = "7acb0a1fbc2bd7f4411ccfd9648089cdf1edf073";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspaces/todo_TKKG/backend/cypress.config.js",
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
    hash: "7acb0a1fbc2bd7f4411ccfd9648089cdf1edf073"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_3ishqgn6l = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_3ishqgn6l();
import { defineConfig } from 'cypress';
import require from 'requirejs';
const PORT = (cov_3ishqgn6l().s[0]++, (cov_3ishqgn6l().b[0][0]++, process.env.PORT) || (cov_3ishqgn6l().b[0][1]++, 3000));
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cov_3ishqgn6l().f[0]++;
      cov_3ishqgn6l().s[1]++;
      require('@cypress/code-coverage/task')(on, config);
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      cov_3ishqgn6l().s[2]++;
      return config;
    },
    baseUrl: `http://localhost:${PORT}`
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfM2lzaHFnbjZsIiwiYWN0dWFsQ292ZXJhZ2UiLCJkZWZpbmVDb25maWciLCJyZXF1aXJlIiwiUE9SVCIsInMiLCJiIiwicHJvY2VzcyIsImVudiIsImUyZSIsInNldHVwTm9kZUV2ZW50cyIsIm9uIiwiY29uZmlnIiwiZiIsImJhc2VVcmwiXSwic291cmNlcyI6WyJjeXByZXNzLmNvbmZpZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICdjeXByZXNzJ1xuaW1wb3J0IHJlcXVpcmUgZnJvbSAncmVxdWlyZWpzJ1xuXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIGUyZToge1xuICAgICAgICBzZXR1cE5vZGVFdmVudHMob24sIGNvbmZpZykge1xuICAgICAgICAgICAgcmVxdWlyZSgnQGN5cHJlc3MvY29kZS1jb3ZlcmFnZS90YXNrJykob24sIGNvbmZpZylcbiAgICAgICAgICAgIC8vIGluY2x1ZGUgYW55IG90aGVyIHBsdWdpbiBjb2RlLi4uXG4gICAgICBcbiAgICAgICAgICAgIC8vIEl0J3MgSU1QT1JUQU5UIHRvIHJldHVybiB0aGUgY29uZmlnIG9iamVjdFxuICAgICAgICAgICAgLy8gd2l0aCBhbnkgY2hhbmdlZCBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAgICAgICAgICAgIHJldHVybiBjb25maWdcbiAgICAgICAgICB9LFxuICAgICAgICBiYXNlVXJsOiBgaHR0cDovL2xvY2FsaG9zdDoke1BPUlR9YCxcbiAgICB9LFxufSlcblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxhQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxhQUFBO0FBZlosU0FBU0UsWUFBWSxRQUFRLFNBQVM7QUFDdEMsT0FBT0MsT0FBTyxNQUFNLFdBQVc7QUFFL0IsTUFBTUMsSUFBSSxJQUFBSixhQUFBLEdBQUFLLENBQUEsT0FBRyxDQUFBTCxhQUFBLEdBQUFNLENBQUEsVUFBQUMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksTUFBQUosYUFBQSxHQUFBTSxDQUFBLFVBQUksSUFBSTtBQUVyQyxlQUFlSixZQUFZLENBQUM7RUFDeEJPLEdBQUcsRUFBRTtJQUNEQyxlQUFlQSxDQUFDQyxFQUFFLEVBQUVDLE1BQU0sRUFBRTtNQUFBWixhQUFBLEdBQUFhLENBQUE7TUFBQWIsYUFBQSxHQUFBSyxDQUFBO01BQ3hCRixPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQ1EsRUFBRSxFQUFFQyxNQUFNLENBQUM7TUFDbEQ7O01BRUE7TUFDQTtNQUFBWixhQUFBLEdBQUFLLENBQUE7TUFDQSxPQUFPTyxNQUFNO0lBQ2YsQ0FBQztJQUNIRSxPQUFPLEVBQUcsb0JBQW1CVixJQUFLO0VBQ3RDO0FBQ0osQ0FBQyxDQUFDIn0=