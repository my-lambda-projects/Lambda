import { fifaData } from '../fifa.js';
import functions from '../index';

//helper functions
const getFinals = function(){
    const allFinals = fifaData.filter(match => match.Stage === "Final");
    return allFinals;
}
const getYears = function(){
    return getFinals(fifaData).map(item => item.Year);
}
const getWinners = function(){
    return getFinals(fifaData).map(match => match["Home Team Goals"] > match["Away Team Goals"] ? match["Home Team Name"] : match["Away Team Name"])
}
describe('fooFunction', ()=>{
    it('foo returns foo', ()=>{
        expect(functions.foo()).toBe('bar');
    })
});
//task 2:
describe('getFinals', ()=>{
    it('getFinals returns an array of final matches', ()=>{
        expect(functions.getFinals(fifaData)).toEqual(expect.arrayContaining(
            [
                {
                  Year: 1930,
                  Datetime: '30 Jul 1930 - 14:15',
                  Stage: 'Final',
                  Stadium: 'Estadio Centenario',
                  City: 'Montevideo',
                  'Home Team Name': 'Uruguay',
                  'Home Team Goals': 4,
                  'Away Team Goals': 2,
                  'Away Team Name': 'Argentina',
                  'Win conditions': '',
                  Attendance: 68346,
                  'Half-time Home Goals': 1,
                  'Half-time Away Goals': 2,
                  Referee: 'LANGENUS Jean (BEL)',
                  'Assistant 1': 'SAUCEDO Ulises (BOL)',
                  'Assistant 2': 'CRISTOPHE Henry (BEL)',
                  RoundID: 405,
                  MatchID: 1087,
                  'Home Team Initials': 'URU',
                  'Away Team Initials': 'ARG'
                },
                {
                  Year: 1934,
                  Datetime: '10 Jun 1934 - 17:30',
                  Stage: 'Final',
                  Stadium: 'Nazionale PNF',
                  City: 'Rome',
                  'Home Team Name': 'Italy',
                  'Home Team Goals': 2,
                  'Away Team Goals': 1,
                  'Away Team Name': 'Czechoslovakia',
                  'Win conditions': 'Italy win after extra time',
                  Attendance: 55000,
                  'Half-time Home Goals': 0,
                  'Half-time Away Goals': 0,
                  Referee: 'EKLIND Ivan (SWE)',
                  'Assistant 1': 'BAERT Louis (BEL)',
                  'Assistant 2': 'IVANCSICS Mihaly (HUN)',
                  RoundID: 3490,
                  MatchID: 1134,
                  'Home Team Initials': 'ITA',
                  'Away Team Initials': 'TCH'
                },
                {
                  Year: 1938,
                  Datetime: '19 Jun 1938 - 17:00',
                  Stage: 'Final',
                  Stadium: 'Stade Olympique',
                  City: 'Colombes',
                  'Home Team Name': 'Italy',
                  'Home Team Goals': 4,
                  'Away Team Goals': 2,
                  'Away Team Name': 'Hungary',
                  'Win conditions': '',
                  Attendance: 45000,
                  'Half-time Home Goals': 3,
                  'Half-time Away Goals': 1,
                  Referee: 'CAPDEVILLE Georges (FRA)',
                  'Assistant 1': 'WUETHRICH Hans (SUI)',
                  'Assistant 2': 'KRIST Gustav (TCH)',
                  RoundID: 3487,
                  MatchID: 1174,
                  'Home Team Initials': 'ITA',
                  'Away Team Initials': 'HUN'
                },
                {
                  Year: 1954,
                  Datetime: '04 Jul 1954 - 17:00',
                  Stage: 'Final',
                  Stadium: 'Wankdorf Stadium',
                  City: 'Berne',
                  'Home Team Name': 'Germany FR',
                  'Home Team Goals': 3,
                  'Away Team Goals': 2,
                  'Away Team Name': 'Hungary',
                  'Win conditions': '',
                  Attendance: 62500,
                  'Half-time Home Goals': 2,
                  'Half-time Away Goals': 2,
                  Referee: 'LING William (ENG)',
                  'Assistant 1': 'ORLANDINI Vincenzo (ITA)',
                  'Assistant 2': 'GRIFFITHS Benjamin (WAL)',
                  RoundID: 3484,
                  MatchID: 1278,
                  'Home Team Initials': 'FRG',
                  'Away Team Initials': 'HUN'
                },
                {
                  Year: 1958,
                  Datetime: '29 Jun 1958 - 15:00',
                  Stage: 'Final',
                  Stadium: 'Rasunda Stadium',
                  City: 'Solna',
                  'Home Team Name': 'Brazil',
                  'Home Team Goals': 5,
                  'Away Team Goals': 2,
                  'Away Team Name': 'Sweden',
                  'Win conditions': '',
                  Attendance: 49737,
                  'Half-time Home Goals': 2,
                  'Half-time Away Goals': 1,
                  Referee: 'GUIGUE Maurice (FRA)',
                  'Assistant 1': 'DUSCH Albert (GER)',
                  'Assistant 2': 'GARDEAZABAL Juan (ESP)',
                  RoundID: 3482,
                  MatchID: 1343,
                  'Home Team Initials': 'BRA',
                  'Away Team Initials': 'SWE'
                },
                {
                  Year: 1962,
                  Datetime: '17 Jun 1962 - 14:30',
                  Stage: 'Final',
                  Stadium: 'Nacional',
                  City: 'Santiago De Chile',
                  'Home Team Name': 'Brazil',
                  'Home Team Goals': 3,
                  'Away Team Goals': 1,
                  'Away Team Name': 'Czechoslovakia',
                  'Win conditions': '',
                  Attendance: 68679,
                  'Half-time Home Goals': 1,
                  'Half-time Away Goals': 1,
                  Referee: 'LATYCHEV Nikolaj (URS)',
                  'Assistant 1': 'HORN Leo (NED)',
                  'Assistant 2': 'DAVIDSON Bob (SCO)',
                  RoundID: 3480,
                  MatchID: 1463,
                  'Home Team Initials': 'BRA',
                  'Away Team Initials': 'TCH'
                },
                {
                  Year: 1966,
                  Datetime: '30 Jul 1966 - 15:00',
                  Stage: 'Final',
                  Stadium: 'Wembley Stadium',
                  City: 'London',
                  'Home Team Name': 'England',
                  'Home Team Goals': 4,
                  'Away Team Goals': 2,
                  'Away Team Name': 'Germany FR',
                  'Win conditions': 'England win after extra time',
                  Attendance: 96924,
                  'Half-time Home Goals': 0,
                  'Half-time Away Goals': 0,
                  Referee: 'DIENST Gottfried (SUI)',
                  'Assistant 1': 'BAKHRAMOV Tofik (URS)',
                  'Assistant 2': 'GALBA Karol (TCH)',
                  RoundID: 3478,
                  MatchID: 1633,
                  'Home Team Initials': 'ENG',
                  'Away Team Initials': 'FRG'
                },
                {
                  Year: 1970,
                  Datetime: '21 Jun 1970 - 12:00',
                  Stage: 'Final',
                  Stadium: 'Estadio Azteca',
                  City: 'Mexico City',
                  'Home Team Name': 'Brazil',
                  'Home Team Goals': 4,
                  'Away Team Goals': 1,
                  'Away Team Name': 'Italy',
                  'Win conditions': '',
                  Attendance: 107412,
                  'Half-time Home Goals': 1,
                  'Half-time Away Goals': 1,
                  Referee: 'GLOECKNER Rudolf (GDR)',
                  'Assistant 1': 'SCHEURER Ruedi (SUI)',
                  'Assistant 2': 'COEREZZA Norberto Angel (ARG)',
                  RoundID: 3476,
                  MatchID: 1765,
                  'Home Team Initials': 'BRA',
                  'Away Team Initials': 'ITA'
                },
                {
                  Year: 1974,
                  Datetime: '07 July 1974 - 16:00',
                  Stage: 'Final',
                  Stadium: 'Olympiastadion',
                  City: 'Munich',
                  'Home Team Name': 'Netherlands',
                  'Home Team Goals': 1,
                  'Away Team Goals': 2,
                  'Away Team Name': 'Germany FR',
                  'Win conditions': '',
                  Attendance: 78200,
                  'Half-time Home Goals': 1,
                  'Half-time Away Goals': 2,
                  Referee: 'TAYLOR John (ENG)',
                  'Assistant 1': 'GONZALEZ ARCHUNDIA Alfonso (MEX)',
                  'Assistant 2': 'BARRETO RUIZ Ramon (URU)',
                  RoundID: 605,
                  MatchID: 2063,
                  'Home Team Initials': 'NED',
                  'Away Team Initials': 'FRG'
                },
                {
                  Year: 1978,
                  Datetime: '25 Jun 1978 - 15:00',
                  Stage: 'Final',
                  Stadium: 'El Monumental - Estadio Monumental Antonio Vespuci',
                  City: 'Buenos Aires',
                  'Home Team Name': 'Argentina',
                  'Home Team Goals': 3,
                  'Away Team Goals': 1,
                  'Away Team Name': 'Netherlands',
                  'Win conditions': 'Argentina win after extra time',
                  Attendance: 71483,
                  'Half-time Home Goals': 0,
                  'Half-time Away Goals': 0,
                  Referee: 'GONELLA Sergio (ITA)',
                  'Assistant 1': 'BARRETO RUIZ Ramon (URU)',
                  'Assistant 2': 'LINEMAYR Erich (AUT)',
                  RoundID: 639,
                  MatchID: 2198,
                  'Home Team Initials': 'ARG',
                  'Away Team Initials': 'NED'
                },
                {
                  Year: 1982,
                  Datetime: '11 Jul 1982 - 20:00',
                  Stage: 'Final',
                  Stadium: 'Santiago Bernabeu',
                  City: 'Madrid',
                  'Home Team Name': 'Italy',
                  'Home Team Goals': 3,
                  'Away Team Goals': 1,
                  'Away Team Name': 'Germany FR',
                  'Win conditions': '',
                  Attendance: 90000,
                  'Half-time Home Goals': 0,
                  'Half-time Away Goals': 0,
                  Referee: 'COELHO Arnaldo (BRA)',
                  'Assistant 1': 'KLEIN Abraham (ISR)',
                  'Assistant 2': 'CHRISTOV Vojtech (TCH)',
                  RoundID: 3475,
                  MatchID: 923,
                  'Home Team Initials': 'ITA',
                  'Away Team Initials': 'FRG'
                },
                {
                  Year: 1986,
                  Datetime: '29 Jun 1986 - 12:00',
                  Stage: 'Final',
                  Stadium: 'Estadio Azteca',
                  City: 'Mexico City',
                  'Home Team Name': 'Argentina',
                  'Home Team Goals': 3,
                  'Away Team Goals': 2,
                  'Away Team Name': 'Germany FR',
                  'Win conditions': '',
                  Attendance: 114600,
                  'Half-time Home Goals': 1,
                  'Half-time Away Goals': 0,
                  Referee: 'ARPPI FILHO Romualdo (BRA)',
                  'Assistant 1': 'FREDRIKSSON Erik (SWE)',
                  'Assistant 2': 'ULLOA MORERA Berny (CRC)',
                  RoundID: 3467,
                  MatchID: 393,
                  'Home Team Initials': 'ARG',
                  'Away Team Initials': 'FRG'
                },
                {
                  Year: 1990,
                  Datetime: '08 Jul 1990 - 20:00',
                  Stage: 'Final',
                  Stadium: 'Stadio Olimpico',
                  City: 'Rome',
                  'Home Team Name': 'Germany FR',
                  'Home Team Goals': 1,
                  'Away Team Goals': 0,
                  'Away Team Name': 'Argentina',
                  'Win conditions': '',
                  Attendance: 73603,
                  'Half-time Home Goals': 0,
                  'Half-time Away Goals': 0,
                  Referee: 'CODESAL MENDEZ Edgardo (MEX)',
                  'Assistant 1': 'PEREZ HOYOS Armando (COL)',
                  'Assistant 2': 'LISTKIEWICZ Michal (POL)',
                  RoundID: 3462,
                  MatchID: 27,
                  'Home Team Initials': 'FRG',
                  'Away Team Initials': 'ARG'
                },
                {
                  Year: 1994,
                  Datetime: '17 Jul 1994 - 12:30',
                  Stage: 'Final',
                  Stadium: 'Rose Bowl',
                  City: 'Los Angeles',
                  'Home Team Name': 'Brazil',
                  'Home Team Goals': 0,
                  'Away Team Goals': 0,
                  'Away Team Name': 'Italy',
                  'Win conditions': 'Brazil win on penalties (3 - 2)',
                  Attendance: 94194,
                  'Half-time Home Goals': 0,
                  'Half-time Away Goals': 0,
                  Referee: 'PUHL Sandor (HUN)',
                  'Assistant 1': 'ZARATE Venancio (PAR)',
                  'Assistant 2': 'FANAEI Mohammad (IRN)',
                  RoundID: 3459,
                  MatchID: 3104,
                  'Home Team Initials': 'BRA',
                  'Away Team Initials': 'ITA'
                },
                {
                  Year: 1998,
                  Datetime: '12 Jul 1998 - 21:00',
                  Stage: 'Final',
                  Stadium: 'Stade de France',
                  City: 'Saint-Denis',
                  'Home Team Name': 'Brazil',
                  'Home Team Goals': 0,
                  'Away Team Goals': 3,
                  'Away Team Name': 'France',
                  'Win conditions': '',
                  Attendance: 80000,
                  'Half-time Home Goals': 0,
                  'Half-time Away Goals': 2,
                  Referee: 'BELQOLA Said (MAR)',
                  'Assistant 1': 'WARREN Mark (ENG)',
                  'Assistant 2': 'SALIE Achmat (RSA)',
                  RoundID: 1027,
                  MatchID: 8788,
                  'Home Team Initials': 'BRA',
                  'Away Team Initials': 'FRA'
                },
                {
                  Year: 2002,
                  Datetime: '30 Jun 2002 - 20:00',
                  Stage: 'Final',
                  Stadium: 'International Stadium Yokohama',
                  City: 'Yokohama',
                  'Home Team Name': 'Germany',
                  'Home Team Goals': 0,
                  'Away Team Goals': 2,
                  'Away Team Name': 'Brazil',
                  'Win conditions': '',
                  Attendance: 69029,
                  'Half-time Home Goals': 0,
                  'Half-time Away Goals': 0,
                  Referee: 'COLLINA Pierluigi (ITA)',
                  'Assistant 1': 'LINDBERG Leif (SWE)',
                  'Assistant 2': 'SHARP Philip (ENG)',
                  RoundID: 43950600,
                  MatchID: 43950064,
                  'Home Team Initials': 'GER',
                  'Away Team Initials': 'BRA'
                },
                {
                  Year: 2006,
                  Datetime: '09 Jul 2006 - 20:00',
                  Stage: 'Final',
                  Stadium: 'Olympiastadion',
                  City: 'Berlin',
                  'Home Team Name': 'Italy',
                  'Home Team Goals': 1,
                  'Away Team Goals': 1,
                  'Away Team Name': 'France',
                  'Win conditions': 'Italy win on penalties (5 - 3)',
                  Attendance: 69000,
                  'Half-time Home Goals': 0,
                  'Half-time Away Goals': 0,
                  Referee: 'ELIZONDO Horacio (ARG)',
                  'Assistant 1': 'GARCIA Dario (ARG)',
                  'Assistant 2': 'OTERO Rodolfo (ARG)',
                  RoundID: 97410600,
                  MatchID: 97410064,
                  'Home Team Initials': 'ITA',
                  'Away Team Initials': 'FRA'
                },
                {
                  Year: 2010,
                  Datetime: '11 Jul 2010 - 20:30',
                  Stage: 'Final',
                  Stadium: 'Soccer City Stadium',
                  City: 'Johannesburg',
                  'Home Team Name': 'Netherlands',
                  'Home Team Goals': 0,
                  'Away Team Goals': 1,
                  'Away Team Name': 'Spain',
                  'Win conditions': 'Spain win after extra time',
                  Attendance: 84490,
                  'Half-time Home Goals': 0,
                  'Half-time Away Goals': 0,
                  Referee: 'WEBB Howard (ENG)',
                  'Assistant 1': 'Darren CANN (ENG)',
                  'Assistant 2': 'MULLARKEY Michael (ENG)',
                  RoundID: 249721,
                  MatchID: 300061509,
                  'Home Team Initials': 'NED',
                  'Away Team Initials': 'ESP'
                },
                {
                  Year: 2014,
                  Datetime: '13 Jul 2014 - 16:00',
                  Stage: 'Final',
                  Stadium: 'Estadio do Maracana',
                  City: 'Rio De Janeiro',
                  'Home Team Name': 'Germany',
                  'Home Team Goals': 1,
                  'Away Team Goals': 0,
                  'Away Team Name': 'Argentina',
                  'Win conditions': 'Germany win after extra time',
                  Attendance: 74738,
                  'Half-time Home Goals': 0,
                  'Half-time Away Goals': 0,
                  Referee: 'Nicola RIZZOLI (ITA)',
                  'Assistant 1': 'Renato FAVERANI (ITA)',
                  'Assistant 2': 'Andrea STEFANI (ITA)',
                  RoundID: 255959,
                  MatchID: 300186501,
                  'Home Team Initials': 'GER',
                  'Away Team Initials': 'ARG'
                }
              ]  
        ));
    })
});
// task 3
describe('getYears', ()=>{
    it('an array containing years', ()=>{
        expect(functions.getYears(fifaData, getFinals)).toEqual(expect.arrayContaining(
            [
                1930, 1934, 1938, 1954,
                1958, 1962, 1966, 1970,
                1974, 1978, 1982, 1986,
                1990, 1994, 1998, 2002,
                2006, 2010, 2014
              ]
        ));
    })
});

