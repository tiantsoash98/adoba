// https://byby.dev/js-format-date
import moment from 'moment';

export default function (dateString) {
    moment.locale('fr')
    const momentDate = moment(dateString, moment.ISO_8601);
    return momentDate.format('MMM DD, YYYY')
  }