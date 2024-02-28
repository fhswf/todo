function cov_w5o8ph9ut() {
  var path = "C:\\Users\\timga\\Downloads\\todo_TKKG\\backend\\auth.js";
  var hash = "206a900a4e892f027f44c392da649f786941921d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timga\\Downloads\\todo_TKKG\\backend\\auth.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 5,
          column: 17
        }
      },
      "1": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 25,
          column: 22
        }
      },
      "2": {
        start: {
          line: 7,
          column: 39
        },
        end: {
          line: 25,
          column: 22
        }
      },
      "3": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 22,
          column: 9
        }
      },
      "4": {
        start: {
          line: 13,
          column: 23
        },
        end: {
          line: 13,
          column: 41
        }
      },
      "5": {
        start: {
          line: 14,
          column: 12
        },
        end: {
          line: 14,
          column: 34
        }
      },
      "6": {
        start: {
          line: 15,
          column: 24
        },
        end: {
          line: 15,
          column: 60
        }
      },
      "7": {
        start: {
          line: 16,
          column: 12
        },
        end: {
          line: 16,
          column: 42
        }
      },
      "8": {
        start: {
          line: 17,
          column: 12
        },
        end: {
          line: 17,
          column: 42
        }
      },
      "9": {
        start: {
          line: 18,
          column: 12
        },
        end: {
          line: 18,
          column: 75
        }
      },
      "10": {
        start: {
          line: 19,
          column: 12
        },
        end: {
          line: 19,
          column: 27
        }
      },
      "11": {
        start: {
          line: 20,
          column: 12
        },
        end: {
          line: 20,
          column: 47
        }
      },
      "12": {
        start: {
          line: 21,
          column: 12
        },
        end: {
          line: 21,
          column: 18
        }
      },
      "13": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 19
          },
          end: {
            line: 7,
            column: 20
          }
        },
        loc: {
          start: {
            line: 7,
            column: 39
          },
          end: {
            line: 25,
            column: 22
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        },
        loc: {
          start: {
            line: 9,
            column: 25
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 8
          },
          end: {
            line: 22,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 8
          },
          end: {
            line: 22,
            column: 9
          }
        }, {
          start: {
            line: 12,
            column: 8
          },
          end: {
            line: 22,
            column: 9
          }
        }],
        line: 12
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
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "206a900a4e892f027f44c392da649f786941921d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_w5o8ph9ut = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_w5o8ph9ut();
import passport from 'passport';
import { getRandomValues } from 'crypto';
let state_dict = (cov_w5o8ph9ut().s[0]++, {});
cov_w5o8ph9ut().s[1]++;
let authenticate = (req, res, next) => {
  cov_w5o8ph9ut().f[0]++;
  cov_w5o8ph9ut().s[2]++;
  return passport.authenticate('jwt', {
    session: false
  }, (err, user, info) => {
    cov_w5o8ph9ut().f[1]++;
    cov_w5o8ph9ut().s[3]++;
    //console.log("authenticate: %j %j %j", err, user, info)
    if (!user) {
      cov_w5o8ph9ut().b[0][0]++;
      let data = (cov_w5o8ph9ut().s[4]++, new Uint8Array(16));
      cov_w5o8ph9ut().s[5]++;
      getRandomValues(data);
      let state = (cov_w5o8ph9ut().s[6]++, Buffer.from(data).toString('base64'));
      cov_w5o8ph9ut().s[7]++;
      state_dict[state] = Date.now();
      cov_w5o8ph9ut().s[8]++;
      console.log(state_dict[state]);
      cov_w5o8ph9ut().s[9]++;
      res.cookie("state", state, {
        maxAge: 900000,
        httpOnly: false
      });
      cov_w5o8ph9ut().s[10]++;
      res.status(401);
      cov_w5o8ph9ut().s[11]++;
      res.send({
        error: "Unauthorized"
      });
      cov_w5o8ph9ut().s[12]++;
      return;
    } else {
      cov_w5o8ph9ut().b[0][1]++;
    }
    cov_w5o8ph9ut().s[13]++;
    next();
  })(req, res, next);
};
export { authenticate, state_dict };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfdzVvOHBoOXV0IiwiYWN0dWFsQ292ZXJhZ2UiLCJwYXNzcG9ydCIsImdldFJhbmRvbVZhbHVlcyIsInN0YXRlX2RpY3QiLCJzIiwiYXV0aGVudGljYXRlIiwicmVxIiwicmVzIiwibmV4dCIsImYiLCJzZXNzaW9uIiwiZXJyIiwidXNlciIsImluZm8iLCJiIiwiZGF0YSIsIlVpbnQ4QXJyYXkiLCJzdGF0ZSIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIkRhdGUiLCJub3ciLCJjb25zb2xlIiwibG9nIiwiY29va2llIiwibWF4QWdlIiwiaHR0cE9ubHkiLCJzdGF0dXMiLCJzZW5kIiwiZXJyb3IiXSwic291cmNlcyI6WyJhdXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21WYWx1ZXMgfSBmcm9tICdjcnlwdG8nO1xyXG5cclxubGV0IHN0YXRlX2RpY3Q9e307XHJcblxyXG5sZXQgYXV0aGVudGljYXRlID0gKHJlcSwgcmVzLCBuZXh0KSA9PiBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsXHJcbiAgICB7IHNlc3Npb246IGZhbHNlIH0sXHJcbiAgICAoZXJyLCB1c2VyLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImF1dGhlbnRpY2F0ZTogJWogJWogJWpcIiwgZXJyLCB1c2VyLCBpbmZvKVxyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KDE2KTtcclxuICAgICAgICAgICAgZ2V0UmFuZG9tVmFsdWVzKGRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBCdWZmZXIuZnJvbShkYXRhKS50b1N0cmluZygnYmFzZTY0Jyk7XHJcbiAgICAgICAgICAgIHN0YXRlX2RpY3Rbc3RhdGVdID0gRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZV9kaWN0W3N0YXRlXSlcclxuICAgICAgICAgICAgcmVzLmNvb2tpZShcInN0YXRlXCIsIHN0YXRlLCB7IG1heEFnZTogOTAwMDAwLCBodHRwT25seTogZmFsc2UgfSlcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDEpXHJcbiAgICAgICAgICAgIHJlcy5zZW5kKHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXh0KClcclxuICAgIH0pKHJlcSwgcmVzLCBuZXh0KVxyXG5cclxuXHJcbmV4cG9ydCB7YXV0aGVudGljYXRlLCBzdGF0ZV9kaWN0fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxhQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxhQUFBO0FBZFosT0FBT0UsUUFBUSxNQUFNLFVBQVU7QUFDL0IsU0FBU0MsZUFBZSxRQUFRLFFBQVE7QUFFeEMsSUFBSUMsVUFBVSxJQUFBSixhQUFBLEdBQUFLLENBQUEsT0FBQyxDQUFDLENBQUM7QUFBQ0wsYUFBQSxHQUFBSyxDQUFBO0FBRWxCLElBQUlDLFlBQVksR0FBR0EsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLElBQUksS0FBSztFQUFBVCxhQUFBLEdBQUFVLENBQUE7RUFBQVYsYUFBQSxHQUFBSyxDQUFBO0VBQUEsT0FBQUgsUUFBUSxDQUFDSSxZQUFZLENBQUMsS0FBSyxFQUM5RDtJQUFFSyxPQUFPLEVBQUU7RUFBTSxDQUFDLEVBQ2xCLENBQUNDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEtBQUs7SUFBQWQsYUFBQSxHQUFBVSxDQUFBO0lBQUFWLGFBQUEsR0FBQUssQ0FBQTtJQUVqQjtJQUNBLElBQUksQ0FBQ1EsSUFBSSxFQUFFO01BQUFiLGFBQUEsR0FBQWUsQ0FBQTtNQUNQLElBQUlDLElBQUksSUFBQWhCLGFBQUEsR0FBQUssQ0FBQSxPQUFHLElBQUlZLFVBQVUsQ0FBQyxFQUFFLENBQUM7TUFBQ2pCLGFBQUEsR0FBQUssQ0FBQTtNQUM5QkYsZUFBZSxDQUFDYSxJQUFJLENBQUM7TUFDckIsSUFBSUUsS0FBSyxJQUFBbEIsYUFBQSxHQUFBSyxDQUFBLE9BQUdjLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSixJQUFJLENBQUMsQ0FBQ0ssUUFBUSxDQUFDLFFBQVEsQ0FBQztNQUFDckIsYUFBQSxHQUFBSyxDQUFBO01BQ2pERCxVQUFVLENBQUNjLEtBQUssQ0FBQyxHQUFHSSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDO01BQUF2QixhQUFBLEdBQUFLLENBQUE7TUFDOUJtQixPQUFPLENBQUNDLEdBQUcsQ0FBQ3JCLFVBQVUsQ0FBQ2MsS0FBSyxDQUFDLENBQUM7TUFBQWxCLGFBQUEsR0FBQUssQ0FBQTtNQUM5QkcsR0FBRyxDQUFDa0IsTUFBTSxDQUFDLE9BQU8sRUFBRVIsS0FBSyxFQUFFO1FBQUVTLE1BQU0sRUFBRSxNQUFNO1FBQUVDLFFBQVEsRUFBRTtNQUFNLENBQUMsQ0FBQztNQUFBNUIsYUFBQSxHQUFBSyxDQUFBO01BQy9ERyxHQUFHLENBQUNxQixNQUFNLENBQUMsR0FBRyxDQUFDO01BQUE3QixhQUFBLEdBQUFLLENBQUE7TUFDZkcsR0FBRyxDQUFDc0IsSUFBSSxDQUFDO1FBQUVDLEtBQUssRUFBRTtNQUFlLENBQUMsQ0FBQztNQUFBL0IsYUFBQSxHQUFBSyxDQUFBO01BQ25DO0lBQ0osQ0FBQztNQUFBTCxhQUFBLEdBQUFlLENBQUE7SUFBQTtJQUFBZixhQUFBLEdBQUFLLENBQUE7SUFFREksSUFBSSxDQUFDLENBQUM7RUFDVixDQUFDLENBQUMsQ0FBQ0YsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLElBQUksQ0FBQztBQUFELENBQUM7QUFHdEIsU0FBUUgsWUFBWSxFQUFFRixVQUFVIn0=