function cov_q0iczhzin() {
  var path = "C:\\Users\\timga\\Downloads\\todo_TKKG\\backend\\instrumented\\validation.js";
  var hash = "bd866e651d4f8633d6b55569c451092eb7509eea";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timga\\Downloads\\todo_TKKG\\backend\\instrumented\\validation.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 13
        },
        end: {
          line: 2,
          column: 77
        }
      },
      "1": {
        start: {
          line: 3,
          column: 13
        },
        end: {
          line: 3,
          column: 55
        }
      },
      "2": {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 4,
          column: 44
        }
      },
      "3": {
        start: {
          line: 5,
          column: 12
        },
        end: {
          line: 5,
          column: 26
        }
      },
      "4": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "5": {
        start: {
          line: 30,
          column: 17
        },
        end: {
          line: 30,
          column: 50
        }
      },
      "6": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "7": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 34
        }
      },
      "8": {
        start: {
          line: 34,
          column: 23
        },
        end: {
          line: 34,
          column: 37
        }
      },
      "9": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 39,
          column: 6
        }
      },
      "10": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 38,
          column: 28
        }
      },
      "11": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 41,
          column: 24
        }
      },
      "12": {
        start: {
          line: 43,
          column: 0
        },
        end: {
          line: 43,
          column: 17
        }
      },
      "13": {
        start: {
          line: 45,
          column: 29
        },
        end: {
          line: 87,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "cov_19i5y7wx7j",
        decl: {
          start: {
            line: 1,
            column: 9
          },
          end: {
            line: 1,
            column: 23
          }
        },
        loc: {
          start: {
            line: 1,
            column: 26
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 37,
            column: 21
          },
          end: {
            line: 37,
            column: 22
          }
        },
        loc: {
          start: {
            line: 37,
            column: 33
          },
          end: {
            line: 39,
            column: 5
          }
        },
        line: 37
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 30,
            column: 17
          },
          end: {
            line: 30,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 30,
            column: 17
          },
          end: {
            line: 30,
            column: 28
          }
        }, {
          start: {
            line: 30,
            column: 33
          },
          end: {
            line: 30,
            column: 49
          }
        }],
        line: 30
      },
      "1": {
        loc: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        }, {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        }],
        line: 31
      },
      "2": {
        loc: {
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 31,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 31,
            column: 21
          }
        }, {
          start: {
            line: 31,
            column: 25
          },
          end: {
            line: 31,
            column: 53
          }
        }],
        line: 31
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      names: ["cov_19i5y7wx7j", "actualCoverage", "checkSchema", "todoValidationRules", "s", "title", "exists", "errorMessage", "notEmpty", "isLength", "options", "min", "due", "isISO8601", "status", "isInt", "max"],
      sources: ["validation.js"],
      sourcesContent: ["import {checkSchema} from 'express-validator';\r\n\r\nconst todoValidationRules = [\r\n    checkSchema({\r\n        title:{\r\n            exists: {errorMessage: 'Titel muss vorhanden sein'},\r\n            notEmpty: {errorMessage: 'Titel darf nicht leer sein'},\r\n            //check if the title is present\r\n            isLength: {options: { min: 3 },errorMessage: 'Titel muss mindestens 3 Zeichen lang sein'}                \r\n        },\r\n        due:{\r\n            exists: {errorMessage: 'F\xE4lligkeitsdatum muss vorhanden sein'},\r\n            notEmpty: {errorMessage: 'F\xE4lligkeitsdatum darf nicht leer sein'},\r\n            isISO8601: {errorMessage: 'F\xE4lligkeitsdatum muss ein g\xFCltiges Datum sein'},\r\n        },\r\n        status:{\r\n            exists: {errorMessage: 'Status muss vorhanden sein'},\r\n            notEmpty: {errorMessage: 'Status darf nicht leer sein'},\r\n            isInt: {\r\n                options:{min:0, max:2}, \r\n                errorMessage: 'Status muss zwischen 0 und 2 liegen'}\r\n        }\r\n    })\r\n];\r\n\r\nexport {todoValidationRules};"],
      mappings: ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAeY;IAAAA,cAAA,YAAAA,CAAA;MAAA,OAAAC,cAAA;IAAA;EAAA;EAAA,OAAAA,cAAA;AAAA;AAAAD,cAAA;AAfZ,SAAQE,WAAW,QAAO,mBAAmB;AAE7C,MAAMC,mBAAmB,IAAAH,cAAA,GAAAI,CAAA,OAAG,CACxBF,WAAW,CAAC;EACRG,KAAK,EAAC;IACFC,MAAM,EAAE;MAACC,YAAY,EAAE;IAA2B,CAAC;IACnDC,QAAQ,EAAE;MAACD,YAAY,EAAE;IAA4B,CAAC;IACtD;IACAE,QAAQ,EAAE;MAACC,OAAO,EAAE;QAAEC,GAAG,EAAE;MAAE,CAAC;MAACJ,YAAY,EAAE;IAA2C;EAC5F,CAAC;EACDK,GAAG,EAAC;IACAN,MAAM,EAAE;MAACC,YAAY,EAAE;IAAsC,CAAC;IAC9DC,QAAQ,EAAE;MAACD,YAAY,EAAE;IAAuC,CAAC;IACjEM,SAAS,EAAE;MAACN,YAAY,EAAE;IAA+C;EAC7E,CAAC;EACDO,MAAM,EAAC;IACHR,MAAM,EAAE;MAACC,YAAY,EAAE;IAA4B,CAAC;IACpDC,QAAQ,EAAE;MAACD,YAAY,EAAE;IAA6B,CAAC;IACvDQ,KAAK,EAAE;MACHL,OAAO,EAAC;QAACC,GAAG,EAAC,CAAC;QAAEK,GAAG,EAAC;MAAC,CAAC;MACtBT,YAAY,EAAE;IAAqC;EAC3D;AACJ,CAAC,CAAC,CACL;AAED,SAAQJ,mBAAmB"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bd866e651d4f8633d6b55569c451092eb7509eea"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_q0iczhzin = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_q0iczhzin();
