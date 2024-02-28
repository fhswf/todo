function cov_1vs7t9ditv() {
  var path = "/workspaces/todo_TKKG/backend/auth.js";
  var hash = "602a4d963f1f98dee88841e44dbffd29f00368aa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspaces/todo_TKKG/backend/auth.js",
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
    hash: "602a4d963f1f98dee88841e44dbffd29f00368aa"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1vs7t9ditv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1vs7t9ditv();
import passport from 'passport';
import { getRandomValues } from 'crypto';
let state_dict = (cov_1vs7t9ditv().s[0]++, {});
cov_1vs7t9ditv().s[1]++;
let authenticate = (req, res, next) => {
  cov_1vs7t9ditv().f[0]++;
  cov_1vs7t9ditv().s[2]++;
  return passport.authenticate('jwt', {
    session: false
  }, (err, user, info) => {
    cov_1vs7t9ditv().f[1]++;
    cov_1vs7t9ditv().s[3]++;
    //console.log("authenticate: %j %j %j", err, user, info)
    if (!user) {
      cov_1vs7t9ditv().b[0][0]++;
      let data = (cov_1vs7t9ditv().s[4]++, new Uint8Array(16));
      cov_1vs7t9ditv().s[5]++;
      getRandomValues(data);
      let state = (cov_1vs7t9ditv().s[6]++, Buffer.from(data).toString('base64'));
      cov_1vs7t9ditv().s[7]++;
      state_dict[state] = Date.now();
      cov_1vs7t9ditv().s[8]++;
      console.log(state_dict[state]);
      cov_1vs7t9ditv().s[9]++;
      res.cookie("state", state, {
        maxAge: 900000,
        httpOnly: false
      });
      cov_1vs7t9ditv().s[10]++;
      res.status(401);
      cov_1vs7t9ditv().s[11]++;
      res.send({
        error: "Unauthorized"
      });
      cov_1vs7t9ditv().s[12]++;
      return;
    } else {
      cov_1vs7t9ditv().b[0][1]++;
    }
    cov_1vs7t9ditv().s[13]++;
    next();
  })(req, res, next);
};
export { authenticate, state_dict };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXZzN3Q5ZGl0diIsImFjdHVhbENvdmVyYWdlIiwicGFzc3BvcnQiLCJnZXRSYW5kb21WYWx1ZXMiLCJzdGF0ZV9kaWN0IiwicyIsImF1dGhlbnRpY2F0ZSIsInJlcSIsInJlcyIsIm5leHQiLCJmIiwic2Vzc2lvbiIsImVyciIsInVzZXIiLCJpbmZvIiwiYiIsImRhdGEiLCJVaW50OEFycmF5Iiwic3RhdGUiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJEYXRlIiwibm93IiwiY29uc29sZSIsImxvZyIsImNvb2tpZSIsIm1heEFnZSIsImh0dHBPbmx5Iiwic3RhdHVzIiwic2VuZCIsImVycm9yIl0sInNvdXJjZXMiOlsiYXV0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgeyBnZXRSYW5kb21WYWx1ZXMgfSBmcm9tICdjcnlwdG8nO1xuXG5sZXQgc3RhdGVfZGljdD17fTtcblxubGV0IGF1dGhlbnRpY2F0ZSA9IChyZXEsIHJlcywgbmV4dCkgPT4gcGFzc3BvcnQuYXV0aGVudGljYXRlKCdqd3QnLFxuICAgIHsgc2Vzc2lvbjogZmFsc2UgfSxcbiAgICAoZXJyLCB1c2VyLCBpbmZvKSA9PiB7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYXV0aGVudGljYXRlOiAlaiAlaiAlalwiLCBlcnIsIHVzZXIsIGluZm8pXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgICAgICAgICBnZXRSYW5kb21WYWx1ZXMoZGF0YSk7XG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBCdWZmZXIuZnJvbShkYXRhKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgICAgICAgICBzdGF0ZV9kaWN0W3N0YXRlXSA9IERhdGUubm93KClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlX2RpY3Rbc3RhdGVdKVxuICAgICAgICAgICAgcmVzLmNvb2tpZShcInN0YXRlXCIsIHN0YXRlLCB7IG1heEFnZTogOTAwMDAwLCBodHRwT25seTogZmFsc2UgfSlcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKVxuICAgICAgICAgICAgcmVzLnNlbmQoeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBuZXh0KClcbiAgICB9KShyZXEsIHJlcywgbmV4dClcblxuXG5leHBvcnQge2F1dGhlbnRpY2F0ZSwgc3RhdGVfZGljdH0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWRaLE9BQU9FLFFBQVEsTUFBTSxVQUFVO0FBQy9CLFNBQVNDLGVBQWUsUUFBUSxRQUFRO0FBRXhDLElBQUlDLFVBQVUsSUFBQUosY0FBQSxHQUFBSyxDQUFBLE9BQUMsQ0FBQyxDQUFDO0FBQUNMLGNBQUEsR0FBQUssQ0FBQTtBQUVsQixJQUFJQyxZQUFZLEdBQUdBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEtBQUs7RUFBQVQsY0FBQSxHQUFBVSxDQUFBO0VBQUFWLGNBQUEsR0FBQUssQ0FBQTtFQUFBLE9BQUFILFFBQVEsQ0FBQ0ksWUFBWSxDQUFDLEtBQUssRUFDOUQ7SUFBRUssT0FBTyxFQUFFO0VBQU0sQ0FBQyxFQUNsQixDQUFDQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsSUFBSSxLQUFLO0lBQUFkLGNBQUEsR0FBQVUsQ0FBQTtJQUFBVixjQUFBLEdBQUFLLENBQUE7SUFFakI7SUFDQSxJQUFJLENBQUNRLElBQUksRUFBRTtNQUFBYixjQUFBLEdBQUFlLENBQUE7TUFDUCxJQUFJQyxJQUFJLElBQUFoQixjQUFBLEdBQUFLLENBQUEsT0FBRyxJQUFJWSxVQUFVLENBQUMsRUFBRSxDQUFDO01BQUNqQixjQUFBLEdBQUFLLENBQUE7TUFDOUJGLGVBQWUsQ0FBQ2EsSUFBSSxDQUFDO01BQ3JCLElBQUlFLEtBQUssSUFBQWxCLGNBQUEsR0FBQUssQ0FBQSxPQUFHYyxNQUFNLENBQUNDLElBQUksQ0FBQ0osSUFBSSxDQUFDLENBQUNLLFFBQVEsQ0FBQyxRQUFRLENBQUM7TUFBQ3JCLGNBQUEsR0FBQUssQ0FBQTtNQUNqREQsVUFBVSxDQUFDYyxLQUFLLENBQUMsR0FBR0ksSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQztNQUFBdkIsY0FBQSxHQUFBSyxDQUFBO01BQzlCbUIsT0FBTyxDQUFDQyxHQUFHLENBQUNyQixVQUFVLENBQUNjLEtBQUssQ0FBQyxDQUFDO01BQUFsQixjQUFBLEdBQUFLLENBQUE7TUFDOUJHLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxPQUFPLEVBQUVSLEtBQUssRUFBRTtRQUFFUyxNQUFNLEVBQUUsTUFBTTtRQUFFQyxRQUFRLEVBQUU7TUFBTSxDQUFDLENBQUM7TUFBQTVCLGNBQUEsR0FBQUssQ0FBQTtNQUMvREcsR0FBRyxDQUFDcUIsTUFBTSxDQUFDLEdBQUcsQ0FBQztNQUFBN0IsY0FBQSxHQUFBSyxDQUFBO01BQ2ZHLEdBQUcsQ0FBQ3NCLElBQUksQ0FBQztRQUFFQyxLQUFLLEVBQUU7TUFBZSxDQUFDLENBQUM7TUFBQS9CLGNBQUEsR0FBQUssQ0FBQTtNQUNuQztJQUNKLENBQUM7TUFBQUwsY0FBQSxHQUFBZSxDQUFBO0lBQUE7SUFBQWYsY0FBQSxHQUFBSyxDQUFBO0lBRURJLElBQUksQ0FBQyxDQUFDO0VBQ1YsQ0FBQyxDQUFDLENBQUNGLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLENBQUM7QUFBRCxDQUFDO0FBR3RCLFNBQVFILFlBQVksRUFBRUYsVUFBVSJ9