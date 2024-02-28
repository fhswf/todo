function cov_19i5y7wx7j() {
  var path = "C:\\Users\\timga\\Downloads\\todo_TKKG\\backend\\validation.js";
  var hash = "12156cf0fe5ffba44f5cb3d5ecfdbaf46d164414";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timga\\Downloads\\todo_TKKG\\backend\\validation.js",
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
    hash: "12156cf0fe5ffba44f5cb3d5ecfdbaf46d164414"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_19i5y7wx7j = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_19i5y7wx7j();
import { checkSchema } from 'express-validator';
const todoValidationRules = (cov_19i5y7wx7j().s[0]++, [checkSchema({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTlpNXk3d3g3aiIsImFjdHVhbENvdmVyYWdlIiwiY2hlY2tTY2hlbWEiLCJ0b2RvVmFsaWRhdGlvblJ1bGVzIiwicyIsInRpdGxlIiwiZXhpc3RzIiwiZXJyb3JNZXNzYWdlIiwibm90RW1wdHkiLCJpc0xlbmd0aCIsIm9wdGlvbnMiLCJtaW4iLCJkdWUiLCJpc0lTTzg2MDEiLCJzdGF0dXMiLCJpc0ludCIsIm1heCJdLCJzb3VyY2VzIjpbInZhbGlkYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjaGVja1NjaGVtYX0gZnJvbSAnZXhwcmVzcy12YWxpZGF0b3InO1xyXG5cclxuY29uc3QgdG9kb1ZhbGlkYXRpb25SdWxlcyA9IFtcclxuICAgIGNoZWNrU2NoZW1hKHtcclxuICAgICAgICB0aXRsZTp7XHJcbiAgICAgICAgICAgIGV4aXN0czoge2Vycm9yTWVzc2FnZTogJ1RpdGVsIG11c3Mgdm9yaGFuZGVuIHNlaW4nfSxcclxuICAgICAgICAgICAgbm90RW1wdHk6IHtlcnJvck1lc3NhZ2U6ICdUaXRlbCBkYXJmIG5pY2h0IGxlZXIgc2Vpbid9LFxyXG4gICAgICAgICAgICAvL2NoZWNrIGlmIHRoZSB0aXRsZSBpcyBwcmVzZW50XHJcbiAgICAgICAgICAgIGlzTGVuZ3RoOiB7b3B0aW9uczogeyBtaW46IDMgfSxlcnJvck1lc3NhZ2U6ICdUaXRlbCBtdXNzIG1pbmRlc3RlbnMgMyBaZWljaGVuIGxhbmcgc2Vpbid9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHVlOntcclxuICAgICAgICAgICAgZXhpc3RzOiB7ZXJyb3JNZXNzYWdlOiAnRsOkbGxpZ2tlaXRzZGF0dW0gbXVzcyB2b3JoYW5kZW4gc2Vpbid9LFxyXG4gICAgICAgICAgICBub3RFbXB0eToge2Vycm9yTWVzc2FnZTogJ0bDpGxsaWdrZWl0c2RhdHVtIGRhcmYgbmljaHQgbGVlciBzZWluJ30sXHJcbiAgICAgICAgICAgIGlzSVNPODYwMToge2Vycm9yTWVzc2FnZTogJ0bDpGxsaWdrZWl0c2RhdHVtIG11c3MgZWluIGfDvGx0aWdlcyBEYXR1bSBzZWluJ30sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGF0dXM6e1xyXG4gICAgICAgICAgICBleGlzdHM6IHtlcnJvck1lc3NhZ2U6ICdTdGF0dXMgbXVzcyB2b3JoYW5kZW4gc2Vpbid9LFxyXG4gICAgICAgICAgICBub3RFbXB0eToge2Vycm9yTWVzc2FnZTogJ1N0YXR1cyBkYXJmIG5pY2h0IGxlZXIgc2Vpbid9LFxyXG4gICAgICAgICAgICBpc0ludDoge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uczp7bWluOjAsIG1heDoyfSwgXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdTdGF0dXMgbXVzcyB6d2lzY2hlbiAwIHVuZCAyIGxpZWdlbid9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXTtcclxuXHJcbmV4cG9ydCB7dG9kb1ZhbGlkYXRpb25SdWxlc307Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixTQUFRRSxXQUFXLFFBQU8sbUJBQW1CO0FBRTdDLE1BQU1DLG1CQUFtQixJQUFBSCxjQUFBLEdBQUFJLENBQUEsT0FBRyxDQUN4QkYsV0FBVyxDQUFDO0VBQ1JHLEtBQUssRUFBQztJQUNGQyxNQUFNLEVBQUU7TUFBQ0MsWUFBWSxFQUFFO0lBQTJCLENBQUM7SUFDbkRDLFFBQVEsRUFBRTtNQUFDRCxZQUFZLEVBQUU7SUFBNEIsQ0FBQztJQUN0RDtJQUNBRSxRQUFRLEVBQUU7TUFBQ0MsT0FBTyxFQUFFO1FBQUVDLEdBQUcsRUFBRTtNQUFFLENBQUM7TUFBQ0osWUFBWSxFQUFFO0lBQTJDO0VBQzVGLENBQUM7RUFDREssR0FBRyxFQUFDO0lBQ0FOLE1BQU0sRUFBRTtNQUFDQyxZQUFZLEVBQUU7SUFBc0MsQ0FBQztJQUM5REMsUUFBUSxFQUFFO01BQUNELFlBQVksRUFBRTtJQUF1QyxDQUFDO0lBQ2pFTSxTQUFTLEVBQUU7TUFBQ04sWUFBWSxFQUFFO0lBQStDO0VBQzdFLENBQUM7RUFDRE8sTUFBTSxFQUFDO0lBQ0hSLE1BQU0sRUFBRTtNQUFDQyxZQUFZLEVBQUU7SUFBNEIsQ0FBQztJQUNwREMsUUFBUSxFQUFFO01BQUNELFlBQVksRUFBRTtJQUE2QixDQUFDO0lBQ3ZEUSxLQUFLLEVBQUU7TUFDSEwsT0FBTyxFQUFDO1FBQUNDLEdBQUcsRUFBQyxDQUFDO1FBQUVLLEdBQUcsRUFBQztNQUFDLENBQUM7TUFDdEJULFlBQVksRUFBRTtJQUFxQztFQUMzRDtBQUNKLENBQUMsQ0FBQyxDQUNMO0FBRUQsU0FBUUosbUJBQW1CIn0=