function cov_19i5y7wx7j() {
  cov_q0iczhzin().f[0]++;
  var path = (cov_q0iczhzin().s[0]++, "C:\\Users\\timga\\Downloads\\todo_TKKG\\backend\\validation.js");
  var hash = (cov_q0iczhzin().s[1]++, "12156cf0fe5ffba44f5cb3d5ecfdbaf46d164414");
  var global = (cov_q0iczhzin().s[2]++, new Function("return this")());
  var gcv = (cov_q0iczhzin().s[3]++, "__coverage__");
  var coverageData = (cov_q0iczhzin().s[4]++, {
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
  });
  var coverage = (cov_q0iczhzin().s[5]++, (cov_q0iczhzin().b[0][0]++, global[gcv]) || (cov_q0iczhzin().b[0][1]++, global[gcv] = {}));
  cov_q0iczhzin().s[6]++;
  if ((cov_q0iczhzin().b[2][0]++, !coverage[path]) || (cov_q0iczhzin().b[2][1]++, coverage[path].hash !== hash)) {
    cov_q0iczhzin().b[1][0]++;
    cov_q0iczhzin().s[7]++;
    coverage[path] = coverageData;
  } else {
    cov_q0iczhzin().b[1][1]++;
  }
  var actualCoverage = (cov_q0iczhzin().s[8]++, coverage[path]);
  {
    cov_q0iczhzin().s[9]++;
    // @ts-ignore
    cov_19i5y7wx7j = function () {
      cov_q0iczhzin().f[1]++;
      cov_q0iczhzin().s[10]++;
      return actualCoverage;
    };
  }
  cov_q0iczhzin().s[11]++;
  return actualCoverage;
}
cov_q0iczhzin().s[12]++;
cov_19i5y7wx7j();
import { checkSchema } from 'express-validator';
const todoValidationRules = (cov_q0iczhzin().s[13]++, (cov_19i5y7wx7j().s[0]++, [checkSchema({
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
})]));
export { todoValidationRules };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTlpNXk3d3g3aiIsImFjdHVhbENvdmVyYWdlIiwiY2hlY2tTY2hlbWEiLCJ0b2RvVmFsaWRhdGlvblJ1bGVzIiwicyIsInRpdGxlIiwiZXhpc3RzIiwiZXJyb3JNZXNzYWdlIiwibm90RW1wdHkiLCJpc0xlbmd0aCIsIm9wdGlvbnMiLCJtaW4iLCJkdWUiLCJpc0lTTzg2MDEiLCJzdGF0dXMiLCJpc0ludCIsIm1heCJdLCJzb3VyY2VzIjpbInZhbGlkYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjaGVja1NjaGVtYX0gZnJvbSAnZXhwcmVzcy12YWxpZGF0b3InO1xyXG5cclxuY29uc3QgdG9kb1ZhbGlkYXRpb25SdWxlcyA9IFtcclxuICAgIGNoZWNrU2NoZW1hKHtcclxuICAgICAgICB0aXRsZTp7XHJcbiAgICAgICAgICAgIGV4aXN0czoge2Vycm9yTWVzc2FnZTogJ1RpdGVsIG11c3Mgdm9yaGFuZGVuIHNlaW4nfSxcclxuICAgICAgICAgICAgbm90RW1wdHk6IHtlcnJvck1lc3NhZ2U6ICdUaXRlbCBkYXJmIG5pY2h0IGxlZXIgc2Vpbid9LFxyXG4gICAgICAgICAgICAvL2NoZWNrIGlmIHRoZSB0aXRsZSBpcyBwcmVzZW50XHJcbiAgICAgICAgICAgIGlzTGVuZ3RoOiB7b3B0aW9uczogeyBtaW46IDMgfSxlcnJvck1lc3NhZ2U6ICdUaXRlbCBtdXNzIG1pbmRlc3RlbnMgMyBaZWljaGVuIGxhbmcgc2Vpbid9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHVlOntcclxuICAgICAgICAgICAgZXhpc3RzOiB7ZXJyb3JNZXNzYWdlOiAnRsOkbGxpZ2tlaXRzZGF0dW0gbXVzcyB2b3JoYW5kZW4gc2Vpbid9LFxyXG4gICAgICAgICAgICBub3RFbXB0eToge2Vycm9yTWVzc2FnZTogJ0bDpGxsaWdrZWl0c2RhdHVtIGRhcmYgbmljaHQgbGVlciBzZWluJ30sXHJcbiAgICAgICAgICAgIGlzSVNPODYwMToge2Vycm9yTWVzc2FnZTogJ0bDpGxsaWdrZWl0c2RhdHVtIG11c3MgZWluIGfDvGx0aWdlcyBEYXR1bSBzZWluJ30sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGF0dXM6e1xyXG4gICAgICAgICAgICBleGlzdHM6IHtlcnJvck1lc3NhZ2U6ICdTdGF0dXMgbXVzcyB2b3JoYW5kZW4gc2Vpbid9LFxyXG4gICAgICAgICAgICBub3RFbXB0eToge2Vycm9yTWVzc2FnZTogJ1N0YXR1cyBkYXJmIG5pY2h0IGxlZXIgc2Vpbid9LFxyXG4gICAgICAgICAgICBpc0ludDoge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uczp7bWluOjAsIG1heDoyfSwgXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdTdGF0dXMgbXVzcyB6d2lzY2hlbiAwIHVuZCAyIGxpZWdlbid9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXTtcclxuXHJcbmV4cG9ydCB7dG9kb1ZhbGlkYXRpb25SdWxlc307Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixTQUFRRSxXQUFXLFFBQU8sbUJBQW1CO0FBRTdDLE1BQU1DLG1CQUFtQixJQUFBSCxjQUFBLEdBQUFJLENBQUEsT0FBRyxDQUN4QkYsV0FBVyxDQUFDO0VBQ1JHLEtBQUssRUFBQztJQUNGQyxNQUFNLEVBQUU7TUFBQ0MsWUFBWSxFQUFFO0lBQTJCLENBQUM7SUFDbkRDLFFBQVEsRUFBRTtNQUFDRCxZQUFZLEVBQUU7SUFBNEIsQ0FBQztJQUN0RDtJQUNBRSxRQUFRLEVBQUU7TUFBQ0MsT0FBTyxFQUFFO1FBQUVDLEdBQUcsRUFBRTtNQUFFLENBQUM7TUFBQ0osWUFBWSxFQUFFO0lBQTJDO0VBQzVGLENBQUM7RUFDREssR0FBRyxFQUFDO0lBQ0FOLE1BQU0sRUFBRTtNQUFDQyxZQUFZLEVBQUU7SUFBc0MsQ0FBQztJQUM5REMsUUFBUSxFQUFFO01BQUNELFlBQVksRUFBRTtJQUF1QyxDQUFDO0lBQ2pFTSxTQUFTLEVBQUU7TUFBQ04sWUFBWSxFQUFFO0lBQStDO0VBQzdFLENBQUM7RUFDRE8sTUFBTSxFQUFDO0lBQ0hSLE1BQU0sRUFBRTtNQUFDQyxZQUFZLEVBQUU7SUFBNEIsQ0FBQztJQUNwREMsUUFBUSxFQUFFO01BQUNELFlBQVksRUFBRTtJQUE2QixDQUFDO0lBQ3ZEUSxLQUFLLEVBQUU7TUFDSEwsT0FBTyxFQUFDO1FBQUNDLEdBQUcsRUFBQyxDQUFDO1FBQUVLLEdBQUcsRUFBQztNQUFDLENBQUM7TUFDdEJULFlBQVksRUFBRTtJQUFxQztFQUMzRDtBQUNKLENBQUMsQ0FBQyxDQUNMO0FBRUQsU0FBUUosbUJBQW1CIn0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTlpNXk3d3g3aiIsImNvdl9xMGljemh6aW4iLCJmIiwicyIsImFjdHVhbENvdmVyYWdlIiwiY2hlY2tTY2hlbWEiLCJ0b2RvVmFsaWRhdGlvblJ1bGVzIiwidGl0bGUiLCJleGlzdHMiLCJlcnJvck1lc3NhZ2UiLCJub3RFbXB0eSIsImlzTGVuZ3RoIiwib3B0aW9ucyIsIm1pbiIsImR1ZSIsImlzSVNPODYwMSIsInN0YXR1cyIsImlzSW50IiwibWF4Il0sInNvdXJjZXMiOlsidmFsaWRhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NoZWNrU2NoZW1hfSBmcm9tICdleHByZXNzLXZhbGlkYXRvcic7XHJcblxyXG5jb25zdCB0b2RvVmFsaWRhdGlvblJ1bGVzID0gW1xyXG4gICAgY2hlY2tTY2hlbWEoe1xyXG4gICAgICAgIHRpdGxlOntcclxuICAgICAgICAgICAgZXhpc3RzOiB7ZXJyb3JNZXNzYWdlOiAnVGl0ZWwgbXVzcyB2b3JoYW5kZW4gc2Vpbid9LFxyXG4gICAgICAgICAgICBub3RFbXB0eToge2Vycm9yTWVzc2FnZTogJ1RpdGVsIGRhcmYgbmljaHQgbGVlciBzZWluJ30sXHJcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgdGhlIHRpdGxlIGlzIHByZXNlbnRcclxuICAgICAgICAgICAgaXNMZW5ndGg6IHtvcHRpb25zOiB7IG1pbjogMyB9LGVycm9yTWVzc2FnZTogJ1RpdGVsIG11c3MgbWluZGVzdGVucyAzIFplaWNoZW4gbGFuZyBzZWluJ30gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdWU6e1xyXG4gICAgICAgICAgICBleGlzdHM6IHtlcnJvck1lc3NhZ2U6ICdGw6RsbGlna2VpdHNkYXR1bSBtdXNzIHZvcmhhbmRlbiBzZWluJ30sXHJcbiAgICAgICAgICAgIG5vdEVtcHR5OiB7ZXJyb3JNZXNzYWdlOiAnRsOkbGxpZ2tlaXRzZGF0dW0gZGFyZiBuaWNodCBsZWVyIHNlaW4nfSxcclxuICAgICAgICAgICAgaXNJU084NjAxOiB7ZXJyb3JNZXNzYWdlOiAnRsOkbGxpZ2tlaXRzZGF0dW0gbXVzcyBlaW4gZ8O8bHRpZ2VzIERhdHVtIHNlaW4nfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXR1czp7XHJcbiAgICAgICAgICAgIGV4aXN0czoge2Vycm9yTWVzc2FnZTogJ1N0YXR1cyBtdXNzIHZvcmhhbmRlbiBzZWluJ30sXHJcbiAgICAgICAgICAgIG5vdEVtcHR5OiB7ZXJyb3JNZXNzYWdlOiAnU3RhdHVzIGRhcmYgbmljaHQgbGVlciBzZWluJ30sXHJcbiAgICAgICAgICAgIGlzSW50OiB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOnttaW46MCwgbWF4OjJ9LCBcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1N0YXR1cyBtdXNzIHp3aXNjaGVuIDAgdW5kIDIgbGllZ2VuJ31cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5dO1xyXG5cclxuZXhwb3J0IHt0b2RvVmFsaWRhdGlvblJ1bGVzfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQUMsYUFBQSxHQUFBQyxDQUFBO01BQUFELGFBQUEsR0FBQUUsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUFILGFBQUEsR0FBQUUsQ0FBQTtFQUFBLE9BQUFDLGNBQUE7QUFBQTtBQUFBSCxhQUFBLEdBQUFFLENBQUE7QUFBQUgsY0FBQTtBQWZaLFNBQVFLLFdBQVcsUUFBTyxtQkFBbUI7QUFFN0MsTUFBTUMsbUJBQW1CLElBQUFMLGFBQUEsR0FBQUUsQ0FBQSxTQUFBSCxjQUFBLEdBQUFHLENBQUEsT0FBRyxDQUN4QkUsV0FBVyxDQUFDO0VBQ1JFLEtBQUssRUFBQztJQUNGQyxNQUFNLEVBQUU7TUFBQ0MsWUFBWSxFQUFFO0lBQTJCLENBQUM7SUFDbkRDLFFBQVEsRUFBRTtNQUFDRCxZQUFZLEVBQUU7SUFBNEIsQ0FBQztJQUN0RDtJQUNBRSxRQUFRLEVBQUU7TUFBQ0MsT0FBTyxFQUFFO1FBQUVDLEdBQUcsRUFBRTtNQUFFLENBQUM7TUFBQ0osWUFBWSxFQUFFO0lBQTJDO0VBQzVGLENBQUM7RUFDREssR0FBRyxFQUFDO0lBQ0FOLE1BQU0sRUFBRTtNQUFDQyxZQUFZLEVBQUU7SUFBc0MsQ0FBQztJQUM5REMsUUFBUSxFQUFFO01BQUNELFlBQVksRUFBRTtJQUF1QyxDQUFDO0lBQ2pFTSxTQUFTLEVBQUU7TUFBQ04sWUFBWSxFQUFFO0lBQStDO0VBQzdFLENBQUM7RUFDRE8sTUFBTSxFQUFDO0lBQ0hSLE1BQU0sRUFBRTtNQUFDQyxZQUFZLEVBQUU7SUFBNEIsQ0FBQztJQUNwREMsUUFBUSxFQUFFO01BQUNELFlBQVksRUFBRTtJQUE2QixDQUFDO0lBQ3ZEUSxLQUFLLEVBQUU7TUFDSEwsT0FBTyxFQUFDO1FBQUNDLEdBQUcsRUFBQyxDQUFDO1FBQUVLLEdBQUcsRUFBQztNQUFDLENBQUM7TUFDdEJULFlBQVksRUFBRTtJQUFxQztFQUMzRDtBQUNKLENBQUMsQ0FBQyxDQUNMO0FBRUQsU0FBUUgsbUJBQW1CIn0=