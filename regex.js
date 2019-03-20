// RAJERISON Julien REGEX REGULAR EXPRESSION

/**
 * [dikany]     => [signe]  -> [Ohatra]           => [Fanazavana]
 * Miantomboka  => ^        ->  ^manomboka        => Mandray izay rehetra misy hoe "manomboka"
 * Miafara      => $        ->  miafara$          => Mandray izay rehetra miafara amin'ny teny hoe "miafara"
 * Na koa       => |        ->  manomboka|miafara => Mandray izay "manomboka" na "miafara" afaka atao na1|na2|na3
 * Izay misy    => []       ->  [ao]              => Mandray izay teny rehetra misy "a" sy "o" ohatra koa = m[abcdefghijklmnopqrstuvwxyz]a
 */

 /**
  * [Intervalle] => [mitovy-aminy]                          -> [dikany]
  * [a-z]        => [abcdefghijklmonpqrstuvwxyz]            -> rehefa zanatsoratra normal rehetra
  * [A-Z]        => [ABCDEFGHIJKLMNOPQRSTUVWXYZ]            -> rehefa renintsoratra rehetra
  * [0-9]        => [0123456789]                            -> rehefa chiffre rehetra 0-9
  * [a-z0-9]     => [abcdefghijklmonpqrstuvwxyz0123456789]  -> rehefa misy a-z sy 0-9
  */

 /**
  * [syntaxe] =>  [fanazavana]
  * .         => izay caractere rehetra ohatra /.a/ -> "ma"(marina), "androany"(diso satria tsisy soratra eo alohany)
  * \w        => mitovy amin'ny hoe [a-zA-Z0-9_]
  * \d        => mitovy amin'ny hoe [0-9]
  * \n        => midina andalana
  * \t        => Tabulation
  * \.        => Consideration an'ny . test\.com
  * \s        => Maka ny espace 
  * \S        => Maka iza mots tsisy espace
  * \W        => Maka izay tsy mots alphanumérique
  */

  /**
   * [syntaxe]          => [fanazavana]                             -> [ohatra]
   * [a-z][0-9][A-Z]    => izany hoe misy mots telo farafahakeliny  -> madama(marina) , ma(diso) 
   * {min,max}          => eo anelanelan'ny min sy max              -> {5,9} , mamama(marina),mama(diso)
   * {min,}             => valeur min à l'infini                    -> {6,} , mamamammamamamammama(marina), mamam(diso)
   * {,max}             => 0 à max                                  -> {,6} , mamamammamamamammama(diso), mamam(marina)
   * {nombre}           => isany farafahakely                       -> {6}  , mama(diso), aamamamam(marina)
   */

/**
 * [syntaxe]            => [mitovy-aminy]       -> [dikany]
 * *                    => {0,}                 -> 0 à l'infini répétion jereo ny eo ambony 
 * +                    => {1,}                 -> 1 à l'infini izany hoe farahakeliny misy iray
 * ?                    => {,1}                 -> farahabetsany miverina indray 
 */

var matchUrl =/(\.com|\.fr)$/
var matchUrl2 =/^\s/
var matchUrl3 =/^\S/
var match4  = /\W/
console.log(matchUrl.test("www.google.com")); //true
console.log(matchUrl.test("www.yahoo.za"));   //false
console.log(matchUrl3.test(" www.yahoo.fr")); //true satria misy espace eo alohany
console.log(matchUrl3.test(" www.yahoo.fr")); //false satria misy espace eo alohany
console.log(match4.test("*/-+\.#'~"));        // true satria tsy alphanumérique ireo mots ireo

