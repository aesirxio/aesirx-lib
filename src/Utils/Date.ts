/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { FORMAT_DATE, FORMAT_TIME } from '../Constant/Format';
import { addMilliseconds, format, fromUnixTime } from 'date-fns';
import { getTimezoneOffset } from 'date-fns-tz';
import { Helper } from './Helper';
import moment from 'moment';

const timezone = Helper.getTimezoneDefault();

const formatDate = (date: any, withTime = false, convert = true) => {
  date = new Date(date);

  if (convert) {
    const offset = getTimezoneOffset(timezone);
    date = addMilliseconds(date, offset);
  }

  const f = `${FORMAT_DATE} ${withTime ? ` ${FORMAT_TIME}` : ''}`;
  return format(date, f);
};

const formatUnix = (timestamp: any, withTime = false) => {
  return formatDate(fromUnixTime(timestamp), withTime, false);
};

const enumerateDaysBetweenDates = function (startDate: any, endDate: any) {
  let dates = [];

  const currDate = moment(startDate).startOf('day');
  const lastDate = moment(endDate).endOf('day');

  while (currDate.add(1, 'days').diff(lastDate) < 0) {
    dates.push(currDate.clone().format('YYYY-MM-DD'));
  }

  return dates;
};
declare global {
  interface String {
    replaceAll(search: string, replacement: string): string;
    contains(part: string): boolean;
  }

  interface Array<T> {
    first(callbackfn?: (value: T) => boolean, thisArg?: any): T;
  }
}
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (pattern, replacement) {
    return this.split(pattern).join(replacement);
  };
}
if (!String.prototype.contains) {
  String.prototype.contains = function (part) {
    return this.indexOf(part) >= 0;
  };
}
if (!Array.prototype.first) {
  Array.prototype.first = function (callback) {
    if (!callback) return this.length ? this[0] : null;

    for (var i = 0; i < this.length; i++) {
      var item = this[i];
      if (callback(item)) {
        return item;
      }
    }

    return null;
  };
}
export interface formatRules {
  DayOfMonthShort: string;
  DayOfMonthLong: string;
  DayOfWeekShort: string;
  DayOfWeekLong: string;
  DayOfYearShort: string;
  DayOfYearLong: string;
  MonthOfYearShort: string;
  MonthOfYearLong: string;
  MonthNameShort: string;
  MonthNameLong: string;
  YearShort: string;
  YearLong: string;
  AmPm: string;
  Hour24Short: string;
  Hour24Long: string;
  Hour12Short: string;
  Hour12Long: string;
  MinuteShort: string;
  MinuteLong: string;
  SecondShort: string;
  SecondLong: string;
  FractionalSecond1: string;
  FractionalSecond2: string;
  FractionalSecond3: string;
  TimeZone: string;
  UnixTimestamp: string;

  MakeLiteral(literal: string): string;
  ReadEscapedPart(format: string, startIndex: number): escapedPart;
}

export interface escapedPart {
  value: string;
  length: number;
}

interface tokenLocateResult {
  nextBegin: number;
  literal: string;
  token: string;
}
module dateFormatConvert {
  let replaceAll,
    DayOfMonthShort,
    DayOfMonthLong,
    DayOfWeekShort,
    DayOfWeekLong,
    DayOfYearShort,
    DayOfYearLong,
    MonthOfYearShort,
    MonthOfYearLong,
    MonthNameShort,
    MonthNameLong,
    YearShort,
    YearLong,
    Hour24Short,
    Hour24Long,
    Hour12Short,
    Hour12Long,
    MinuteShort,
    MinuteLong,
    SecondShort,
    SecondLong,
    FractionalSecond1,
    FractionalSecond2,
    FractionalSecond3,
    TimeZone,
    UnixTimestamp,
    MakeLiteral,
    search,
    replacement,
    contains,
    part,
    first,
    callbackfn,
    thisArg,
    T,
    dateFormatConvert,
    formatRules,
    AmPm,
    literal,
    ReadEscapedPart,
    startIndex,
    escapedPart,
    value,
    tokenLocateResult,
    nextBegin,
    token;

