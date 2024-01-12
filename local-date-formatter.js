// second parameter  format

//   'short'       date, month number, year, hour and minutes
//   'medium'      date, month name short, year, hour, minutes, seconds
//   'long'        date, month full name, year, hour, minutes, seconds and time zone
//   'full'        day of the week, month, date, time, and time zone full information

//   'shortDate'   date, month number, year 
//   'mediumDate'  date, month short name, year
//   'longDate'    date, month full name, year
//   'fullDate'    day of the week, month full name, date, year

//   'shortTime'   hour, minutes
//   'mediumTime'  hour, minutes, seconds
//   'longTime'    hour, minutes, seconds and time zone 
//   'fullTime'    hour, minutes, seconds and time zone full information



export class LocalDateFormatter {
    formatDate(value, format, languageCode = null) {

    if (value === null || value === undefined || value === '') {
        return value;
    }

    const language = languageCode || navigator.language;

    let options = {};

    switch (format) {
      case 'full':
        options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'long' };
        break;
      case 'long':
        options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        break;
      case 'medium':
        options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        break;
      case 'short':
        options = { year: '2-digit', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        break;
      case 'fullDate':
        options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        break;
      case 'longDate':
        options = { year: 'numeric', month: 'long', day: 'numeric' };
        break;
      case 'mediumDate':
        options = { year: 'numeric', month: 'short', day: 'numeric' };
        break;
      case 'shortDate':
        options = { year: '2-digit', month: 'numeric', day: 'numeric' };
        break;
      case 'fullTime':
        options = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'long' };
        break;
      case 'longTime':
        options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        break;
      case 'mediumTime':
        options = { hour: '2-digit', minute: '2-digit' };
        break;
      case 'shortTime':
        options = { hour: '2-digit', minute: '2-digit' };
        break;
    }

    const formatter = new Intl.DateTimeFormat(language, options);
    return formatter.format(new Date(value));
  }

}
