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
  const lastDate = moment(endDate).startOf('day');

  while (currDate.add(1, 'days').diff(lastDate) < 0) {
    dates.push(currDate.clone().format('YYYY-MM-DD'));
  }

  return dates;
};

export { formatDate, formatUnix, enumerateDaysBetweenDates };
