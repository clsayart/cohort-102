// const x = function() {}

// code a function sayHello wich return the string hello

const usernames = [
    { name: "jfoskett0" },
    { name: "tbasire1" },
    { name: "tkeble2" },
    { name: "rswadlen3" },
    { name: "iflavelle4" },
    { name: "cdunphie5" },
    { name: "bguitton6" },
    { name: "dcruddace7" },
    { name: "mbroxis8" },
    { name: "lrickman9" },
    { name: "lleahaira" },
    { name: "msircombb" },
    { name: "bgallandersc" },
    { name: "claytond" },
    { name: "shatchelle" },
    { name: "ccoppf" },
    { name: "vmunseyg" },
    { name: "wdownerh" },
    { name: "rhazelgreavei" },
    { name: "mlightj" },
    { name: "kkingsfordk" },
    { name: "zstolzel" },
    { name: "mbarockm" },
    { name: "mprovostn" },
    { name: "amargramo" },
    { name: "smalonep" },
    { name: "mbeadeq" },
    { name: "jhowattr" },
    { name: "psmys" },
    { name: "etaggartt" },
    { name: "jgilbodyu" },
    { name: "jmaingotv" },
    { name: "kclowleyw" },
    { name: "ccumbridgex" },
    { name: "rsinisburyy" },
    { name: "atreasurez" },
    { name: "mserrell10" },
    { name: "bcammock11" },
    { name: "ktimms12" },
    { name: "bmahody13" },
    { name: "mlemerchant14" },
    { name: "vtalloe15" },
    { name: "asacks16" },
    { name: "rspanton17" },
    { name: "gpolycote18" },
    { name: "mvanbrug19" },
    { name: "ekrienke1a" },
    { name: "rhradsky1b" },
    { name: "tshalcros1c" },
    { name: "tbruyntjes1d" },
    { name: "amilland1e" },
    { name: "csholem1f" },
    { name: "ewansbury1g" },
    { name: "femma1h" },
    { name: "soppie1i" },
    { name: "rsebright1j" },
    { name: "iswiffin1k" },
    { name: "rhourston1l" },
    { name: "avalentin1m" },
    { name: "eohanley1n" },
    { name: "vnineham1o" },
    { name: "shyndman1p" },
    { name: "wramm1q" },
    { name: "ssandcroft1r" },
    { name: "bhammond1s" },
    { name: "amacguiness1t" },
    { name: "gstarr1u" },
    { name: "gmcbean1v" },
    { name: "wfinlater1w" },
    { name: "strousdale1x" },
    { name: "aflaubert1y" },
    { name: "eofaherty1z" },
    { name: "rmattiessen20" },
    { name: "fbear21" },
    { name: "acleobury22" },
    { name: "gprue23" },
    { name: "cwinks24" },
    { name: "jhollindale25" },
    { name: "rcorkhill26" },
    { name: "rwawer27" },
    { name: "khaydock28" },
    { name: "dcrossland29" },
    { name: "bprier2a" },
    { name: "jkopecka2b" },
    { name: "ocarlo2c" },
    { name: "fglossup2d" },
    { name: "schesser2e" },
    { name: "eetherson2f" },
    { name: "tkezar2g" },
    { name: "tkeiling2h" },
    { name: "glangley2i" },
    { name: "darnaudon2j" },
    { name: "thembling2k" },
    { name: "eoriordan2l" },
    { name: "bdebullion2m" },
    { name: "atimbrell2n" },
    { name: "msmylie2o" },
    { name: "lcowden2p" },
    { name: "mswafford2q" },
    { name: "jdenty2r" },
    { name: "tgipson2s" },
    { name: "iwichard2t" },
    { name: "llorryman2u" },
    { name: "chornung2v" },
    { name: "jwestcar2w" },
    { name: "ejanz2x" },
    { name: "kgeroldini2y" },
    { name: "vhupe2z" },
    { name: "ysnar30" },
    { name: "thulke31" },
    { name: "skilfeather32" },
    { name: "gsolway33" },
    { name: "aallington34" },
    { name: "kteulier35" },
    { name: "gdiben36" },
    { name: "acurrum37" },
    { name: "kdmitrienko38" },
    { name: "agurney39" },
    { name: "hkielt3a" },
    { name: "kluxon3b" },
    { name: "mmclugish3c" },
    { name: "slivock3d" },
    { name: "bpocklington3e" },
    { name: "sdebiaggi3f" },
    { name: "gangel3g" },
    { name: "korthmann3h" },
    { name: "gstirgess3i" },
    { name: "smaywood3j" },
    { name: "cabramski3k" },
    { name: "opeplay3l" },
    { name: "jocullinane3m" },
    { name: "kdaintrey3n" },
    { name: "mtumioto3o" },
    { name: "lpinks3p" },
    { name: "olongcake3q" },
    { name: "gfitzmaurice3r" },
    { name: "gcanario3s" },
    { name: "abuckie3t" },
    { name: "bbrasseur3u" },
    { name: "ssouthan3v" },
    { name: "rskitteral3w" },
    { name: "ghucklesby3x" },
    { name: "agebbe3y" },
    { name: "lbonanno3z" },
    { name: "gswiffin40" },
    { name: "dexroll41" },
    { name: "jmerriday42" },
    { name: "tcoffelt43" },
    { name: "tcrocket44" },
    { name: "jdymond45" },
    { name: "blindenbaum46" },
    { name: "bsnelson47" },
    { name: "meddins48" },
    { name: "bennew49" },
    { name: "jcarletto4a" },
    { name: "bbath4b" },
    { name: "agange4c" },
    { name: "elabon4d" },
    { name: "omacconnell4e" },
    { name: "hfloyd4f" },
    { name: "wferon4g" },
    { name: "cgallichiccio4h" },
    { name: "fminear4i" },
    { name: "blea4j" },
    { name: "riacovacci4k" },
    { name: "lkingh4l" },
    { name: "gdumper4m" },
    { name: "rbrood4n" },
    { name: "stombleson4o" },
    { name: "lleppingwell4p" },
    { name: "bcrutcher4q" },
    { name: "jcaveill4r" },
    { name: "djorcke4s" },
    { name: "ngosnold4t" },
    { name: "xmcrobbie4u" },
    { name: "gwalkey4v" },
    { name: "agrinvalds4w" },
    { name: "nivanets4x" },
    { name: "dtudor4y" },
    { name: "ddowthwaite4z" },
    { name: "jclemon50" },
    { name: "vroston51" },
    { name: "svezey52" },
    { name: "aibotson53" },
    { name: "ccarleton54" },
    { name: "alightfoot55" },
    { name: "fdougal56" },
    { name: "rwharton57" },
    { name: "shedney58" },
    { name: "vbuckler59" },
    { name: "cmault5a" },
    { name: "iwillcox5b" },
    { name: "dthornewell5c" },
    { name: "pscothron5d" },
    { name: "gsesser5e" },
    { name: "fhamnett5f" },
    { name: "fjeromson5g" },
    { name: "mjain5h" },
    { name: "aeliasen5i" },
    { name: "amickan5j" },
    { name: "smalsher5k" },
    { name: "tcurror5l" },
    { name: "akernan5m" },
    { name: "lbatiste5n" },
    { name: "ademageard5o" },
    { name: "wrunciman5p" },
    { name: "vkibbee5q" },
    { name: "jbillborough5r" },
    { name: "lkoppelmann5s" },
    { name: "bjohnston5t" },
    { name: "kgiorgetti5u" },
    { name: "njehan5v" },
    { name: "lmoral5w" },
    { name: "eshopcott5x" },
    { name: "hjuly5y" },
    { name: "hkordes5z" },
    { name: "vbirds60" },
    { name: "mtreversh61" },
    { name: "kcolwell62" },
    { name: "wsprules63" },
    { name: "lhundall64" },
    { name: "dlarchiere65" },
    { name: "jdoore66" },
    { name: "lfahy67" },
    { name: "jcaveau68" },
    { name: "uruppele69" },
    { name: "nthomson6a" },
    { name: "gcammell6b" },
    { name: "gbanstead6c" },
    { name: "egocher6d" },
    { name: "acrabb6e" },
    { name: "dargent6f" },
    { name: "epalphreyman6g" },
    { name: "vharbage6h" },
    { name: "cpascho6i" },
    { name: "pgilliatt6j" },
    { name: "kkelcher6k" },
    { name: "chirtzmann6l" },
    { name: "vgeare6m" },
    { name: "obirden6n" },
    { name: "zchristoffe6o" },
    { name: "ggoodrum6p" },
    { name: "gsavoury6q" },
    { name: "kcastelijn6r" },
    { name: "rkinglake6s" },
    { name: "slinham6t" },
    { name: "jbennetto6u" },
    { name: "halwell6v" },
    { name: "llippiello6w" },
    { name: "edavsley6x" },
    { name: "bbuntain6y" },
    { name: "arissen6z" },
    { name: "astannis70" },
    { name: "jwinchurch71" },
    { name: "nottewill72" },
    { name: "asyder73" },
    { name: "wmcdarmid74" },
    { name: "sspatari75" },
    { name: "asuggey76" },
    { name: "lcawthorn77" },
    { name: "ipassie78" },
    { name: "dpaten79" },
    { name: "vtutill7a" },
    { name: "rshackle7b" },
    { name: "kscrimshire7c" },
    { name: "ihusset7d" },
    { name: "sboij7e" },
    { name: "cronca7f" },
    { name: "eblesdill7g" },
    { name: "jhehl7h" },
    { name: "olantoph7i" },
    { name: "gsunock7j" },
    { name: "emerrgan7k" },
    { name: "tvallentin7l" },
    { name: "fmeah7m" },
    { name: "dgollop7n" },
    { name: "lgealle7o" },
    { name: "ahelin7p" },
    { name: "mheathcoat7q" },
    { name: "caudrey7r" },
    { name: "bgatecliff7s" },
    { name: "ijentle7t" },
    { name: "lscandrick7u" },
    { name: "lgoldup7v" },
    { name: "pmorris7w" },
    { name: "miglesias7x" },
    { name: "bbanbrook7y" },
    { name: "sissakov7z" },
    { name: "rravenhill80" },
    { name: "hmacken81" },
    { name: "clacky82" },
    { name: "gramalhete83" },
    { name: "adekeep84" },
    { name: "lgraeber85" },
    { name: "gchaim86" },
    { name: "jpimley87" },
    { name: "jcawson88" },
    { name: "afelten89" },
    { name: "mglede8a" },
    { name: "shobson8b" },
    { name: "slock8c" },
    { name: "lravillas8d" },
    { name: "onottram8e" },
    { name: "jrillatt8f" },
    { name: "lgutsell8g" },
    { name: "sodougherty8h" },
    { name: "lbreukelman8i" },
    { name: "hwiffill8j" },
    { name: "ebigglestone8k" },
    { name: "tliquorish8l" },
    { name: "hshepard8m" },
    { name: "mdunckley8n" },
    { name: "cfaloon8o" },
    { name: "sferguson8p" },
    { name: "apeirson8q" },
    { name: "tbjerkan8r" },
    { name: "jbaptie8s" },
    { name: "alink8t" },
    { name: "cgready8u" },
    { name: "brohloff8v" },
    { name: "wdomanek8w" },
    { name: "bsaddler8x" },
    { name: "jhoulston8y" },
    { name: "eharford8z" },
    { name: "cmckerron90" },
    { name: "gharvison91" },
    { name: "lganiford92" },
    { name: "gbrooksby93" },
    { name: "jotson94" },
    { name: "dburnhams95" },
    { name: "gmcallaster96" },
    { name: "ewalkden97" },
    { name: "iwhitcher98" },
    { name: "bheadford99" },
    { name: "gpischoff9a" },
    { name: "oberntssen9b" },
    { name: "jalison9c" },
    { name: "fhemeret9d" },
    { name: "tturpey9e" },
    { name: "jwalbridge9f" },
    { name: "dallington9g" },
    { name: "rstanmore9h" },
    { name: "clazenby9i" },
    { name: "kboyfield9j" },
    { name: "sslarke9k" },
    { name: "ldrayn9l" },
    { name: "rribbens9m" },
    { name: "goehm9n" },
    { name: "erankin9o" },
    { name: "hbeedon9p" },
    { name: "mlangworthy9q" },
    { name: "bcredland9r" },
    { name: "tmertsching9s" },
    { name: "lhagwood9t" },
    { name: "urobion9u" },
    { name: "mjorio9v" },
    { name: "lmonkman9w" },
    { name: "rdavidovicz9x" },
    { name: "sivimy9y" },
    { name: "rpinck9z" },
    { name: "landriessena0" },
    { name: "hdoersa1" },
    { name: "jcolcutta2" },
    { name: "cbyarsa3" },
    { name: "dhanstocka4" },
    { name: "adunna5" },
    { name: "dvarndella6" },
    { name: "ecomiama7" },
    { name: "bfowlea8" },
    { name: "ubettlesa9" },
    { name: "mberzenaa" },
    { name: "ldrynanab" },
    { name: "fspreadac" },
    { name: "etunnad" },
    { name: "sbreslaneae" },
    { name: "teakinaf" },
    { name: "fcopingag" },
    { name: "cjeeah" },
    { name: "wmacnameeai" },
    { name: "kconstanceaj" },
    { name: "singmanak" },
    { name: "dsketchal" },
    { name: "rlimmeram" },
    { name: "mnightingalean" },
    { name: "btinsonao" },
    { name: "cwykesap" },
    { name: "dcomussoaq" },
    { name: "nbickfordar" },
    { name: "jlowdyaneas" },
    { name: "sdeakanat" },
    { name: "nmulvaneyau" },
    { name: "irustanav" },
    { name: "hcrickmooraw" },
    { name: "rtomadoniax" },
    { name: "lbransomay" },
    { name: "mcrookaz" },
    { name: "agalvinb0" },
    { name: "rstitwellb1" },
    { name: "nayrisb2" },
    { name: "lvasyuninb3" },
    { name: "bakriggb4" },
    { name: "slechmereb5" },
    { name: "pgodbaldb6" },
    { name: "akimburyb7" },
    { name: "blabouneb8" },
    { name: "rberzenb9" },
    { name: "hwakelyba" },
    { name: "wchinerybb" },
    { name: "rshadwickbc" },
    { name: "lfairleybd" },
    { name: "nwhimperbe" },
    { name: "cfranceschibf" },
    { name: "hrusebg" },
    { name: "lcormackbh" },
    { name: "bcholmondeleybi" },
    { name: "mshorterbj" },
    { name: "bdinneenbk" },
    { name: "bedgcumbebl" },
    { name: "mmatysiakbm" },
    { name: "cmclorinanbn" },
    { name: "vbellinibo" },
    { name: "sbollinibp" },
    { name: "mmaxstedbq" },
    { name: "ablancbr" },
    { name: "sgeffebs" },
    { name: "hmixhelbt" },
    { name: "gmcgahybu" },
    { name: "wfoulghambv" },
    { name: "vnellerbw" },
    { name: "wgerberbx" },
    { name: "cdareyby" },
    { name: "scancuttbz" },
    { name: "cheaslipc0" },
    { name: "aautiec1" },
    { name: "gberanc2" },
    { name: "jcallowc3" },
    { name: "jblandamorec4" },
    { name: "apoterc5" },
    { name: "cfranceschellic6" },
    { name: "cdykinsc7" },
    { name: "tguntonc8" },
    { name: "cmelbournec9" },
    { name: "jselwyneca" },
    { name: "msnelgrovecb" },
    { name: "apenderedcc" },
    { name: "mforrestcd" },
    { name: "gmowatce" },
    { name: "gmcglashancf" },
    { name: "aeggletoncg" },
    { name: "asileych" },
    { name: "tbewshireci" },
    { name: "pfilercj" },
    { name: "emollnarck" },
    { name: "msnaddincl" },
    { name: "tmaylingcm" },
    { name: "cmithancn" },
    { name: "rcrokerco" },
    { name: "akeatscp" },
    { name: "eleijscq" },
    { name: "nscottrellcr" },
    { name: "hdowdellcs" },
    { name: "ngerholdct" },
    { name: "eenburycu" },
    { name: "ssouthcottcv" },
    { name: "lbolgarcw" },
    { name: "osheedcx" },
    { name: "sbrawleycy" },
    { name: "qglencz" },
    { name: "xhatchelld0" },
    { name: "lmarcinkusd1" },
    { name: "phallittd2" },
    { name: "istanliked3" },
    { name: "lhinsched4" },
    { name: "gstrutherd5" },
    { name: "elondsdaled6" },
    { name: "cdenyerd7" },
    { name: "cbartolicd8" },
    { name: "gmacgaughied9" },
    { name: "rfassamda" },
    { name: "ascurfielddb" },
    { name: "kpickhaverdc" },
    { name: "rmealedd" },
    { name: "llymbournede" },
    { name: "cbernholtdf" },
    { name: "aparkmandg" },
    { name: "cweiserdh" },
    { name: "lkleinlererdi" },
    { name: "ldonedj" },
    { name: "mmcruviedk" },
    { name: "shaslindl" },
    { name: "gmartinezdm" },
    { name: "isurgisondn" },
    { name: "gmccuisdo" },
    { name: "kwhatedp" },
    { name: "waimedq" },
    { name: "dheppenspalldr" },
    { name: "kcaulierds" },
    { name: "bdinsmoredt" },
    { name: "eabramdu" },
    { name: "clumsdainedv" },
    { name: "tpotticarydw" },
    { name: "jkivelldx" },
    { name: "hemmanueledy" },
    { name: "hstennersdz" },
    { name: "jyukhnine0" },
    { name: "aernkee1" },
    { name: "jweatheralle2" },
    { name: "jwoofendelle3" },
    { name: "trowbreye4" },
    { name: "jmccuishe5" },
    { name: "mkermite6" },
    { name: "fkennlere7" },
    { name: "hhanhame8" },
    { name: "ddunsmuire9" },
    { name: "mjerischea" },
    { name: "emarginsoneb" },
    { name: "jmapsonec" },
    { name: "dwathaned" },
    { name: "lkinnyee" },
    { name: "plucusef" },
    { name: "bspritteg" },
    { name: "emcgroartyeh" },
    { name: "otomasikei" },
    { name: "rcouzensej" },
    { name: "fbraywoodek" },
    { name: "fsquibbesel" },
    { name: "epinwellem" },
    { name: "ystoecken" },
    { name: "mfowlieeo" },
    { name: "ggaskoinep" },
    { name: "lseckereq" },
    { name: "bixorer" },
    { name: "fritmeieres" },
    { name: "gserrelset" },
    { name: "cpetrollieu" },
    { name: "aprembleev" },
    { name: "gpatershallew" },
    { name: "hbrierleyex" },
    { name: "amassardey" },
    { name: "lyushkinez" },
    { name: "fkenneyf0" },
    { name: "ntrammelf1" },
    { name: "qeallisf2" },
    { name: "rprattingtonf3" },
    { name: "ophidginf4" },
    { name: "htrucef5" },
    { name: "fjohnceyf6" },
    { name: "cstricklandf7" },
    { name: "ududmanf8" },
    { name: "pcrakef9" },
    { name: "dbenediktfa" },
    { name: "jgurgfb" },
    { name: "bjonczykfc" },
    { name: "kbloomerfd" },
    { name: "mkeningtonfe" },
    { name: "ofranceschielliff" },
    { name: "yrougierfg" },
    { name: "nrumblefh" },
    { name: "tabbatinifi" },
    { name: "edurhamfj" },
    { name: "kbeldomfk" },
    { name: "hkenninghanfl" },
    { name: "rkingscotefm" },
    { name: "grupertifn" },
    { name: "hlympeniefo" },
    { name: "scheccuccifp" },
    { name: "rsiddellfq" },
    { name: "ayettonfr" },
    { name: "scohrsfs" },
    { name: "fposenft" },
    { name: "oohowbanefu" },
    { name: "ehaggerstonefv" },
    { name: "nantrimfw" },
    { name: "kcodnerfx" },
    { name: "idiroccafy" },
    { name: "kcrosefz" },
    { name: "cterrillg0" },
    { name: "gvannahg1" },
    { name: "phendrong2" },
    { name: "lmaypowderg3" },
    { name: "bvennardg4" },
    { name: "ifardeng5" },
    { name: "pjablonskig6" },
    { name: "ejiggeng7" },
    { name: "iantoonsg8" },
    { name: "mpraundlg9" },
    { name: "rconnochiega" },
    { name: "gstientongb" },
    { name: "lstrahangc" },
    { name: "omyringgd" },
    { name: "ghaycroftge" },
    { name: "nsherrardgf" },
    { name: "nadenetgg" },
    { name: "osmorthitgh" },
    { name: "rmiddisgi" },
    { name: "zgeraldezgj" },
    { name: "fsperskigk" },
    { name: "tleblondgl" },
    { name: "flaurentygm" },
    { name: "kmcwatersgn" },
    { name: "dstlegergo" },
    { name: "gcarefullgp" },
    { name: "gcorintongq" },
    { name: "epriscottgr" },
    { name: "agowargs" },
    { name: "sheightgt" },
    { name: "smingaudgu" },
    { name: "dgarstanggv" },
    { name: "mstoreygw" },
    { name: "ddibernardogx" },
    { name: "ajorgegy" },
    { name: "bmorenagz" },
    { name: "mreanh0" },
    { name: "ncuredellh1" },
    { name: "hmorandoh2" },
    { name: "czanettinih3" },
    { name: "tdegiorgish4" },
    { name: "jsprakeh5" },
    { name: "jlotheanh6" },
    { name: "pdoileyh7" },
    { name: "efranssonh8" },
    { name: "mlarcherh9" },
    { name: "wyakebovichha" },
    { name: "ctidboldhb" },
    { name: "jclarkhc" },
    { name: "bjesthd" },
    { name: "abellengerhe" },
    { name: "jclemhf" },
    { name: "aflecknoehg" },
    { name: "gaberdalgyhh" },
    { name: "mkenerhi" },
    { name: "fhegelhj" },
    { name: "larisshk" },
    { name: "sjeveshl" },
    { name: "dvinnicombehm" },
    { name: "zpurtellhn" },
    { name: "kbraitlingho" },
    { name: "kkettoehp" },
    { name: "hsigmundhq" },
    { name: "apollakhr" },
    { name: "oeakenshs" },
    { name: "ctrewmanht" },
    { name: "scromerhu" },
    { name: "cmichiehv" },
    { name: "mdaddshw" },
    { name: "afilyaevhx" },
    { name: "uroughleyhy" },
    { name: "bmoutonhz" },
    { name: "mdibiasioi0" },
    { name: "klevisi1" },
    { name: "tmahonyi2" },
    { name: "vsmallcombei3" },
    { name: "dcristofaninii4" },
    { name: "dpercivali5" },
    { name: "rthredderi6" },
    { name: "qshellyi7" },
    { name: "hkeelini8" },
    { name: "hboxhalli9" },
    { name: "wwalakia" },
    { name: "nfriseib" },
    { name: "tconringic" },
    { name: "fmacgowanid" },
    { name: "dvanderveldenie" },
    { name: "sautrieif" },
    { name: "bpomroyig" },
    { name: "abloomfieldih" },
    { name: "bharkinsii" },
    { name: "srispineij" },
    { name: "ndunfordik" },
    { name: "mbonsaleil" },
    { name: "fshorieim" },
    { name: "scridgein" },
    { name: "mcomberbeachio" },
    { name: "mfedorskiip" },
    { name: "jhoutbyiq" },
    { name: "gduthieir" },
    { name: "toliveyis" },
    { name: "kdemicoit" },
    { name: "mbutlandiu" },
    { name: "bgirkiniv" },
    { name: "bshuteriw" },
    { name: "cminsterix" },
    { name: "mjeenesiy" },
    { name: "jimlawiz" },
    { name: "alogsdalej0" },
    { name: "cvanzonj1" },
    { name: "nwylderj2" },
    { name: "lscorahj3" },
    { name: "mlundiej4" },
    { name: "skingsleyj5" },
    { name: "dweblingj6" },
    { name: "kfyallj7" },
    { name: "jtrunbyj8" },
    { name: "slovelacej9" },
    { name: "jglynja" },
    { name: "cjeanonjb" },
    { name: "gcontijc" },
    { name: "tsouchjd" },
    { name: "kridesdaleje" },
    { name: "nbarckejf" },
    { name: "sblagdenjg" },
    { name: "mwillischjh" },
    { name: "cdomeniciji" },
    { name: "sslisbyjj" },
    { name: "llenaghenjk" },
    { name: "rnailjl" },
    { name: "pmurrilljm" },
    { name: "gfarmeryjn" },
    { name: "mhollingtonjo" },
    { name: "jsyplusjp" },
    { name: "cdebelljq" },
    { name: "aborboroughjr" },
    { name: "jcasazzajs" },
    { name: "ndegoeyjt" },
    { name: "tninnoliju" },
    { name: "sshillinglawjv" },
    { name: "emaherjw" },
    { name: "aparleyjx" },
    { name: "egawlerjy" },
    { name: "spenrethjz" },
    { name: "nocorranek0" },
    { name: "mflowethk1" },
    { name: "dcolebournek2" },
    { name: "dsacazek3" },
    { name: "hattridgek4" },
    { name: "cmascallk5" },
    { name: "bkibbyk6" },
    { name: "rstrowlgerk7" },
    { name: "bjobbk8" },
    { name: "cprofitk9" },
    { name: "nqueyoska" },
    { name: "scromwellkb" },
    { name: "nmicokc" },
    { name: "bjorikd" },
    { name: "jsilvermanke" },
    { name: "apetruliskf" },
    { name: "tprudhamkg" },
    { name: "pginsiekh" },
    { name: "iwalteringki" },
    { name: "bcolbronkj" },
    { name: "afarlambkk" },
    { name: "rjanikkl" },
    { name: "htuekm" },
    { name: "mvickerkn" },
    { name: "amarjoramko" },
    { name: "driddichkp" },
    { name: "ccarrattkq" },
    { name: "ehallwardkr" },
    { name: "srubinks" },
    { name: "pmahadykt" },
    { name: "nfromeku" },
    { name: "bcrumpkv" },
    { name: "cferneyhoughkw" },
    { name: "bgummerykx" },
    { name: "dwarnky" },
    { name: "fsavarykz" },
    { name: "baldwincklel0" },
    { name: "tkitneyl1" },
    { name: "jphilipeauxl2" },
    { name: "jleebl3" },
    { name: "mharfordl4" },
    { name: "hmorsoml5" },
    { name: "ghovertl6" },
    { name: "sdavidl7" },
    { name: "ahallidayl8" },
    { name: "sharlowel9" },
    { name: "lhannenla" },
    { name: "zmaydwaylb" },
    { name: "rkinanelc" },
    { name: "msackesld" },
    { name: "mpallinle" },
    { name: "cevelynlf" },
    { name: "aclouttlg" },
    { name: "lleylandlh" },
    { name: "rhurleli" },
    { name: "flindeberglj" },
    { name: "edadswelllk" },
    { name: "mclingoell" },
    { name: "cmckeaglm" },
    { name: "gcuardallln" },
    { name: "ksimionesculo" },
    { name: "awayonlp" },
    { name: "lhurdwelllq" },
    { name: "dvaninlr" },
    { name: "btaskerls" },
    { name: "bchamberlainelt" },
    { name: "hdecarolislu" },
    { name: "srodielv" },
    { name: "abartkelw" },
    { name: "hscogganlx" },
    { name: "srolinsonly" },
    { name: "jdemangeotlz" },
    { name: "aduntonm0" },
    { name: "aczajkowskam1" },
    { name: "dfellowm2" },
    { name: "tklewerm3" },
    { name: "jguddem4" },
    { name: "fcauncem5" },
    { name: "cdegregariom6" },
    { name: "taggusm7" },
    { name: "jbogeym8" },
    { name: "jtirkinm9" },
    { name: "jlutasma" },
    { name: "agoeringmb" },
    { name: "kstrathernmc" },
    { name: "mdevaneymd" },
    { name: "bkeddyme" },
    { name: "ngievesmf" },
    { name: "ksyplusmg" },
    { name: "rblanchmh" },
    { name: "nshilitomi" },
    { name: "pcraistermj" },
    { name: "hfrankcombmk" },
    { name: "tkolinml" },
    { name: "wpfefflemm" },
    { name: "jduchatelmn" },
    { name: "ejohnceymo" },
    { name: "fswiremp" },
    { name: "barnoppmq" },
    { name: "bdangelimr" },
    { name: "ldashkovichms" },
    { name: "pwringemt" },
    { name: "mcufflinmu" },
    { name: "cwalderamv" },
    { name: "ccrossinghammw" },
    { name: "ddixiemx" },
    { name: "fwoloschinmy" },
    { name: "fnorthcottmz" },
    { name: "oboaten0" },
    { name: "kgarmonn1" },
    { name: "sdingleyn2" },
    { name: "odevuystn3" },
    { name: "nsurgenn4" },
    { name: "sbaystonn5" },
    { name: "pbenyann6" },
    { name: "vgiven7" },
    { name: "lratien8" },
    { name: "tcessfordn9" },
    { name: "vmattackna" },
    { name: "dattwoodnb" },
    { name: "abrackleync" },
    { name: "nholgannd" },
    { name: "lbogaertne" },
    { name: "kwarbricknf" },
    { name: "zislipng" },
    { name: "jatwellnh" },
    { name: "ecasseldineni" },
    { name: "mbullimorenj" },
    { name: "bduforenk" },
    { name: "psweetnl" },
    { name: "creppaportnm" },
    { name: "brooneynn" },
    { name: "mduvalno" },
    { name: "kmanlownp" },
    { name: "ehissettnq" },
    { name: "yhaddestonnr" },
    { name: "icleevesns" },
    { name: "twoolmorent" },
    { name: "bmolannu" },
    { name: "cmyrienv" },
    { name: "cchallenornw" },
    { name: "dwoodheadnx" },
    { name: "wcashmanny" },
    { name: "erisdalenz" },
    { name: "fpatzelto0" },
    { name: "cjosephyo1" },
    { name: "sbuckerfieldo2" },
    { name: "qcolletto3" },
    { name: "bredwino4" },
    { name: "erowo5" },
    { name: "easpinello6" },
    { name: "cmcnairo7" },
    { name: "sconnerlyo8" },
    { name: "ioffillo9" },
    { name: "vhubanoa" },
    { name: "agreenhillob" },
    { name: "gspoursoc" },
    { name: "gbrahamsod" },
    { name: "fdwerryhouseoe" },
    { name: "sgwilliamsof" },
    { name: "bschultzog" },
    { name: "wshubothamoh" },
    { name: "fokioi" },
    { name: "jmiroyoj" },
    { name: "aburnok" },
    { name: "gguielol" },
    { name: "lniccolsom" },
    { name: "fhryncewiczon" },
    { name: "achidleroo" },
    { name: "efarmerop" },
    { name: "rkellyoq" },
    { name: "rbussor" },
    { name: "ltweedleos" },
    { name: "dhartellot" },
    { name: "tfarrowou" },
    { name: "asifletov" },
    { name: "jberridgeow" },
    { name: "dkitsonox" },
    { name: "lblanchardoy" },
    { name: "lcroweoz" },
    { name: "fgunninghamp0" },
    { name: "bpenrightp1" },
    { name: "pcatterallp2" },
    { name: "ltanswillp3" },
    { name: "cmatschossp4" },
    { name: "cdabbsp5" },
    { name: "taddlestonep6" },
    { name: "ewandrackp7" },
    { name: "spextonp8" },
    { name: "kmcduallp9" },
    { name: "jparlourpa" },
    { name: "ihazeuppb" },
    { name: "melkspc" },
    { name: "cmeltonpd" },
    { name: "ygoodape" },
    { name: "svanderbeekpf" },
    { name: "aandreassenpg" },
    { name: "aswaddleph" },
    { name: "stracepi" },
    { name: "mswetenhampj" },
    { name: "zthoumaspk" },
    { name: "shevnerpl" },
    { name: "asterzakerpm" },
    { name: "spaternopn" },
    { name: "kdumberellpo" },
    { name: "ayoodallpp" },
    { name: "swearnpq" },
    { name: "mstutterpr" },
    { name: "cmarinerps" },
    { name: "bleteurtrept" },
    { name: "mstruijspu" },
    { name: "mbaltzarpv" },
    { name: "jmorstonpw" },
    { name: "azannotellipx" },
    { name: "scellipy" },
    { name: "cjansapz" },
    { name: "bswetmoreq0" },
    { name: "akelnerq1" },
    { name: "eetoileq2" },
    { name: "bbraamsq3" },
    { name: "grobkerq4" },
    { name: "dburkerq5" },
    { name: "bbolithoq6" },
    { name: "ccasalettoq7" },
    { name: "bdeddenq8" },
    { name: "dgaskenq9" },
    { name: "mjessopqa" },
    { name: "bverseyqb" },
    { name: "cbrownbillqc" },
    { name: "bdewerqd" },
    { name: "awilsherqe" },
    { name: "aperoneqf" },
    { name: "ikuhnelqg" },
    { name: "mjackeqh" },
    { name: "csegotqi" },
    { name: "bcristobalqj" },
    { name: "jhatchmanqk" },
    { name: "radaoql" },
    { name: "apersseqm" },
    { name: "bbrockingtonqn" },
    { name: "mmccombqo" },
    { name: "awortersqp" },
    { name: "dmapesqq" },
    { name: "mhueqr" },
    { name: "wwoolfittqs" },
    { name: "ljanotaqt" },
    { name: "pcruttendenqu" },
    { name: "brenzoqv" },
    { name: "scostiganqw" },
    { name: "rmendesqx" },
    { name: "amoradqy" },
    { name: "sskedqz" },
    { name: "plummr0" },
    { name: "lwissbyr1" },
    { name: "smelburgr2" },
    { name: "ddematteir3" },
    { name: "clepickr4" },
    { name: "abaulchr5" },
    { name: "zstandidger6" },
    { name: "pkintonr7" },
    { name: "ejecockr8" },
    { name: "brekesr9" },
    { name: "iglazera" },
    { name: "okingsfordrb" },
    { name: "cpickrellrc" },
    { name: "tquestedrd" },
    { name: "vdurnore" },
    { name: "bsimpsonrf" },
    { name: "giacoviellirg" },
    { name: "mtregearrh" },
    { name: "bcostellowri" },
    { name: "ishervilrj" },
    { name: "emcnirlinrk" },
    { name: "bivanikhinrl" },
    { name: "mbowlasrm" },
    { name: "lsturtrn" },
    { name: "jandersenro" },
    { name: "wrobbrp" },
    { name: "shannentrq" },
    { name: "tbenningrr" },
  ];
  
  /**
   * @ params
   * @ returns {String} returns the string "hello"
   */
  function sayHello() {
    return "hello";
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  console.log(add("toto", 20));
  
  // console.log("----0----");
  // let sum1 = add(1, 1); // equals 2
  // let mult1 = multiply(10, 3); // equals 300
  // let newResult = sum1 + mult1;
  
  // console.log(newResult);
  // console.log("--- Ohoho ");
  
  // console.log(add(1, 1) + multiply(10, 3));
  
  // const calcSometh = add(1, 1) + multiply(10, 3);
  
  // console.log(calcSometh === newResult)
  
  // sayHello();
  // sayHello();
  // sayHello();
  // sayHello();
  // console.log("---1---");
  // console.log(sayHello());
  
  // let result = sayHello();
  // let toto = sayHello();
  // let foo = sayHello();
  // let r = sayHello();
  // let x = sayHello();
  
  // console.log(result === foo);
  // console.log(x === toto);
  
  // console.log(result);
  
  // console.log(sayHello().length);
  /*
  function sayHelloToSomeone(who = "unknown user") {
    return "hello " + who;
  }
  
  const message = sayHelloToSomeone("mackenzie");
  console.log(sayHelloToSomeone("anna"));
  sayHelloToSomeone("simo");
  sayHelloToSomeone("pauline");
  sayHelloToSomeone("aurélie");
  sayHelloToSomeone("antoine");
  console.log(sayHelloToSomeone("paul"), message);
  
  console.log(sayHelloToSomeone());
  
  function displayAllValuesInArray(list) {
    for (let i = 0; i < list.length; i++) {
      console.log(i + " => " + list[i]);
    }
    console.log("------ end of the loop ----");
  }
  
  displayAllValuesInArray(["hello"]);
  displayAllValuesInArray(["hello", "world"]);
  displayAllValuesInArray(["hello", "world", "!!!"]);
  // displayAllValuesInArray(usernames);
  
  function displayAllNamesInArrayOfObject(list) {
    for (let i = 0; i < list.length; i++) {
      // console.log(i + " => " + list[i]);
      console.log(list[i].name);
    }
    console.log("------ end of the loop ----");
  }
  */
  function countAllLetters(list) {
    let countLetters = 0;
    for (let i = 0; i < list.length; i++) {
      countLetters += list[i].name.length;
    }
    return countLetters;
  }
  
  console.log('-----');
  
  function getAVGUsernameLength(list) {
      const sumLetters = countAllLetters(list);
      // sumLetters / numb of items in the list
      return sumLetters / list.length
  }
  
  const avgLettersLength = getAVGUsernameLength(usernames); // is a list of object (1000) => each has a name prop (string)
  
  console.log("> avg letters length >", avgLettersLength);
  
  
  