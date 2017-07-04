var onSuccessMaxMind = function(location) {
	var params = {
		coords: {
			latitude: location.location.latitude,
			longitude: location.location.longitude
		},
		zipcode: location.postal.code
	};
	showPosition(params);
};

var onErrorMaxMind = function(error) {
	changeLocation('Pick Your City');
};

function changeLocation(location) {
	$('#city-select').selectpicker('val', location);
	$('#city-select').change();

	$('#city-select-top').selectpicker('val', location);
	$('#city-select-top').change();
	if (location == 'Pick Your City') {
		$('#city-name').html("");
		//$('#zipcode').addClass("hidden");
	} else {
		$('#city-name').html(", " + location);
		//$('#zipcode').removeClass("hidden");
	}
}

function initialiseLocation() {
	/*         if (geoPosition.init()) {
            geoPosition.getCurrentPosition(showPosition, tryMaxMind, {
               enableHighAccuracy: true
            });
         } else {*/
	tryMaxMind();
	/*         }*/
}

function tryMaxMind() {
	geoip2.city(onSuccessMaxMind, onErrorMaxMind);
}

function showPosition(p) {
	var losAngelesCities = [
		"90001",
		"90002",
		"90003",
		"90004",
		"90005",
		"90006",
		"90007",
		"90008",
		"90010",
		"90011",
		"90012",
		"90013",
		"90014",
		"90015",
		"90016",
		"90017",
		"90018",
		"90019",
		"90020",
		"90021",
		"90023",
		"90024",
		"90025",
		"90026",
		"90027",
		"90028",
		"90029",
		"90031",
		"90033",
		"90034",
		"90035",
		"90036",
		"90037",
		"90038",
		"90039",
		"90040",
		"90041",
		"90042",
		"90043",
		"90044",
		"90045",
		"90046",
		"90047",
		"90048",
		"90049",
		"90056",
		"90057",
		"90058",
		"90059",
		"90061",
		"90062",
		"90064",
		"90065",
		"90066",
		"90067",
		"90068",
		"90069",
		"90071",
		"90073",
		"90077",
		"90089",
		"90094",
		"90095",
		"90201",
		"90210",
		"90211",
		"90212",
		"90220",
		"90221",
		"90222",
		"90230",
		"90232",
		"90240",
		"90241",
		"90242",
		"90245",
		"90247",
		"90248",
		"90249",
		"90250",
		"90254",
		"90255",
		"90260",
		"90262",
		"90266",
		"90270",
		"90272",
		"90273",
		"90274",
		"90275",
		"90277",
		"90278",
		"90280",
		"90290",
		"90291",
		"90292",
		"90293",
		"90301",
		"90302",
		"90303",
		"90304",
		"90305",
		"90401",
		"90402",
		"90403",
		"90404",
		"90405",
		"90501",
		"90502",
		"90503",
		"90504",
		"90505",
		"90620",
		"90623",
		"90630",
		"90650",
		"90701",
		"90703",
		"90706",
		"90710",
		"90712",
		"90713",
		"90715",
		"90716",
		"90717",
		"90720",
		"90723",
		"90731",
		"90732",
		"90744",
		"90745",
		"90802",
		"90803",
		"90804",
		"90805",
		"90806",
		"90807",
		"90808",
		"90810",
		"90813",
		"90814",
		"90815",
		"91030",
		"91101",
		"91102",
		"91103",
		"91104",
		"91105",
		"91106",
		"91107",
		"91108",
		"91109",
		"91110",
		"91114",
		"91115",
		"91116",
		"91117",
		"91121",
		"91123",
		"91124",
		"91125",
		"91126",
		"91129",
		"91182",
		"91184",
		"91185",
		"91188",
		"91189",
		"91199",
		"91201",
		"91202",
		"91203",
		"91204",
		"91205",
		"91206",
		"91207",
		"91208",
		"91209",
		"91210",
		"91221",
		"91222",
		"91225",
		"91226",
		"91301",
		"91302",
		"91303",
		"91304",
		"91306",
		"91307",
		"91316",
		"91320",
		"91321",
		"91324",
		"91325",
		"91326",
		"91331",
		"91335",
		"91340",
		"91342",
		"91343",
		"91344",
		"91345",
		"91350",
		"91351",
		"91356",
		"91358",
		"91360",
		"91361",
		"91362",
		"91364",
		"91367",
		"91371",
		"91372",
		"91377",
		"91380",
		"91382",
		"91383",
		"91390",
		"91401",
		"91402",
		"91403",
		"91405",
		"91406",
		"91411",
		"91423",
		"91436",
		"91501",
		"91502",
		"91503",
		"91504",
		"91505",
		"91506",
		"91507",
		"91508",
		"91510",
		"91521",
		"91522",
		"91523",
		"91601",
		"91602",
		"91604",
		"91605",
		"91606",
		"91607",
		"91608",
		"91775",
		"94035",
		"94143"
	];
	var sanFranciscoCities = [
		"94005",
		"94014",
		"94015",
		"94030",
		"94066",
		"94080",
		"94102",
		"94103",
		"94104",
		"94105",
		"94107",
		"94108",
		"94109",
		"94110",
		"94111",
		"94112",
		"94114",
		"94115",
		"94116",
		"94117",
		"94118",
		"94121",
		"94122",
		"94123",
		"94124",
		"94127",
		"94128",
		"94129",
		"94131",
		"94132",
		"94133",
		"94134",
		"94158",
		"94501",
		"94502",
		"94541",
		"94577",
		"94578",
		"94579",
		"94580",
		"94601",
		"94603",
		"94606",
		"94607",
		"94608",
		"94609",
		"94612",
		"94615",
		"94618",
		"94621",
		"94702",
		"94703",
		"94704",
		"94705",
		"94709",
		"94710",
		"94720"
	];
	var orangeCountyCities = [
		"90621",
		"90638",
		"90680",
		"90740",
		"90742",
		"90743",
		"90746",
		"90755",
		"92602",
		"92603",
		"92604",
		"92606",
		"92612",
		"92614",
		"92617",
		"92618",
		"92620",
		"92625",
		"92626",
		"92627",
		"92630",
		"92637",
		"92646",
		"92647",
		"92648",
		"92649",
		"92651",
		"92653",
		"92655",
		"92656",
		"92657",
		"92660",
		"92661",
		"92662",
		"92663",
		"92677",
		"92683",
		"92691",
		"92692",
		"92694",
		"92701",
		"92703",
		"92704",
		"92705",
		"92706",
		"92707",
		"92708",
		"92780",
		"92782",
		"92801",
		"92802",
		"92804",
		"92805",
		"92806",
		"92807",
		"92808",
		"92831",
		"92832",
		"92833",
		"92835",
		"92840",
		"92841",
		"92843",
		"92844",
		"92845",
		"92861",
		"92865",
		"92866",
		"92867",
		"92868",
		"92869"
	];
	//var siliconValleyCities = ["94002", "94010", "94011", "94022", "94024", "94025", "94026", "94027", "94028", "94040", "94041", "94043", "94061", "94062", "94063", "94064", "94065", "94070", "94085", "94086", "94087", "94089", "94102", "94103", "94104", "94105", "94107", "94108", "94109", "94110", "94111", "94112", "94114", "94115", "94116", "94117", "94118", "94121", "94122", "94123", "94124", "94127", "94129", "94131", "94133", "94134", "94158", "94301", "94303", "94304", "94305", "94306", "94401", "94402", "94403", "94404", "94497", "95002", "95008", "95014", "95030", "95032", "95033", "95050", "95051", "95054", "95070", "95110", "95111", "95112", "95113", "95116", "95117", "95118", "95119", "95120", "95121", "95122", "95123", "95124", "95125", "95126", "95127", "95128", "95129", "95130", "95131", "95132", "95133", "95134", "95135", "95136", "95138", "95139", "95148"];
	var siliconValleyCities = [
		"94002",
		"94010",
		"94011",
		"94022",
		"94024",
		"94025",
		"94026",
		"94027",
		"94028",
		"94040",
		"94041",
		"94043",
		"94061",
		"94062",
		"94063",
		"94064",
		"94065",
		"94070",
		"94085",
		"94086",
		"94087",
		"94089",
		"94301",
		"94303",
		"94304",
		"94305",
		"94306",
		"94401",
		"94402",
		"94403",
		"94404",
		"94497",
		"94536",
		"94538",
		"94544",
		"94545",
		"94555",
		"94560",
		"94587",
		"95002",
		"95008",
		"95014",
		"95030",
		"95032",
		"95033",
		"95050",
		"95051",
		"95054",
		"95070",
		"95110",
		"95111",
		"95112",
		"95113",
		"95116",
		"95117",
		"95118",
		"95119",
		"95120",
		"95121",
		"95122",
		"95123",
		"95124",
		"95125",
		"95126",
		"95127",
		"95128",
		"95129",
		"95130",
		"95131",
		"95132",
		"95133",
		"95134",
		"95135",
		"95136",
		"95138",
		"95139",
		"95148"
	];
	var sanDiegoCities = [
		"91902",
		"91910",
		"91911",
		"91913",
		"91914",
		"91915",
		"91932",
		"91941",
		"91942",
		"91945",
		"91950",
		"91977",
		"91978",
		"92007",
		"92014",
		"92020",
		"92037",
		"92067",
		"92071",
		"92075",
		"92091",
		"92092",
		"92093",
		"92101",
		"92102",
		"92103",
		"92104",
		"92105",
		"92106",
		"92107",
		"92108",
		"92109",
		"92110",
		"92111",
		"92112",
		"92113",
		"92114",
		"92115",
		"92116",
		"92117",
		"92118",
		"92119",
		"92120",
		"92121",
		"92122",
		"92123",
		"92124",
		"92126",
		"92127",
		"92128",
		"92129",
		"92130",
		"92131",
		"92132",
		"92134",
		"92135",
		"92136",
		"92137",
		"92138",
		"92139",
		"92140",
		"92142",
		"92145",
		"92147",
		"92149",
		"92150",
		"92152",
		"92153",
		"92154",
		"92155",
		"92158",
		"92159",
		"92160",
		"92161",
		"92163",
		"92165",
		"92166",
		"92167",
		"92168",
		"92169",
		"92170",
		"92171",
		"92172",
		"92173",
		"92174",
		"92175",
		"92176",
		"92177",
		"92179",
		"92182",
		"92186",
		"92187",
		"92190",
		"92191",
		"92192",
		"92193",
		"92195",
		"92196",
		"92197",
		"92198",
		"92199"
	];
	var washingtonDcCities = [
		"20001",
		"20004",
		"20005",
		"20006",
		"20007",
		"20008",
		"20009",
		"20010",
		"20011",
		"20012",
		"20015",
		"20016",
		"20036",
		"20037",
		"20045",
		"20052",
		"20056",
		"20059",
		"20147",
		"20148",
		"20164",
		"20165",
		"20166",
		"20170",
		"20171",
		"20190",
		"20191",
		"20194",
		"20229",
		"20230",
		"20240",
		"20245",
		"20306",
		"20408",
		"20420",
		"20422",
		"20427",
		"20431",
		"20433",
		"20481",
		"20500",
		"20503",
		"20520",
		"20530",
		"20542",
		"20549",
		"20551",
		"20560",
		"20566",
		"20580",
		"22027",
		"22031",
		"22032",
		"22037",
		"22041",
		"22042",
		"22043",
		"22043",
		"22044",
		"22046",
		"22066",
		"22101",
		"22102",
		"22124",
		"22180",
		"22181",
		"22182",
		"22201",
		"22202",
		"22203",
		"22204",
		"22205",
		"22206",
		"22207",
		"22209",
		"22211",
		"22213",
		"22301",
		"22302",
		"22303",
		"22304",
		"22305",
		"22311",
		"22312",
		"22314"
	];
	var zipcode = p.zipcode;
	if ($.inArray(zipcode, losAngelesCities) > -1) {
		changeLocation('Los Angeles');
	} else if ($.inArray(zipcode, sanFranciscoCities) > -1) {
		changeLocation('San Francisco');
	} else if ($.inArray(zipcode, orangeCountyCities) > -1) {
		changeLocation('Orange County');
	} else if ($.inArray(zipcode, siliconValleyCities) > -1) {
		changeLocation('Silicon Valley');
	} else if ($.inArray(zipcode, sanDiegoCities) > -1) {
		changeLocation('San Diego');
	} else if ($.inArray(zipcode, washingtonDcCities) > -1) {
		changeLocation('Washington, D.C.');
	} else {
		// changeLocation('Pick Your City');
		changeLocation('武汉');
	}
}

$(document).ready(function() {
	initialiseLocation();
	$('#city-select, #city-select-top').on('change', function(event) {
		if (event.target.value === "Washington, D.C.") {
			$('.default-pricing').addClass('hidden')
			$('.dc-pricing').removeClass('hidden')
		} else {
			$('.default-pricing').removeClass('hidden')
			$('.dc-pricing').addClass('hidden')
		}
	})
});
