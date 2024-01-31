// https://byby.dev/js-format-date
import moment from 'moment';

export default function (dateString) {
    moment.locale('fr')
    const momentDate = moment(dateString);
    return momentDate.format('MMM DD, YYYY')
  }