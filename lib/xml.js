function getXmlEntity(character) {
  switch (character) {
    case '"':
      return '&quot;'
    case '&':
      return '&amp;'
    case '\'':
      return '&apos;'
    case '<':
      return '&lt;'
    case '>':
      return '&gt;';
  }
}

/**
 * Finds all characters that should be replaced by XML entities.
 */
var characterFinder = /[&"'<>]/g;

module.exports = {
  /**
   * Replaces the following characters to their XML entities: ", &, ', < and >. Returns the input with said characters
   * replaced.
   */
  encodeXmlEntities: function(input) {
    return input.replace(characterFinder, getXmlEntity);
  }
}