  export function convert(format: string, sourceRules: formatRules, destRules: formatRules) {
    if (sourceRules == destRules) return format;

    var result = '';
    var index = 0;
    var destTokens = getTokens(destRules);
    var sourceMap: any = getTokenMap(getTokens(sourceRules));
    while (index < format.length) {
      var part: tokenLocateResult = locateNextToken(sourceRules, format, index);
      if (part.literal.length > 0) result += destRules.MakeLiteral(part.literal);
      if (part.token.length > 0) result += destTokens[sourceMap[part.token]];
      index = part.nextBegin;
    }

    return result;
  }

  export var standard: formatRules = {
    DayOfMonthShort: 'd',
    DayOfMonthLong: 'dd',
    DayOfWeekShort: 'ddd',
    DayOfWeekLong: 'dddd',
    DayOfYearShort: 'D',
    DayOfYearLong: 'DD',
    MonthOfYearShort: 'M',
    MonthOfYearLong: 'MM',
    MonthNameShort: 'MMM',
    MonthNameLong: 'MMMM',
    YearShort: 'yy',
    YearLong: 'yyyy',
    AmPm: 'tt',
    Hour24Short: 'H',
    Hour24Long: 'HH',
    Hour12Short: 'h',
    Hour12Long: 'hh',
    MinuteShort: 'm',
    MinuteLong: 'mm',
    SecondShort: 's',
    SecondLong: 'ss',
    FractionalSecond1: 'f',
    FractionalSecond2: 'ff',
    FractionalSecond3: 'fff',
    TimeZone: 'Z',
    UnixTimestamp: 'X',

    MakeLiteral: function (literal: string) {
      var reserved: any = 'dDMytHhmsfZX';
      if (indexOfAny(literal, reserved) < 0) return literal;

      var result = '';
      for (var i = 0; i < literal.length; i++) {
        var c = literal.charAt(i);
        if (reserved.contains(c)) result += '\\';
        result += c;
      }
      return result;
    },
    ReadEscapedPart: function (format: string, startIndex: number) {
      var result = '';
      var index = startIndex;
      while (index < format.length) {
        var c = format.charAt(index);

        if (c == '\\') {
          result += index == format.length - 1 ? '\\' : format[++index];
          index++;
          continue;
        }
        break;
      }

      return {
        value: result,
        length: index - startIndex,
      };
    },
  };

  export var dotNet: formatRules = {
    DayOfMonthShort: 'd',
    DayOfMonthLong: 'dd',
    DayOfWeekShort: 'ddd',
    DayOfWeekLong: 'dddd',
    DayOfYearShort: '',
    DayOfYearLong: '',
    MonthOfYearShort: 'M',
    MonthOfYearLong: 'MM',
    MonthNameShort: 'MMM',
    MonthNameLong: 'MMMM',
    YearShort: 'yy',
    YearLong: 'yyyy',
    AmPm: 'tt',
    Hour24Short: 'H',
    Hour24Long: 'HH',
    Hour12Short: 'h',
    Hour12Long: 'hh',
    MinuteShort: 'm',
    MinuteLong: 'mm',
    SecondShort: 's',
    SecondLong: 'ss',
    FractionalSecond1: 'f',
    FractionalSecond2: 'ff',
    FractionalSecond3: 'fff',
    TimeZone: 'zzz',
    UnixTimestamp: '',

    MakeLiteral: function (literal: string) {
      var reserved: any = 'dfFghHKmMstyz\'"';
      if (indexOfAny(literal, reserved) < 0) return literal;

      var result = '';
      for (var i = 0; i < literal.length; i++) {
        var c = literal.charAt(i);
        if (reserved.contains(c)) result += '\\';
        result += c;
      }
      return result;
    },
    ReadEscapedPart: function (format: string, startIndex: number) {
      var result = '';
      var index = startIndex;
      while (index < format.length) {
        var c = format.charAt(index);

        if (c == '\\') {
          result += index == format.length - 1 ? '\\' : format[++index];
          index++;
          continue;
        }

        if (c == '"') {
          while (++index < format.length) {
            var cc = format.charAt(index);
            if (cc == '"') break;

            if (cc == '\\') {
              result += index == format.length - 1 ? '\\' : format[++index];
            } else {
              result += cc;
            }
          }
          index++;
          continue;
        }

        if (c == "'") {
          while (++index < format.length) {
            cc = format.charAt(index);
            if (cc == "'") break;

            if (cc == '\\') {
              result += index == format.length - 1 ? '\\' : format[++index];
            } else {
              result += cc;
            }
          }
          index++;
          continue;
        }

        break;
      }

      return {
        value: result,
        length: index - startIndex,
      };
    },
  };

