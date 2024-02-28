function cov_86s9v86pg() {
  var path = "/workspaces/todo_TKKG/backend/validation.js";
  var hash = "8bef7fe08fb6f56abd0271407ee225f8d61a15ec";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspaces/todo_TKKG/backend/validation.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 28
        },
        end: {
          line: 24,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8bef7fe08fb6f56abd0271407ee225f8d61a15ec"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_86s9v86pg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_86s9v86pg();
import { checkSchema } from 'express-validator';
const todoValidationRules = (cov_86s9v86pg().s[0]++, [checkSchema({
  title: {
    exists: {
      errorMessage: 'Titel muss vorhanden sein'
    },
    notEmpty: {
      errorMessage: 'Titel darf nicht leer sein'
    },
    //check if the title is present
    isLength: {
      options: {
        min: 3
      },
      errorMessage: 'Titel muss mindestens 3 Zeichen lang sein'
    }
  },
  due: {
    exists: {
      errorMessage: 'Fälligkeitsdatum muss vorhanden sein'
    },
    notEmpty: {
      errorMessage: 'Fälligkeitsdatum darf nicht leer sein'
    },
    isISO8601: {
      errorMessage: 'Fälligkeitsdatum muss ein gültiges Datum sein'
    }
  },
  status: {
    exists: {
      errorMessage: 'Status muss vorhanden sein'
    },
    notEmpty: {
      errorMessage: 'Status darf nicht leer sein'
    },
    isInt: {
      options: {
        min: 0,
        max: 2
      },
      errorMessage: 'Status muss zwischen 0 und 2 liegen'
    }
  }
})]);
export { todoValidationRules };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfODZzOXY4NnBnIiwiYWN0dWFsQ292ZXJhZ2UiLCJjaGVja1NjaGVtYSIsInRvZG9WYWxpZGF0aW9uUnVsZXMiLCJzIiwidGl0bGUiLCJleGlzdHMiLCJlcnJvck1lc3NhZ2UiLCJub3RFbXB0eSIsImlzTGVuZ3RoIiwib3B0aW9ucyIsIm1pbiIsImR1ZSIsImlzSVNPODYwMSIsInN0YXR1cyIsImlzSW50IiwibWF4Il0sInNvdXJjZXMiOlsidmFsaWRhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NoZWNrU2NoZW1hfSBmcm9tICdleHByZXNzLXZhbGlkYXRvcic7XG5cbmNvbnN0IHRvZG9WYWxpZGF0aW9uUnVsZXMgPSBbXG4gICAgY2hlY2tTY2hlbWEoe1xuICAgICAgICB0aXRsZTp7XG4gICAgICAgICAgICBleGlzdHM6IHtlcnJvck1lc3NhZ2U6ICdUaXRlbCBtdXNzIHZvcmhhbmRlbiBzZWluJ30sXG4gICAgICAgICAgICBub3RFbXB0eToge2Vycm9yTWVzc2FnZTogJ1RpdGVsIGRhcmYgbmljaHQgbGVlciBzZWluJ30sXG4gICAgICAgICAgICAvL2NoZWNrIGlmIHRoZSB0aXRsZSBpcyBwcmVzZW50XG4gICAgICAgICAgICBpc0xlbmd0aDoge29wdGlvbnM6IHsgbWluOiAzIH0sZXJyb3JNZXNzYWdlOiAnVGl0ZWwgbXVzcyBtaW5kZXN0ZW5zIDMgWmVpY2hlbiBsYW5nIHNlaW4nfSAgICAgICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgZHVlOntcbiAgICAgICAgICAgIGV4aXN0czoge2Vycm9yTWVzc2FnZTogJ0bDpGxsaWdrZWl0c2RhdHVtIG11c3Mgdm9yaGFuZGVuIHNlaW4nfSxcbiAgICAgICAgICAgIG5vdEVtcHR5OiB7ZXJyb3JNZXNzYWdlOiAnRsOkbGxpZ2tlaXRzZGF0dW0gZGFyZiBuaWNodCBsZWVyIHNlaW4nfSxcbiAgICAgICAgICAgIGlzSVNPODYwMToge2Vycm9yTWVzc2FnZTogJ0bDpGxsaWdrZWl0c2RhdHVtIG11c3MgZWluIGfDvGx0aWdlcyBEYXR1bSBzZWluJ30sXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXR1czp7XG4gICAgICAgICAgICBleGlzdHM6IHtlcnJvck1lc3NhZ2U6ICdTdGF0dXMgbXVzcyB2b3JoYW5kZW4gc2Vpbid9LFxuICAgICAgICAgICAgbm90RW1wdHk6IHtlcnJvck1lc3NhZ2U6ICdTdGF0dXMgZGFyZiBuaWNodCBsZWVyIHNlaW4nfSxcbiAgICAgICAgICAgIGlzSW50OiB7XG4gICAgICAgICAgICAgICAgb3B0aW9uczp7bWluOjAsIG1heDoyfSwgXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnU3RhdHVzIG11c3Mgendpc2NoZW4gMCB1bmQgMiBsaWVnZW4nfVxuICAgICAgICB9XG4gICAgfSlcbl07XG5cbmV4cG9ydCB7dG9kb1ZhbGlkYXRpb25SdWxlc307Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGFBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGFBQUE7QUFmWixTQUFRRSxXQUFXLFFBQU8sbUJBQW1CO0FBRTdDLE1BQU1DLG1CQUFtQixJQUFBSCxhQUFBLEdBQUFJLENBQUEsT0FBRyxDQUN4QkYsV0FBVyxDQUFDO0VBQ1JHLEtBQUssRUFBQztJQUNGQyxNQUFNLEVBQUU7TUFBQ0MsWUFBWSxFQUFFO0lBQTJCLENBQUM7SUFDbkRDLFFBQVEsRUFBRTtNQUFDRCxZQUFZLEVBQUU7SUFBNEIsQ0FBQztJQUN0RDtJQUNBRSxRQUFRLEVBQUU7TUFBQ0MsT0FBTyxFQUFFO1FBQUVDLEdBQUcsRUFBRTtNQUFFLENBQUM7TUFBQ0osWUFBWSxFQUFFO0lBQTJDO0VBQzVGLENBQUM7RUFDREssR0FBRyxFQUFDO0lBQ0FOLE1BQU0sRUFBRTtNQUFDQyxZQUFZLEVBQUU7SUFBc0MsQ0FBQztJQUM5REMsUUFBUSxFQUFFO01BQUNELFlBQVksRUFBRTtJQUF1QyxDQUFDO0lBQ2pFTSxTQUFTLEVBQUU7TUFBQ04sWUFBWSxFQUFFO0lBQStDO0VBQzdFLENBQUM7RUFDRE8sTUFBTSxFQUFDO0lBQ0hSLE1BQU0sRUFBRTtNQUFDQyxZQUFZLEVBQUU7SUFBNEIsQ0FBQztJQUNwREMsUUFBUSxFQUFFO01BQUNELFlBQVksRUFBRTtJQUE2QixDQUFDO0lBQ3ZEUSxLQUFLLEVBQUU7TUFDSEwsT0FBTyxFQUFDO1FBQUNDLEdBQUcsRUFBQyxDQUFDO1FBQUVLLEdBQUcsRUFBQztNQUFDLENBQUM7TUFDdEJULFlBQVksRUFBRTtJQUFxQztFQUMzRDtBQUNKLENBQUMsQ0FBQyxDQUNMO0FBRUQsU0FBUUosbUJBQW1CIn0=