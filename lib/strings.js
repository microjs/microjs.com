// some basic utils

module.exports = {
    rpad: function (s, len, ch) {
      ch = ch || ' '
      while (s.length < len) s += ch
      return s
    }
  , lpad: function (s, len, ch) {
      ch = ch || ' '
      while (s.length < len) s = ch + s
      return s
    }
    // note this is kilobytes, so 1024, rounded to 1dp
  , sizeToString: function (size) {
      size = Math.round(size / 1024 * 10) / 10
      return size + ' kB'
    }
  , prettyLong: function (i) {
      return String(i).replace(/(\d)(\d{3})$/, '$1,$2')
    }
}