  export var momentJs: formatRules = {
    DayOfMonthShort: 'D',
    DayOfMonthLong: 'dd',
    DayOfWeekShort: 'ddd',
    DayOfWeekLong: 'dddd',
    DayOfYearShort: 'DDD',
    DayOfYearLong: 'DDDD',
    MonthOfYearShort: 'M',
    MonthOfYearLong: 'MM',
    MonthNameShort: 'MMM',
    MonthNameLong: 'MMMM',
    YearShort: 'YY',
    YearLong: 'yyyy',
    AmPm: 'A',
    Hour24Short: 'H',
    Hour24Long: 'HH',
    Hour12Short: 'h',
    Hour12Long: 'hh',
    MinuteShort: 'm',
    MinuteLong: 'mm',
    SecondShort: 's',
    SecondLong: 'ss',
    FractionalSecond1: 'S',
    FractionalSecond2: 'SS',
    FractionalSecond3: 'SSS',
    TimeZone: 'Z',
    UnixTimestamp: 'X',

    MakeLiteral: function (literal: any) {
      var reserved = 'MoDdeEwWYgGAaHhmsSzZX';

      literal = literal.replaceAll('[', '(').replaceAll(']', ')');
      if (indexOfAny(literal, reserved) < 0) return literal;

      return '[' + literal + ']';
    },
    ReadEscapedPart: function (format: string, startIndex: number) {
      if (format.charAt(startIndex) != '[') return { value: '', length: 0 };

      var result = '';
      var index = startIndex;
      while (index < format.length) {
        var c = format.charAt(index);

        if (c == ']') {
          break;
        }

        result += c;
      }

      return {
        value: result,
        length: index - startIndex,
      };
    },
  };

  export var datepicker: formatRules = {
    DayOfMonthShort: 'd',
    DayOfMonthLong: 'dd',
    DayOfWeekShort: 'D',
    DayOfWeekLong: 'DD',
    DayOfYearShort: 'o',
    DayOfYearLong: 'oo',
    MonthOfYearShort: 'm',
    MonthOfYearLong: 'mm',
    MonthNameShort: 'M',
    MonthNameLong: 'MM',
    YearShort: 'y',
    YearLong: 'yy',
    AmPm: '',
    Hour24Short: '',
    Hour24Long: '',
    Hour12Short: '',
    Hour12Long: '',
    MinuteShort: '',
    MinuteLong: '',
    SecondShort: '',
    SecondLong: '',
    FractionalSecond1: '',
    FractionalSecond2: '',
    FractionalSecond3: '',
    TimeZone: '',
    UnixTimestamp: '@',

    MakeLiteral: function (literal: any) {
      var reserved = "dDomMy@'";
      if (indexOfAny(literal, reserved) < 0) return literal;

      return "'" + literal.replaceAll("'", "''") + "'";
    },
    ReadEscapedPart: function (format: string, startIndex: number) {
      if (format.charAt(startIndex) != "'") return { value: '', length: 0 };

      var result = '';
      var index = startIndex;
      while (++index < format.length) {
        var c = format.charAt(index);

        if (c == "'") {
          index++;
          if (index == format.length) break;

          if (format[index] == "'") {
            result += c;
          } else {
            break;
          }
        } else {
          result += c;
        }
      }

      return {
        value: result,
        length: index - startIndex,
      };
    },
  };