// Task 4

describe('getWinners', ()=>{
    it('an array containing all winners', ()=>{
        expect(functions.getWinners(fifaData, getFinals)).toEqual(expect.arrayContaining(
            [
                'Uruguay',    'Italy',
                'Italy',      'Germany FR',
                'Brazil',     'Brazil',
                'England',    'Brazil',
                'Germany FR', 'Argentina',
                'Italy',      'Argentina',
                'Germany FR', 'Italy',
                'France',     'Brazil',
                'France',     'Spain',
                'Germany'
              ]
        ));
    })
});

// Task 5

describe('getWinnersByYear', ()=>{
    it('an array containing strings of winners', ()=>{
        expect(functions.getWinnersByYear(fifaData, getYears, getWinners)).toEqual(expect.arrayContaining(
            [
                'In 1930, Uruguay won the world cup!',
                'In 1934, Italy won the world cup!',
                'In 1938, Italy won the world cup!',
                'In 1954, Germany FR won the world cup!',
                'In 1958, Brazil won the world cup!',
                'In 1962, Brazil won the world cup!',
                'In 1966, England won the world cup!',
                'In 1970, Brazil won the world cup!',
                'In 1974, Germany FR won the world cup!',
                'In 1978, Argentina won the world cup!',
                'In 1982, Italy won the world cup!',
                'In 1986, Argentina won the world cup!',
                'In 1990, Germany FR won the world cup!',
                'In 1994, Italy won the world cup!',
                'In 1998, France won the world cup!',
                'In 2002, Brazil won the world cup!',
                'In 2006, France won the world cup!',
                'In 2010, Spain won the world cup!',
                'In 2014, Germany won the world cup!'
              ]
        ));
    })
});

describe('getAverageGoals', ()=>{
    it('getAverageGoals returns a number', ()=>{
        expect(functions.getAverageGoals(getFinals(fifaData))).toBe('3.58');
    })
});