  export var timepicker: formatRules = {
    DayOfMonthShort: '',
    DayOfMonthLong: '',
    DayOfWeekShort: '',
    DayOfWeekLong: '',
    DayOfYearShort: '',
    DayOfYearLong: '',
    MonthOfYearShort: '',
    MonthOfYearLong: '',
    MonthNameShort: '',
    MonthNameLong: '',
    YearShort: '',
    YearLong: '',
    AmPm: 'TT',
    Hour24Short: 'H',
    Hour24Long: 'HH',
    Hour12Short: 'h',
    Hour12Long: 'hh',
    MinuteShort: 'm',
    MinuteLong: 'mm',
    SecondShort: 's',
    SecondLong: 'ss',
    FractionalSecond1: '',
    FractionalSecond2: '',
    FractionalSecond3: 'l',
    TimeZone: 'Z',
    UnixTimestamp: '',

    MakeLiteral: function (literal: any) {
      var reserved = "HhmslctTzZ'";
      if (indexOfAny(literal, reserved) < 0) return literal;

      return "'" + literal.replaceAll("'", '"') + "'";
    },
    ReadEscapedPart: function (format: string, startIndex: number) {
      if (format.charAt(startIndex) != "'") return { value: '', length: 0 };

      var result = '';
      var index = startIndex;
      while (++index < format.length) {
        var c = format.charAt(index);

        if (c == "'") {
          index++;
          if (index == format.length) break;

          if (format.charAt(index) == "'") result += c;
          else break;
        } else {
          result += c;
        }
      }

      return {
        value: result,
        length: index - startIndex,
      };
    },
  };
}

function locateNextToken(rules: formatRules, format: string, begin: number) {
  var literal = '';
  var index = begin;
  var sequence: any = getTokenSequence(getTokenMap(getTokens(rules)));
  while (index < format.length) {
    var escaped = rules.ReadEscapedPart(format, index);
    if (escaped.length > 0) {
      literal += escaped.value;
      index += escaped.length;
      continue;
    }

    var token = sequence.first((x: any) => format.indexOf(x, index) == index);
    if (!token) {
      literal += format.charAt(index);
      index++;
      continue;
    }

    return {
      token: token,
      literal: literal,
      nextBegin: index + token.length,
    };
  }

  return {
    token: '',
    literal: literal,
    nextBegin: index,
  };
}

function getTokens(rules: formatRules) {
  return [
    rules.DayOfMonthShort,
    rules.DayOfMonthLong,
    rules.DayOfWeekShort,
    rules.DayOfWeekLong,
    rules.DayOfYearShort,
    rules.DayOfYearLong,
    rules.MonthOfYearShort,
    rules.MonthOfYearLong,
    rules.MonthNameShort,
    rules.MonthNameLong,
    rules.YearShort,
    rules.YearLong,
    rules.AmPm,
    rules.Hour24Short,
    rules.Hour24Long,
    rules.Hour12Short,
    rules.Hour12Long,
    rules.MinuteShort,
    rules.MinuteLong,
    rules.SecondShort,
    rules.SecondLong,
    rules.FractionalSecond1,
    rules.FractionalSecond2,
    rules.FractionalSecond3,
    rules.TimeZone,
    rules.UnixTimestamp,
  ].map((x) => x || '');
}

function getTokenMap(tokens: string[]) {
  var map: any = {};
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if (token) {
      map[token] = i;
    }
  }
  return map;
}

function getTokenSequence(map: any) {
  var tokens = Object.keys(map);
  tokens.sort((a, b) => b.length - a.length);
  return tokens;
}

function indexOfAny(s: string, chars: string) {
  for (var i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    for (var j = 0; j < chars.length; j++) {
      if (c === chars.charAt(j)) return i;
    }
  }
  return -1;
}

export { formatDate, formatUnix, enumerateDaysBetweenDates, dateFormatConvert };
